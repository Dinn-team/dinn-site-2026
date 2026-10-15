import { useEffect, useState } from 'react';
import {
  ArrowRight, BarChart3, Briefcase, Building2, CalendarClock, CheckCircle2, Clock, Code2, Database, Eye, FileCheck2,
  FileText, Globe2, Headset, Layers, MapPin, Network, Package, Plug, RefreshCw, Search, Send, Server, Shuffle, Store, Workflow,
  type LucideIcon,
} from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { contactUrl } from '@/lib/links';
import { PATHS } from '@/lib/site-map';
import FAQ from '@/components/FAQ';
import { TestimonialsSection } from '@/components/ui/TestimonialsSection';
import coverageData from '@/data/coverage.json';
import { PageCta, PageHero, SectionHead } from '../PageShell';
import { AreaCard, type Area } from '../SolutionsPages';
import { publishedCases } from '../CasesPages';
import { RealtimeStage } from './RealtimeScene';
import { CityLink, FlowChain, HubDiagram, IconTile, ReadingsTimeline, SplitPanels, StatStrip } from './FlowViz';

// Páginas de produto e oferta da rodada de 15/10/2026. Cada uma lê os textos
// do dicionário (offer*) e usa as peças comuns de PageShell e site-pages.css.

type Info = { title: string; text: string };
type Qa = { question: string; answer: string };

function CardGrid({ items, cols = 3, icons }: { items: Info[]; cols?: 2 | 3; icons?: LucideIcon[] }) {
  return (
    <div className={`sp-grid ${cols === 2 ? 'is-two' : 'is-three'}`}>
      {items.map((c, i) => (
        <article key={c.title} className="sp-card is-plain">
          {icons?.[i] && <IconTile icon={icons[i]} />}
          <h3>{c.title}</h3>
          <p>{c.text}</p>
        </article>
      ))}
    </div>
  );
}

