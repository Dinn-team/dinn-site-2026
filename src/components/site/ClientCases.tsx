import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { gainFor } from '@/data/client-gains';
import type { Lab } from '@/lib/labs-types';
import { LabLogo } from './LabsParts';

// O caso de cada cliente: os 5 clientes na tela, no desenho dos cartões da home
// ("Quem a Dinn pode atender"), cada um com um resumo curto e um dado do caso.
// Cada cartão leva à página do cliente. Substitui o carrossel antigo de /clientes.
const ORDER = ['sanofi', 'eurofarma', 'lilly', 'libbs', 'marjan'];
const WIDE = new Set(['sanofi', 'eurofarma']);

export function ClientCases({ labs, title, exclude }: { labs: Lab[]; title: string; exclude?: string }) {
  const { lang } = useTranslation();
  const clients = ORDER.filter((k) => k !== exclude).map((k) => labs.find((l) => l.client === k)).filter(Boolean) as Lab[];
  // Com os cinco, Sanofi e Eurofarma ficam largos. Com quatro (um cliente fora), todos ficam largos, em 2 x 2.
  const allWide = clients.length < ORDER.length;
  return (
    <section id={exclude ? 'cu3-more' : 'cu3-opens'} className="h2-section lb-cases" aria-labelledby="lb-cases-title">
      <div className="h2-wrap">
        <div className="h2-head is-stack"><h2 id="lb-cases-title" className="h2-title">{title}</h2></div>
        <ul className="lb-clients">
          {clients.map((lab) => {
            const g = gainFor(lab.client!, lang)!;
            return (
              <li key={lab.slug} className={allWide || WIDE.has(lab.client!) ? 'is-wide' : ''}>
                <a href={`/clientes/${lab.client}`} aria-label={`${lab.name}: ${g.num} ${g.text}`}>
                  <LabLogo lab={lab} />
                  <span className="lb-gain"><b>{g.num}</b><span>{g.text}</span></span>
                  <span className="lb-case-go" aria-hidden="true"><ArrowRight size={16} /></span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
