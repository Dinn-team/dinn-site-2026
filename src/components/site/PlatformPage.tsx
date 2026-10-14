import { useTranslation } from '@/i18n/useTranslation';
import { PATHS } from '@/lib/site-map';
import { PageCta, PageHero, SectionHead } from './PageShell';

type Part = { tag: string; title: string; desc: string; not: string };
type Info = { title: string; text: string };
type Stage = { name: string; title: string; desc: string };

export function PlatformPage() {
  const { t } = useTranslation();
  const stages = (t('inside.stages') as Stage[]) ?? [];
  const parts = (t('platform.parts.items') as Part[]) ?? [];
  const data = (t('platform.data.items') as Info[]) ?? [];

  return (
    <div className="sp">
      <PageHero eyebrow={t('platform.hero.eyebrow')} title={t('platform.hero.title')} lead={t('platform.hero.lead')} />

      <section className="sp-section" aria-labelledby="sp-cycle">
        <div className="wrap">
          <SectionHead id="sp-cycle" title={t('platform.cycle.title')} intro={t('platform.cycle.intro')} />
          <ol className="sp-cycle">
            {stages.map((s, i) => (
              <li key={s.name}>
                <span className="sp-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
          <p className="sp-more"><a href="/#por-dentro">{t('inside.eyebrow')} →</a></p>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="sp-parts">
        <div className="wrap">
          <SectionHead id="sp-parts" title={t('platform.parts.title')} intro={t('platform.parts.intro')} />
          <div className="sp-grid is-parts">
            {parts.map((p) => (
              <article key={p.tag} className="sp-card">
                <span className="sp-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p className="sp-not"><strong>{t('platform.parts.notLabel')}:</strong> {p.not}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" aria-labelledby="sp-data">
        <div className="wrap">
          <SectionHead id="sp-data" title={t('platform.data.title')} intro={t('platform.data.intro')} />
          <div className="sp-grid is-two">
            {data.map((d) => (
              <article key={d.title} className="sp-card is-plain">
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>
          <p className="sp-more"><a href={PATHS.trust}>{t('nav.trust')} →</a></p>
        </div>
      </section>

      <PageCta
        title={t('pageCta.title')}
        desc={t('pageCta.desc')}
        button={t('pageCta.button')}
        secondary={{ label: t('pageCta.secondary'), href: PATHS.solutions }}
      />
    </div>
  );
}
