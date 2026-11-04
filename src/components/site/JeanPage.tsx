import { useEffect, useRef, useState, type ReactElement } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { contactUrl } from '@/lib/links';
import { PATHS } from '@/lib/site-map';
import { useScrollProgress } from '@/components/home/useScrollProgress';
import { scrollToStage } from '@/components/home/scroll-to';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { ClosingCard, H2Head } from './PageShell';
import { StageSteps, type StageStep } from './StageSteps';
import type { DemoProps } from './AppDemos';
import { JeanActivitiesDemo, JeanChatDemo, JeanSettingsDemo, JeanWhatsAppDemo } from './JeanDemos';
import { FeatureTile, type Feature } from './FeaturesV2';
import { gradUrl, plain } from './area-theme';

// Página da Jean (/funcionalidades/jean). Base: a spec de negócio "Dinn
// Atividades e Jean" (30/10/2026) e o plano de Atividades. A Jean recebe um
// acompanhamento, confirma o combinado, trabalha com as ferramentas que a
// pessoa conectou e chama a pessoa quando precisa de uma decisão.

const EASE = [0.22, 1, 0.36, 1] as const;
const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8% 0px' },
  transition: { delay: 0.08 * i, duration: 0.6, ease: EASE },
});

type Way = { name: string; example: string };
type Info = { title: string; text: string };

// Uma tela por passo de "Como a Jean trabalha" (modo passo).
const HOW_SCREENS: { Demo: (p: DemoProps) => ReactElement; step: number }[] = [
  { Demo: JeanSettingsDemo, step: 0 },
  { Demo: JeanChatDemo, step: 1 },
  { Demo: JeanActivitiesDemo, step: 1 },
  { Demo: JeanActivitiesDemo, step: 2 },
  { Demo: JeanWhatsAppDemo, step: 1 },
  { Demo: JeanActivitiesDemo, step: 3 },
];

