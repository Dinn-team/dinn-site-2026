import { ArrowUpRight } from 'lucide-react';
import type { ComponentType } from 'react';
import { IlGovern, IlLaunch, IlPricing, IlSac, IlSupply, IlTrade } from '@/components/illustrations/areas';
import { useTranslation } from '@/i18n/useTranslation';
import { areaPath } from '@/lib/site-map';

type Area = { slug: string; name: string };
const ART: Record<string, ComponentType> = {
  'inteligencia-pricing': IlPricing,
  'trade-kam-campo': IlTrade,
  'supply-distribuicao': IlSupply,
  'sac-customer-experience': IlSac,
  'marketing-lancamentos': IlLaunch,
  'ti-dados-governanca': IlGovern,
};

// "Para a sua área": pouco texto, mais imagem. Cada card tem uma ilustração
// isométrica em linha fina (src/components/illustrations), animada no hover.
export function Areas2() {
  const { t } = useTranslation();
  const areas = (t('solutions.items') as Area[]) ?? [];
  const promises = (t('home2.areas.promises') as Record<string, string>) ?? {};
  return (
    <section id="areas" className="h2-section h2-areas" aria-labelledby="h2-areas-title">
      <div className="h2-wrap">
        <div className="h2-head is-stack">
          <h2 id="h2-areas-title" className="h2-title">{t('home2.areas.title')}</h2>
          <p className="h2-sub">{t('home2.areas.sub')}</p>
        </div>
        <ul className="h2-area-grid">
          {areas.map((a) => {
            const Art = ART[a.slug] ?? IlPricing;
            return (
              <li key={a.slug}>
                <a className="h2-area il-host" href={areaPath(a.slug)}>
                  <span className="h2-area-art"><Art /></span>
                  <span className="h2-area-txt">
                    <span className="h2-area-name">{a.name}</span>
                    <span className="h2-area-promise">{promises[a.slug]}</span>
                  </span>
                  <ArrowUpRight className="h2-area-go" size={18} aria-label={t('home2.areas.open') as string} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
