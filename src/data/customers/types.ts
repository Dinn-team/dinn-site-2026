// Tipos das páginas de cliente (/clientes/<slug>). O texto vem dos documentos em
// Content-cases/case-*.md, enxugado em frases curtas (STE). Os trechos que o
// documento marca como "REVISAR" ou "só publicar com confirmação" ficam fora do
// ar: citação com `approved: false` não aparece na página. Para publicar,
// confirme com o cliente e troque para `true`.
// Regra de 05/11/2026: página de cliente não expõe dado sensível do caso (produto, rede,
// concorrente, valor em reais, praça) nem o nome de quem deu o depoimento. Os números
// de uso do próprio Dinn podem aparecer. Dado do cliente vira grupo, classe ou faixa.
// Libbs e Lilly entraram em 03/11/2026, com a mesma regra: trecho marcado como
// "REVISAR" no documento fica fora, e cada citação tem `approved: false`.

export type VizItem = { label: string; value: number; display?: string; hot?: boolean };
/** Gráficos e telas do produto de cada bloco (ver CaseViz.tsx). Só números que já estão no texto. */
export type Viz =
  | { kind: 'bars'; title: string; sub?: string; unit?: string; digits?: number; max?: number; items: VizItem[]; note?: string }
  | { kind: 'donut'; title: string; sub?: string; items: { label: string; value: number }[]; center?: { value: string; label: string }; note?: string }
  | { kind: 'line'; title: string; sub?: string; labels: string[]; series: { name: string; values: number[] }[]; unit?: string; digits?: number; note?: string }
  | { kind: 'compare'; title: string; from: { value: string; label: string }; to: { value: string; label: string }; note?: string }
  | { kind: 'timeline'; title: string; steps: { date: string; label: string }[] }
  | { kind: 'screen'; screen: 'home' | 'locator' | 'market'; caption: string }
  | { kind: 'art'; art: 'supply' | 'sac' | 'trade' | 'launch' | 'govern' | 'pricing' | 'layers'; g?: string; caption?: string };
/** Depoimento anônimo: sem nome de pessoa. `role` traz só a função (ex.: "Consultor de vendas"). */
export type Quote = { text: string; role: string; approved: boolean };
export type Table = { title?: string; head: string[]; rows: string[][]; note?: string };
export type Block = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  tables?: Table[];
  viz?: Viz[];
  note?: string;
  quote?: Quote;
  /** Mais de um depoimento no mesmo bloco da história. */
  quotes?: Quote[];
};
export type Customer = {
  slug: string;
  /** mesmo nome usado em src/lib/clients.ts */
  name: string;
  sector: string;
  hq: string;
  useCase: string;
  about: string;
  title: string;
  summary: string;
  metaDescription: string;
  metrics: { value: string; label: string }[];
  quote?: Quote;
  intro: string[];
  problem: Block;
  solution: Block;
  stories: Block[];
  results: Block[];
  next: Block;
};

export type Lang = 'pt' | 'en' | 'es';
