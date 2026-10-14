import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Logos exibidos na faixa de clientes da home, na ordem de exibição.
// Cada logo é um arquivo em public/clientes, sem fundo, e aparece com a mesma
// altura das demais (30px). O item só entra se o arquivo existir, então para
// publicar um logo novo basta colocar o arquivo na pasta (ex.: lilly.svg).
// Antes de acrescentar um nome, a relação com a Dinn (cliente ativo, projeto,
// piloto, parceiro) deve estar classificada e o uso da marca aprovado.

export type ClientLogo = { name: string; src: string; width?: number; height?: number };

const CANDIDATES: { name: string; files: string[]; width?: number; height?: number }[] = [
  { name: 'Eurofarma', files: ['2TT34cxYkS2JUU2rklS0yDIU5c.avif'], width: 512, height: 92 },
  { name: 'Libbs', files: ['YewE4auu86Zyxd9HTI5pPwyZujk.avif'], width: 512, height: 189 },
  { name: 'Marjan', files: ['marjanlogo-removebg-preview.png'], width: 392, height: 129 },
  { name: 'Sanofi', files: ['q5GXskJxl7qrQpg4qttvwnhJI.avif'], width: 512, height: 132 },
  { name: 'Lilly', files: ['lilly-logo-png.png', 'lilly.svg', 'lilly.png', 'lilly.webp', 'lilly.avif'], width: 1631, height: 889 },
];

/** Só roda no servidor (frontmatter do Astro): confere quais arquivos existem. */
export function getClientLogos(): ClientLogo[] {
  const dir = join(process.cwd(), 'public', 'clientes');
  const out: ClientLogo[] = [];
  for (const c of CANDIDATES) {
    const file = c.files.find((f) => existsSync(join(dir, f)));
    if (file) out.push({ name: c.name, src: `/clientes/${file}`, width: c.width, height: c.height });
  }
  return out;
}
