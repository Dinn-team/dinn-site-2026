import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Brain, Check, MapPin, RotateCcw } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { contactUrl } from '@/lib/links';
import { ChatWidget } from './chat/ChatWidgets';
import { extractContext, fillScenario, pickScenario, type Context, type Scenario } from './chat/engine';
import { prefersReducedMotion } from './neural';

// Seção 3 da home: Dinn Insights, a conversa com a IA do Dinn. Nada sai do
// navegador. A pergunta escolhe um roteiro (qual time perguntaria isso), o
// recorte (cidade e produto) é aplicado ao texto, e a resposta segue o mesmo
// ritual do produto: passos de consulta, número primeiro, widget, como foi
// calculado e para onde seguir. Layout do campo inspirado no do Clay: cartão
// alto com o texto e, embaixo, uma bandeja com sugestões e o botão de enviar.

type Starter = { team: string; chip: string; q: string };
type Team = { id: string; tab: string };
type UserMsg = { id: number; role: 'user'; text: string };
type BotMsg = {
  id: number;
  role: 'assistant';
  scenarioId: string;
  ctx: Context;
  sc: Scenario;
  step: number;
  words: number;
  phase: 'thinking' | 'streaming' | 'done';
};
type Msg = UserMsg | BotMsg;

const EASE = [0.22, 1, 0.36, 1] as const;

/** Mostra só as primeiras n palavras, sem deixar um ** aberto no meio. */
function partial(text: string, n: number) {
  const parts = text.split(/(\s+)/);
  let count = 0;
  let out = '';
  for (const p of parts) {
    if (!/^\s+$/.test(p)) count++;
    if (count > n) break;
    out += p;
  }
  if ((out.match(/\*\*/g) ?? []).length % 2) out += '**';
  return out;
}

function Answer({ text }: { text: string }) {
  return (
    <div className="ins-answer">
      {text.split(/\n\n+/).map((p, i) => <p key={i}><Rich text={p} /></p>)}
    </div>
  );
}

