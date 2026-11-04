import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { contactUrl } from '@/lib/links';
import { areaPath, featurePath, FEATURE_SLUGS, PATHS } from '@/lib/site-map';
import { useScrollProgress } from '@/components/home/useScrollProgress';
import { scrollToStage } from '@/components/home/scroll-to';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { ClosingCard, H2Head } from './PageShell';
import { StageSteps } from './StageSteps';
import { FEATURE_DEMO } from './FeatureDemos';
import { AREA_CLOSING, AREA_DARK, gradUrl, plain } from './area-theme';
import type { Area } from './SolutionsPages';

// Funcionalidades no Design System v2 (padrão de 03/11/2026). Cada
// funcionalidade com tela no Dinn tem página própria: a tela animada no topo,
// onde ela atua (tela, times, decisão), o palco com os quatro passos (Entrada,
// Ação, Saída, Decisão) na mesma tela, o limite e outras funcionalidades.

export type Feature = {
  id: string; name: string; kind: string; problem: string; input: string; action: string;
  output: string; decision: string; limit: string; href: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;
const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8% 0px' },
  transition: { delay: 0.08 * i, duration: 0.6, ease: EASE },
});

/** Áreas (soluções) em que cada funcionalidade atua. A primeira dá o degradê. */
// 'all' = todos os times usam: a página mostra "Todos os times" com link para /solucoes.
export const FEATURE_AREAS: Record<string, string[] | 'all'> = {
  ruptura: 'all',
  giro: 'all',
  preco: 'all',
  localizador: ['sac-customer-experience', 'trade-kam-campo'],
  mercado: ['inteligencia-pricing', 'marketing-lancamentos'],
  oportunidades: ['inteligencia-pricing', 'trade-kam-campo'],
  distribuicao: ['supply-distribuicao'],
  jean: ['trade-kam-campo', 'inteligencia-pricing', 'ti-dados-governanca'],
  conecta: ['ti-dados-governanca'],
};
// Primeira área da funcionalidade: dá o degradê. Quem todos usam fica no roxo da marca.
const firstArea = (id: string) => { const v = FEATURE_AREAS[id]; return Array.isArray(v) ? v[0] : ''; };
const darkOf = (id: string) => AREA_DARK[firstArea(id)] ?? 'web/roxo-noite';

const hasPage = (id: string) => (FEATURE_SLUGS as readonly string[]).includes(id);

function useFeatures() {
  const { t } = useTranslation();
  return (t('features.items') as Feature[]) ?? [];
}

/** Cartão de uma funcionalidade com tela: nome, tipo, pergunta e o link. */
export function FeatureTile({ f }: { f: Feature }) {
  const { t } = useTranslation();
  const kinds = (t('features.kinds') as unknown as Record<string, string>) ?? {};
  return (
    <a className="sl2-feat ft2-tile" href={featurePath(f.id)}>
      <span className="ft2-kind">{kinds[f.kind] ?? f.kind}</span>
      <span className="sl2-feat-name">{f.name}</span>
      <span className="sl2-feat-text">{f.problem}</span>
      <span className="h2-link">{t('features.hub.open')}<ArrowRight size={15} aria-hidden="true" /></span>
    </a>
  );
}

/** Abas com as nove funcionalidades e a tela do Dinn da escolhida (lista e Plataforma). */
export function FeaturePicker({ items }: { items: Feature[] }) {
  const { t } = useTranslation();
  const [pick, setPick] = useState(items[0]?.id ?? 'ruptura');
  const Demo = FEATURE_DEMO[pick];
  return (
    <>
      <div className="ft2-picker" role="tablist" aria-label={t('features.listLabel') as string}>
        {items.map((f) => (
          <button key={f.id} type="button" role="tab" aria-selected={pick === f.id} className={pick === f.id ? 'on' : ''} onClick={() => setPick(f.id)}>
            {f.name}
          </button>
        ))}
      </div>
      <div className="h2-media sl2-media" style={{ backgroundImage: gradUrl(darkOf(pick)) }} role="tabpanel">
        <div className="sl2-screen">{Demo && <Demo key={pick} />}</div>
      </div>
      <p className="ft2-caption">
        {t('features.page.caption')}{' '}
        <a className="h2-link" href={featurePath(pick)}>{t('features.hub.open')} <ArrowRight size={15} aria-hidden="true" /></a>
      </p>
    </>
  );
}

