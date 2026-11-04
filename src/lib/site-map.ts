// Mapa das páginas internas. Os slugs são os mesmos nos três idiomas (o
// idioma troca no cliente) e servem tanto às rotas Astro quanto aos links do
// menu, da home e do rodapé.

export const AREA_SLUGS = [
  'inteligencia-pricing',
  'trade-kam-campo',
  'supply-distribuicao',
  'sac-customer-experience',
  'marketing-lancamentos',
  'ti-dados-governanca',
] as const;

export const GUIDE_SLUGS = ['ausencia-ruptura-sortimento-giro'] as const;

export type AreaSlug = (typeof AREA_SLUGS)[number];
export type GuideSlug = (typeof GUIDE_SLUGS)[number];

export const PATHS = {
  platform: '/plataforma',
  features: '/funcionalidades',
  locator: '/produtos/localizador',
  conecta: '/produtos/conecta',
  integrations: '/integracoes',
  coverage: '/cobertura',
  // entradas por objetivo, área e funcionalidade; cada área tem página própria
  solutions: '/solucoes',
  customers: '/clientes',
  plans: '/planos',
  research: '/pesquisas',
  compare: '/comparativos',
  about: '/sobre',
  trust: '/confianca',
  resources: '/recursos',
  cases: '/recursos/casos',
  changelog: '/recursos/changelog',
  blog: '/blog',
  contact: '/contato',
} as const;

export const areaPath = (slug: string) => `/solucoes/${slug}`;
export const guidePath = (slug: string) => `${PATHS.resources}/${slug}`;

// As nove funcionalidades do Dinn. As oito com tela têm página em
// /funcionalidades/<slug>. Dinn Conecta (com as integrações) usa /produtos/conecta.
export const FEATURE_SLUGS = [
  'ruptura',
  'giro',
  'preco',
  'localizador',
  'mercado',
  'oportunidades',
  'distribuicao',
  'jean',
] as const;

// Nomes antigos (páginas e links de antes de 03/11/2026) que apontam para uma das nove.
export const FEATURE_ALIAS: Record<string, string> = {
  disponibilidade: 'ruptura', estimado: 'ruptura', historico: 'ruptura', 'giro-preco': 'giro', 'tempo-real': 'localizador',
  insights: 'jean', activities: 'jean', priorizacao: 'jean', alertas: 'jean', exportacoes: 'conecta',
};

export const featurePath = (slug: string) => {
  const id = FEATURE_ALIAS[slug] ?? slug;
  if (id === 'conecta') return PATHS.conecta;
  return (FEATURE_SLUGS as readonly string[]).includes(id) ? `${PATHS.features}/${id}` : PATHS.features;
};
