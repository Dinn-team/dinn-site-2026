import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import type { Lang } from '@/data/customers';
import type { Lab } from '@/lib/labs-types';
import { LabLogo } from './LabsParts';

// O caso de cada cliente: os 5 clientes na tela, no desenho dos cartões da home
// ("Quem a Dinn pode atender"), cada um com um resumo curto e um dado do caso.
// Cada cartão leva à página do cliente. Substitui o carrossel antigo de /clientes.
const ORDER = ['sanofi', 'eurofarma', 'lilly', 'libbs', 'marjan'];
// O ganho de cada caso em uma frase, com um número só. Todo número vem do caso do cliente.
const GAIN: Record<string, { value: string; pt: string; en: string; es: string }> = {
  sanofi: { value: '92,7%', pt: 'das recomendações da Jean foram acatadas pelos consultores em 30 dias.', en: 'of Jean recommendations accepted by consultants in 30 days.', es: 'de las recomendaciones de Jean aceptadas por los consultores en 30 días.' },
  eurofarma: { value: '64,3%', pt: 'das ações da Jean viraram trabalho feito pelos representantes.', en: 'of Jean actions turned into finished work by reps.', es: 'de las acciones de Jean se volvieron trabajo hecho por los representantes.' },
  lilly: { value: '14 dias', pt: 'do pedido ao painel de Oportunidades no ar.', en: 'from request to a live Opportunities dashboard.', es: 'del pedido al panel de Oportunidades en producción.' },
  libbs: { value: '1.500', pt: 'farmácias por busca no Localizador, contra 50 antes.', en: 'pharmacies per Locator search, up from 50.', es: 'farmacias por búsqueda en el Localizador, contra 50 antes.' },
  marjan: { value: '78%', pt: 'dos gestores sentiriam o impacto se o Dinn saísse.', en: 'of managers would feel the impact if Dinn left.', es: 'de los gestores sentirían el impacto si Dinn saliera.' },
};
const WIDE = new Set(['sanofi', 'eurofarma']);

export function ClientCases({ labs, title }: { labs: Lab[]; title: string }) {
  const { lang } = useTranslation();
  const clients = ORDER.map((k) => labs.find((l) => l.client === k)).filter(Boolean) as Lab[];
  return (
    <section id="cu3-opens" className="h2-section lb-cases" aria-labelledby="lb-cases-title">
      <div className="h2-wrap">
        <div className="h2-head is-stack"><h2 id="lb-cases-title" className="h2-title">{title}</h2></div>
        <ul className="lb-clients">
          {clients.map((lab) => {
            const g = GAIN[lab.client!];
            const l = (lang === 'en' || lang === 'es' ? lang : 'pt') as Lang;
            const num = l === 'en' ? g.value.replace(/[.,]/g, (m) => (m === '.' ? ',' : '.')).replace('dias', 'days') : l === 'es' ? g.value.replace('dias', 'días') : g.value;
            return (
              <li key={lab.slug} className={WIDE.has(lab.client!) ? 'is-wide' : ''}>
                <a href={`/clientes/${lab.client}`} aria-label={`${lab.name}: ${num} ${g[l]}`}>
                  <LabLogo lab={lab} />
                  <span className="lb-gain"><b>{num}</b><span>{g[l]}</span></span>
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