export function InsightsSection() {
  const { t } = useTranslation();
  const starters = (t('ask.starters') as Starter[]) ?? [];
  const scenarios = (t('ask.scenarios') as Record<string, Scenario>) ?? {};
  const teams = (t('teams.items') as Team[]) ?? [];
  const defaults = { place: t('ask.defaultPlace') as string, product: t('ask.defaultProduct') as string };

  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [focused, setFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState('');
  const threadRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const timers = useRef<number[]>([]);
  const nextId = useRef(1);

  const busy = msgs.some((m) => m.role === 'assistant' && m.phase !== 'done');
  const started = msgs.length > 0;

  const patch = useCallback((id: number, change: Partial<BotMsg>) => {
    setMsgs((all) => all.map((m) => (m.id === id && m.role === 'assistant' ? { ...m, ...change } : m)));
  }, []);

  const ask = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text || busy) return;
      const scenarioId = pickScenario(text, scenarios);
      const base = scenarios[scenarioId] ?? scenarios.fallback;
      if (!base) return;
      const ctx = extractContext(text);
      const sc = fillScenario(base, ctx, defaults);
      const userId = nextId.current++;
      const botId = nextId.current++;
      setMsgs((all) => [
        ...all,
        { id: userId, role: 'user', text },
        { id: botId, role: 'assistant', scenarioId, ctx, sc, step: 0, words: 0, phase: 'thinking' },
      ]);
      setInput('');

      // Ritmo: cada passo de consulta leva ~0,7 s; depois o texto "chega"
      // em pequenos blocos, como no streaming do produto.
      const fast = prefersReducedMotion();
      const stepMs = fast ? 120 : 720;
      sc.steps.forEach((_, i) => {
        timers.current.push(window.setTimeout(() => patch(botId, { step: i + 1 }), stepMs * (i + 1)));
      });
      const total = sc.answer.split(/\s+/).length;
      const startAt = stepMs * (sc.steps.length + 1);
      timers.current.push(
        window.setTimeout(() => {
          patch(botId, { phase: 'streaming' });
          let w = 0;
          const tick = () => {
            w += fast ? total : 3;
            if (w >= total) {
              patch(botId, { words: total, phase: 'done' });
              return;
            }
            patch(botId, { words: w });
            timers.current.push(window.setTimeout(tick, 45));
          };
          tick();
        }, startAt),
      );
    },
    // defaults muda de identidade a cada render, mas só depende do idioma
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [busy, scenarios, patch],
  );

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // Perguntas vindas de outras seções ("Pergunte isso ao Dinn").
  useEffect(() => {
    const onAsk = (e: Event) => {
      const q = (e as CustomEvent<string>).detail;
      sectionRef.current?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
      window.setTimeout(() => ask(q), 500);
    };
    window.addEventListener('dinn:ask', onAsk);
    return () => window.removeEventListener('dinn:ask', onAsk);
  }, [ask]);

  // Mantém a última mensagem à vista enquanto a resposta cresce.
  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [msgs]);

  // Placeholder que se escreve sozinho com as perguntas de exemplo.
  useEffect(() => {
    if (started || focused || input || prefersReducedMotion() || starters.length === 0) {
      setPlaceholder(t(started ? 'ask.followPlaceholder' : 'ask.placeholder') as string);
      return;
    }
    let qi = 0;
    let ci = 0;
    let deleting = false;
    let timer = 0;
    const run = () => {
      const q = starters[qi % starters.length].q;
      if (!deleting) {
        ci++;
        setPlaceholder(q.slice(0, ci));
        if (ci >= q.length) { deleting = true; timer = window.setTimeout(run, 2200); return; }
        timer = window.setTimeout(run, 38);
      } else {
        ci -= 3;
        setPlaceholder(q.slice(0, Math.max(0, ci)));
        if (ci <= 0) { deleting = false; qi++; timer = window.setTimeout(run, 300); return; }
        timer = window.setTimeout(run, 14);
      }
    };
    timer = window.setTimeout(run, 900);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, focused, input, starters.length]);

  const reset = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setMsgs([]);
    setInput('');
    inputRef.current?.focus();
  };

  const onLink = (href: string) => (e: React.MouseEvent) => {
    if (href === 'demo') return;
    if (href.startsWith('#')) {
      e.preventDefault();
      if (href.startsWith('#time-')) {
        // a seção de times abre a aba ao ouvir o hashchange
        document.getElementById('times')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.location.hash = href;
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', href);
      }
    }
  };

  const teamLabel = (id: string) => teams.find((tm) => tm.id === id)?.tab;

  return (
    <MotionConfig reducedMotion="user">
      <section id="insights" ref={sectionRef} className="ins">
        <div className="wrap">
          <header className="ins-head">
            <p className="ins-eyebrow">{t('insights.eyebrow')}</p>
            <h2 className="ins-title"><Rich text={t('insights.title') as string} /></h2>
            <p className="ins-intro">{t('insights.intro')}</p>
          </header>

          <div className="ins-stage">
            <AnimatePresence>
              {started && (
                <motion.div
                  ref={threadRef}
                  className="ins-thread"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  role="log"
                  aria-live="polite"
                  aria-busy={busy}
                  aria-label={t('nav.ask') as string}
                >
                  {msgs.map((m) =>
                    m.role === 'user' ? (
                      <motion.div key={m.id} className="ins-user" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: EASE }}>
                        {m.text}
                      </motion.div>
                    ) : (
                      <BotMessage key={m.id} m={m} t={t} team={teamLabel(m.scenarioId === 'tendencia' ? 'campo' : m.scenarioId)} defaults={defaults} onLink={onLink} onFollow={ask} />
                    ),
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={(e) => { e.preventDefault(); ask(input); }}>
              <div className={`ins-box ${focused ? 'is-focused' : ''} ${started ? 'is-started' : ''}`}>
                <textarea
                  ref={inputRef}
                  value={input}
                  rows={3}
                  aria-label={t('ask.placeholder') as string}
                  placeholder={placeholder}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(input); }
                  }}
                />
              </div>
              <div className="ins-tray">
                <div className="ins-chips">
                  {started && (
                    <button type="button" className="ins-chip is-reset" onClick={reset}>
                      <RotateCcw size={15} /> {t('ask.reset')}
                    </button>
                  )}
                  {starters.map((s) => (
                    <button key={s.q} type="button" className="ins-chip" disabled={busy} onClick={() => ask(s.q)}>
                      {s.chip}
                    </button>
                  ))}
                </div>
                <button type="submit" className="ins-send" disabled={!input.trim() || busy} aria-label={t('ask.send') as string}>
                  <ArrowRight size={20} strokeWidth={2.2} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