function HowStage() {
  const { t } = useTranslation();
  const steps = (t('jean.how.steps') as StageStep[]) ?? [];
  const ref = useRef<HTMLElement>(null);
  const [scroll, setScroll] = useState(0);
  const [intro, setIntro] = useState(0);
  useScrollProgress(ref, (v) => setScroll(Math.round(v * 200) / 200));

  useEffect(() => {
    const target = 0.16;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIntro(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const k = Math.min(1, (now - t0 - 250) / 1600);
      setIntro(target * (k <= 0 ? 0 : 1 - Math.pow(1 - k, 3)));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  const p = Math.max(scroll, intro);
  const n = steps.length || 6;
  const active = Math.min(n - 1, Math.floor(p * n * 0.999));
  const screen = HOW_SCREENS[active];

  return (
    <section ref={ref} className="as cs-stage pf2-cycle" aria-labelledby="jn-how" style={{ ['--cs-g' as string]: gradUrl('web/roxo-noite') }}>
      <div className="as-sticky">
        <div className="as-glow" aria-hidden="true" />
        <div className="wrap as-grid">
          <div className="as-copy">
            <h2 id="jn-how" className="as-title">{t('jean.how.title')}</h2>
            <p className="as-lead">{t('jean.how.lead')}</p>
            <StageSteps steps={steps} active={active} onGo={(i) => scrollToStage(ref.current, i, n)} label={t('jean.how.title') as string} />
          </div>
          <div className="as-scene">
            <div className="as-scene-frame">
              {screen && <screen.Demo key={active} step={screen.step} />}
              <div className="as-progress" aria-hidden="true"><i style={{ transform: `scaleX(${p})` }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function JeanPage() {
  const { t } = useTranslation();
  const ways = (t('jean.ways.items') as Way[]) ?? [];
  const questions = (t('jean.activities.items') as string[]) ?? [];
  const settings = (t('jean.settings.items') as Info[]) ?? [];
  const autonomy = t('jean.autonomy') as unknown as { title: string; cols: string[]; rows: string[][] };
  const limits = (t('jean.limits.items') as string[]) ?? [];
  const features = (t('features.items') as Feature[]) ?? [];
  const others = features.filter((f) => f.id !== 'jean').slice(0, 3);

  return (
    <div className="h2 cs3-page sl2 ft2 jn">
      <header className="h2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title">{plain(t('jean.hero.title') as string)}</h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('jean.hero.lead')}</p>
              <div className="h2-actions">
                <a className="btn btn-primary" href={contactUrl('funcionalidade-jean')}>{t('pageCta.button')}</a>
                <a className="h2-link" href={PATHS.features}>{t('features.page.back')} <ArrowRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="h2-media sl2-media" style={{ backgroundImage: gradUrl('web/roxo-noite') }}>
            <div className="sl2-screen"><JeanChatDemo /></div>
          </div>
          <p className="ft2-caption">{t('features.page.caption')}</p>
        </div>
      </header>

      <section className="h2-section jn-ask" aria-labelledby="jn-ask">
        <div className="h2-wrap">
          <H2Head id="jn-ask" title={t('jean.ask.title') as string} />
          <blockquote className="jn-quote">“{t('jean.ask.quote')}”</blockquote>
          <p className="jn-note">{t('jean.ask.note')}</p>
          <h3 className="sl2-label sl2-label-gap">{t('jean.ways.title')}</h3>
          <ul className="jn-ways">
            {ways.map((w, i) => (
              <motion.li key={w.name} {...reveal(i)}>
                <b>{w.name}</b>
                <p>{w.example}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <HowStage />

      <section className="h2-section" aria-labelledby="jn-act">
        <div className="h2-wrap jn-split">
          <motion.div className="jn-copy" {...reveal(0)}>
            <h2 id="jn-act" className="h2-title">{t('jean.activities.title')}</h2>
            <p className="jn-lead">{t('jean.activities.lead')}</p>
            <ul className="jn-qs">{questions.map((q) => <li key={q}>{q}</li>)}</ul>
          </motion.div>
          <motion.div className="jn-media" style={{ backgroundImage: gradUrl('web/azul-noite') }} {...reveal(1)}>
            <div className="jn-screen"><JeanActivitiesDemo /></div>
          </motion.div>
        </div>
      </section>

      <section className="h2-section jn-settings" aria-labelledby="jn-set">
        <div className="h2-wrap">
          <div className="jn-split is-flip">
            <motion.div className="jn-copy" {...reveal(0)}>
              <h2 id="jn-set" className="h2-title">{t('jean.settings.title')}</h2>
              <p className="jn-lead">{t('jean.settings.lead')}</p>
            </motion.div>
            <motion.div className="jn-media" style={{ backgroundImage: gradUrl('web/grafite') }} {...reveal(1)}>
              <div className="jn-screen"><JeanSettingsDemo /></div>
            </motion.div>
          </div>
          <ul className="pf2-cols">
            {settings.map((s, i) => (
              <motion.li key={s.title} {...reveal(i)}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="h2-section" aria-labelledby="jn-wa">
        <div className="h2-wrap jn-split">
          <motion.div className="jn-copy" {...reveal(0)}>
            <h2 id="jn-wa" className="h2-title">{t('jean.whatsapp.title')}</h2>
            <p className="jn-lead">{t('jean.whatsapp.lead')}</p>
            <p className="jn-note">{t('jean.whatsapp.note')}</p>
          </motion.div>
          <motion.div className="jn-media" style={{ backgroundImage: gradUrl('web/verde-noite') }} {...reveal(1)}>
            <div className="jn-screen"><JeanWhatsAppDemo /></div>
          </motion.div>
        </div>
      </section>

      <section className="h2-section jn-settings" aria-labelledby="jn-auto">
        <div className="h2-wrap">
          <H2Head id="jn-auto" title={autonomy.title} />
          <div className="jn-table-wrap">
            <table className="jn-table">
              <thead><tr>{autonomy.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
              <tbody>
                {autonomy.rows.map(([a, b]) => <tr key={a}><td>{a}</td><td>{b}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="h2-section sl2-read" aria-labelledby="jn-limits">
        <div className="h2-wrap sl2-read-grid">
          <div>
            <h2 id="jn-limits" className="h2-title">{t('jean.limits.title')}</h2>
            <a className="h2-link sl2-trust" href={PATHS.trust}>{t('solutions.page.trustCta')} <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
          <ul className="sl2-limits">
            {limits.map((l, i) => <motion.li key={l} {...reveal(i % 4)}>{l}</motion.li>)}
          </ul>
        </div>
      </section>

      <section className="h2-section sl2-feats" aria-labelledby="jn-next">
        <div className="h2-wrap">
          <div className="h2-head">
            <h2 id="jn-next" className="h2-title">{t('features.page.otherTitle')}</h2>
            <a className="h2-link" href={PATHS.features}>{t('features.page.back')} <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
          <ul className="sl2-feat-grid">
            {others.map((f) => <li key={f.id}><FeatureTile f={f} /></li>)}
          </ul>
        </div>
      </section>

      <ClosingCard
        title={t('features.cta.title') as string}
        desc={t('features.cta.desc') as string}
        button={t('features.cta.button') as string}
        origin="funcionalidade-jean"
        gradient="web/lilas-azul"
        secondary={{ label: t('features.page.back') as string, href: PATHS.features }}
      />
      <ChatWidget2 />
    </div>
  );
}
