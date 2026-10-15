import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BarChart3, Check, Headset, Quote, Rocket, ShieldCheck, Truck, Users } from 'lucide-react';
import type { ComponentType } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { areaPath, PATHS } from '@/lib/site-map';
import { useScrollProgress } from '@/components/home/useScrollProgress';
import data from '@/data/cases.json';
import { PageCta, PageHero } from './PageShell';
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

const ICONS: Record<string, ComponentType<{ size?: number; 'aria-hidden'?: boolean | 'true'; strokeWidth?: number }>> = {
  'inteligencia-pricing': BarChart3,
  'trade-kam-campo': Users,
  'supply-distribuicao': Truck,
  'sac-customer-experience': Headset,
  'marketing-lancamentos': Rocket,
  'ti-dados-governanca': ShieldCheck,
};

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

function CaseCover({ area, kind }: { area: string; kind: CaseItem['kind'] }) {
  const Icon = ICONS[area] ?? BarChart3;
  return (
    <div className={`cs-cover is-${kind}`} aria-hidden="true">
      <span className="cs-cover-icon"><Icon size={34} strokeWidth={1.7} /></span>
      <span className="cs-cover-dots">
        {[0, 1, 2, 3, 4, 5].map((i) => <i key={i} />)}
      </span>
    </div>
  );
}

