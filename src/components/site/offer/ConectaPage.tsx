import { Fragment, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, Check, ChevronDown, Link2, MessageCircle, Store } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { contactUrl } from '@/lib/links';
import { IlConnect } from '@/components/illustrations';
import { ConnectionSurface } from './ConnectionMap';
import '@/styles/conecta-page.css';

// Página do produto Dinn Conecta. Estrutura e estilo são os da prévia aprovada
// (dinn-data-preview.vercel.app, prévia 08): abertura, mapa de conexão, dor,
// contexto para IA, aplicações, responsabilidades, perguntas e fechamento.
// Só o menu e o rodapé são os do site. Textos em conecta.* do dicionário.

type Layer = { label: string; text: string };
type AppItem = {
  id: string; tab: string; area: string; kind: 'table' | 'launch' | 'ask'; title: string; text: string;
  flow: string[]; sheet?: string; meta?: string[]; columns?: string[]; rows?: string[][];
  next?: string; source?: string; question?: string; answer?: string;
};

/** "linha 1\nlinha 2" vira linha 1<br>linha 2 (a quebra some em telas estreitas). */
function Lines({ text }: { text: string }) {
  const parts = String(text ?? '').split('\n');
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <br className="desktop-break" />}
          {p}
        </Fragment>
      ))}
    </>
  );
}

