import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import FAQ from '@/components/FAQ';
import { contactUrl } from '@/lib/links';
import { PageCta, SectionHead } from './PageShell';
import { CoverageViz, DeployBar, NotProveCards, SecurityFlow, SignalAnatomy, SignalKinds } from './TrustVisuals';

type Info = { title: string; text: string };
type Qa = { question: string; answer: string };

export function TrustPage() {
  const { t } = useTranslation();
  const coverage = (t('trust.coverage.items') as Info[]) ?? [];
  const security = (t('trust.security.items') as Info[]) ?? [];
  const questions = (t('trust.questions.items') as Qa[]) ?? [];
  const accuracy = t('trustMore.accuracy') as unknown as { title: string; text: string; kindsTitle: string; kinds: string[]; note: string };
  const seals = t('trustMore.seals') as unknown as { title: string; text: string; rows: { label: string; text: string }[] };
  const docs = t('trustMore.docs') as unknown as { title: string; text: string; items: string[]; cta: string };

  return (
    <div className="sp">
      <header className="sp-hero tr-hero">
        <div className="wrap tr-hero-grid">
          <div>
            <p className="sp-eyebrow">{t('trust.hero.eyebrow')}</p>
            <h1 className="sp-title"><Rich text={t('trust.hero.title') as string} /></h1>
            <p className="sp-lead">{t('trust.hero.lead')}</p>
          </div>
          <SignalAnatomy />
        </div>
      </header>

      <section className="sp-section" aria-labelledby="sp-signals">
        <div className="wrap">
          <SectionHead id="sp-signals" title={t('trust.signals.title')} intro={t('trust.signals.intro')} />
          <SignalKinds />
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="sp-notprove">
        <div className="wrap">
          <SectionHead id="sp-notprove" title={t('trust.notProve.title')} intro={t('trust.notProve.intro')} />
          <NotProveCards />
        </div>
      </section>

      <section className="sp-section" aria-labelledby="sp-coverage">
        <div className="wrap">
          <SectionHead id="sp-coverage" title={t('trust.coverage.title')} />
          <CoverageViz />
          <div className="sp-grid is-three tr-below">
            {coverage.map((c) => (
              <article key={c.title} className="sp-card is-plain">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="sp-security">
        <div className="wrap">
          <SectionHead id="sp-security" title={t('trust.security.title')} />
          <SecurityFlow />
          <div className="sp-grid is-two tr-below">
            {security.map((c) => (
              <article key={c.title} className="sp-card is-plain">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
          <p className="sp-more"><a href="/politicas-de-privacidade">{t('trust.security.privacyLink')} →</a></p>
        </div>
      </section>

      <section className="sp-section" aria-labelledby="sp-deploy">
        <div className="wrap">
          <SectionHead id="sp-deploy" title={t('trust.deploy.title')} intro={t('trust.deploy.text')} />
          <DeployBar />
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="sp-accuracy">
        <div className="wrap sp-split">
          <div>
            <SectionHead id="sp-accuracy" title={accuracy.title} intro={accuracy.text} />
            <p className="sp-note">{accuracy.note}</p>
          </div>
          <div className="of-panel">
            <p className="sp-kicker">{accuracy.kindsTitle}</p>
            <ul className="of-chips">
              {accuracy.kinds.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="sp-section" aria-labelledby="sp-seals">
        <div className="wrap">
          <SectionHead id="sp-seals" title={seals.title} intro={seals.text} />
          <div className="sp-grid is-three">
            {seals.rows.map((r) => (
              <article key={r.label} className="sp-card is-plain">
                <h3>{r.label}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="sp-docs">
        <div className="wrap sp-split">
          <div>
            <SectionHead id="sp-docs" title={docs.title} intro={docs.text} />
            <a href={contactUrl('confianca-documentacao')} className="btn btn-primary btn-lg">{docs.cta}</a>
          </div>
          <div className="of-panel">
            <ul className="sp-checks">
              {docs.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Mesmo FAQ da home: cartões que abrem e fecham */}
      <FAQ items={questions} title={t('trust.questions.title') as string} id="perguntas" />
      <div className="tr-faq-more">
        <div className="wrap">
          <p className="sp-more"><a href="/suporte">{t('trust.questions.supportLink')} →</a></p>
        </div>
      </div>

      <PageCta title={t('trust.cta.title')} desc={t('trust.cta.desc')} button={t('trust.cta.button')} />
    </div>
  );
}
