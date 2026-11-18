import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { contactUrl } from '@/lib/links';
import { areaPath, PATHS } from '@/lib/site-map';
import { useScrollProgress } from '@/components/home/useScrollProgress';
import { scrollToStage } from '@/components/home/scroll-to';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { ClosingCard, H2Head } from './PageShell';
import { StageSteps } from './StageSteps';
import { AREA_DEMO } from './FeatureDemos';
import { ProductScreen } from './ProductScreen';
import { RuptureDemo } from './RealHomeDemos';
import { CaseCard, publishedCases } from './CasesPages';
import { AREA_ART, AREA_CLOSING, AREA_DARK, gradUrl, plain } from './area-theme';
import type { Area } from './SolutionsPages';

// Soluções no Design System v2 (padrão de atualização de 03/11/2026).
// A página principal escolhe por área, objetivo ou funcionalidade. A página de
// cada área mostra a tela do Dinn animada (AppDemos.tsx): no topo em laço, com
// o cursor; no palco, um estado por passo do exemplo. Depois, limites e casos.

const EASE = [0.22, 1, 0.36, 1] as const;
const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8% 0px' },
  transition: { delay: 0.08 * i, duration: 0.6, ease: EASE },
});

type Entry = { label: string; text: string; href: string };

function AreaTile({ area, promise }: { area: Area; promise: string }) {
  const { t } = useTranslation();
  const Art = AREA_ART[area.slug];
  return (
    <a className="h2-area il-host" href={areaPath(area.slug)}>
      <span className="h2-area-art">{Art && <Art />}</span>
      <span className="h2-area-txt">
        <span className="h2-area-name">{area.name}</span>
        <span className="h2-area-promise">{promise}</span>
      </span>
      <ArrowUpRight className="h2-area-go" size={18} aria-label={t('home2.areas.open') as string} />
    </a>
  );
}

