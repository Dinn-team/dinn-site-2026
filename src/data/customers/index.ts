import type { Customer, Lang } from './types';
import * as marjan from './marjan';
import * as sanofi from './sanofi';
import * as eurofarma from './eurofarma';
import * as libbs from './libbs';
import * as lilly from './lilly';

export * from './types';
export { aggregateFor, type Aggregate } from './aggregate';

// Cada cliente tem um arquivo com o texto em PT, EN e ES (mesma estrutura).
type Entry = { pt: Customer; en?: Customer; es?: Customer };
const all: Entry[] = [marjan, sanofi, eurofarma, libbs, lilly];

/** Lista em português, a base das rotas e dos cartões. */
export const customers: Customer[] = all.map((c) => c.pt);

export const customerSlug = (name: string): string | null => customers.find((c) => c.name === name)?.slug ?? null;

/** Cai no português quando o idioma pedido ainda não tem o texto. */
export const customerBySlug = (slug: string, lang: Lang = 'pt'): Customer | undefined => {
  const entry = all.find((c) => c.pt.slug === slug);
  return entry ? entry[lang] ?? entry.pt : undefined;
};
