import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { AreaCard, type Area } from '@/components/site/SolutionsPages';
import { PATHS } from '@/lib/site-map';

// Caminhos por área: cada cadeira compradora entra pela própria pergunta e
// segue para a página da sua solução. Substitui a leitura em abas para quem
// ainda não sabe qual caso de uso procura.

export function AreasSection() {
  const { t } = useTranslation();
  const areas = (t('solutions.items') as Area[]) ?? [];

  return (
    <section id="areas" className="areas" aria-labelledby="areas-title">
      <div className="wrap">
        <div className="areas-head">
          <p className="teams-eyebrow">{t('areas.eyebrow')}</p>
          <h2 id="areas-title" className="teams-title"><Rich text={t('areas.title') as string} /></h2>
          <p className="areas-intro">{t('areas.intro')}</p>
        </div>
        <div className="sp-grid is-areas">
          {areas.map((a) => (
            <AreaCard key={a.slug} area={a} cta={t('areas.open')} questionPrefix={t('areas.questionPrefix')} />
          ))}
        </div>
        <p className="areas-all"><a href={PATHS.solutions}>{t('nav.solutionsAll')} →</a></p>
      </div>
    </section>
  );
}
