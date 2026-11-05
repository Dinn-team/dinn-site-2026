import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import global from '@/data/laboratorios.json';
import brasil from '@/data/labs-brasil.json';
import type { Lab, LogoCredit } from './labs-types';
export type { Lab, LogoCredit } from './labs-types';

// Laboratórios que a Dinn pode atender (página /laboratorios e faixa da home).
// - Global: src/data/laboratorios.json, ranking por receita (fonte e ano em cada linha).
// - Brasil: src/data/labs-brasil.json, laboratórios com medicamento ativo na Anvisa,
//   por número de registros (scripts/build-labs-data.mjs).
// Logos em public/laboratorios/logos (scripts/fetch-lab-logos.mjs); os dos clientes em public/clientes.
// Só roda no servidor (frontmatter do Astro): confere quais arquivos existem.

const CC: Record<string, string> = {
  EUA: 'us', 'Suíça': 'ch', 'Reino Unido': 'gb', 'França': 'fr', Alemanha: 'de', Dinamarca: 'dk', 'Japão': 'jp', Israel: 'il',
  'Canadá': 'ca', 'Bélgica': 'be', Espanha: 'es', Irlanda: 'ie', 'Itália': 'it', 'Índia': 'in', Brasil: 'br',
};
// Clientes: logos brancos em public/clientes, pintados com a cor da marca (site oficial de cada um).
const CLIENTS: Record<string, { color: string; src: string; w: number; h: number }> = {
  lilly: { color: '#D52B1E', src: '/clientes/lilly-logo-png.png', w: 1631, h: 889 },
  sanofi: { color: '#7A00E6', src: '/clientes/q5GXskJxl7qrQpg4qttvwnhJI.avif', w: 512, h: 132 },
  eurofarma: { color: '#00358E', src: '/clientes/2TT34cxYkS2JUU2rklS0yDIU5c.avif', w: 512, h: 92 },
  libbs: { color: '#23C02E', src: '/clientes/YewE4auu86Zyxd9HTI5pPwyZujk.avif', w: 512, h: 189 },
  marjan: { color: '#00557C', src: '/clientes/marjanlogo-removebg-preview.png', w: 392, h: 129 },
};
const clientOf = (slug: string, name: string): string | undefined => {
  if (slug === 'eli-lilly') return 'lilly';
  if (slug === 'sanofi') return 'sanofi';
  const n = name.toLowerCase();
  if (n.startsWith('eurofarma')) return 'eurofarma';
  if (n.startsWith('libbs')) return 'libbs';
  if (n.startsWith('marjan')) return 'marjan';
  return undefined;
};
// Logos já baixados para laboratórios do Brasil (nome na lista da Anvisa → arquivo).
const BR_LOGO: Record<string, string> = { EMS: 'ems-grupo-nc', 'Aché Laboratórios Farmacêuticos': 'ache', 'Cimed Industria': 'cimed', 'União Química Farmacêutica Nacional': 'uniao-quimica' };

type G = { slug: string; name: string; country: string; rank: number; revenueBn: number; year: number; source: string; series?: [number, number][] };
type B = { rank: number; slug: string; name: string; regs: number; cnpjRoot: string };

export function getLabs(): Lab[] {
  const dir = join(process.cwd(), 'public', 'laboratorios', 'logos');
  const file = (s: string) => (existsSync(join(dir, `${s}.svg`)) ? `/laboratorios/logos/${s}.svg` : undefined);
  const withClient = (lab: Lab): Lab => {
    const key = clientOf(lab.slug, lab.name);
    if (!key) return lab;
    const c = CLIENTS[key];
    return { ...lab, client: key, logo: c.src, tint: { color: c.color, w: c.w, h: c.h } };
  };
  const g = (global as unknown as G[]).map((x) => withClient({ ...x, group: 'global', cc: CC[x.country] ?? 'un', logo: file(x.slug) }));
  const b = (brasil as unknown as B[]).map((x) => withClient({
    slug: x.slug, name: x.name, country: 'Brasil', cc: 'br', group: 'brasil', rank: x.rank, regs: x.regs,
    logo: BR_LOGO[x.name] ? file(BR_LOGO[x.name]) : undefined,
  }));
  return [...g, ...b];
}

/** Créditos dos logos do Wikimedia Commons (licença e página de origem). */
export function getLogoCredits(): LogoCredit[] {
  const path = join(process.cwd(), 'public', 'laboratorios', 'logos', 'manifest.json');
  if (!existsSync(path)) return [];
  const m = JSON.parse(readFileSync(path, 'utf8')) as Record<string, { found: boolean; title?: string; page?: string; license?: string }>;
  const names = new Map((global as unknown as G[]).map((l) => [l.slug, l.name]));
  for (const [s, n] of Object.entries({ 'ems-grupo-nc': 'EMS', ache: 'Aché', cimed: 'Cimed', 'uniao-quimica': 'União Química' })) names.set(s, n);
  return Object.entries(m)
    .filter(([slug, v]) => v.found && names.has(slug))
    .map(([slug, v]) => ({ name: names.get(slug)!, title: v.title ?? '', page: v.page ?? '', license: v.license ?? '' }));
}
