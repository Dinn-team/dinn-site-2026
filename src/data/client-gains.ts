import type { Lang } from '@/data/customers';

// O ganho de cada caso em uma frase, com um número só. Todo número vem do caso do cliente.
// Fonte única: usada em /clientes (ClientCases) e na faixa de clientes da home (QuemAtende2).
// Os cases são anônimos (decisão de 12/11/2026): a chave é interna, o `slug` é o endereço público
// da página e o `label` é o nome que aparece no cartão. Nenhum nome de cliente sai deste arquivo.
export type ClientGain = {
  /** Endereço público em /clientes/<slug>. Igual ao slug em src/data/customers/<cliente>.ts. */
  slug: string;
  label: { pt: string; en: string; es: string };
  value: string;
  pt: string;
  en: string;
  es: string;
};

export const CLIENT_GAIN: Record<string, ClientGain> = {
  sanofi: { slug: 'forca-de-vendas-global', label: { pt: 'Farmacêutica global', en: 'Global pharma company', es: 'Farmacéutica global' }, value: '92,7%', pt: 'das recomendações do Dinn foram acatadas pelos consultores em 30 dias.', en: 'of Dinn recommendations accepted by consultants in 30 days.', es: 'de las recomendaciones de Dinn aceptadas por los consultores en 30 días.' },
  eurofarma: { slug: 'carteira-de-medicos', label: { pt: 'Farmacêutica brasileira com atuação na América Latina', en: 'Brazilian pharma company with Latin American reach', es: 'Farmacéutica brasileña con presencia en América Latina' }, value: '64,3%', pt: 'das ações do Dinn viraram trabalho feito pelos representantes.', en: 'of Dinn actions turned into finished work by reps.', es: 'de las acciones de Dinn se volvieron trabajo hecho por los representantes.' },
  lilly: { slug: 'oportunidades-de-mercado', label: { pt: 'Farmacêutica global de alta demanda', en: 'Global high-demand pharma company', es: 'Farmacéutica global de alta demanda' }, value: '9 dias', pt: 'do pedido ao painel de Oportunidades no ar.', en: 'from request to a live Opportunities dashboard.', es: 'del pedido al panel de Oportunidades en producción.' },
  libbs: { slug: 'localizador-para-sac', label: { pt: 'Farmacêutica brasileira de medicamentos de marca', en: 'Brazilian branded-drug pharma company', es: 'Farmacéutica brasileña de medicamentos de marca' }, value: '1.500', pt: 'farmácias por busca no Localizador, contra 50 antes.', en: 'pharmacies per Locator search, up from 50.', es: 'farmacias por búsqueda en el Localizador, contra 50 antes.' },
  marjan: { slug: 'ruptura-no-pdv', label: { pt: 'Laboratório brasileiro de medicamentos e suplementos', en: 'Brazilian drug and supplement lab', es: 'Laboratorio brasileño de medicamentos y suplementos' }, value: '78%', pt: 'dos gestores sentiriam o impacto se o Dinn saísse.', en: 'of managers would feel the impact if Dinn left.', es: 'de los gestores sentirían el impacto si Dinn saliera.' },
};

// Frase de impacto sem número, para a faixa de clientes da home (QuemAtende2).
export const CLIENT_IMPACT: Record<string, { pt: string; en: string; es: string }> = {
  sanofi: { pt: 'Consultores agem sobre as recomendações do Dinn.', en: 'Consultants act on Dinn recommendations.', es: 'Los consultores actúan sobre las recomendaciones de Dinn.' },
  eurofarma: { pt: 'Representantes transformam as ações do Dinn em trabalho feito.', en: 'Reps turn Dinn actions into finished work.', es: 'Los representantes convierten las acciones de Dinn en trabajo hecho.' },
  lilly: { pt: 'Painel de Oportunidades no ar em poucos dias.', en: 'Opportunities dashboard live in a few days.', es: 'Panel de Oportunidades en producción en pocos días.' },
  libbs: { pt: 'O SAC consulta muito mais farmácias por busca.', en: 'Customer service checks many more pharmacies per search.', es: 'El SAC consulta muchas más farmacias por búsqueda.' },
  marjan: { pt: 'Os gestores usam o Dinn no dia a dia.', en: 'Managers use Dinn every day.', es: 'Los gestores usan Dinn todos los días.' },
};

export const impactFor = (client: string, lang: string) => {
  const g = CLIENT_IMPACT[client];
  return g ? g[(lang === 'en' || lang === 'es' ? lang : 'pt') as Lang] : undefined;
};

/** Ordem dos cartões nas listas de cases. */
export const CLIENT_KEYS = ['sanofi', 'eurofarma', 'lilly', 'libbs', 'marjan'] as const;

export function gainFor(client: string, lang: string) {
  const g = CLIENT_GAIN[client];
  if (!g) return undefined;
  const l = (lang === 'en' || lang === 'es' ? lang : 'pt') as Lang;
  const num = l === 'en' ? g.value.replace(/[.,]/g, (m) => (m === '.' ? ',' : '.')).replace('dias', 'days') : l === 'es' ? g.value.replace('dias', 'días') : g.value;
  return { num, text: g[l], slug: g.slug, label: g.label[l] };
}