// ── Galeria ────────────────────────────────────────────────────────────────
export function CasesGallery() {
  const { t, l } = useLang();
  const areas = (t('solutions.items') as { slug: string; name: string }[]) ?? [];
  const nameOf = (slug: string) => areas.find((a) => a.slug === slug)?.name ?? '';

  return (
    <div className="sp">
      <PageHero
        eyebrow={t('cases.hero.eyebrow')}
        title={t('cases.hero.title')}
        lead={t('cases.hero.lead')}
        back={{ label: t('changelog.back'), href: PATHS.resources }}
      />
      <section className="sp-section" aria-label={t('cases.hero.eyebrow')}>
        <div className="wrap">
          {publishedCases.length === 0 ? (
            <p className="sp-body">{t('cases.gallery.empty')}</p>
          ) : (
            <div className="sp-grid is-three">
              {publishedCases.map((c, i) => (
                <motion.a
                  key={c.slug}
                  className="sp-card cs-card"
                  href={`${PATHS.cases}/${c.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * i, duration: 0.6 }}
                >
                  <CaseCover area={c.area} kind={c.kind} />
                  <span className={`cs-kind is-${c.kind}`}>{t('cases.gallery.customer')}</span>
                  <h2>{pick(c.title, l)}</h2>
                  <p>{pick(c.summary, l)}</p>
                  <span className="cs-meta">{pick(c.role, l)} · {nameOf(c.area)}</span>
                  <span className="sp-area-go">{t('cases.gallery.open')}<ArrowRight size={15} aria-hidden="true" /></span>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </section>
      <PageCta title={t('pageCta.title')} desc={t('pageCta.desc')} button={t('pageCta.button')} />
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
    <section ref={ref} className="as cs-stage" aria-labelledby="cs-how">
      <div className="as-sticky">
        <div className="as-glow" aria-hidden="true" />
        <div className="wrap as-grid">
          <div className="as-copy">
            <p className="as-eyebrow">{t('cases.detail.how')}</p>
            <h2 id="cs-how" className="as-title">{pick(c.title, l)}</h2>
            <p className="as-lead">{t('cases.detail.howLead')}</p>
            <ol className="as-steps">
              {steps.map((s, i) => (
                <li key={i} className={i === active ? 'is-on' : i < active ? 'is-past' : ''} aria-current={i === active ? 'step' : undefined}>
                  <span className="as-step-n">{i + 1}</span>
                  <p>
                    <strong>{pick(s.title, l)}</strong>
                    <span>{pick(s.text, l)}</span>
                  </p>
                </li>
              ))}
            </ol>
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

  return (
    <div className="sp">
      <PageHero
        eyebrow={t('cases.gallery.customer')}
        title={pick(c.title, l)}
        lead={pick(c.summary, l)}
        back={{ label: t('cases.detail.back'), href: PATHS.cases }}
      >
        <p className="sp-byline">
          {role}
          {isCustomer ? ` · ${t('cases.detail.preserved')}` : ''}
        </p>
      </PageHero>

      {/* 1. O problema vem logo de cara, na voz de quem viveu */}
      <section className="sp-section cs-problem" aria-labelledby="cs-problem">
        <div className={`wrap ${quote ? 'cs-problem-grid' : 'cs-problem-solo'}`}>
          {quote && (
            <motion.figure className="cs-userquote" {...reveal()}>
              <Quote size={30} aria-hidden="true" strokeWidth={1.6} />
              <blockquote>{quote}</blockquote>
              <figcaption>
                <span className="cs-avatar" aria-hidden="true">{role.charAt(0)}</span>
                <span>
                  <strong>{role}</strong>
                  <em>{t('cases.detail.userLabel')}</em>
                </span>
              </figcaption>
            </motion.figure>
          )}
          <motion.div {...reveal(1)}>
            <p className="cs-alert"><span className="cs-alert-dot" aria-hidden="true" />{t('cases.detail.problem')}</p>
            <h2 id="cs-problem" className="visually-hidden">{t('cases.detail.problem')}</h2>
            <p className="cs-problem-text">{pick(c.problem.text, l)}</p>
          </motion.div>
        </div>
      </section>

      {/* 2. Como o Dinn trabalhou: cena animada pela rolagem */}
      <CaseStage c={c} />

      {/* 3. A solução e o que mudou */}
      <section className="sp-section cs-solution" aria-labelledby="cs-solution">
        <div className="wrap cs-solution-grid">
          <motion.div {...reveal()}>
            <p className="cs-kicker-ok"><Check size={14} aria-hidden="true" />{t('cases.detail.solution')}</p>
            <h2 id="cs-solution" className="cs-solution-title">{pick(c.solution.title, l)}</h2>
            <p className="cs-solution-text">{pick(c.solution.text, l)}</p>
            {solutionQuote && (
              <blockquote className="cs-quote">
                <Quote size={20} aria-hidden="true" strokeWidth={1.6} />
                <p>{solutionQuote}</p>
                <footer>{role}</footer>
              </blockquote>
            )}
          </motion.div>
          <div>
            <h3 className="cs-outcome-title">{t('cases.detail.outcome')}</h3>
            <ul className="cs-outcome">
              {c.outcome.map((o, i) => (
                <motion.li key={i} {...reveal(i)}>
                  <span className="cs-outcome-check" aria-hidden="true"><Check size={16} strokeWidth={2.6} /></span>
                  {pick(o, l)}
                </motion.li>
              ))}
            </ul>
            {area && (
              <a className="cs-area-link" href={areaPath(area.slug)}>
                {area.name}<ArrowRight size={15} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="sp-section is-alt" aria-label={t('cases.detail.relatedTitle')}>
          <div className="wrap">
            <h2 className="cs-steps-title">{t('cases.detail.relatedTitle')}</h2>
            <div className="sp-grid is-three">
              {others.map((o) => (
                <a key={o.slug} className="sp-card cs-card" href={`${PATHS.cases}/${o.slug}`}>
                  <CaseCover area={o.area} kind={o.kind} />
                  <h3><Rich text={pick(o.title, l)} /></h3>
                  <span className="sp-area-go">{t('cases.gallery.open')}<ArrowRight size={15} aria-hidden="true" /></span>
                </a>
              ))}
            </div>
            <p className="sp-more">
              <a href={PATHS.cases}><ArrowLeft size={14} aria-hidden="true" style={{ verticalAlign: '-2px' }} /> {t('cases.detail.back')}</a>
            </p>
          </div>
        </section>
      )}

      <PageCta title={t('pageCta.title')} desc={t('pageCta.desc')} button={t('pageCta.button')} />
    </div>
  );
}
