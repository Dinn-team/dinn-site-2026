import { useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { contactUrl } from '@/lib/links';
import { PATHS } from '@/lib/site-map';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { H2Head } from './PageShell';
import { IlFlow, IlPlates, IlSources, IlStack } from '@/components/illustrations';

type ResearchCard = { tag: string; title: string; deliver: string };

const MODE_ART = [IlStack, IlPlates, IlSources, IlFlow];
const MODE_ORIGIN = ['sob-demanda', 'recorrentes', 'fontes', 'integracao'];

// Pesquisas no mesmo padrão dos Planos (estrutura da página de preços da
// ElevenLabs): colunas com fio fino, um cartão por modo, botão e a entrega
// definida. O visitante escolhe as entregas e vê o resumo do projeto.
export function ResearchPage() {
  const { t } = useTranslation();
  const cards = (t('research.cards.items') as ResearchCard[]) ?? [];
  const define = (t('research.define.items') as string[]) ?? [];
  const deliveries = (t('research.deliveries.items') as string[]) ?? [];
  const limits = (t('research.limits.items') as string[]) ?? [];
  const build = t('research.build') as unknown as { title: string; step: string; empty: string; summary: string; agree: string };

  const [picked, setPicked] = useState<number[]>([]);
  const toggle = (i: number) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  return (
    <div className="h2 pl rs">
      <header className="h2-hero pl-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title"><Rich text={t('research.hero.title') as string} /></h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('research.hero.lead')}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="pl-plans" aria-labelledby="rs-cards">
        <div className="h2-wrap">
          <h2 id="rs-cards" className="sr-only">{t('research.cards.title')}</h2>
          <div className="pl-grid rs-grid">
            <div className="pl-lead">
              <p className="pl-lead-title">{t('research.cards.title')}</p>
              <p className="pl-lead-text">{t('research.deliveries.intro')}</p>
            </div>
            {cards.map((c, i) => {
              const Art = MODE_ART[i] ?? IlStack;
              return (
                <article key={c.tag} className="pl-col">
                  <div className="pl-card rs-card il-host">
                    <span className="rs-art"><Art /></span>
                    <h3>{c.tag}</h3>
                    <p>{c.title}</p>
                  </div>
                  <a className="btn btn-primary pl-cta" href={contactUrl(`pesquisa-${MODE_ORIGIN[i] ?? i}`)}>{t('research.cta.button')}</a>
                  <p className="pl-from">{t('research.cards.deliverLabel')}</p>
                  <ul className="pl-list">
                    <li>
                      <Check size={14} strokeWidth={2.2} aria-hidden="true" />
                      <span className="pl-v">{c.deliver}</span>
                    </li>
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="h2-section is-muted pl-build" aria-labelledby="rs-build">
        <div className="h2-wrap pl-build-grid">
          <div>
            <h2 id="rs-build" className="h2-title">{build.title}</h2>
            <p className="pl-step"><span>1</span>{build.step}</p>
            <ul className="pl-chips">
              {deliveries.map((d, i) => {
                const on = picked.includes(i);
                return (
                  <li key={d}>
                    <button type="button" className={on ? 'is-on' : ''} aria-pressed={on} onClick={() => toggle(i)}>
                      {on ? <X size={14} aria-hidden="true" /> : <span className="pl-plus" aria-hidden="true">+</span>}
                      {d}
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="pl-note">{t('research.deliveries.title')}. {t('research.deliveries.intro')}</p>
          </div>

          <aside className="pl-result rs-result" aria-live="polite">
            {picked.length === 0 ? (
              <p className="pl-result-empty">{build.empty}</p>
            ) : (
              <>
                <p className="pl-result-kicker">{build.summary}</p>
                <ul>
                  {picked.map((i) => (
                    <li key={i}><Check size={15} aria-hidden="true" /><span>{deliveries[i]}</span></li>
                  ))}
                </ul>
                <p className="pl-result-kicker">{build.agree}</p>
                <ul className="rs-agree">
                  {define.map((d) => <li key={d}>{d}</li>)}
                </ul>
                <a className="btn btn-primary pl-result-btn" href={contactUrl('pesquisa-projeto')}>{t('research.cta.button')}</a>
              </>
            )}
          </aside>
        </div>
      </section>

      <section className="h2-section" aria-labelledby="rs-limits">
        <div className="h2-wrap pl-start">
          <H2Head id="rs-limits" title={t('research.limits.title') as string} />
          <ol className="rs-limits">
            {limits.map((l, i) => (
              <li key={l}>
                <span className="pl-n">{String(i + 1).padStart(2, '0')}</span>
                <p>{l}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pl-closing" aria-labelledby="rs-closing">
        <div className="h2-wrap">
          <div className="pl-closing-card rs-closing-card">
            <h2 id="rs-closing">{t('research.cta.title')}</h2>
            <p>{t('research.cta.desc')}</p>
            <div className="h2-actions">
              <a className="btn btn-primary" href={contactUrl('pesquisas')}>{t('research.cta.button')}</a>
              <a className="h2-link" href={PATHS.conecta}>{t('menu.conecta')} <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>

      <ChatWidget2 />
    </div>
  );
}