function BotMessage({ m, t, team, defaults, onLink, onFollow }: {
  m: BotMsg;
  t: (k: string) => any;
  team?: string;
  defaults: { place: string; product: string };
  onLink: (href: string) => (e: React.MouseEvent) => void;
  onFollow: (q: string) => void;
}) {
  const { sc } = m;
  const done = m.phase === 'done';
  const ctxParts = [m.ctx.place ?? defaults.place, m.ctx.product ?? defaults.product];

  return (
    <motion.div className="ins-bot" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }}>
      <span className="ins-avatar" aria-hidden="true"><Brain size={16} strokeWidth={1.75} /></span>
      <div className="ins-bot-body">
        <div className="ins-context">
          <MapPin size={12} />
          <span>{t('ask.contextLabel')}:</span> {ctxParts.join(' · ')}
          {team && <em>{team}</em>}
        </div>

        {/* passos de consulta, como os rótulos de ferramenta do Dinn Insights */}
        <ol className="ins-steps">
          {sc.steps.map((s, i) => {
            const state = i < m.step ? 'done' : i === m.step && m.phase === 'thinking' ? 'run' : 'wait';
            if (state === 'wait' && m.phase === 'thinking') return null;
            return (
              <motion.li key={s} className={`is-${state}`} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                {state === 'run' ? <span className="ins-dots"><i /><i /><i /></span> : <Check size={12} strokeWidth={2.6} />}
                {s}
              </motion.li>
            );
          })}
        </ol>

        {m.phase !== 'thinking' && <Answer text={partial(sc.answer, m.words)} />}

        {done && (
          <motion.div className="ins-extras" initial="hide" animate="show" variants={{ show: { transition: { staggerChildren: 0.18 } } }}>
            {sc.widget && (
              <motion.div variants={{ hide: { opacity: 0 }, show: { opacity: 1 } }}>
                <ChatWidget widget={sc.widget} labels={{ why: t('ask.actionWhy'), how: t('ask.actionHow') }} />
              </motion.div>
            )}

            {sc.method.length > 0 && (
              <motion.details className="ins-method" open variants={{ hide: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
                <summary>{t('ask.methodTitle')}</summary>
                <ul>{sc.method.map((x) => <li key={x}>{x}</li>)}</ul>
              </motion.details>
            )}

            <motion.div className="ins-links" variants={{ hide: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              {sc.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href === 'demo' ? contactUrl('home-insights') : l.href}
                  onClick={onLink(l.href)}
                >
                  {l.label} <ArrowUpRight size={13} />
                </a>
              ))}
              <a className="is-demo" href={contactUrl('home-insights')}>
                {t('ask.demoCta')} <ArrowUpRight size={13} />
              </a>
            </motion.div>

            {sc.followups.length > 0 && (
              <motion.div className="ins-follow" variants={{ hide: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
                <span>{t('ask.followTitle')}</span>
                {sc.followups.map((f) => (
                  <button key={f} type="button" onClick={() => onFollow(f)}>{f}</button>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
