import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { contactUrl } from '@/lib/links';
import { PATHS } from '@/lib/site-map';
import FAQ from '@/components/FAQ';
import { PageCta, SectionHead } from '../PageShell';

// Página do produto Dinn Conecta. Parte da prévia narrativa (dinn-data-preview):
// abertura, dor, como funciona, contexto para IA, aplicações, responsabilidades
// e perguntas. Conecta é a camada que reúne, organiza e atualiza os dados; MCP
// é uma interface de consulta. Os exemplos usam dados fictícios, rotulados.

type NameSub = { name: string; sub: string };
type Info = { title: string; text: string };
type Pain = { n: string; title: string; text: string };
type AppItem = {
  id: string; tab: string; area: string; kind: 'table' | 'ask'; title: string; text: string;
  tableTitle?: string; columns?: string[]; rows?: string[][];
  inputs?: string[]; question?: string; answer?: string;
  next: string; basis: string; caveat: string;
};
type Role = { label: string; title: string; text: string; items: string[] };

function Arrow() {
  return <span className="cn-arrow" aria-hidden="true" />;
}

export function ConectaPage() {
  const { t } = useTranslation();
  const flow = t('conecta.flow') as unknown as {
    sourcesLabel: string; sources: NameSub[]; hubLabel: string; hub: string; hubSub: string; destinations: NameSub[]; note: string;
  };
  const pain = t('conecta.pain') as unknown as { eyebrow: string; title: string; intro: string; items: Pain[]; closing: string };
  const how = t('conecta.how') as unknown as { eyebrow: string; title: string; steps: Info[]; identities: string[] };
  const ai = t('conecta.ai') as unknown as {
    eyebrow: string; title: string; text: string; layers: { label: string; text: string }[];
    destinationsTitle: string; destinations: string[]; destinationsNote: string;
  };
  const apps = t('conecta.apps') as unknown as {
    eyebrow: string; title: string; intro: string; fictional: string; nextLabel: string; basisLabel: string; askLabel: string; items: AppItem[];
  };
  const roles = t('conecta.roles') as unknown as { eyebrow: string; title: string; text: string; yours: Role; dinn: Role; note: string };
  const start = t('conecta.start') as unknown as { eyebrow: string; title: string; steps: Info[]; note: string; plansLink: string };
  const mcp = t('conecta.mcp') as unknown as { title: string; text: string; rows: { label: string; text: string }[]; not: string; link: string };
  const faq = (t('conecta.faq.items') as { question: string; answer: string }[]) ?? [];
  const nav = t('conecta.nav') as unknown as { how: string; apps: string; roles: string; faq: string };

  const [appIdx, setAppIdx] = useState(0);
  const app = apps.items?.[appIdx];

  return (
    <div className="sp">
      <header className="cn-hero">
        <div className="wrap">
          <p className="sp-eyebrow">{t('conecta.hero.eyebrow')}</p>
          <h1 className="sp-title"><Rich text={t('conecta.hero.title') as string} /></h1>
          <p className="sp-lead">{t('conecta.hero.lead')}</p>
          <div className="cn-actions">
            <a href="#como-funciona" className="btn btn-primary btn-lg">{t('conecta.hero.cta')}</a>
            <a href={contactUrl('conecta')} className="btn btn-on-dark btn-lg">{t('conecta.hero.cta2')}</a>
          </div>
        </div>
      </header>

      <nav className="cn-subnav" aria-label="Dinn Conecta">
        <div className="wrap">
          <ul>
            <li><a href="#como-funciona">{nav.how}</a></li>
            <li><a href="#aplicacoes">{nav.apps}</a></li>
            <li><a href="#responsabilidades">{nav.roles}</a></li>
            <li><a href="#perguntas">{nav.faq}</a></li>
          </ul>
        </div>
      </nav>

      <section className="sp-section" aria-label={flow.hub}>
        <div className="wrap">
          <div className="cn-flow">
            <div>
              <p className="cn-label">{flow.sourcesLabel}</p>
              <ul className="cn-col">
                {flow.sources.map((s) => <li key={s.name}><strong>{s.name}</strong><span>{s.sub}</span></li>)}
              </ul>
            </div>
            <Arrow />
            <div className="cn-hub">
              <small>{flow.hubLabel}</small>
              <strong>{flow.hub}</strong>
              <span>{flow.hubSub}</span>
            </div>
            <Arrow />
            <div>
              <p className="cn-label">{ai.layers?.[2]?.label}</p>
              <ul className="cn-col">
                {flow.destinations.map((s) => <li key={s.name}><strong>{s.name}</strong><span>{s.sub}</span></li>)}
              </ul>
            </div>
          </div>
          <p className="cn-note">{flow.note}</p>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="cn-pain">
        <div className="wrap">
          <p className="sp-kicker">{pain.eyebrow}</p>
          <SectionHead id="cn-pain" title={pain.title} intro={pain.intro} />
          <div className="cn-pain">
            {pain.items.map((p) => (
              <article key={p.n}>
                <span className="cn-n">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
          <p className="cn-closing">{pain.closing}</p>
        </div>
      </section>

      <section id="como-funciona" className="sp-section" aria-labelledby="cn-how" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <p className="sp-kicker">{how.eyebrow}</p>
          <h2 id="cn-how" className="sp-quote" style={{ maxWidth: '20em' }}><Rich text={how.title} /></h2>
          <ol className="of-flow" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', marginTop: 24 }}>
            {how.steps.map((s, i) => (
              <li key={s.title}>
                <span className="sp-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <ul className="of-chips" style={{ marginTop: 20 }}>
            {how.identities.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="cn-ai">
        <div className="wrap sp-split">
          <div>
            <p className="sp-kicker">{ai.eyebrow}</p>
            <h2 id="cn-ai" className="sp-quote"><Rich text={ai.title} /></h2>
            <p className="sp-body" style={{ marginTop: 16 }}>{ai.text}</p>
          </div>
          <div>
            <ul className="cn-layers">
              {ai.layers.map((l, i) => (
                <li key={l.label} className={i === 1 ? 'is-dinn' : ''}>
                  <strong>{l.label}</strong>
                  <span>{l.text}</span>
                </li>
              ))}
            </ul>
            <p className="sp-kicker" style={{ marginTop: 22 }}>{ai.destinationsTitle}</p>
            <ul className="of-chips">
              {ai.destinations.map((d) => <li key={d}>{d}</li>)}
            </ul>
            <p className="sp-note">{ai.destinationsNote}</p>
          </div>
        </div>
      </section>

      <section id="aplicacoes" className="sp-section" aria-labelledby="cn-apps" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <p className="sp-kicker">{apps.eyebrow}</p>
          <h2 id="cn-apps" className="sp-quote" style={{ maxWidth: '20em' }}><Rich text={apps.title} /></h2>
          <p className="sp-body" style={{ margin: '12px 0 20px' }}>{apps.intro}</p>

          <div className="cn-apps-tabs" role="tablist" aria-label={apps.eyebrow}>
            {apps.items.map((a, i) => (
              <button
                key={a.id}
                type="button"
                role="tab"
                id={`cn-tab-${a.id}`}
                aria-selected={i === appIdx}
                aria-controls="cn-app-panel"
                onClick={() => setAppIdx(i)}
              >
                {a.tab}
              </button>
            ))}
          </div>

          {app && (
            <div id="cn-app-panel" className="cn-app" role="tabpanel" aria-labelledby={`cn-tab-${app.id}`}>
              <div>
                <p className="sp-kicker">{app.area}</p>
                <h3>{app.title}</h3>
                <p className="cn-app-text">{app.text}</p>
              </div>
              <div>
                <div className="cn-mock">
                  {app.kind === 'table' ? (
                    <>
                      <p className="cn-mock-title">{app.tableTitle}</p>
                      <table>
                        <thead>
                          <tr>{app.columns?.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
                        </thead>
                        <tbody>
                          {app.rows?.map((r) => (
                            <tr key={r[0]}>{r.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>))}</tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  ) : (
                    <div className="cn-ask">
                      <p className="cn-mock-title">{app.inputs?.join(' · ')}</p>
                      <p className="sp-meta">{apps.askLabel}</p>
                      <p className="cn-ask-q">“{app.question}”</p>
                      <p className="cn-ask-a">{app.answer}</p>
                    </div>
                  )}
                  {app.next && (
                    <p className="cn-next"><strong>{apps.nextLabel}</strong>{app.next}</p>
                  )}
                  {app.basis && <p className="cn-basis">{apps.basisLabel}: {app.basis}</p>}
                  {app.caveat && <p className="cn-basis">{app.caveat}</p>}
                </div>
                <p className="sp-note">{apps.fictional}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="responsabilidades" className="sp-section is-alt" aria-labelledby="cn-roles" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <p className="sp-kicker">{roles.eyebrow}</p>
          <h2 id="cn-roles" className="sp-quote" style={{ maxWidth: '22em' }}><Rich text={roles.title} /></h2>
          <p className="sp-body" style={{ margin: '12px 0 24px' }}>{roles.text}</p>
          <div className="cn-roles">
            {[roles.yours, roles.dinn].map((r, i) => (
              <article key={r.label} className={`cn-role ${i === 1 ? 'is-dinn' : ''}`}>
                <span className="sp-tag">{r.label}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <ul className="sp-checks">
                  {r.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="sp-note">{roles.note}</p>
        </div>
      </section>

      <section className="sp-section" aria-labelledby="cn-start">
        <div className="wrap">
          <p className="sp-kicker">{start.eyebrow}</p>
          <SectionHead id="cn-start" title={start.title} />
          <ol className="cn-start">
            {start.steps.map((s, i) => (
              <li key={s.title}>
                <span className="sp-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="sp-note">{start.note} <a href={PATHS.plans}>{start.plansLink} →</a></p>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="cn-mcp">
        <div className="wrap">
          <SectionHead id="cn-mcp" title={mcp.title} intro={mcp.text} />
          <div className="cn-vs">
            {mcp.rows.map((r) => (
              <article key={r.label}>
                <h3>{r.label}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
          <p className="sp-note">{mcp.not}</p>
          <p className="sp-more"><a href={`${PATHS.integrations}#mcp`}>{mcp.link} →</a></p>
        </div>
      </section>

      <FAQ items={faq} title={t('conecta.faq.title') as string} id="perguntas" />

      <PageCta
        title={t('conecta.cta.title')}
        desc={t('conecta.cta.desc')}
        button={t('conecta.cta.button')}
        origin="conecta"
        secondary={{ label: t('conecta.cta.secondary') as string, href: '#aplicacoes' }}
      />
    </div>
  );
}