export function ConectaPage() {
  const { t } = useTranslation();
  const root = useRef<HTMLDivElement>(null);
  const [appIdx, setAppIdx] = useState(0);

  // Cada cena (data-scene) ganha data-entered quando entra na tela: é o que
  // dispara os sinais correndo pelas linhas do mapa.
  useEffect(() => {
    const scenes = Array.from(root.current?.querySelectorAll<HTMLElement>('[data-scene]') ?? []);
    if (!('IntersectionObserver' in window)) {
      scenes.forEach((s) => s.setAttribute('data-entered', 'true'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-entered', 'true');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 },
    );
    scenes.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const L = (key: string) => t(`conecta.${key}`) as string;
  const apps = (t('conecta.apps.items') as AppItem[]) ?? [];
  const app = apps[appIdx] ?? apps[0];
  const problem = (t('conecta.problem.items') as { n: string; title: string; text: string }[]) ?? [];
  const faq = (t('conecta.faq.items') as { question: string; answer: string }[]) ?? [];
  const owner = t('conecta.context.owner') as unknown as Layer;
  const layer = t('conecta.context.layer') as unknown as Layer;
  const destination = t('conecta.context.destination') as unknown as Layer;
  const yours = t('conecta.team.yours') as unknown as { label: string; title: string; text: string };
  const dinn = t('conecta.team.dinn') as unknown as { label: string; title: string; text: string };


  return (
    <div className="cnp" ref={root}>
      {/* Cabeçalho no padrão das demais páginas: título à esquerda, apoio à direita e a ilustração com movimento no hover. */}
      <div className="h2 cnp-h2" id="inicio">
        <header className="h2-hero">
          <div className="h2-wrap">
            <div className="h2-hero-grid">
              <h1 className="h2-hero-title">{L('hero.title1')} {L('hero.title2')}</h1>
              <div className="h2-hero-side">
                <p className="h2-hero-sub">{L('hero.lead').replace(/\s*\n\s*/g, ' ')}</p>
                <div className="h2-actions">
                  <a className="btn btn-primary" href={contactUrl('conecta')}>{t('pageCta.button')}</a>
                  <a className="h2-link" href="#como-ajuda">{L('hero.cta')} <ArrowDown size={15} aria-hidden="true" /></a>
                </div>
              </div>
            </div>
            <div className="h2-media cs3-media il-host" style={{ backgroundImage: 'url(/gradients/web/azul-noite.avif)' }}>
              <div className="cs3-panel"><IlConnect label={L('map.aria')} /></div>
            </div>
          </div>
        </header>
      </div>

      <div className="cnp-main">

        <figure className="connection-map wrap" id="como-ajuda" data-scene="true" aria-label={L('map.aria')}>
          <ConnectionSurface />
          <figcaption>{L('map.caption')}</figcaption>
        </figure>

        <section className="problem section wrap" data-scene="true">
          <div className="chapter-label">{L('problem.label').toUpperCase()}</div>
          <div className="problem-heading">
            <h2>{L('problem.title1')}<br /><span>{L('problem.title2')}</span></h2>
            <p>{L('problem.text')}</p>
          </div>
          <div className="source-cards">
            {problem.map((p) => (
              <article key={p.n}>
                <span>{p.n.toUpperCase()}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
          <div className="problem-bottom">
            <Link2 size={20} aria-hidden="true" />
            <p>{L('problem.bottom')}</p>
          </div>
        </section>

        <section className="context-section section" data-scene="true">
          <div className="wrap context-block">
            <div className="context-layout">
              <div className="context-copy">
                <div className="chapter-label">{L('context.label').toUpperCase()}</div>
                <h2>{L('context.title1')}<br /><span>{L('context.title2')}</span></h2>
                <p>{L('context.text')}</p>
              </div>
              <div className="context-stack" aria-label={L('context.stackAria')}>
                <div className="context-owner"><span>{owner.label.toUpperCase()}</span><strong>{owner.text}</strong></div>
                <div className="context-layer"><span>{layer.label.toUpperCase()}</span><strong>{layer.text}</strong></div>
                <div className="context-destination"><span>{destination.label.toUpperCase()}</span><strong>{destination.text}</strong></div>
              </div>
            </div>
            <a className="context-cta" href="#na-pratica">
              <span className="context-cta-icons" aria-hidden="true">
                <Store size={18} />
                <BarChart3 size={18} />
                <MessageCircle size={18} />
              </span>
              <span className="context-cta-copy">
                <strong>{L('context.cta.title')}</strong>
                <span>{L('context.cta.text')}</span>
              </span>
              <span className="context-cta-button">{L('context.cta.button')} <ArrowDown size={17} aria-hidden="true" /></span>
            </a>
          </div>
        </section>

        <section className="applications section" id="na-pratica" data-scene="true">
          <div className="wrap">
            <div className="chapter-label">{L('apps.label').toUpperCase()}</div>
            <h2>{L('apps.title1')}<br /><span>{L('apps.title2')}</span></h2>
            <fieldset className="case-selector">
              <legend className="sr-only">{L('apps.legend')}</legend>
              {apps.map((a, i) => (
                <button key={a.id} type="button" aria-pressed={i === appIdx} onClick={() => setAppIdx(i)}>
                  {a.tab} <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              ))}
            </fieldset>

            {app && (
              <div className="application-layout" key={app.id}>
                <div className="application-text">
                  <span className="eyebrow">{app.area.toUpperCase()}</span>
                  <h3>{app.title}</h3>
                  <p>{app.text}</p>
                  <div className="application-flow">
                    <span>{app.flow[0]}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                    <strong>{app.flow[1]}</strong>
                  </div>
                </div>

                <figure className="application-result">
                  {app.kind === 'table' && (
                    <div className="result-sheet">
                      <div className="sheet-heading"><span>{app.sheet}</span><ArrowUpRight size={20} aria-hidden="true" /></div>
                      <div className="sheet-meta"><span>{app.meta?.[0]}</span><span>{app.meta?.[1]}</span></div>
                      <div className="table-wrap">
                        <table>
                          <caption className="sr-only">{app.sheet}</caption>
                          <thead>
                            <tr>{app.columns?.map((c) => <th key={c}>{c}</th>)}</tr>
                          </thead>
                          <tbody>
                            {app.rows?.map((r, i) => (
                              <tr key={r[0]} className={i === 0 ? 'marked' : undefined}>
                                {r.map((c, k) => <td key={k}>{c}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="sheet-note"><span>{L('apps.nextLabel').toUpperCase()}</span><p>{app.next}</p></div>
                      <span className="case-source">{app.source}</span>
                    </div>
                  )}

                  {app.kind === 'launch' && (
                    <div className="result-sheet">
                      <div className="sheet-heading"><span>{app.sheet}</span><ArrowUpRight size={20} aria-hidden="true" /></div>
                      <div className="sheet-meta"><span>{app.meta?.[0]}</span><span>{app.meta?.[1]}</span></div>
                      <div className="launch-list">
                        {app.rows?.map((r) => (
                          <div key={r[0]} className={r[2] === 'mark' ? 'marked' : undefined}>
                            <span>{r[0]}</span>
                            <strong>{r[1]}</strong>
                            {r[2] === 'ok' && <Check size={16} aria-hidden="true" />}
                            {r[2] === 'mark' && <ArrowUpRight size={16} aria-hidden="true" />}
                            {r[2] === 'wait' && <span>—</span>}
                          </div>
                        ))}
                      </div>
                      <div className="sheet-note"><span>{L('apps.nextLabel').toUpperCase()}</span><p>{app.next}</p></div>
                      <span className="case-source">{app.source}</span>
                    </div>
                  )}

                  {app.kind === 'ask' && (
                    <div className="case-chat">
                      <span className="tiny-label">{L('apps.askLabel').toUpperCase()}</span>
                      <p className="case-question">“{app.question}”</p>
                      <div className="case-chat-answer">
                        <MessageCircle size={20} aria-hidden="true" />
                        <p>{app.answer}</p>
                      </div>
                      <span className="case-source">{app.source}</span>
                    </div>
                  )}
                  <figcaption>{L('apps.caption')}</figcaption>
                </figure>
              </div>
            )}
          </div>
        </section>

        <section className="team-section section wrap" data-scene="true">
          <div className="chapter-label">{L('team.label').toUpperCase()}</div>
          <div className="team-layout">
            <div>
              <h2>{L('team.title1')}<br /><span><Lines text={L('team.title2')} /></span></h2>
              <p><Lines text={L('team.text')} /></p>
            </div>
            <div className="responsibilities">
              <article>
                <span>{yours.label.toUpperCase()}</span>
                <h3>{yours.title}</h3>
                <p>{yours.text}</p>
              </article>
              <article>
                <span>{dinn.label.toUpperCase()}</span>
                <h3>{dinn.title}</h3>
                <p>{dinn.text}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="questions section wrap">
          <div>
            <span className="eyebrow">{L('faq.label').toUpperCase()}</span>
            <h2>{L('faq.title')}</h2>
          </div>
          <div className="faq-list">
            {faq.map((f) => (
              <details key={f.question}>
                <summary>{f.question}<ChevronDown size={20} aria-hidden="true" /></summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing wrap" id="validacao">
          <div>
            <span className="eyebrow">{L('closing.label').toUpperCase()}</span>
            <h2>{L('closing.title1')}<br />{L('closing.title2')}</h2>
          </div>
          <a href="#na-pratica" className="primary-button">
            {L('closing.button')} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </section>
      </div>
    </div>
  );
}
