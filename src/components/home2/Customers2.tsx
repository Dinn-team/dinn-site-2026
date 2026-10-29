import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { PATHS } from '@/lib/site-map';
import type { ClientLogo } from '@/lib/clients';

// Cards de clientes: gradiente da marca, camada preta de 40 % e logo branca.
// Os gradientes ficam em public/gradients. Fundo da seção: branco.
const GRADIENTS = ['g04', 'g08', 'g02', 'g10', 'g06', 'g09'];

export function Customers2({ logos }: { logos: ClientLogo[] }) {
  const { t } = useTranslation();
  return (
    <section id="clientes" className="h2-section h2-customers" aria-labelledby="h2-customers-title">
      <div className="h2-wrap">
        <div className="h2-head">
          <h2 id="h2-customers-title" className="h2-title">{t('home2.customers.title')}</h2>
          <a className="h2-link" href={PATHS.customers}>{t('home2.customers.cta')} <ArrowRight size={15} aria-hidden="true" /></a>
        </div>
        <ul className="h2-cust-grid">
          {logos.map((c, i) => (
            <li key={c.name}>
              <a className="h2-cust" href={PATHS.customers}>
                <span className="h2-cust-art" style={{ backgroundImage: `url(/gradients/${GRADIENTS[i % GRADIENTS.length]}.avif)` }}>
                  <span className="h2-cust-shade" />
                  <img className="h2-cust-logo" src={c.src} alt={c.name} width={c.width} height={c.height} loading="lazy" />
                </span>
                <span className="h2-cust-name">{c.name}</span>
                <span className="h2-cust-go">{t('home2.customers.story')} <ArrowRight size={14} aria-hidden="true" /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
