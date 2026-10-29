import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { PATHS } from '@/lib/site-map';
import type { ClientLogo } from '@/lib/clients';

// Cards de clientes: gradiente roxo da marca, camada preta de 40 % e logo branca.
// Os três principais aparecem; os outros ficam no carrossel (setas no desktop).
// Os gradientes ficam em public/gradients.
const ORDER = ['Libbs', 'Lilly', 'Eurofarma', 'Marjan', 'Sanofi'];
const GRADIENTS = ['g00', 'g11', 'g08', 'g00', 'g11'];

export function Customers2({ logos }: { logos: ClientLogo[] }) {
  const { t } = useTranslation();
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const sorted = [...logos].sort((a, b) => ORDER.indexOf(a.name) - ORDER.indexOf(b.name));

  const sync = () => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  };
  useEffect(() => {
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, [logos.length]);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('li')?.getBoundingClientRect().width ?? 0;
    el.scrollBy({ left: dir * (card + 32), behavior: 'smooth' });
  };

  return (
    <section id="clientes" className="h2-section h2-customers" aria-labelledby="h2-customers-title">
      <div className="h2-wrap">
        <div className="h2-head">
          <h2 id="h2-customers-title" className="h2-title">{t('home2.customers.title')}</h2>
          <div className="h2-head-actions">
            <a className="h2-link" href={PATHS.customers}>{t('home2.customers.cta')} <ArrowRight size={15} aria-hidden="true" /></a>
            <div className="h2-arrows">
              <button type="button" onClick={() => go(-1)} disabled={edge.start} aria-label="←"><ArrowLeft size={16} aria-hidden="true" /></button>
              <button type="button" onClick={() => go(1)} disabled={edge.end} aria-label="→"><ArrowRight size={16} aria-hidden="true" /></button>
            </div>
          </div>
        </div>
        <ul className="h2-cust-track" ref={track} onScroll={sync}>
          {sorted.map((c, i) => (
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