function DataTable({ columns, rows, label }: { columns: string[]; rows: string[][]; label?: string }) {
  return (
    <div className="of-table-wrap">
      <table className="of-table" aria-label={label}>
        <thead>
          <tr>{columns.map((c, i) => <th key={`${c}-${i}`} scope="col">{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Checks({ items }: { items: string[] }) {
  return (
    <ul className="sp-checks">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}

// ── Soluções: por objetivo, área e funcionalidade ───────────────────────────
type Goal = { label: string; text: string; href: string };

export function SolutionsHub() {
  const { t } = useTranslation();
  const goals = (t('solutionsHub.goals.items') as Goal[]) ?? [];
  const features = (t('solutionsHub.features.items') as Goal[]) ?? [];
  const areas = (t('solutions.items') as Area[]) ?? [];

  return (
    <div className="sp">
      <PageHero
        eyebrow={t('solutionsHub.hero.eyebrow') as string}
        title={t('solutionsHub.hero.title') as string}
        lead={t('solutionsHub.hero.lead') as string}
      />

      <section className="sp-section" aria-labelledby="sh-goals">
        <div className="wrap">
          <SectionHead id="sh-goals" title={t('solutionsHub.goals.title')} intro={t('solutionsHub.goals.intro')} />
          <div className="sp-grid is-three">
            {goals.map((g) => (
              <a key={g.label} className="sp-card" href={g.href}>
                <h3>{g.label}</h3>
                <p>{g.text}</p>
                <span className="sp-area-go">{t('solutionsHub.goals.open')}<ArrowRight size={15} aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="sh-areas">
        <div className="wrap">
          <SectionHead id="sh-areas" title={t('solutionsHub.areas.title')} intro={t('solutionsHub.areas.intro')} />
          <div className="sp-grid is-areas">
            {areas.map((a) => (
              <AreaCard key={a.slug} area={a} cta={t('areas.open') as string} questionPrefix={t('areas.questionPrefix') as string} />
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" aria-labelledby="sh-features">
        <div className="wrap">
          <SectionHead id="sh-features" title={t('solutionsHub.features.title')} intro={t('solutionsHub.features.intro')} />
          <div className="sp-grid is-three">
            {features.map((f) => (
              <a key={f.label} className="sp-card" href={f.href}>
                <h3>{f.label}</h3>
                <p>{f.text}</p>
                <span className="sp-area-go">{t('solutionsHub.goals.open')}<ArrowRight size={15} aria-hidden="true" /></span>
              </a>
            ))}
          </div>
          <p className="sp-more">{t('solutionsHub.more')} <a href={contactUrl('solucoes')}>{t('solutionsHub.moreCta')} →</a></p>
        </div>
      </section>

      <PageCta
        title={t('pageCta.title')}
        desc={t('pageCta.desc')}
        button={t('pageCta.button')}
        origin="solucoes-fechamento"
      />
    </div>
  );
}

// ── Localizador e estoque em tempo real ─────────────────────────────────────
export function LocatorPage() {
  const { t } = useTranslation();
  const readings = t('locator.readings') as unknown as { title: string; intro: string; columns: string[]; rows: string[][] };
  const when = (t('locator.when.items') as Info[]) ?? [];
  const conditions = (t('locator.conditions.items') as Info[]) ?? [];
  const faq = (t('locator.faq.items') as Qa[]) ?? [];

  return (
    <div className="sp">
      <PageHero
        eyebrow={t('locator.hero.eyebrow') as string}
        title={t('locator.hero.title') as string}
        lead={t('locator.hero.lead') as string}
      />

      <RealtimeStage />

      <section className="sp-section" aria-labelledby="lc-readings">
        <div className="wrap">
          <SectionHead id="lc-readings" title={readings.title} intro={readings.intro} />
          <ReadingsTimeline
            label={readings.title}
            lanes={readings.rows.map((r) => ({ name: r[0], note: r[2] }))}
          />
          <div className="vz-gap" />
          <DataTable columns={readings.columns} rows={readings.rows} label={readings.title} />
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="lc-when">
        <div className="wrap">
          <SectionHead id="lc-when" title={t('locator.when.title')} />
          <CardGrid items={when} icons={[Headset, MapPin, RefreshCw]} />
        </div>
      </section>

      <section className="sp-section" aria-labelledby="lc-cond">
        <div className="wrap">
          <SectionHead id="lc-cond" title={t('locator.conditions.title')} />
          <FlowChain
            nodes={conditions.map((c, i) => ({
              icon: [Network, FileCheck2, Clock][i] ?? Layers,
              title: c.title,
              sub: c.text,
              tone: i === 2 ? ('main' as const) : undefined,
            }))}
          />
          <p className="sp-more">
            <a href={PATHS.coverage}>{t('locator.conditions.coverageLink')} →</a>
            {' · '}
            <a href={PATHS.plans}>{t('locator.conditions.plansLink')} →</a>
          </p>
        </div>
      </section>

      <FAQ items={faq} title={t('locator.faq.title') as string} id="perguntas" />

      <PageCta
        title={t('locator.cta.title')}
        desc={t('locator.cta.desc')}
        button={t('locator.cta.button')}
        origin="localizador"
        secondary={{ label: t('menu.coverage') as string, href: PATHS.coverage }}
      />
    </div>
  );
}

// ── Funcionalidades ─────────────────────────────────────────────────────────
type Feature = {
  id: string; name: string; kind: string; problem: string; input: string; action: string;
  output: string; decision: string; limit: string; href: string;
};

export function FeaturesPage() {
  const { t } = useTranslation();
  const items = (t('features.items') as Feature[]) ?? [];
  const kinds = (t('features.kinds') as unknown as Record<string, string>) ?? {};
  const flow = (t('features.flow') as unknown as Record<string, string>) ?? {};
  const [active, setActive] = useState('');

  useEffect(() => {
    const fromHash = window.location.hash.replace('#', '');
    setActive(items.some((i) => i.id === fromHash) ? fromHash : items[0]?.id ?? '');
    // roda uma vez, quando a lista já existe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  const select = (id: string) => {
    setActive(id);
    try { window.history.replaceState(null, '', `#${id}`); } catch { /* sem histórico */ }
  };

  const current = items.find((i) => i.id === active) ?? items[0];
  const rows: { key: string; label: string; value: string; limit?: boolean }[] = current
    ? [
        { key: 'problem', label: flow.problem, value: current.problem },
        { key: 'input', label: flow.input, value: current.input },
        { key: 'action', label: flow.action, value: current.action },
        { key: 'output', label: flow.output, value: current.output },
        { key: 'decision', label: flow.decision, value: current.decision },
        { key: 'limit', label: flow.limit, value: current.limit, limit: true },
      ]
    : [];

  return (
    <div className="sp">
      <PageHero
        eyebrow={t('features.hero.eyebrow') as string}
        title={t('features.hero.title') as string}
        lead={t('features.hero.lead') as string}
      />

      <section className="sp-section" aria-label={t('features.listLabel') as string}>
        <div className="wrap">
          <p className="ft-kinds">{t('features.kindsNote')}</p>
          <div className="ft">
            <ul className="ft-list" role="tablist" aria-label={t('features.listLabel') as string} aria-orientation="vertical">
              {items.map((i) => (
                <li key={i.id} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id={`ft-tab-${i.id}`}
                    className="ft-tab"
                    aria-selected={current?.id === i.id}
                    aria-controls="ft-panel"
                    onClick={() => select(i.id)}
                  >
                    <span>{i.name}</span>
                    <span className="ft-kind">{kinds[i.kind] ?? i.kind}</span>
                  </button>
                </li>
              ))}
            </ul>

            {current && (
              <div id="ft-panel" className="ft-panel" role="tabpanel" aria-labelledby={`ft-tab-${current.id}`} tabIndex={0}>
                <span className="ft-kind">{kinds[current.kind] ?? current.kind}</span>
                <h2>{current.name}</h2>
                <ul className="ft-flow">
                  {rows.map((r) => (
                    <li key={r.key} className={r.limit ? 'is-limit' : ''}>
                      <span className="ft-label">{r.label}</span>
                      <p>{r.value}</p>
                    </li>
                  ))}
                </ul>
                <p className="sp-more"><a href={current.href}>{flow.more} →</a></p>
                <p className="ft-sim">{t('features.sim')}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <PageCta
        title={t('features.cta.title')}
        desc={t('features.cta.desc')}
        button={t('features.cta.button')}
        origin="funcionalidades"
        secondary={{ label: t('menu.locator') as string, href: PATHS.locator }}
      />
    </div>
  );
}

// ── Integrações e API ───────────────────────────────────────────────────────
type Modality = { id: string; name: string; text: string; know: string[]; href?: string; hrefLabel?: string };
type Question = { label: string; text: string };

export function IntegrationsPage() {
  const { t } = useTranslation();
  const steps = (t('integrations.flow.steps') as Info[]) ?? [];
  const dinn = t('integrations.flow.dinn') as unknown as { title: string; items: string[] };
  const client = t('integrations.flow.client') as unknown as { title: string; items: string[] };
  const modalities = (t('integrations.modalities.items') as Modality[]) ?? [];
  const questions = (t('integrations.questions.items') as Question[]) ?? [];
  const faq = (t('integrations.faq.items') as Qa[]) ?? [];

  return (
    <div className="sp">
      <PageHero
        eyebrow={t('integrations.hero.eyebrow') as string}
        title={t('integrations.hero.title') as string}
        lead={t('integrations.hero.lead') as string}
      />

      <section className="sp-section" aria-labelledby="in-flow">
        <div className="wrap">
          <SectionHead id="in-flow" title={t('integrations.flow.title')} />
          <FlowChain
            nodes={steps.map((s, i) => ({
              icon: [Database, Shuffle, Send, BarChart3][i] ?? Layers,
              title: s.title,
              sub: s.text,
              tone: i === 1 ? ('main' as const) : undefined,
            }))}
          />
          <div className="vz-gap" />
          <SplitPanels
            left={{ title: dinn.title, items: dinn.items, icon: Server }}
            right={{ title: client.title, items: client.items, icon: Building2 }}
          />
          <p className="sp-note">{t('integrations.flow.caution')}</p>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="in-mod">
        <div className="wrap">
          <SectionHead id="in-mod" title={t('integrations.modalities.title')} intro={t('integrations.modalities.intro')} />
          <HubDiagram
            center="Dinn"
            label={t('integrations.modalities.title') as string}
            nodes={modalities.map((m, i) => ({ icon: [Code2, FileText, Database, Plug, Workflow][i] ?? Layers, label: m.name }))}
          />
          <div className="vz-gap" />
          <div className="sp-grid is-three">
            {modalities.map((m, i) => (
              <article key={m.id} id={m.id} className="sp-card" style={{ scrollMarginTop: 96 }}>
                <IconTile icon={[Code2, FileText, Database, Plug, Workflow][i] ?? Layers} />
                <h3>{m.name}</h3>
                <p>{m.text}</p>
                <p className="sp-kicker" style={{ marginTop: 8, marginBottom: 0 }}>{t('integrations.modalities.knowLabel')}</p>
                <ul className="of-know">
                  {m.know.map((k) => <li key={k}>{k}</li>)}
                </ul>
                {m.href && <p className="sp-more" style={{ marginTop: 'auto' }}><a href={m.href}>{m.hrefLabel} →</a></p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" aria-labelledby="in-status">
        <div className="wrap sp-split">
          <div>
            <SectionHead id="in-status" title={t('integrations.status.title')} intro={t('integrations.status.text')} />
            <p className="sp-more"><a href={PATHS.plans}>{t('integrations.status.plansLink')} →</a></p>
          </div>
          <div>
            <p className="sp-kicker">{t('integrations.questions.title')}</p>
            <ul className="of-q" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
              {questions.map((q) => (
                <li key={q.label}>
                  <strong>{q.label}</strong>
                  <p>{q.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ items={faq} title={t('integrations.faq.title') as string} id="perguntas" />

      <PageCta
        title={t('integrations.cta.title')}
        desc={t('integrations.cta.desc')}
        button={t('integrations.cta.button')}
        origin="integracoes"
        secondary={{ label: t('menu.conecta') as string, href: PATHS.conecta }}
      />
    </div>
  );
}

// ── Planos e contratação ────────────────────────────────────────────────────
type AddonRow = { name: string; text: string; tiers: ('i' | 'c' | 'a')[] };
type Beyond = Info & { href: string; cta: string };

export function PlansPage() {
  const { t } = useTranslation();
  const tiers = (t('plans.tiers') as { name: string; text: string }[]) ?? [];
  const compare = t('plans.compare') as unknown as { title: string; intro: string; columns: string[]; rows: string[][]; note: string };
  const addons = t('plans.addons') as unknown as {
    title: string; intro: string; columns: string[]; labels: Record<'i' | 'c' | 'a', string>; legend: string; rows: AddonRow[];
  };
  const beyond = (t('plans.beyond.items') as Beyond[]) ?? [];
  const start = (t('plans.start.items') as Info[]) ?? [];
  const faq = (t('plans.faq.items') as Qa[]) ?? [];

  return (
    <div className="sp">
      <PageHero
        eyebrow={t('plans.hero.eyebrow') as string}
        title={t('plans.hero.title') as string}
        lead={t('plans.hero.lead') as string}
      />

      <section className="sp-section" aria-labelledby="pl-compare">
        <div className="wrap">
          <div className="of-tiers">
            {tiers.map((p) => (
              <div key={p.name} className="of-tier">
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <a className="sp-area-go" href={contactUrl(`plano-${p.name.toLowerCase()}`)}>
                  {t('contactMore.tierCta')}<ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
          <SectionHead id="pl-compare" title={compare.title} intro={compare.intro} />
          <DataTable columns={compare.columns} rows={compare.rows} label={compare.title} />
          <p className="of-legend">{compare.note}</p>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="pl-addons">
        <div className="wrap">
          <SectionHead id="pl-addons" title={addons.title} intro={addons.intro} />
          <div className="of-table-wrap">
            <table className="of-table" aria-label={addons.title}>
              <thead>
                <tr>{addons.columns.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
              </thead>
              <tbody>
                {addons.rows.map((r) => (
                  <tr key={r.name}>
                    <th scope="row">
                      {r.name}
                      <span className="of-sub">{r.text}</span>
                    </th>
                    {r.tiers.map((code, i) => (
                      <td key={i}><span className={`of-pill is-${code}`}>{addons.labels[code]}</span></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="of-legend">{addons.legend}</p>
        </div>
      </section>

      <section className="sp-section" aria-labelledby="pl-beyond">
        <div className="wrap">
          <SectionHead id="pl-beyond" title={t('plans.beyond.title')} intro={t('plans.beyond.intro')} />
          <div className="sp-grid is-two">
            {beyond.map((b) => (
              <a key={b.title} className="sp-card" href={b.href}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
                <span className="sp-area-go">{b.cta}<ArrowRight size={15} aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="pl-start">
        <div className="wrap">
          <SectionHead id="pl-start" title={t('plans.start.title')} />
          <CardGrid items={start} cols={2} />
        </div>
      </section>

      <FAQ items={faq} title={t('plans.faq.title') as string} id="perguntas" />

      <PageCta
        title={t('plans.cta.title')}
        desc={t('plans.cta.desc')}
        button={t('plans.cta.button')}
        origin="planos"
        secondary={{ label: t('menu.coverage') as string, href: PATHS.coverage }}
      />
    </div>
  );
}

// ── Cobertura ───────────────────────────────────────────────────────────────
type CoverageItem = { name: string; note?: string };
type CoverageGroup = { key: 'validated' | 'project' | 'study'; title: string; text: string };

export function CoveragePage() {
  const { t, lang } = useTranslation();
  const dims = (t('coverage.dims.items') as Info[]) ?? [];
  const nature = t('coverage.nature') as unknown as { title: string; intro: string; columns: string[]; rows: string[][] };
  const groups = (t('coverage.status.groups') as CoverageGroup[]) ?? [];
  const checks = (t('coverage.validate.items') as string[]) ?? [];
  const data = coverageData as unknown as { reviewedAt: string | null } & Record<string, CoverageItem[] | string | null>;
  const reviewed = data.reviewedAt
    ? new Date(data.reviewedAt).toLocaleDateString(lang === 'en' ? 'en-US' : lang === 'es' ? 'es-419' : 'pt-BR')
    : null;

  return (
    <div className="sp">
      <PageHero
        eyebrow={t('coverage.hero.eyebrow') as string}
        title={t('coverage.hero.title') as string}
        lead={t('coverage.hero.lead') as string}
      />

      <section className="sp-section" aria-labelledby="cv-dims">
        <div className="wrap">
          <SectionHead id="cv-dims" title={t('coverage.dims.title')} intro={t('coverage.dims.intro')} />
          <FlowChain
            nodes={dims.map((d, i) => ({
              icon: [Globe2, Network, Store, Package, Eye, CalendarClock][i] ?? Layers,
              title: d.title,
              tone: i === 4 ? ('main' as const) : undefined,
            }))}
          />
          <div className="vz-gap" />
          <CardGrid items={dims} />
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="cv-nature">
        <div className="wrap">
          <SectionHead id="cv-nature" title={nature.title} intro={nature.intro} />
          <ReadingsTimeline label={nature.title} lanes={nature.rows.map((r) => ({ name: r[0], note: r[2] }))} />
          <div className="vz-gap" />
          <DataTable columns={nature.columns} rows={nature.rows} label={nature.title} />
          <p className="sp-more"><a href={PATHS.locator}>{t('coverage.links.locator')} →</a></p>
        </div>
      </section>

      <section className="sp-section" aria-labelledby="cv-status">
        <div className="wrap">
          <SectionHead id="cv-status" title={t('coverage.status.title')} intro={t('coverage.status.intro')} />
          <div className="sp-grid is-three">
            {groups.map((g, gi) => {
              const list = (data[g.key] as CoverageItem[] | undefined) ?? [];
              return (
                <article key={g.key} className="sp-card">
                  <IconTile icon={[CheckCircle2, Briefcase, Search][gi] ?? Layers} tone={(['green', 'brand', 'amber'] as const)[gi]} />
                  <h3>{g.title}</h3>
                  <p>{g.text}</p>
                  {list.length > 0 ? (
                    <ul className="of-know">
                      {list.map((i) => <li key={i.name}>{i.name}{i.note ? ` · ${i.note}` : ''}</li>)}
                    </ul>
                  ) : (
                    <p className="of-status-note">{t('coverage.status.empty')}</p>
                  )}
                </article>
              );
            })}
          </div>
          {reviewed && <p className="sp-note">{t('coverage.status.reviewed')}: {reviewed}</p>}
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="cv-validate">
        <div className="wrap sp-split">
          <div>
            <SectionHead id="cv-validate" title={t('coverage.validate.title')} intro={t('coverage.validate.text')} />
            <a href={contactUrl('cobertura')} className="btn btn-primary btn-lg">
              {t('coverage.validate.button')}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="of-panel">
            <Checks items={checks} />
            <p className="sp-more">
              <a href={PATHS.plans}>{t('coverage.links.plans')} →</a>
              {' · '}
              <a href={PATHS.trust}>{t('coverage.links.trust')} →</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Pesquisas e projetos especiais ──────────────────────────────────────────
type ResearchCard = { tag: string; title: string; deliver: string };

export function ResearchPage() {
  const { t } = useTranslation();
  const cards = (t('research.cards.items') as ResearchCard[]) ?? [];
  const define = (t('research.define.items') as string[]) ?? [];
  const deliveries = (t('research.deliveries.items') as string[]) ?? [];
  const limits = (t('research.limits.items') as string[]) ?? [];

  return (
    <div className="sp">
      <PageHero
        eyebrow={t('research.hero.eyebrow') as string}
        title={t('research.hero.title') as string}
        lead={t('research.hero.lead') as string}
      />

      <section className="sp-section" aria-labelledby="rs-cards">
        <div className="wrap">
          <SectionHead id="rs-cards" title={t('research.cards.title')} />
          <div className="sp-grid is-two">
            {cards.map((c) => (
              <article key={c.tag} className="sp-card">
                <span className="sp-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p className="sp-not"><strong>{t('research.cards.deliverLabel')}:</strong> {c.deliver}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="rs-define">
        <div className="wrap sp-split">
          <div>
            <SectionHead id="rs-define" title={t('research.define.title')} />
            <ul className="of-chips">
              {define.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
          <div>
            <SectionHead title={t('research.deliveries.title')} intro={t('research.deliveries.intro')} />
            <ul className="of-chips">
              {deliveries.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="sp-section" aria-labelledby="rs-limits">
        <div className="wrap">
          <SectionHead id="rs-limits" title={t('research.limits.title')} />
          <ul className="sp-limits" style={{ maxWidth: 820 }}>
            {limits.map((l) => <li key={l}>{l}</li>)}
          </ul>
        </div>
      </section>

      <PageCta
        title={t('research.cta.title')}
        desc={t('research.cta.desc')}
        button={t('research.cta.button')}
        origin="pesquisas"
        secondary={{ label: t('menu.conecta') as string, href: PATHS.conecta }}
      />
    </div>
  );
}

// ── Comparativos ────────────────────────────────────────────────────────────
export function ComparePage() {
  const { t } = useTranslation();
  const table = t('compare.table') as unknown as { columns: string[]; rows: string[][] };
  const people = (t('compare.people.items') as Info[]) ?? [];

  return (
    <div className="sp">
      <PageHero
        eyebrow={t('compare.hero.eyebrow') as string}
        title={t('compare.hero.title') as string}
        lead={t('compare.hero.lead') as string}
      />

      <section className="sp-section" aria-label={t('compare.hero.eyebrow') as string}>
        <div className="wrap">
          <DataTable columns={table.columns} rows={table.rows} label={t('compare.hero.eyebrow') as string} />
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="cp-value">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <SectionHead id="cp-value" title={t('compare.value.title')} intro={t('compare.value.text')} />
        </div>
      </section>

      <section className="sp-section" aria-labelledby="cp-people">
        <div className="wrap">
          <SectionHead id="cp-people" title={t('compare.people.title')} intro={t('compare.people.text')} />
          <CardGrid items={people} cols={2} />
        </div>
      </section>

      <PageCta
        title={t('compare.cta.title')}
        desc={t('compare.cta.desc')}
        button={t('compare.cta.button')}
        origin="comparativos"
      />
    </div>
  );
}

// ── Sobre a Dinn ────────────────────────────────────────────────────────────
type Place = { city: string; country: string; text: string };
type ContactItem = Info & { href: string; cta: string };

export function AboutPage() {
  const { t } = useTranslation();
  const places = (t('about.where.items') as Place[]) ?? [];
  const company = (t('about.company.rows') as string[][]) ?? [];
  const contacts = (t('about.contact.items') as ContactItem[]) ?? [];
  const stages = (t('inside.stages') as { name: string; title: string }[]) ?? [];
  const stats = t('aboutMore.stats') as unknown as { title: string; items: { value: number; suffix?: string; label: string }[] };
  const principles = t('aboutMore.principles') as unknown as { title: string; intro: string; items: Info[] };
  const chips = (t('aboutMore.trustBand.chips') as string[]) ?? [];
  const map = t('aboutMore.map') as unknown as { aria: string; brazil: string; spain: string; label: string };
  const companyIcons = [Building2, FileText, MapPin];
  const contactIcons = [Send, Headset, FileCheck2];

  return (
    <div className="sp">
      <header className="sp-hero tr-hero">
        <div className="wrap tr-hero-grid">
          <div>
            <p className="sp-eyebrow">{t('about.hero.eyebrow')}</p>
            <h1 className="sp-title"><Rich text={t('about.hero.title') as string} /></h1>
            <p className="sp-lead">{t('about.hero.lead')}</p>
          </div>
          <CityLink
            from={{ city: places[0]?.city ?? 'Joinville', country: map.brazil }}
            to={{ city: places[1]?.city ?? 'Valência', country: map.spain }}
            label={map.label}
            aria={map.aria}
          />
        </div>
      </header>

      <section className="sp-section" aria-labelledby="ab-what">
        <div className="wrap">
          <SectionHead id="ab-what" title={t('about.what.title')} intro={t('about.what.text')} />
          <FlowChain
            title={t('aboutMore.how.title') as string}
            nodes={stages.map((s, i) => ({
              icon: [Eye, FileCheck2, Search, Layers, Send, RefreshCw][i] ?? Layers,
              title: s.name,
              sub: s.title,
              tone: i === 3 ? ('main' as const) : undefined,
            }))}
          />
          <p className="sp-note">{t('aboutMore.how.intro')}</p>
        </div>
      </section>

      <section className="sp-section is-alt" aria-label={stats.title}>
        <div className="wrap">
          <StatStrip title={stats.title} items={stats.items} />
        </div>
      </section>

      <section className="sp-section" aria-labelledby="ab-principles">
        <div className="wrap">
          <SectionHead id="ab-principles" title={principles.title} intro={principles.intro} />
          <CardGrid items={principles.items} icons={[Eye, Layers, FileCheck2, Clock]} />
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="ab-where">
        <div className="wrap">
          <SectionHead id="ab-where" title={t('about.where.title')} />
          <div className="sp-grid is-two">
            {places.map((p, i) => (
              <article key={p.city} className="sp-card ab-city">
                <IconTile icon={MapPin} tone={i === 0 ? 'brand' : 'green'} />
                <h3>{p.city}</h3>
                <p className="sp-meta">{p.country}</p>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" aria-labelledby="ab-company">
        <div className="wrap" style={{ maxWidth: 980 }}>
          <SectionHead id="ab-company" title={t('about.company.title')} />
          <ul className="ab-facts">
            {company.map(([label, value], i) => {
              const Icon = companyIcons[i] ?? Building2;
              return (
                <li key={label}>
                  <IconTile icon={Icon} />
                  <div>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="ab-contact">
        <div className="wrap">
          <SectionHead id="ab-contact" title={t('about.contact.title')} />
          <div className="sp-grid is-three">
            {contacts.map((c, i) => (
              <a key={c.title} className="sp-card" href={c.href}>
                <IconTile icon={contactIcons[i] ?? Send} />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="sp-area-go">{c.cta}<ArrowRight size={15} aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="ab-trust" aria-labelledby="ab-trust">
        <div className="wrap ab-trust-inner">
          <div>
            <h2 id="ab-trust">{t('about.trust.title')}</h2>
            <p>{t('about.trust.text')}</p>
            <a className="btn btn-on-dark btn-lg" href={PATHS.trust}>{t('about.trust.cta')}<ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <ul className="ab-trust-chips" aria-hidden="true">
            {chips.map((c, i) => <li key={c} style={{ ['--i' as string]: i }}>{c}</li>)}
          </ul>
        </div>
      </section>

      <PageCta
        title={t('pageCta.title')}
        desc={t('pageCta.desc')}
        button={t('pageCta.button')}
        origin="sobre"
      />
    </div>
  );
}

// ── Clientes e casos ────────────────────────────────────────────────────────
type Logo = { name: string; src: string; width?: number; height?: number };

export function ClientsPage({ logos = [] }: { logos?: Logo[] }) {
  const { t, lang } = useTranslation();
  const l = (lang === 'en' || lang === 'es' ? lang : 'pt') as 'pt' | 'en' | 'es';
  const pick = (loc?: Partial<Record<'pt' | 'en' | 'es', string>>) => (loc ? loc[l] || loc.pt || '' : '');
  const featured = publishedCases.slice(0, 3);

  return (
    <div className="sp">
      {/* Primeira dobra no gradiente escuro do site; logos em branco sobre ele. */}
      <header className="cl-hero">
        <div className="cl-glow" aria-hidden="true" />
        <div className="wrap cl-inner">
          <p className="sp-eyebrow">{t('clients.hero.eyebrow')}</p>
          <h1 className="sp-title"><Rich text={t('clients.hero.title') as string} /></h1>
          <p className="sp-lead">{t('clients.hero.lead')}</p>
          <div className="cl-logos" role="list" aria-label={t('clients.logos.title') as string}>
            {logos.map((c) => (
              <img key={c.name} role="listitem" src={c.src} alt={c.name} width={c.width} height={c.height} loading="eager" decoding="async" />
            ))}
          </div>
          <p className="cl-note">{t('clients.logos.note')}</p>
        </div>
      </header>

      <section className="sp-section is-alt" aria-labelledby="cl-cases">
        <div className="wrap">
          <SectionHead id="cl-cases" title={t('clients.cases.title')} intro={t('clients.cases.intro')} />
          <div className="sp-grid is-three">
            {featured.map((c) => (
              <a key={c.slug} className="sp-card" href={`${PATHS.cases}/${c.slug}`}>
                <h3>{pick(c.title)}</h3>
                <p>{pick(c.summary)}</p>
                <span className="sp-meta">{pick(c.role)}</span>
                <span className="sp-area-go">{t('cases.gallery.open')}<ArrowRight size={15} aria-hidden="true" /></span>
              </a>
            ))}
          </div>
          <p className="sp-more"><a href={PATHS.cases}>{t('clients.cases.all')} →</a></p>
        </div>
      </section>

      <TestimonialsSection />

      <PageCta
        title={t('pageCta.title')}
        desc={t('pageCta.desc')}
        button={t('pageCta.button')}
        origin="clientes"
      />
    </div>
  );
}
