// Conteúdo das páginas de funcionalidade (/funcionalidades/<slug>).
// Fonte: dinn-manager-app/docs/site-reproducao/funcionalidades/<slug>.md (A1 a A10).
// Textos em português, no padrão do Suporte. Dados fictícios e legenda "Dados e nomes ilustrativos."

/** Tela do Dinn que a "porta" mostra. Cada uma é uma demo fiel ao app (RealHomeDemos e RealMapDemos). */
export type ScreenKey = 'rupture' | 'turn' | 'price' | 'locator' | 'market' | 'opps' | 'dist' | 'jean';

/** Uma tela parada: a fase da demo e o alvo que a câmera enquadra. Sem `to`, mostra a tela inteira. */
export type Shot = { screen: ScreenKey; phase: number; to?: string };

export type Door = {
  title: string;
  text: string;
  /** Tela do produto, parada no ponto certo. */
  shot?: Shot;
  /** Quando a porta é a tela de outra funcionalidade. */
  link?: { slug: string; label: string };
};

/** Uma volta da conversa com a Jean: a pergunta, a resposta, um cartão com o resultado e os botões de próximo passo. */
export type ChatTurn = {
  q: string;
  a: string;
  card?: { title: string; rows: [string, string][] };
  steps?: string[];
};

export type Stage = { tab: string; title: string; text: string; shot: Shot };

export type FeatureContent = {
  slug: string;
  meta: { title: string; description: string };
  hero: { title: string; sub: string; note: string };
  steps: { title: string; text: string }[];
  /** Seção "Pergunte à Jean": a conversa animada e as perguntas de exemplo. */
  jean: { lead: string; prompts: string[]; turns: ChatTurn[] };
  doors: { title: string; intro: string; items: Door[] };
  inside: { title: string; sub: string; stages: Stage[] };
  read: { title: string; intro: string; rows: { label: string; text: string; how: string }[] };
  does: string[];
  doesNot: string[];
  use: { title: string; consult: string[]; analyze: string[]; extract: string[]; formats?: string[]; note?: string };
  related: { title: string; intro: string; items: { slug: string; name: string; text: string }[] };
  faq: { question: string; answer: string }[];
  cta: { title: string; text: string; button: string };
};
