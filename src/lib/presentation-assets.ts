// Recursos para gerar o PDF e o PPTX de uma apresentação (uso só no build).
//
// Os degradês do site são AVIF. O PowerPoint e o PDF não leem AVIF, então cada
// degradê vira JPEG leve, já com a camada escura que a página usa sob texto
// branco (40 % na capa, 55 % na citação). Cada recurso é gerado uma vez e fica
// em memória durante o build.

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import type { Inline, SlideBlock } from '@/lib/presentations';

/** Tamanho lógico do slide: 16:9. PDF e PPTX escalam a partir daqui. */
export const SLIDE = { w: 1280, h: 720 } as const;
/** Margem lateral e superior dos slides. */
export const PAD = 72;

/** Cores da marca em hexadecimal (o PPTX e o PDF não leem os tokens do tema). */
export const COLOR = {
  ink: '08090A',
  text: '0A0A0A',
  body: '262626',
  muted: '737373',
  primary: '7008E7',
  white: 'FFFFFF',
  whiteSoft: 'E9E9EA',
} as const;

const root = process.cwd();

async function readPublic(relative: string): Promise<Buffer> {
  return readFile(path.join(root, 'public', relative));
}

// ---- Fontes (PDF) ----
// Arquivos WOFF estáticos dos pacotes @fontsource. O PDF embute só os glifos usados.
const FONT_FILES = {
  inter: '@fontsource/inter/files/inter-latin-400-normal.woff',
  interBold: '@fontsource/inter/files/inter-latin-600-normal.woff',
  display: '@fontsource/roboto/files/roboto-latin-400-normal.woff',
} as const;

export type FontKey = keyof typeof FONT_FILES;

const fontCache = new Map<FontKey, Promise<Buffer>>();
export function loadFont(key: FontKey): Promise<Buffer> {
  let promise = fontCache.get(key);
  if (!promise) {
    promise = readFile(path.join(root, 'node_modules', FONT_FILES[key]));
    fontCache.set(key, promise);
  }
  return promise;
}

// ---- Imagens ----
const imageCache = new Map<string, Promise<Buffer>>();
function cached(key: string, make: () => Promise<Buffer>): Promise<Buffer> {
  let promise = imageCache.get(key);
  if (!promise) {
    promise = make();
    imageCache.set(key, promise);
  }
  return promise;
}

const gradientFile = (name: string) => (name === 'g03' ? 'gradients/g03.avif' : `gradients/web/${name}.avif`);

/** Fundo de slide: degradê em 1600×900, com camada preta (0 a 1) por cima. */
export function backgroundJpeg(name: string, overlay = 0): Promise<Buffer> {
  return cached(`bg:${name}:${overlay}`, async () => {
    let image = sharp(await readPublic(gradientFile(name))).resize(1600, 900, { fit: 'cover' });
    if (overlay > 0) {
      const layer = await sharp({
        create: { width: 1600, height: 900, channels: 4, background: { r: 8, g: 9, b: 10, alpha: overlay } },
      })
        .png()
        .toBuffer();
      image = sharp(await image.toBuffer()).composite([{ input: layer }]);
    }
    return image.jpeg({ quality: 74, mozjpeg: true }).toBuffer();
  });
}

/** Faixa vertical fina do degradê, para a borda esquerda dos slides de seção. */
export function stripJpeg(name: string): Promise<Buffer> {
  return cached(`strip:${name}`, async () =>
    sharp(await readPublic(gradientFile(name)))
      .resize(24, 720, { fit: 'fill' })
      .jpeg({ quality: 82 })
      .toBuffer(),
  );
}

/** Logo da Dinn: `light` (branco, para fundo escuro) ou `dark` (para fundo claro). */
export function logoPng(tone: 'light' | 'dark'): Promise<Buffer> {
  return cached(`logo:${tone}`, () => readPublic(`logo/Dinn_logo_v2_${tone === 'light' ? 'Light' : 'Dark'}.png`));
}
/** Proporção do PNG do logo (largura ÷ altura). */
export const LOGO_RATIO = 394 / 152;

// ---- Texto dos slides ----
/** Parágrafo para os arquivos: trechos com negrito e, se for item de lista, `bullet`. */
export interface Para {
  runs: Inline[];
  bullet?: boolean;
}

/** Blocos do slide em lista plana de parágrafos (cada item de lista vira um). */
export function slideParagraphs(blocks: SlideBlock[]): Para[] {
  const out: Para[] = [];
  for (const block of blocks) {
    if (block.type === 'p') out.push({ runs: block.inline });
    else for (const item of block.items) out.push({ runs: item, bullet: true });
  }
  return out;
}

/** Envolve a citação em aspas curvas, como a página faz. */
export function quoteParagraphs(blocks: SlideBlock[]): Para[] {
  const paras = slideParagraphs(blocks).map((p) => ({ ...p, runs: p.runs.map((r) => ({ ...r })) }));
  if (paras.length === 0) return paras;
  const first = paras[0].runs;
  first[0] = { ...first[0], text: `“${first[0].text}` };
  const last = paras[paras.length - 1].runs;
  last[last.length - 1] = { ...last[last.length - 1], text: `${last[last.length - 1].text}”` };
  return paras;
}

/** Endereço curto para mostrar na capa: sem protocolo e sem barra final. */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

/** Nome do arquivo baixado. */
export function downloadName(slug: string, format: 'pdf' | 'pptx'): string {
  return `dinn-${slug}.${format}`;
}
