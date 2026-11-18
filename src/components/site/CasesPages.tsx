import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Quote } from 'lucide-react';
import type { ComponentType } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { areaPath, PATHS } from '@/lib/site-map';
import { useScrollProgress } from '@/components/home/useScrollProgress';
import { scrollToStage } from '@/components/home/scroll-to';
import { StageSteps } from './StageSteps';
import data from '@/data/cases.json';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { IlPricing, IlSac, IlSupply, IlTrade } from '@/components/illustrations/areas';
import { AREA_ART, AREA_DARK, AREA_LIGHT, gradUrl } from './area-theme';
import { IlLayers } from '@/components/illustrations/resources';
import { ClosingCard, H2Head } from './PageShell';
import { contactUrl } from '@/lib/links';
import { getCaseScene } from './CaseScenes';

// Galeria de casos de uso e página de cada caso, contada como história:
// o problema vem primeiro, o Dinn trabalha numa cena animada pela rolagem e a
// solução fecha. Os casos moram em src/data/cases.json (ver a nota do arquivo).

type Lang = 'pt' | 'en' | 'es';
type Loc = Partial<Record<Lang, string>>;
type Step = { title: Loc; text: Loc };
export type CaseItem = {
  slug: string;
  status: 'published' | 'draft';
  kind: 'demo' | 'customer';
  area: string;
  date: string;
  visual: string;
  role: Loc;
  title: Loc;
  summary: Loc;
  problem: { quote: Loc | null; text: Loc };
  how: Step[];
  solution: { title: Loc; text: Loc; quote: Loc | null };
  outcome: Loc[];
};

const LOCALE: Record<Lang, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-419' };
const EASE = [0.22, 1, 0.36, 1] as const;

export const publishedCases = (data.cases as unknown as CaseItem[])
  .filter((c) => c.status === 'published')
  // casos de cliente primeiro; dentro de cada grupo, o mais novo na frente
  .sort((a, b) => (a.kind === b.kind ? (a.date < b.date ? 1 : -1) : a.kind === 'customer' ? -1 : 1));

const pick = (loc: Loc | null | undefined, l: Lang) => (loc ? loc[l] || loc.pt || '' : '');
const useLang = () => {
  const { t, lang } = useTranslation();
  const l: Lang = (lang as Lang) in LOCALE ? (lang as Lang) : 'pt';
  return { t, l };
};

// ── Galeria ────────────────────────────────────────────────────────────────
// Cada caso usa a ilustração animada da sua área (a mesma de "Para a sua área").
// Ilustração e degradês por área: ver area-theme.ts.

// Cada caso tem a sua capa: ilustração, degradê claro (cartão) e degradê escuro (herói
// e citação). Casos da mesma área não repetem nada. Caso novo sem entrada aqui usa o
// padrão da área.
const CASE_COVER: Record<string, { art: ComponentType; light: string; dark: string }> = {
  'dias-de-estoque-fortaleza': { art: IlLayers, light: 'web/laranja-bolha', dark: 'web/verde-noite' },
  'furo-reposicao-distribuidor': { art: IlSupply, light: 'g06', dark: 'web/grafite' },
  'sac-localizador-produto': { art: IlSac, light: 'g10', dark: 'web/laranja-noite' },
  'preco-concorrente-redes': { art: IlPricing, light: 'g08', dark: 'web/azul-noite' },
  'oportunidades-share-brasil': { art: IlTrade, light: 'web/lilas-azul', dark: 'web/roxo-noite' },
};
const coverOf = (c: CaseItem) => ({
  Art: CASE_COVER[c.slug]?.art ?? AREA_ART[c.area] ?? IlPricing,
  light: gradUrl(CASE_COVER[c.slug]?.light ?? AREA_LIGHT[c.area] ?? 'g00'),
  dark: gradUrl(CASE_COVER[c.slug]?.dark ?? AREA_DARK[c.area] ?? 'web/roxo-noite'),
});

