import { useTranslation } from '@/i18n/useTranslation';
import { PageCta, PageHero, SectionHead } from './PageShell';

type Signal = { name: string; def: string; example: string };
type Info = { title: string; text: string };
type Qa = { question: string; answer: string };

export function TrustPage() {
  const { t } = useTranslation();
  const signals = (t('trust.signals.items') as Signal[]) ?? [];
  const notProve = (t('trust.notProve.items') as string[]) ?? [];
  const coverage = (t('trust.coverage.items') as Info[]) ?? [];
  const security = (t('trust.security.items') as Info[]) ?? [];
  const questions = (t('trust.questions.items') as Qa[]) ?? [];

  return (
    <div className="sp">
      <PageHero eyebrow={t('trust.hero.eyebrow')} title={t('trust.hero.title')} lead={t('trust.hero.lead')} />

      <section className="sp-section" aria-labelledby="sp-signals">
        <div className="wrap">
          <SectionHead id="sp-signals" title={t('trust.signals.title')} intro={t('trust.signals.intro')} />
          <div className="sp-grid is-three">
            {signals.map((s) => (
              <article key={s.name} className="sp-card">
                <span className="sp-tag">{s.name}</span>
                <p className="sp-def">{s.def}</p>
                <p className="sp-not"><strong>{t('trust.signals.exampleLabel')}:</strong> {s.example}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="sp-notprove">
        <div className="wrap sp-split">
          <div>
            <SectionHead id="sp-notprove" title={t('trust.notProve.title')} intro={t('trust.notProve.intro')} />
          </div>
          <ul className="sp-limits">
            {notProve.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>
      </section>

      <section className="sp-section" aria-labelledby="sp-coverage">
        <div className="wrap">
          <SectionHead id="sp-coverage" title={t('trust.coverage.title')} />
          <div className="sp-grid is-three">
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
          <div className="sp-grid is-two">
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
        <div className="wrap sp-split">
          <SectionHead id="sp-deploy" title={t('trust.deploy.title')} />
          <p className="sp-body">{t('trust.deploy.text')}</p>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="sp-qa">
        <div className="wrap">
          <SectionHead id="sp-qa" title={t('trust.questions.title')} />
          <div className="sp-qa">
            {questions.map((q) => (
              <details key={q.question}>
                <summary>{q.question}</summary>
                <p>{q.answer}</p>
              </details>
            ))}
          </div>
          <p className="sp-more"><a href="/suporte">{t('trust.questions.supportLink')} →</a></p>
        </div>
      </section>

      <PageCta title={t('trust.cta.title')} desc={t('trust.cta.desc')} button={t('trust.cta.button')} />
    </div>
  );
}
