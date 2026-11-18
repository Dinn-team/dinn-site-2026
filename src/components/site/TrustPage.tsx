import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { contactUrl } from '@/lib/links';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { H2Head } from './PageShell';
import { CoverageViz, DeployBar, NotProveList, SecurityFlow, SignalAnatomy, SignalGrid } from './TrustVisuals';

type Info = { title: string; text: string };
type Qa = { question: string; answer: string };

const SECTIONS = ['signals', 'confidence', 'security', 'deploy', 'docs'] as const;
type SectionKey = (typeof SECTIONS)[number];
const ID: Record<SectionKey, string> = { signals: 'tr-signals', confidence: 'tr-confidence', security: 'tr-security', deploy: 'tr-deploy', docs: 'tr-docs' };

// Página Confiança no padrão da home (Design System v2) e na lógica dos Planos:
// itens paralelos ficam em colunas com fio fino, os assuntos vizinhos são
// agrupados pela pergunta do leitor (cinco seções) e um índice acompanha a leitura.
export function TrustPage() {
  const { t } = useTranslation();
  const coverage = (t('trust.coverage.items') as Info[]) ?? [];
  const security = (t('trust.security.items') as Info[]) ?? [];
  const questions = (t('trust.questions.items') as Qa[]) ?? [];
  const accuracy = t('trustMore.accuracy') as unknown as { title: string; text: string; kindsTitle: string; kinds: string[]; note: string };
  const seals = t('trustMore.seals') as unknown as { title: string; text: string; rows: { label: string; text: string }[] };
  const docs = t('trustMore.docs') as unknown as { title: string; text: string; items: string[]; cta: string };
  const nav = t('trustLayout.nav') as unknown as Record<'aria' | SectionKey, string>;

  // Índice lateral: marca a seção que está no meio da tela e só aparece dentro do corpo da página.
  const body = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState<SectionKey>('signals');
  const [showIndex, setShowIndex] = useState(false);
  useEffect(() => {
    const el = body.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setShowIndex(e.isIntersecting), { rootMargin: '-35% 0px -35% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const els = SECTIONS.map((k) => document.getElementById(ID[k])).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setCurrent(SECTIONS.find((k) => ID[k] === e.target.id) ?? 'signals');
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="h2 tr">
      <header className="h2-hero tr-hero-v2">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title"><Rich text={t('trust.hero.title') as string} /></h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('trust.hero.lead')}</p>
              <div className="h2-actions">
                <a className="btn btn-primary" href={contactUrl('confianca-hero')}>{t('trust.cta.button')}</a>
              </div>
            </div>
          </div>
          <div className="h2-media tr-media" data-texture>
            <SignalAnatomy />
          </div>
        </div>
      </header>

      <div className="tr-body" ref={body}>
        <nav className={`tr-index ${showIndex ? 'is-on' : ''}`} aria-label={nav?.aria}>
          <ul>
            {SECTIONS.map((k) => (
              <li key={k}>
                <a href={`#${ID[k]}`} className={current === k ? 'is-on' : ''} aria-current={current === k ? 'true' : undefined}>
                  <span className="tr-index-label">{nav?.[k]}</span>
                  <i className="tr-index-tick" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 1. Como lemos um sinal */}
        <section id={ID.signals} className="h2-section tr-sec" aria-labelledby="tr-signals-title">
          <div className="h2-wrap">
            <H2Head id="tr-signals-title" title={t('trust.signals.title') as string} intro={t('trust.signals.intro') as string} />
            <SignalGrid />
            <div className="tr-sub">
              <h3 className="tr-sub-title">{t('trust.notProve.title')}</h3>
              <p className="tr-sub-text">{t('trust.notProve.intro')}</p>
            </div>
            <NotProveList />
          </div>
        </section>

        {/* 2. Até onde confiar nos números */}
        <section id={ID.confidence} className="h2-section is-muted tr-sec" aria-labelledby="tr-confidence-title">
          <div className="h2-wrap">
            <H2Head id="tr-confidence-title" title={t('trust.coverage.title') as string} />
            <CoverageViz />
            <div className="tr-cols" style={{ ['--cols' as string]: coverage.length + 1 }}>
              {coverage.map((c) => (
                <article key={c.title} className="tr-col">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
              <article className="tr-col">
                <h3>{accuracy.title}</h3>
                <p>{accuracy.text}</p>
                <ul className="tr-chips">
                  {accuracy.kinds.map((k) => <li key={k}>{k}</li>)}
                </ul>
                <p className="tr-col-note">{accuracy.note}</p>
              </article>
            </div>
          </div>
        </section>

        {/* 3. Acesso e segurança */}
        <section id={ID.security} className="h2-section tr-sec" aria-labelledby="tr-security-title">
          <div className="h2-wrap">
            <H2Head id="tr-security-title" title={t('trust.security.title') as string} />
            <SecurityFlow />
            <div className="tr-cols" style={{ ['--cols' as string]: security.length }}>
              {security.map((c) => (
                <article key={c.title} className="tr-col">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
            <p className="tr-more"><a className="h2-link" href="/politicas-de-privacidade">{t('trust.security.privacyLink')} →</a></p>
          </div>
        </section>

        {/* 4. Implantação */}
        <section id={ID.deploy} className="h2-section is-muted tr-sec" aria-labelledby="tr-deploy-title">
          <div className="h2-wrap">
            <H2Head id="tr-deploy-title" title={t('trust.deploy.title') as string} intro={t('trust.deploy.text') as string} />
            <DeployBar />
          </div>
        </section>

        {/* 5. Selos e documentos */}
        <section id={ID.docs} className="h2-section tr-sec" aria-labelledby="tr-seals-title">
          <div className="h2-wrap">
            <H2Head id="tr-seals-title" title={seals.title} intro={seals.text} />
            <dl className="tr-seals">
              {seals.rows.map((r) => (
                <div key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.text}</dd>
                </div>
              ))}
            </dl>

            <div className="tr-closing-card" role="group" aria-labelledby="tr-docs-title">
              <div className="tr-closing-copy">
                <h2 id="tr-docs-title">{docs.title}</h2>
                <p>{docs.text}</p>
                <div className="h2-actions">
                  <a href={contactUrl('confianca-documentacao')} className="btn btn-primary">{docs.cta}</a>
                  <a className="h2-link" href="/suporte">{t('trust.questions.supportLink')} →</a>
                </div>
              </div>
              <ul className="tr-closing-list">
                {docs.items.map((i) => <li key={i}><Check size={14} strokeWidth={2.4} aria-hidden="true" />{i}</li>)}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <ChatWidget2 questions={questions} />
    </div>
  );
}
