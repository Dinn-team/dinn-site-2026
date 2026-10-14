import { useTranslation } from '@/i18n/useTranslation';
import { PATHS } from '@/lib/site-map';
import { SectionHead } from '../PageShell';

type Info = { title: string; text: string };

// "Dados e integrações": de onde vêm os sinais, com que atualização, para onde
// vão e por onde começar.
export function DataSection() {
  const { t } = useTranslation();
  const data = (t('platform.data.items') as Info[]) ?? [];
  return (
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
  );
}