// ── Página principal: /solucoes ────────────────────────────────────────────
export function SolutionsHub() {
  const { t } = useTranslation();
  const goals = (t('solutionsHub.goals.items') as Entry[]) ?? [];
  const features = (t('solutionsHub.features.items') as Entry[]) ?? [];
  const areas = (t('solutions.items') as Area[]) ?? [];
  const promises = (t('home2.areas.promises') as Record<string, string>) ?? {};

  return (
    <div className="h2 sl2">
      <header className="h2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title">{plain(t('solutionsHub.hero.title') as string)}</h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('solutionsHub.hero.lead')}</p>
              <div className="h2-actions">
                <a className="btn btn-primary" href={contactUrl('solucoes')}>{t('pageCta.button')}</a>
                <a className="h2-link" href={PATHS.platform}>{t('nav.platform')} <ArrowRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="h2-media sl2-media" style={{ backgroundImage: gradUrl('g08') }}>
            <div className="sl2-screen"><ProductScreen demo={RuptureDemo} /></div>
          </div>
        </div>
      </header>

      <section className="h2-section sl2-areas" aria-labelledby="sl-areas">
        <div className="h2-wrap">
          <H2Head id="sl-areas" title={t('solutionsHub.areas.title') as string} intro={t('solutionsHub.areas.intro') as string} />
          <ul className="h2-area-grid">
            {areas.map((a) => (
              <li key={a.slug}><AreaTile area={a} promise={promises[a.slug] ?? a.short} /></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="h2-section sl2-goals" aria-labelledby="sl-goals">
        <div className="h2-wrap">
          <H2Head id="sl-goals" title={t('solutionsHub.goals.title') as string} intro={t('solutionsHub.goals.intro') as string} />
          <ul className="sl2-rows">
            {goals.map((g) => (
              <li key={g.label}>
                <a className="sl2-row" href={g.href}>
                  <span className="sl2-row-name">{g.label}</span>
                  <span className="sl2-row-text">{g.text}</span>
                  <ArrowRight className="sl2-row-go" size={18} aria-label={t('solutionsHub.goals.open') as string} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="h2-section sl2-feats" aria-labelledby="sl-feats">
        <div className="h2-wrap">
          <H2Head id="sl-feats" title={t('solutionsHub.features.title') as string} intro={t('solutionsHub.features.intro') as string} />
          <ul className="sl2-feat-grid">
            {features.map((f) => (
              <li key={f.label}>
                <a className="sl2-feat" href={f.href}>
                  <span className="sl2-feat-name">{f.label}</span>
                  <span className="sl2-feat-text">{f.text}</span>
                  <span className="h2-link">{t('solutionsHub.goals.open')}<ArrowRight size={15} aria-hidden="true" /></span>
                </a>
              </li>
            ))}
          </ul>
          <p className="sl2-more">
            {t('solutionsHub.more')} <a className="h2-link" href={contactUrl('solucoes')}>{t('solutionsHub.moreCta')} <ArrowRight size={15} aria-hidden="true" /></a>
          </p>
        </div>
      </section>

      <ClosingCard
        title={t('pageCta.title') as string}
        desc={t('pageCta.desc') as string}
        button={t('pageCta.button') as string}
        origin="solucoes-fechamento"
        gradient="g03"
      />
      <ChatWidget2 />
    </div>
  );
}

// ── Palco: o exemplo da área, animado pela rolagem ─────────────────────────
function SolutionStage({ area }: { area: Area }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const [scroll, setScroll] = useState(0);
  const [intro, setIntro] = useState(0);
  useScrollProgress(ref, (v) => setScroll(Math.round(v * 200) / 200));

  // O primeiro passo se desenha sozinho ao chegar; depois a rolagem conta o resto.
  useEffect(() => {
    const target = 0.24;
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

  const Demo = AREA_DEMO[area.slug];
  const steps = area.example.steps;
  const active = Math.min(steps.length - 1, Math.floor(p * steps.length * 0.999));

  return (
    <section ref={ref} className="as cs-stage" aria-labelledby="sl-example" style={{ ['--cs-g' as string]: gradUrl(AREA_DARK[area.slug] ?? 'web/roxo-noite') }}>
      <div className="as-sticky">
        <div className="as-glow" aria-hidden="true" />
        <div className="wrap as-grid">
          <div className="as-copy">
            <h2 id="sl-example" className="as-title">{plain(area.example.title)}</h2>
            <p className="as-lead">{t('solutions.page.exampleLabel')}</p>
            <StageSteps
              steps={steps.map((s) => {
                const [label, ...rest] = s.split(': ');
                return { label, text: rest.join(': ') };
              })}
              active={active}
              onGo={(i) => scrollToStage(ref.current, i, steps.length)}
              label={t('solutions.page.exampleLabel') as string}
            />
          </div>
          <div className="as-scene">
            <div className="as-scene-frame">
              {Demo && <ProductScreen demo={Demo} step={active} />}
              <div className="as-progress" aria-hidden="true"><i style={{ transform: `scaleX(${p})` }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Página de uma área: /solucoes/<slug> ───────────────────────────────────
export function SolutionPage({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const areas = (t('solutions.items') as Area[]) ?? [];
  const promises = (t('home2.areas.promises') as Record<string, string>) ?? {};
  const idx = areas.findIndex((a) => a.slug === slug);
  const area = areas[idx];
  if (!area) return null;
  const Demo = AREA_DEMO[slug];
  // as três áreas seguintes na ordem do menu (volta ao início ao chegar no fim)
  const next = [1, 2, 3].map((k) => areas[(idx + k) % areas.length]);
  const cases = publishedCases.filter((c) => c.area === slug).slice(0, 3);

  return (
    <div className="h2 cs3-page sl2">
      <header className="h2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title sl2-title">{plain(area.title)}</h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{area.lead}</p>
              <div className="h2-actions">
                <a className="btn btn-primary" href={contactUrl(`solucao-${slug}`)}>{t('pageCta.button')}</a>
                <a className="h2-link" href={PATHS.solutions}>{t('solutions.page.back')} <ArrowRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="h2-media sl2-media" style={{ backgroundImage: gradUrl(AREA_DARK[slug] ?? 'web/roxo-noite') }}>
            <div className="sl2-screen">{Demo && <ProductScreen demo={Demo} />}</div>
          </div>
        </div>
      </header>

      <section className="h2-section sl2-question" aria-labelledby="sl-question">
        <div className="h2-wrap">
          <div className="h2-head is-stack">
            <p className="sl2-label">{t('solutions.page.questionLabel')}</p>
            <h2 id="sl-question" className="h2-title sl2-quote">“{plain(area.question)}”</h2>
          </div>
          <p className="sl2-label sl2-label-gap">{t('solutions.page.decisionsLabel')}</p>
          <ul className="sl2-decisions">
            {area.decisions.map((d, i) => (
              <motion.li key={d} {...reveal(i)}>
                <span className="cs3-out-check" aria-hidden="true"><Check size={16} strokeWidth={2.6} /></span>
                <p>{d}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <SolutionStage area={area} />

      <section className="h2-section sl2-read" aria-labelledby="sl-limits">
        <div className="h2-wrap sl2-read-grid">
          <div>
            <h2 id="sl-limits" className="h2-title">{t('solutions.page.limitsLabel')}</h2>
            <a className="h2-link sl2-trust" href={PATHS.trust}>{t('solutions.page.trustCta')} <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
          <div>
            <ul className="sl2-limits">
              {area.limits.map((l, i) => (
                <motion.li key={l} {...reveal(i)}>{l}</motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {cases.length > 0 && (
        <section className="h2-section sl2-cases" aria-labelledby="sl-cases">
          <div className="h2-wrap">
            <div className="h2-head">
              <h2 id="sl-cases" className="h2-title">{t('solutions.page.useCasesLabel')}</h2>
              <a className="h2-link" href={PATHS.cases}>{t('cases.detail.back')} <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
            <ul className="cs3-grid">
              {cases.map((c) => (
                <li key={c.slug}><CaseCard c={c} /></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="h2-section h2-areas" aria-labelledby="sl-others">
        <div className="h2-wrap">
          <div className="h2-head">
            <h2 id="sl-others" className="h2-title">{t('solutions.page.otherLabel')}</h2>
            <a className="h2-link" href={PATHS.solutions}>{t('solutions.page.back')} <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
          <ul className="h2-area-grid">
            {next.map((a) => (
              <li key={a.slug}><AreaTile area={a} promise={promises[a.slug] ?? a.short} /></li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCard
        title={t('pageCta.title') as string}
        desc={t('pageCta.desc') as string}
        button={t('pageCta.button') as string}
        origin={`solucao-${slug}`}
        gradient={AREA_CLOSING[slug] ?? 'g03'}
        secondary={{ label: t('solutions.page.back') as string, href: PATHS.solutions }}
      />
      <ChatWidget2 />
    </div>
  );
}
