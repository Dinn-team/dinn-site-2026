import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Brain, CalendarDays, Calculator, MapPin, ShieldCheck } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { AppFrame } from '@/components/home/team-visuals';
import { useDemoActive } from './hooks';

// Dinn Insights: uma pergunta é digitada e a resposta chega com o número, o
// recorte, a data e o método. As três perguntas se alternam sozinhas enquanto a
// demo está na tela; um clique escolhe uma e interrompe o automático.

type Scenario = { chip: string; q: string; big: string; text: string; scope: string; date: string; method: string; kind: string };
type Phase = 'type' | 'think' | 'answer';

export function InsightsDemo() {
  const { t } = useTranslation();
  const scenarios = (t('platformViz.insights.scenarios') as Scenario[]) ?? [];
  const { ref, inView, reduce } = useDemoActive();
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>('answer');
  const auto = useRef(true);
  const s = scenarios[idx] ?? scenarios[0];
  const [chars, setChars] = useState(s?.q.length ?? 0);
  const q = s?.q ?? '';

  useEffect(() => {
    if (!s) return;
    if (reduce) {
      setPhase('answer');
      setChars(q.length);
      return;
    }
    if (!inView) {
      // fora da tela: mostra a pergunta e a resposta completas (e começa do zero ao entrar)
      setPhase('answer');
      setChars(q.length);
      return;
    }
    const timers: number[] = [];
    let iv = 0;
    setPhase('type');
    setChars(0);
    let n = 0;
    iv = window.setInterval(() => {
      n += 1;
      setChars(n);
      if (n >= q.length) {
        window.clearInterval(iv);
        timers.push(window.setTimeout(() => setPhase('think'), 250));
        timers.push(window.setTimeout(() => setPhase('answer'), 1100));
        if (auto.current && scenarios.length > 1) {
          timers.push(window.setTimeout(() => setIdx((v) => (v + 1) % scenarios.length), 6200));
        }
      }
    }, 26);
    return () => {
      window.clearInterval(iv);
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [idx, inView, reduce, q, s, scenarios.length]);

  if (!s) return null;
  const facts = [
    { icon: MapPin, label: t('platformViz.insights.scope'), value: s.scope },
    { icon: CalendarDays, label: t('platformViz.insights.date'), value: s.date },
    { icon: Calculator, label: t('platformViz.insights.method'), value: s.method },
    { icon: ShieldCheck, label: t('platformViz.insights.kind'), value: s.kind },
  ];

  return (
    <div ref={ref} className="pf-demo">
      <AppFrame app={t('nav.ask') as string} tag={t('platformViz.demo.tag') as string}>
        <div className="pf-ask-chips" role="tablist">
          {scenarios.map((c, i) => (
            <button
              key={c.chip}
              type="button"
              role="tab"
              aria-selected={i === idx}
              className={i === idx ? 'is-active' : ''}
              onClick={() => {
                auto.current = false;
                setIdx(i);
              }}
            >
              {c.chip}
            </button>
          ))}
        </div>

        <div className="pf-chat" aria-live="polite">
          <div className="pf-chat-q">
            <span className="pf-chat-who">{t('platformViz.insights.you')}</span>
            <p>
              {q.slice(0, chars)}
              {phase === 'type' && <i className="pf-caret" aria-hidden="true" />}
            </p>
          </div>

          <div className="pf-chat-a">
            <AnimatePresence mode="wait">
              {phase === 'think' && (
                <motion.p key="think" className="pf-think" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <span className="pf-avatar"><Brain size={13} aria-hidden="true" /></span>
                  {t('ask.thinking')}
                  <span className="pf-dots" aria-hidden="true"><i /><i /><i /></span>
                </motion.p>
              )}
              {phase === 'answer' && (
                <motion.div
                  key={`a-${idx}`}
                  className="pf-answer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="pf-answer-head">
                    <span className="pf-avatar"><Brain size={13} aria-hidden="true" /></span>
                    {t('platformViz.insights.answerFrom')}
                  </p>
                  <p className="pf-answer-main">
                    <strong>{s.big}</strong> {s.text}
                  </p>
                  <dl className="pf-facts">
                    {facts.map((f, k) => (
                      <motion.div key={f.label as string} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + k * 0.09 }}>
                        <dt><f.icon size={13} aria-hidden="true" />{f.label}</dt>
                        <dd>{f.value}</dd>
                      </motion.div>
                    ))}
                  </dl>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <p className="pf-demo-note"><span className="tv-insight-dot" />{t('platformViz.insights.hint')}</p>
      </AppFrame>
    </div>
  );
}
