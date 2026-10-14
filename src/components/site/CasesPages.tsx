import { ArrowRight, BarChart3, Headset, Quote, Rocket, ShieldCheck, Truck, Users } from 'lucide-react';
import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { areaPath, PATHS } from '@/lib/site-map';
import data from '@/data/cases.json';
import { PageCta, PageHero } from './PageShell';

// Galeria de casos de uso e página de detalhe de cada caso, no formato de um
// artigo do blog. Os casos moram em src/data/cases.json: para publicar um novo,
// acrescente um item com status "published" (ver a nota no próprio arquivo).

type Lang = 'pt' | 'en' | 'es';
type Loc = Record<Lang, string>;
type StepKey = 'situation' | 'signal' | 'validation' | 'decision' | 'action' | 'learning';
export type CaseItem = {
  slug: string;
  status: 'published' | 'draft';
  kind: 'demo' | 'customer';
  area: string;
  date: string;
  customer: string | null;
  quote: { text: Loc; name: string; role: string } | null;
  title: Loc;
  summary: Loc;
  steps: Record<StepKey, Loc>;
};

const STEP_ORDER: StepKey[] = ['situation', 'signal', 'validation', 'decision', 'action', 'learning'];
const LOCALE: Record<Lang, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-419' };

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
  .sort((a, b) => (a.date < b.date ? 1 : -1));

const pick = (loc: Loc, l: Lang) => loc?.[l] || loc?.pt || '';
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
                  transition={{ delay: 0.08 * i, duration: 0.6 }}
                >
                  <CaseCover area={c.area} kind={c.kind} />
                  <span className={`cs-kind is-${c.kind}`}>{t(`cases.gallery.${c.kind}`)}</span>
                  <h2>{pick(c.title, l)}</h2>
                  <p>{pick(c.summary, l)}</p>
                  <span className="cs-meta">{nameOf(c.area)}</span>
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

export function CaseDetail({ slug }: { slug: string }) {
  const { t, l } = useLang();
  const c = publishedCases.find((x) => x.slug === slug);
  const areas = (t('solutions.items') as { slug: string; name: string }[]) ?? [];
  if (!c) return null;
  const area = areas.find((a) => a.slug === c.area);
  const others = publishedCases.filter((x) => x.slug !== slug).slice(0, 3);
  const date = new Intl.DateTimeFormat(LOCALE[l], { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${c.date}T00:00:00Z`));
  const rules = (t('cases.rules.items') as string[]) ?? [];

  return (
    <div className="sp">
      <PageHero
        eyebrow={t(`cases.gallery.${c.kind}`)}
        title={pick(c.title, l)}
        lead={pick(c.summary, l)}
        back={{ label: t('cases.detail.back'), href: PATHS.cases }}
      >
        <p className="sp-byline">
          {c.customer ? `${c.customer} · ` : ''}{t('cases.detail.byline')} · <time dateTime={c.date}>{date}</time>
        </p>
      </PageHero>

      <article className="sp-section">
        <div className="wrap cs-article">
          {c.kind === 'demo' && <p className="cs-demo-note">{t('cases.detail.demoNote')}</p>}
          <h2 className="cs-steps-title">{t('cases.detail.stepsTitle')}</h2>
          <ol className="cs-steps">
            {STEP_ORDER.map((k, i) => (
              <li key={k}>
                <span className="sp-num">{i + 1}</span>
                <div>
                  <h3>{t(`cases.stepLabels.${k}`)}</h3>
                  <p>{pick(c.steps[k], l)}</p>
                </div>
              </li>
            ))}
          </ol>

          {c.quote && (
            <blockquote className="cs-quote">
              <Quote size={22} aria-hidden="true" />
              <p>{pick(c.quote.text, l)}</p>
              <footer>{c.quote.name} · {c.quote.role}</footer>
            </blockquote>
          )}

          <aside className="sp-related">
            <h2>{t('cases.rules.title')}</h2>
            <ul className="sp-checks">
              {rules.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </aside>

          {area && (
            <p className="sp-more">
              {t('cases.detail.areaLabel')}: <a href={areaPath(area.slug)}>{area.name} →</a>
            </p>
          )}
        </div>
      </article>

      {others.length > 0 && (
        <section className="sp-section is-alt" aria-label={t('cases.detail.relatedTitle')}>
          <div className="wrap">
            <h2 className="cs-steps-title">{t('cases.detail.relatedTitle')}</h2>
            <div className="sp-grid is-three">
              {others.map((o) => (
                <a key={o.slug} className="sp-card cs-card" href={`${PATHS.cases}/${o.slug}`}>
                  <CaseCover area={o.area} kind={o.kind} />
                  <h3><Rich text={pick(o.title, l)} /></h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <PageCta title={t('pageCta.title')} desc={t('pageCta.desc')} button={t('pageCta.button')} />
    </div>
  );
}
