import { ArrowUpRight, BarChart3, Headset, Rocket, ShieldCheck, Truck, Users } from 'lucide-react';
import type { ComponentType } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import { areaPath } from '@/lib/site-map';

type Area = { slug: string; name: string };
type IconType = ComponentType<{ size?: number; strokeWidth?: number; 'aria-hidden'?: boolean | 'true' }>;

const ICONS: Record<string, IconType> = {
  'inteligencia-pricing': BarChart3,
  'trade-kam-campo': Users,
  'supply-distribuicao': Truck,
  'sac-customer-experience': Headset,
  'marketing-lancamentos': Rocket,
  'ti-dados-governanca': ShieldCheck,
};

// "Para a sua área": pouco texto, mais imagem. Cada card tem um desenho de
// linha fina (ícone grande) e o nome da área.
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
            const Icon = ICONS[a.slug] ?? BarChart3;
            return (
              <li key={a.slug}>
                <a className="h2-area" href={areaPath(a.slug)}>
                  <span className="h2-area-art"><Icon size={88} strokeWidth={0.8} aria-hidden="true" /></span>
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
