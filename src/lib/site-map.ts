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
  solutions: '/solucoes',
  trust: '/confianca',
  resources: '/recursos',
  cases: '/recursos/casos',
  changelog: '/recursos/changelog',
  blog: '/blog',
} as const;

export const areaPath = (slug: string) => `${PATHS.solutions}/${slug}`;
export const guidePath = (slug: string) => `${PATHS.resources}/${slug}`;