// ── Lista: /funcionalidades ────────────────────────────────────────────────
export function FeaturesHub() {
  const { t } = useTranslation();
  const items = useFeatures();

  // Links antigos (/funcionalidades#id) levam à página da funcionalidade.
  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    const to = id ? featurePath(id) : PATHS.features;
    if (to !== PATHS.features) window.location.replace(to);
  }, []);

  return (
    <div className="h2 sl2 ft2">
      <header className="h2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title">{plain(t('features.hero.title') as string)}</h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('features.hero.lead')}</p>
              <div className="h2-actions">
                <a className="btn btn-primary" href={contactUrl('funcionalidades')}>{t('pageCta.button')}</a>
                <a className="h2-link" href={PATHS.platform}>{t('nav.platform')} <ArrowRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <FeaturePicker items={items} />
        </div>
      </header>

      <section className="h2-section sl2-feats ft2-list" aria-labelledby="ft-screens">
        <div className="h2-wrap">
          <H2Head id="ft-screens" title={t('features.hub.screensTitle') as string} intro={t('features.hub.screensIntro') as string} />
          <ul className="sl2-feat-grid">
            {items.map((f, i) => (
              <motion.li key={f.id} {...reveal(i % 3)}><FeatureTile f={f} /></motion.li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCard
        title={t('features.cta.title') as string}
        desc={t('features.cta.desc') as string}
        button={t('features.cta.button') as string}
        origin="funcionalidades"
        gradient="g03"
        secondary={{ label: t('nav.platform') as string, href: PATHS.platform }}
      />
      <ChatWidget2 />
    </div>
  );
}

// ── Palco: os quatro passos da funcionalidade na mesma tela ────────────────
function FeatureStage({ f }: { f: Feature }) {
  const { t } = useTranslation();
  const flow = (t('features.flow') as unknown as Record<string, string>) ?? {};
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

  const steps = [
    { label: flow.input, text: f.input },
    { label: flow.action, text: f.action },
    { label: flow.output, text: f.output },
    { label: flow.decision, text: f.decision },
  ];
  const active = Math.min(steps.length - 1, Math.floor(p * steps.length * 0.999));
  const Demo = FEATURE_DEMO[f.id];

  return (
    <section ref={ref} className="as cs-stage" aria-labelledby="ft-how" style={{ ['--cs-g' as string]: gradUrl(darkOf(f.id)) }}>
      <div className="as-sticky">
        <div className="as-glow" aria-hidden="true" />
        <div className="wrap as-grid">
          <div className="as-copy">
            <h2 id="ft-how" className="as-title">{t('features.page.howTitle')}</h2>
            <p className="as-lead">{t('features.page.howLead')}</p>
            <StageSteps steps={steps} active={active} onGo={(i) => scrollToStage(ref.current, i, steps.length)} label={t('features.page.howTitle') as string} />
          </div>
          <div className="as-scene">
            <div className="as-scene-frame">
              {Demo && <Demo step={active} />}
              <div className="as-progress" aria-hidden="true"><i style={{ transform: `scaleX(${p})` }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Página de uma funcionalidade: /funcionalidades/<slug> ──────────────────
export function FeaturePage({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const items = useFeatures();
  const areas = (t('solutions.items') as Area[]) ?? [];
  const kinds = (t('features.kinds') as unknown as Record<string, string>) ?? {};
  const flow = (t('features.flow') as unknown as Record<string, string>) ?? {};
  const screens = (t('features.page.screens') as unknown as Record<string, string>) ?? {};
  const list = items;
  const idx = list.findIndex((f) => f.id === slug);
  const f = list[idx];
  if (!f || !hasPage(slug)) return null;
  const Demo = FEATURE_DEMO[slug];
  const teamsDef = FEATURE_AREAS[slug] ?? [];
  const allTeams = teamsDef === 'all';
  const teams = (Array.isArray(teamsDef) ? teamsDef : []).map((s) => areas.find((a) => a.slug === s)).filter(Boolean) as Area[];
  // as três funcionalidades seguintes na ordem da lista (volta ao início no fim)
  const next = [1, 2, 3].map((k) => list[(idx + k) % list.length]);
  const showMore = f.href && f.href !== PATHS.platform && !f.href.startsWith('/solucoes');

  return (
    <div className="h2 cs3-page sl2 ft2">
      <header className="h2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title">{f.name}</h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{f.problem}</p>
              <div className="h2-actions">
                <a className="btn btn-primary" href={contactUrl(`funcionalidade-${slug}`)}>{t('pageCta.button')}</a>
                <a className="h2-link" href={PATHS.features}>{t('features.page.back')} <ArrowRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="h2-media sl2-media" style={{ backgroundImage: gradUrl(darkOf(slug)) }}>
            <div className="sl2-screen">{Demo && <Demo />}</div>
          </div>
          <p className="ft2-caption">{t('features.page.caption')}</p>
        </div>
      </header>

      <section className="h2-section sl2-question" aria-labelledby="ft-where">
        <div className="h2-wrap">
          <H2Head id="ft-where" title={t('features.page.whereTitle') as string} />
          <div className="ft2-where">
            <motion.div className="ft2-where-cell" {...reveal(0)}>
              <p className="sl2-label">{t('features.page.screenLabel')}</p>
              <p className="ft2-big">{screens[slug] ?? f.name}</p>
              <p className="ft2-note">{kinds[f.kind] ?? f.kind}</p>
            </motion.div>
            <motion.div className="ft2-where-cell" {...reveal(1)}>
              <p className="sl2-label">{t('features.page.teamsLabel')}</p>
              {allTeams ? (
                <>
                  <p className="ft2-big">{t('features.page.allTeams')}</p>
                  <a className="h2-link ft2-all" href={PATHS.solutions}>{t('features.page.allTeamsLink')} <ArrowRight size={15} aria-hidden="true" /></a>
                </>
              ) : (
                <ul className="ft2-teams">
                  {teams.map((a) => (
                    <li key={a.slug}><a href={areaPath(a.slug)}>{a.name}<ArrowUpRight size={16} aria-hidden="true" /></a></li>
                  ))}
                </ul>
              )}
            </motion.div>
            <motion.div className="ft2-where-cell" {...reveal(2)}>
              <p className="sl2-label">{flow.decision}</p>
              <p className="ft2-big">{f.decision}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureStage f={f} />

      <section className="h2-section sl2-read" aria-labelledby="ft-limit">
        <div className="h2-wrap sl2-read-grid">
          <div>
            <h2 id="ft-limit" className="h2-title">{flow.limit}</h2>
            <a className="h2-link sl2-trust" href={PATHS.trust}>{t('solutions.page.trustCta')} <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
          <div>
            <ul className="sl2-limits">
              {f.limit.split(/(?<=\.)\s+/).map((l, i) => <motion.li key={l} {...reveal(i)}>{l}</motion.li>)}
            </ul>
            <p className="ft2-sim">{t('features.sim')}</p>
            {showMore && <a className="h2-link" href={f.href}>{flow.more} <ArrowRight size={15} aria-hidden="true" /></a>}
          </div>
        </div>
      </section>

      <section className="h2-section sl2-feats" aria-labelledby="ft-next">
        <div className="h2-wrap">
          <div className="h2-head">
            <h2 id="ft-next" className="h2-title">{t('features.page.otherTitle')}</h2>
            <a className="h2-link" href={PATHS.features}>{t('features.page.back')} <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
          <ul className="sl2-feat-grid">
            {next.map((n) => <li key={n.id}><FeatureTile f={n} /></li>)}
          </ul>
        </div>
      </section>

      <ClosingCard
        title={t('features.cta.title') as string}
        desc={t('features.cta.desc') as string}
        button={t('features.cta.button') as string}
        origin={`funcionalidade-${slug}`}
        gradient={AREA_CLOSING[firstArea(slug)] ?? 'g03'}
        secondary={{ label: t('features.page.back') as string, href: PATHS.features }}
      />
      <ChatWidget2 />
    </div>
  );
}
