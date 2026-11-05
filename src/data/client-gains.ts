import type { Lang } from '@/data/customers';

// O ganho de cada caso em uma frase, com um número só. Todo número vem do caso do cliente.
// Fonte única: usada em /clientes (ClientCases) e na faixa de clientes da home (QuemAtende2).
export const CLIENT_GAIN: Record<string, { value: string; pt: string; en: string; es: string }> = {
  sanofi: { value: '92,7%', pt: 'das recomendações da Jean foram acatadas pelos consultores em 30 dias.', en: 'of Jean recommendations accepted by consultants in 30 days.', es: 'de las recomendaciones de Jean aceptadas por los consultores en 30 días.' },
  eurofarma: { value: '64,3%', pt: 'das ações da Jean viraram trabalho feito pelos representantes.', en: 'of Jean actions turned into finished work by reps.', es: 'de las acciones de Jean se volvieron trabajo hecho por los representantes.' },
  lilly: { value: '14 dias', pt: 'do pedido ao painel de Oportunidades no ar.', en: 'from request to a live Opportunities dashboard.', es: 'del pedido al panel de Oportunidades en producción.' },
  libbs: { value: '1.500', pt: 'farmácias por busca no Localizador, contra 50 antes.', en: 'pharmacies per Locator search, up from 50.', es: 'farmacias por búsqueda en el Localizador, contra 50 antes.' },
  marjan: { value: '78%', pt: 'dos gestores sentiriam o impacto se o Dinn saísse.', en: 'of managers would feel the impact if Dinn left.', es: 'de los gestores sentirían el impacto si Dinn saliera.' },
};

export function gainFor(client: string, lang: string) {
  const g = CLIENT_GAIN[client];
  if (!g) return undefined;
  const l = (lang === 'en' || lang === 'es' ? lang : 'pt') as Lang;
  const num = l === 'en' ? g.value.replace(/[.,]/g, (m) => (m === '.' ? ',' : '.')).replace('dias', 'days') : l === 'es' ? g.value.replace('dias', 'días') : g.value;
  return { num, text: g[l] };
}
