// Degradê de fundo das telas do Dinn nas páginas de funcionalidade (como na home: a tela branca da
// plataforma sobre um degradê escuro que realça o contraste com o fundo branco do site).
// Cada tela tem o seu degradê e cada funcionalidade começa num ponto diferente da paleta, então
// nenhuma porta, etapa, herói ou conversa repete o degradê dentro da página nem entre funcionalidades.

const PALETTE = ['web/roxo-noite', 'web/azul-noite', 'web/verde-noite', 'web/laranja-noite', 'web/vinho-noite', 'web/grafite', 'g11', 'g08'] as const;
const ORDER = ['ruptura', 'giro', 'preco', 'localizador', 'mercado', 'oportunidades', 'distribuicao'];
const START = { door: 0, stage: 4, hero: 7, jean: 5 } as const;

export type GradKind = keyof typeof START;

/** Nome do degradê (para gradUrl) da tela `i` de um tipo, na página da funcionalidade `slug`. */
export const featureGrad = (slug: string, kind: GradKind, i = 0): string => {
  const k = Math.max(0, ORDER.indexOf(slug));
  return PALETTE[(3 * k + START[kind] + i) % PALETTE.length];
};
