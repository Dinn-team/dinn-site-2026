// Tipos e ordem da faixa da home. Sem acesso a arquivos: pode ir para o cliente.
export type Lab = {
  slug: string; name: string; country: string;
  /** Código ISO do país (bandeira em /flags/<cc>.svg). */
  cc: string;
  group: 'global' | 'brasil';
  /** Posição: por receita (global) ou por registros ativos na Anvisa (Brasil). */
  rank: number;
  revenueBn?: number | null; year?: number | null; source?: string | null;
  /** Receita por ano, em US$ bi, do mais antigo ao mais novo (global). */
  series?: [number, number][];
  /** Medicamentos com registro ativo na Anvisa (Brasil). */
  regs?: number;
  /** Caminho do logo, quando existe arquivo. Sem logo, a tela mostra o nome em texto. */
  logo?: string;
  /** Chave do cliente (slug da página em /clientes), quando o laboratório é cliente. */
  client?: string;
  /** Logos dos clientes são brancos: a tela pinta com a cor da marca. */
  tint?: { color: string; w: number; h: number };
};
export type LogoCredit = { name: string; title: string; page: string; license: string };

/** Os 5 clientes e os maiores laboratórios com logo, 20 no total, na ordem da faixa da home. */
export function homeLabs(labs: Lab[]): { others: Lab[] } {
  // Os laboratórios dos cases (client) ficam fora da faixa: os cartões de caso são anônimos
  // e um logo ao lado deles ligaria o caso ao nome.
  const others = labs.filter((l) => l.group === 'global' && !l.client && l.logo).slice(0, 15);
  return { others };
}