export function CaseCard({ c }: { c: CaseItem }) {
  const { t, l } = useLang();
  const areas = (t('solutions.items') as { slug: string; name: string }[]) ?? [];
  const { Art, light } = coverOf(c);
  const area = areas.find((a) => a.slug === c.area)?.name ?? '';
  return (
    <a className="cs3-card il-host" href={`${PATHS.cases}/${c.slug}`}>
      <span className="cs3-art" style={{ backgroundImage: light }}><Art /></span>
      <span className="cs3-kind">{t('cases.gallery.customer')} · {area}</span>
      <span className="cs3-name">{pick(c.title, l)}</span>
      <span className="cs3-text">{pick(c.summary, l)}</span>
      <span className="cs3-meta">{pick(c.role, l)}</span>
      <span className="h2-link">{t('cases.gallery.open')}<ArrowRight size={15} aria-hidden="true" /></span>
    </a>
  );
}

export function CasesGallery() {
  const { t, l } = useLang();
  return (
    <div className="h2 cs2">
      <header className="h2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title"><Rich text={t('cases.hero.title') as string} /></h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('cases.hero.lead')}</p>
              <div className="h2-actions">
                <a className="btn btn-primary" href={PATHS.customers}>{t('home2.customers.cta')}</a>
                <a className="h2-link" href={PATHS.resources}>← {t('changelog.back')}</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="cs2-sec" aria-label={t('cases.hero.eyebrow') as string}>
        <div className="h2-wrap">
          {publishedCases.length === 0 ? (
            <p className="cs2-empty">{t('cases.gallery.empty')}</p>
          ) : (
            <ul className="cs3-grid">
              {publishedCases.map((c) => (
                <li key={c.slug}><CaseCard c={c} /></li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <ClosingCard
        title={t('pageCta.title') as string}
        desc={t('pageCta.desc') as string}
        button={t('pageCta.button') as string}
        origin="casos"
        gradient="g10"
      />
      <ChatWidget2 />
    </div>
  );
}

// ── Palco: "Como o Dinn trabalhou", animado pela rolagem ──────────────────
function CaseStage({ c }: { c: CaseItem }) {
  const { t, l } = useLang();
  const ref = useRef<HTMLElement>(null);
  const [scroll, setScroll] = useState(0);
  const [intro, setIntro] = useState(0);
  useScrollProgress(ref, (v) => setScroll(Math.round(v * 200) / 200));

  // O primeiro tempo se desenha sozinho ao chegar; depois a rolagem conta o resto.
  useEffect(() => {
    const target = 0.2;
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

  const Scene = getCaseScene(c.visual);
  const steps = c.how;
  const active = Math.min(steps.length - 1, Math.floor(p * steps.length * 0.999));
  const isArea = c.visual.startsWith('area:');
  const L = isArea
    ? ((t('scenes.items') as Record<string, any>) ?? {})[c.visual.slice(5)] ?? {}
    : ((t('caseScenes') as Record<string, any>) ?? {})[c.visual] ?? {};
  const shared = {
    queueRows: t('teams.visuals.queue.rows'),
    locatorRows: t('teams.visuals.locator.rows'),
    regions: t('teams.visuals.launch.regions'),
    sources: t('delivery.sources'),
    destinations: t('delivery.destinations'),
    types: ((t('trust.signals.items') as { name: string }[]) ?? []).map((s) => s.name),
  };

  return (
    <section ref={ref} className="as cs-stage" aria-labelledby="cs-how" style={{ ['--cs-g' as string]: coverOf(c).dark }}>
      <div className="as-sticky">
        <div className="as-glow" aria-hidden="true" />
        <div className="wrap as-grid">
          <div className="as-copy">
            <h2 id="cs-how" className="as-title">{t('cases.detail.how')}</h2>
            <p className="as-lead">{t('cases.detail.howLead')}</p>
            <StageSteps
              steps={steps.map((s) => ({ label: pick(s.title, l), text: pick(s.text, l) }))}
              active={active}
              onGo={(i) => scrollToStage(ref.current, i, steps.length)}
              label={t('cases.detail.how') as string}
            />
          </div>
          <div className="as-scene">
            <div className="as-scene-frame">
              {Scene && <Scene p={p} L={L} shared={shared} />}
              <div className="as-progress" aria-hidden="true"><i style={{ transform: `scaleX(${p})` }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8% 0px' },
  transition: { delay: 0.08 * i, duration: 0.6, ease: EASE },
});

// ── Página de um caso ─────────────────────────────────────────────────────
export function CaseDetail({ slug }: { slug: string }) {
  const { t, l } = useLang();
  const c = publishedCases.find((x) => x.slug === slug);
  const areas = (t('solutions.items') as { slug: string; name: string }[]) ?? [];
  if (!c) return null;
  const area = areas.find((a) => a.slug === c.area);
  const others = publishedCases.filter((x) => x.slug !== slug).slice(0, 3);
  const isCustomer = c.kind === 'customer';
  const quote = c.problem.quote ? pick(c.problem.quote, l) : '';
  const solutionQuote = c.solution.quote ? pick(c.solution.quote, l) : '';
  const role = pick(c.role, l);
  const { Art, dark } = coverOf(c);

  return (
    <div className="h2 cs3-page">
      <header className="h2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title cs3-title">{pick(c.title, l)}</h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{pick(c.summary, l)}</p>
              <p className="cs3-by">{role}{isCustomer ? ` · ${t('cases.detail.preserved')}` : ''}</p>
              <div className="h2-actions">
                <a className="btn btn-primary" href={contactUrl('caso')}>{t('pageCta.button')}</a>
                <a className="h2-link" href={PATHS.customers}>{t('home2.customers.cta')} <ArrowRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="h2-media cs3-media il-host" style={{ backgroundImage: dark }}>
            <div className="cs3-panel"><Art /></div>
          </div>
        </div>
      </header>

      {/* 1. O problema, na voz de quem viveu */}
      <section className="h2-section cs3-problem" aria-labelledby="cs-problem">
        <div className="h2-wrap">
          <H2Head id="cs-problem" title={t('cases.detail.problem') as string} />
          <div className={quote ? 'cs3-split' : 'cs3-solo'}>
            {quote && (
              <motion.figure className="cs3-quote" style={{ backgroundImage: dark }} {...reveal()}>
                <Quote size={28} aria-hidden="true" strokeWidth={1.6} />
                <blockquote>{quote}</blockquote>
                <figcaption>
                  <span className="cs3-avatar" aria-hidden="true">{role.charAt(0)}</span>
                  <span><strong>{role}</strong><em>{t('cases.detail.userLabel')}</em></span>
                </figcaption>
              </motion.figure>
            )}
            <motion.p className="cs3-problem-text" {...reveal(1)}>{pick(c.problem.text, l)}</motion.p>
          </div>
        </div>
      </section>

      {/* 2. Como o Dinn trabalhou: cena animada pela rolagem */}
      <CaseStage c={c} />

      {/* 3. A solução e o que mudou */}
      <section className="h2-section cs3-solution" aria-labelledby="cs-solution">
        <div className="h2-wrap cs3-sol-grid">
          <motion.div {...reveal()}>
            <h2 id="cs-solution" className="h2-title">{pick(c.solution.title, l)}</h2>
            <p className="cs3-sol-text">{pick(c.solution.text, l)}</p>
            {solutionQuote && (
              <blockquote className="cs3-sol-quote">
                <p>{solutionQuote}</p>
                <footer>{role}</footer>
              </blockquote>
            )}
          </motion.div>
          <div>
            <h3 className="cs3-out-title">{t('cases.detail.outcome')}</h3>
            <ul className="cs3-out">
              {c.outcome.map((o, i) => (
                <motion.li key={i} {...reveal(i)}>
                  <span className="cs3-out-check" aria-hidden="true"><Check size={16} strokeWidth={2.6} /></span>
                  {pick(o, l)}
                </motion.li>
              ))}
            </ul>
            {area && (
              <a className="h2-link cs3-area" href={areaPath(area.slug)}>
                {area.name}<ArrowRight size={15} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="h2-section cs3-more" aria-labelledby="cs-more">
          <div className="h2-wrap">
            <div className="h2-head">
              <h2 id="cs-more" className="h2-title">{t('cases.detail.relatedTitle')}</h2>
              <a className="h2-link" href={PATHS.cases}>{t('cases.detail.back')} <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
            <ul className="cs3-grid">
              {others.map((o) => (
                <li key={o.slug}><CaseCard c={o} /></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ClosingCard
        title={t('pageCta.title') as string}
        desc={t('pageCta.desc') as string}
        button={t('pageCta.button') as string}
        origin="caso"
        gradient="g10"
        secondary={{ label: t('home2.customers.cta') as string, href: PATHS.customers }}
      />
      <ChatWidget2 />
    </div>
  );
}
