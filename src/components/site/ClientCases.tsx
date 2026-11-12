import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { CLIENT_KEYS, gainFor } from '@/data/client-gains';

// O caso de cada cliente: os 5 cases na tela, no desenho dos cartões da home
// ("Quem a Dinn pode atender"), cada um com um resumo curto e um dado do caso.
// Os cases são anônimos: o cartão mostra o perfil do laboratório, sem nome nem logo.
// Cada cartão leva à página do case.
const WIDE = new Set(['sanofi', 'eurofarma']);

/** `exclude` é o endereço público (slug) do case que está aberto. */
export function ClientCases({ title, exclude }: { title: string; exclude?: string }) {
  const { lang } = useTranslation();
  const clients = CLIENT_KEYS.map((k) => ({ key: k, g: gainFor(k, lang)! })).filter((c) => c.g.slug !== exclude);
  // Com os cinco, dois ficam largos. Com quatro (um case fora), todos ficam largos, em 2 x 2.
  const allWide = clients.length < CLIENT_KEYS.length;
  return (
    <section id={exclude ? 'cu3-more' : 'cu3-opens'} className="h2-section lb-cases" aria-labelledby="lb-cases-title">
      <div className="h2-wrap">
        <div className="h2-head is-stack"><h2 id="lb-cases-title" className="h2-title">{title}</h2></div>
        <ul className="lb-clients">
          {clients.map(({ key, g }) => (
            <li key={key} className={allWide || WIDE.has(key) ? 'is-wide' : ''}>
              <a href={`/clientes/${g.slug}`} aria-label={`${g.label}: ${g.num} ${g.text}`}>
                <span className="lb-anon">{g.label}</span>
                <span className="lb-gain"><b>{g.num}</b><span>{g.text}</span></span>
                <span className="lb-case-go" aria-hidden="true"><ArrowRight size={16} /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
