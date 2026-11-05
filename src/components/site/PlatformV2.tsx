import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { contactUrl } from '@/lib/links';
import { PATHS } from '@/lib/site-map';
import { useScrollProgress } from '@/components/home/useScrollProgress';
import { scrollToStage } from '@/components/home/scroll-to';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { ClosingCard, H2Head } from './PageShell';
import { StageSteps } from './StageSteps';
import { RuptureDemo } from './RealHomeDemos';
import { CYCLE_SCREENS } from './FeatureDemos';
import { ProductScreen } from './ProductScreen';
import { FeaturePicker, type Feature } from './FeaturesV2';
import { gradUrl, plain } from './area-theme';

// Plataforma no Design System v2 (padrão de 03/11/2026): a tela Início no
// topo, as nove funcionalidades com a tela do Dinn de cada uma, o ciclo de
// seis passos (uma tela por passo), dados e integrações e o fechamento.

const EASE = [0.22, 1, 0.36, 1] as const;
const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8% 0px' },
  transition: { delay: 0.08 * i, duration: 0.6, ease: EASE },
});

type Stage = { name: string; title: string; desc: string };
type Info = { title: string; text: string };

function CycleStage() {
  const { t } = useTranslation();
  const stages = ((t('inside.stages') as Stage[]) ?? []).slice(0, 6);
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
  const n = stages.length || 6;
  const active = Math.min(n - 1, Math.floor(p * n * 0.999));
  const screen = CYCLE_SCREENS[active];

  return (
    <section ref={ref} className="as cs-stage pf2-cycle" aria-labelledby="pf-cycle" style={{ ['--cs-g' as string]: gradUrl('web/roxo-noite') }}>
      <div className="as-sticky">
        <div className="as-glow" aria-hidden="true" />
        <div className="wrap as-grid">
          <div className="as-copy">
            <h2 id="pf-cycle" className="as-title">{t('platform.cycle.title')}</h2>
            <p className="as-lead">{t('platform.cycle.intro')}</p>
            <StageSteps
              steps={stages.map((s) => ({ label: s.name, text: s.desc }))}
              active={active}
              onGo={(i) => scrollToStage(ref.current, i, n)}
              label={t('platform.cycle.title') as string}
            />
          </div>
          <div className="as-scene">
            <div className="as-scene-frame">
              {screen && <ProductScreen key={active} demo={screen.Demo} step={screen.step} />}
              <div className="as-progress" aria-hidden="true"><i style={{ transform: `scaleX(${p})` }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlatformPageV2() {
  const { t } = useTranslation();
  const data = (t('platform.data.items') as Info[]) ?? [];
  const features = (t('features.items') as Feature[]) ?? [];

  return (
    <div className="h2 cs3-page sl2 pf2">
      <header className="h2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title">{plain(t('platform.hero.title') as string)}</h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('platform.hero.lead')}</p>
              <div className="h2-actions">
                <a className="btn btn-primary" href={contactUrl('plataforma')}>{t('pageCta.button')}</a>
                <a className="h2-link" href={PATHS.features}>{t('menu.features')} <ArrowRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="h2-media sl2-media" style={{ backgroundImage: gradUrl('g08') }}>
            <div className="sl2-screen"><ProductScreen demo={RuptureDemo} /></div>
          </div>
          <p className="ft2-caption">{t('features.page.caption')}</p>
        </div>
      </header>

      <section className="h2-section pf2-feats" aria-labelledby="pf-feats">
        <div className="h2-wrap">
          <div className="h2-head">
            <H2Head id="pf-feats" title={t('features.hub.screensTitle') as string} intro={t('features.hub.screensIntro') as string} />
            <a className="h2-link" href={PATHS.features}>{t('menu.features')} <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
          <FeaturePicker items={features} />
        </div>
      </section>

      <CycleStage />

      <section className="h2-section pf2-data" aria-labelledby="pf-data">
        <div className="h2-wrap">
          <H2Head id="pf-data" title={t('platform.data.title') as string} intro={t('platform.data.intro') as string} />
          <ul className="pf2-cols">
            {data.map((d, i) => (
              <motion.li key={d.title} {...reveal(i)}>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </motion.li>
            ))}
          </ul>
          <a className="h2-link pf2-trust" href={PATHS.trust}>{t('solutions.page.trustCta')} <ArrowRight size={15} aria-hidden="true" /></a>
        </div>
      </section>

      <ClosingCard
        title={t('pageCta.title') as string}
        desc={t('pageCta.desc') as string}
        button={t('pageCta.button') as string}
        origin="plataforma"
        gradient="web/lilas-azul"
        secondary={{ label: t('pageCta.secondary') as string, href: PATHS.solutions }}
      />
      <ChatWidget2 />
    </div>
  );
}
