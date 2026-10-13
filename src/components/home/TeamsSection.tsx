import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { AnimatePresence, MotionConfig, motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import {
  AppFrame, CompetitionVisual, DemandVisual, DistributionVisual, LaunchVisual, LocatorVisual, PrescriberVisual,
  QueueVisual, StalledVisual,
} from './team-visuals';

// Segunda dobra: o mesmo cérebro, lido por cada time. O visitante escolhe a
// aba e vê a história inteira daquele time — a cena, o que o Dinn cruza, o
// que o time faz — ao lado da tela correspondente do produto, viva.
// Links "#time-<id>" (vindos da conversa do topo) abrem a aba certa.
// Enquanto ninguém mexe, as abas avançam sozinhas (como no Clay): a barra sob a
// aba ativa enche e, quando termina, passa para a próxima. Qualquer escolha do
// visitante (clique, setas, link #time-) encerra o automático de vez; mouse em
// cima, seção fora da tela ou aba do navegador em segundo plano só pausam.

type Item = {
  id: string;
  tab: string;
  kicker: string;
  title: string;
  story: string;
  sees: string[];
  does: string[];
  question: string;
  visual: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;
// tempo de cada aba no automático; o conteúdo é denso, então dá tempo de ler
const AUTO_MS = 8000;

export function TeamsSection() {
  const { t } = useTranslation();
  const items = (t('teams.items') as Item[]) ?? [];
  const visuals = (t('teams.visuals') as Record<string, any>) ?? {};
  const [active, setActive] = useState(0);
  // false assim que o visitante escolhe uma aba: dali em diante é ele quem manda
  const [auto, setAuto] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-20% 0px' });
  const onScreen = useInView(sectionRef, { amount: 0.3 });

  // Quem pediu menos movimento no sistema não tem troca automática.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setAuto(false);
  }, []);

  // Aba do navegador em segundo plano: o relógio não corre.
  useEffect(() => {
    const sync = () => setPageVisible(document.visibilityState === 'visible');
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, []);

  const select = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  // Abre a aba pedida pela URL (#time-sac) e leva o visitante até ela.
  useEffect(() => {
    // Rola até o painel, deixando espaço para o menu fixo e a barra de abas
    // (que é sticky, por isso a medida vem do painel, e não dela).
    const scrollToPanel = (behavior: 'smooth' | 'instant') => {
      const panel = document.getElementById('teams-panel');
      const tabs = tabsRef.current;
      if (!panel || !tabs) return;
      const reserved = 84 + tabs.offsetHeight + 24;
      window.scrollTo({ top: window.scrollY + panel.getBoundingClientRect().top - reserved, behavior: behavior as ScrollBehavior });
    };
    const open = () => {
      const m = window.location.hash.match(/^#time-([a-z]+)/);
      if (!m) return false;
      const idx = items.findIndex((it) => it.id === m[1]);
      if (idx < 0) return false;
      setAuto(false);
      setActive(idx);
      scrollToPanel('smooth');
      return true;
    };
    // No carregamento, fontes e imagens ainda mudam a altura da página acima
    // do painel; depois que assentam, corrige a posição de uma vez.
    if (open()) {
      const settle = () => window.setTimeout(() => scrollToPanel('instant'), 120);
      if (document.readyState === 'complete') settle();
      else window.addEventListener('load', settle, { once: true });
      document.fonts?.ready.then(settle);
    }
    window.addEventListener('hashchange', open);
    return () => window.removeEventListener('hashchange', open);
  }, [items.length]);

  // A aba ativa fica visível na barra quando ela rola no celular.
  useEffect(() => {
    // só a barra rola na horizontal; scrollIntoView mexeria também na página
    // e interromperia a rolagem até o painel
    const bar = tabsRef.current;
    const el = bar?.querySelector<HTMLElement>(`[data-idx="${active}"]`);
    if (bar && el) bar.scrollTo({ left: el.offsetLeft - (bar.clientWidth - el.offsetWidth) / 2, behavior: 'smooth' });
  }, [active]);

  const item = items[active];
  if (!item) return null;

  // a barra existe enquanto o automático vale; roda só com a seção à vista,
  // sem o mouse em cima e com a aba do navegador aberta
  const running = auto && items.length > 1;
  const paused = hovered || !onScreen || !pageVisible;

  const ask = () => {
    // abrir a conversa é escolha do visitante: a aba não pode trocar embaixo dele
    setAuto(false);
    window.dispatchEvent(new CustomEvent('dinn:ask', { detail: item.question }));
  };
  const tag = t('ask.simulationTag') as string;

  const renderVisual = () => {
    const v = visuals[item.visual] ?? {};
    switch (item.visual) {
      case 'locator': return <LocatorVisual v={v} />;
      case 'queue': return <QueueVisual v={v} />;
      case 'prescriber': return <PrescriberVisual v={v} />;
      case 'distribution': return <DistributionVisual v={v} />;
      case 'launch': return <LaunchVisual v={v} />;
      case 'stalled': return <StalledVisual v={v} />;
      case 'competition': return <CompetitionVisual v={v} />;
      case 'demand': return <DemandVisual v={v} />;
      default: return null;
    }
  };

  return (
    <MotionConfig reducedMotion="user">
    <section
      id="times"
      ref={sectionRef}
      className="teams"
      data-paused={paused ? 'true' : undefined}
      style={{ '--teams-auto-ms': `${AUTO_MS}ms` } as CSSProperties}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <div className="wrap">
        <motion.div
          className="teams-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="teams-eyebrow">{t('teams.eyebrow')}</p>
          <h2 className="teams-title"><Rich text={t('teams.title') as string} /></h2>
        </motion.div>

        <div
          className="teams-tabs"
          ref={tabsRef}
          role="tablist"
          aria-label={t('teams.eyebrow') as string}
          onKeyDown={(e) => {
            // padrão WAI-ARIA para abas: setas, Home e End movem o foco e a seleção
            const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
            if (!keys.includes(e.key)) return;
            e.preventDefault();
            const last = items.length - 1;
            const next = e.key === 'Home' ? 0 : e.key === 'End' ? last : e.key === 'ArrowRight' ? (active + 1) % items.length : (active - 1 + items.length) % items.length;
            select(next);
            history.replaceState(null, '', `#time-${items[next].id}`);
            tabsRef.current?.querySelector<HTMLElement>(`[data-idx="${next}"]`)?.focus();
          }}
        >
          {items.map((it, i) => {
            const on = i === active;
            return (
              <button
                key={it.id}
                id={`team-tab-${it.id}`}
                type="button"
                role="tab"
                data-idx={i}
                tabIndex={on ? 0 : -1}
                aria-selected={on}
                aria-controls="teams-panel"
                className={on ? 'is-active' : ''}
                onClick={() => {
                  select(i);
                  history.replaceState(null, '', `#time-${it.id}`);
                }}
              >
                {on && <motion.span layoutId="teams-tab-bg" className="teams-tab-bg" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
                <span>{it.tab}</span>
                {on && running && (
                  // key = aba: a barra recomeça do zero a cada troca; quando
                  // completa, é ela que avança (barra e relógio são a mesma coisa)
                  <span
                    key={it.id}
                    className="teams-tab-progress"
                    aria-hidden="true"
                    onAnimationEnd={() => setActive((a) => (a + 1) % items.length)}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div id="teams-panel" role="tabpanel" aria-labelledby={`team-tab-${item.id}`} className="teams-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              className="teams-grid"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="teams-story">
                <p className="teams-kicker">{item.kicker}</p>
                <h3><Rich text={item.title} /></h3>
                <p className="teams-text">{item.story}</p>

                <div className="teams-block">
                  <p className="teams-label">{t('teams.seesLabel')}</p>
                  <div className="teams-chips">
                    {item.sees.map((s, i) => (
                      <motion.span key={s} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 + i * 0.06 }}>
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="teams-block">
                  <p className="teams-label">{t('teams.doesLabel')}</p>
                  <ol className="teams-does">
                    {item.does.map((d, i) => (
                      <motion.li key={d} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.1, ease: EASE }}>
                        <span>{String(i + 1).padStart(2, '0')}</span>{d}
                      </motion.li>
                    ))}
                  </ol>
                </div>

                <button type="button" className="teams-ask" onClick={ask}>
                  <span className="teams-ask-q">“{item.question}”</span>
                  <span className="teams-ask-cta">{t('teams.askCta')} <ArrowUpRight size={15} /></span>
                </button>
              </div>

              <div className="teams-visual">
                {inView && <AppFrame app={visuals[item.visual]?.app ?? item.tab} tag={tag}>{renderVisual()}</AppFrame>}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="teams-note">{t('teams.note')}</p>
      </div>
    </section>
    </MotionConfig>
  );
}
