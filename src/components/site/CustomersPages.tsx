import { useEffect } from 'react';
import { ArrowRight, Quote, UserRound } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { contactUrl } from '@/lib/links';
import { PATHS } from '@/lib/site-map';
import { brandOf } from '@/lib/client-brand';
import { aggregateFor, customerBySlug, type Block, type Customer, type Lang } from '@/data/customers';
import { ClientCases } from './ClientCases';
import { LabsRanking } from './LabsRanking';
import type { Lab, LogoCredit } from '@/lib/labs-types';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { CaseCard, publishedCases } from './CasesPages';
import { VizGroup } from './CaseViz';
import { VoicesRail, type Voice } from './VoicesRail';
import { ClosingCard, H2Head } from './PageShell';

// /clientes (lista) e /clientes/<slug> (página de cada cliente), no Design System v2.
// O conteúdo de cada cliente vive em src/data/customers.ts. Os idiomas EN e ES usam
// o texto em português por enquanto; os rótulos da interface já são traduzidos.

const brandStyle = (slug: string) => {
  const b = brandOf(slug);
  return { ['--g' as string]: `url(/gradients/${b.g}.avif)`, ['--f' as string]: b.filter };
};

// ── Lista de clientes ──────────────────────────────────────────────────────
export function CustomersIndex({ labs, credits }: { labs: Lab[]; credits: LogoCredit[] }) {
  const { t, lang } = useTranslation();
  const agg = aggregateFor(lang as Lang);
  // Depoimentos reais, com nome e foto: são os únicos lugares do site com nome de cliente (há consentimento).
  const voices: Voice[] = [0, 1, 2, 3].map((i) => ({
    text: t(`testimonials.items.${i}.quote`) as string,
    role: t(`testimonials.items.${i}.designation`) as string,
    name: t(`testimonials.items.${i}.name`) as string,
    photo: t(`testimonials.items.${i}.src`) as string,
    approved: true,
  }));
  const metaTitle = t('clients.meta.title') as string;
  useEffect(() => {
    document.title = metaTitle;
  }, [metaTitle]);

  return (
    <div className="h2 cu3">
      <header className="h2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title"><Rich text={t('clients.page.hero_title') as string} /></h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('clients.page.hero_lead')}</p>
              <div className="h2-actions">
                <a className="btn btn-primary" href={contactUrl('clientes')}>{t('clients.page.cta')}</a>
                <a className="h2-link" href="#cu3-opens">{agg.opensTitle} <ArrowRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Uso real do portal, somado e sem nome de laboratório, produto ou rede */}
      <section className="h2-section cu3-agg is-alt" aria-labelledby="cu3-usage">
        <div className="h2-wrap">
          <div className="h2-head">
            <div>
              <h2 id="cu3-usage" className="h2-title">{agg.usage.title}</h2>
              <p className="h2-sub">{agg.usage.lead}</p>
            </div>
          </div>
          <ul className="cu3-metrics">
            {agg.usage.stats.map((m) => (
              <li key={m.value + m.label}><strong>{m.value}</strong><span>{m.label}</span></li>
            ))}
          </ul>
          <p className="cu3-agg-note">{agg.usage.note}</p>
          <div className="cu3-agg-viz"><VizGroup items={agg.usage.viz} /></div>
        </div>
      </section>

      {/* Impacto somado: números de uso do Dinn, sem dizer de qual laboratório */}
      <section className="h2-section cu3-agg" aria-labelledby="cu3-agg-title">
        <div className="h2-wrap">
          <div className="h2-head">
            <div>
              <h2 id="cu3-agg-title" className="h2-title">{agg.chartsTitle}</h2>
              <p className="h2-sub">{agg.chartsLead}</p>
            </div>
          </div>
          <ul className="cu3-metrics">
            {agg.stats.map((m) => (
              <li key={m.value + m.label}><strong>{m.value}</strong><span>{m.label}</span></li>
            ))}
          </ul>
          <p className="cu3-agg-note">{agg.statsNote}</p>
          <div className="cu3-agg-viz"><VizGroup items={agg.viz} /></div>
        </div>
      </section>

      <section className="h2-section cu3-agg is-alt" aria-labelledby="cu3-teams">
        <div className="h2-wrap">
          <div className="h2-head">
            <div>
              <h2 id="cu3-teams" className="h2-title">{agg.teamsTitle}</h2>
              <p className="h2-sub">{agg.teamsLead}</p>
            </div>
          </div>
          <ul className="cu3-teams">
            {agg.teams.map((x) => (
              <li key={x.team}>
                <h3>{x.team}</h3>
                <p>{x.what}</p>
                <strong>{x.stat}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="h2-section cu3-agg" aria-labelledby="cu3-actions">
        <div className="h2-wrap">
          <div className="h2-head">
            <div>
              <h2 id="cu3-actions" className="h2-title">{agg.actionsTitle}</h2>
              <p className="h2-sub">{agg.actionsLead}</p>
            </div>
          </div>
          <ul className="cu3-actions">
            {agg.actions.map((x) => (
              <li key={x.title}>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
                {x.stat && <strong>{x.stat}</strong>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <VoicesRail id="cu3-voices" title={t('testimonials.title') as string} voices={voices} />

      <LabsRanking labs={labs} credits={credits} />

      <ClientCases title={agg.opensTitle} />

      <section className="h2-section cu3-cases" aria-labelledby="cu3-cases">
        <div className="h2-wrap">
          <div className="h2-head">
            <div>
              <h2 id="cu3-cases" className="h2-title">{t('clients.page.cases_title')}</h2>
              <p className="h2-sub">{t('clients.page.cases_intro')}</p>
            </div>
            <a className="h2-link" href={PATHS.cases}>{t('clients.cases.all')} <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
          <ul className="cs3-grid">
            {publishedCases.slice(0, 3).map((c) => (
              <li key={c.slug}><CaseCard c={c} /></li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCard
        title={t('pageCta.title') as string}
        desc={t('pageCta.desc') as string}
        button={t('pageCta.button') as string}
        origin="clientes"
        gradient="g10"
      />
      <ChatWidget2 />
    </div>
  );
}

// ── Página de um cliente ───────────────────────────────────────────────────
function BlockBody({ b }: { b: Block }) {
  return (
    <div className="cu3-block">
      {b.title && <h3>{b.title}</h3>}
      {b.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
      {b.bullets && <ul className="cu3-bullets">{b.bullets.map((x, i) => <li key={i}>{x}</li>)}</ul>}
      {b.viz && <VizGroup items={b.viz} />}
      {b.tables?.map((tb, i) => (
        <div key={i} className="cu3-table-wrap">
          {tb.title && <p className="cu3-table-title">{tb.title}</p>}
          <table className="cu3-table">
            <thead><tr>{tb.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>
              {tb.rows.map((r, j) => (
                <tr key={j}>{r.map((cell, k) => (k === 0 ? <th key={k} scope="row">{cell}</th> : <td key={k}>{cell}</td>))}</tr>
              ))}
            </tbody>
          </table>
          {tb.note && <p className="cu3-note">{tb.note}</p>}
        </div>
      ))}
      {b.quote?.approved && <QuoteCard q={b.quote} />}
      {b.quotes?.filter((q) => q.approved).map((q, i) => <QuoteCard key={i} q={q} />)}
      {b.note && <p className="cu3-note">{b.note}</p>}
    </div>
  );
}

export function QuoteCard({ q, brand }: { q: { text: string; role: string }; brand?: string }) {
  return (
    <figure className={`cu3-quote ${brand ? 'is-brand' : ''}`} style={brand ? brandStyle(brand) : undefined}>
      <Quote size={26} aria-hidden="true" strokeWidth={1.6} />
      <blockquote>{q.text}</blockquote>
      <figcaption>
        <span className="cu3-avatar" aria-hidden="true"><UserRound size={18} strokeWidth={1.8} /></span>
        <span><strong>{q.role}</strong></span>
      </figcaption>
    </figure>
  );
}

function Section({ title, id, blocks, alt }: { title: string; id: string; blocks: Block[]; alt: boolean }) {
  return (
    <section className={`h2-section cu3-sec ${alt ? 'is-alt' : ''}`} aria-labelledby={id}>
      <div className="h2-wrap cu3-sec-grid">
        <h2 id={id} className="h2-title cu3-sec-title">{title}</h2>
        <div className="cu3-sec-body">{blocks.map((b, i) => <BlockBody key={i} b={b} />)}</div>
      </div>
    </section>
  );
}

export function CustomerDetail({ slug }: { slug: string }) {
  const { t, lang } = useTranslation();
  const c: Customer | undefined = customerBySlug(slug, lang as Lang);
  // O título da aba acompanha o idioma (o HTML do servidor sai em português).
  useEffect(() => {
    if (c) document.title = `${c.title} | Dinn`;
  }, [c?.title]);
  if (!c) return null;
  const quote = c.quote?.approved ? c.quote : undefined;
  const facts: [string, string][] = [
    [t('clients.page.company') as string, c.about],
    [t('clients.page.sector') as string, c.sector],
    [t('clients.page.hq') as string, c.hq],
    [t('clients.page.usecase') as string, c.useCase],
  ];

  return (
    <div className="h2 cu3-page">
      <header className="h2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title cu3-title">{c.title}</h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{c.summary}</p>
              <div className="h2-actions">
                <a className="btn btn-primary" href={contactUrl(`cliente-${c.slug}`)}>{t('clients.page.cta')}</a>
                <a className="h2-link" href={PATHS.customers}>{t('clients.page.back')} <ArrowRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="h2-media cu3-media" style={{ ...brandStyle(c.slug), backgroundImage: 'none' }}>
            <span className="cu3-media-bg" aria-hidden="true" />
            <span className="h2-cust-shade" aria-hidden="true" />
            <span className="cu3-media-label">{c.name}</span>
          </div>
        </div>
      </header>

      {/* Em resumo: dados do cliente e a frase principal */}
      <section className="h2-section cu3-glance" aria-labelledby="cu3-glance">
        <div className="h2-wrap">
          <div className="cu3-glance-grid">
            <div>
              <h2 id="cu3-glance" className="h2-title">{t('clients.page.glance')}</h2>
              <dl className="cu3-facts">
                {facts.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
            <div className="cu3-intro">
              {c.intro.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <h3 className="cu3-impact-title">{t('clients.page.impact')}</h3>
          <ul className="cu3-metrics">
            {c.metrics.map((m) => (
              <li key={m.value + m.label}><strong>{m.value}</strong><span>{m.label}</span></li>
            ))}
          </ul>
          {quote && <QuoteCard q={quote} brand={c.slug} />}
        </div>
      </section>

      <Section id="cu3-problem" title={t('clients.page.problem') as string} blocks={[c.problem]} alt />
      <Section id="cu3-solution" title={t('clients.page.solution') as string} blocks={[c.solution]} alt={false} />
      <Section id="cu3-stories" title={t('clients.page.story') as string} blocks={c.stories} alt />
      <Section id="cu3-results" title={t('clients.page.results') as string} blocks={c.results} alt={false} />
      <Section id="cu3-next" title={c.next.title} blocks={[{ ...c.next, title: '' }]} alt />

      <ClosingCard
        title={t('pageCta.title') as string}
        desc={t('pageCta.desc') as string}
        button={t('clients.page.cta') as string}
        origin={`cliente-${c.slug}`}
        gradient="g10"
        secondary={{ label: t('clients.page.back') as string, href: PATHS.customers }}
      />

      <ClientCases exclude={slug} title={t('clients.page.more') as string} />
      <ChatWidget2 />
    </div>
  );
}
