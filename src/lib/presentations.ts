// Apresentações (decks de slides gerados dos artigos do blog).
//
// Cada artigo (documento `post` do Sanity) pode ter o campo `presentation`:
//   { generatedAt, slides: [{ _key, kind, title, body }] }
// A apresentação usa o MESMO slug do artigo, no idioma dele. Só existe quando
// há pelo menos 2 slides.
//
// O `body` de cada slide é Markdown simples: parágrafos separados por linha em
// branco, itens de lista com "- " e **negrito**. Aqui ele vira dados (nunca
// HTML), e quem renderiza escreve o texto como texto. Assim um slide não
// consegue injetar marcação na página.
//
// Para uso no servidor (build). Os componentes de cliente só importam TIPOS
// daqui (`import type`), para não levar o Sanity nem os dicionários ao bundle.

import { client } from '@/sanity/lib/client';
import { presentationsByLanguageQuery } from '@/sanity/lib/queries';
import { ptBR } from '@/i18n/locales/pt';
import { enUS } from '@/i18n/locales/en';
import { es419 } from '@/i18n/locales/es';
import { cleanPostText } from '@/lib/blog-clean';
import { LANGS, presentationPath, presentationsPath, type Lang } from '@/i18n/routes';
import type { BlogPostData } from '@/lib/blog';

type PresentationText = typeof ptBR.presentations;

const LABELS: Record<Lang, PresentationText> = {
  pt: ptBR.presentations,
  en: enUS.presentations as PresentationText,
  es: es419.presentations as PresentationText,
};

export function presentationLabels(lang: Lang): PresentationText {
  return LABELS[lang];
}

/** Menor número de slides para a apresentação existir. */
export const MIN_SLIDES = 2;

export type SlideKind = 'capa' | 'sumario' | 'secao' | 'citacao';
const KINDS: SlideKind[] = ['capa', 'sumario', 'secao', 'citacao'];

/** Slide como o Sanity entrega. Todos os campos podem faltar. */
export interface RawSlide {
  _key?: string;
  kind?: string;
  title?: string;
  body?: string;
}

export interface PresentationData {
  generatedAt?: string;
  slides?: RawSlide[];
}

/** Trecho de texto; `strong` marca o que veio entre `**`. */
export interface Inline {
  text: string;
  strong?: boolean;
}

export type SlideBlock =
  | { type: 'p'; inline: Inline[] }
  | { type: 'ul'; items: Inline[][] };

/** Slide pronto para exibir: tipo válido, título e texto já em blocos. */
export interface DeckSlide {
  key: string;
  kind: SlideKind;
  title: string;
  blocks: SlideBlock[];
}

const LIST_MARKER = /^\s{0,3}[-*•]\s+(.*)$/;

/** `**negrito**` vira trechos. Texto sem par de `**` fica como veio. */
export function parseInline(text: string): Inline[] {
  const out: Inline[] = [];
  const re = /\*\*(.+?)\*\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) out.push({ text: text.slice(last, match.index) });
    out.push({ text: match[1], strong: true });
    last = match.index + match[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last) });
  return out.length > 0 ? out : [{ text }];
}

/** Markdown simples do slide em parágrafos e listas. */
export function parseSlideBody(body?: string): SlideBlock[] {
  if (!body) return [];
  const blocks: SlideBlock[] = [];
  let paragraph: string[] = [];
  let list: string[] | null = null;

  const flushParagraph = () => {
    if (paragraph.length > 0) blocks.push({ type: 'p', inline: parseInline(paragraph.join(' ')) });
    paragraph = [];
  };
  const flushList = () => {
    if (list && list.length > 0) blocks.push({ type: 'ul', items: list.map(parseInline) });
    list = null;
  };

  for (const rawLine of body.replace(/\r\n?/g, '\n').split('\n')) {
    const line = rawLine.trimEnd();
    if (line.trim() === '') {
      flushParagraph();
      flushList();
      continue;
    }
    const item = LIST_MARKER.exec(line);
    if (item) {
      flushParagraph();
      (list ??= []).push(item[1].trim());
      continue;
    }
    if (list && /^\s+\S/.test(line)) {
      // Linha recuada logo após um item continua o mesmo item.
      list[list.length - 1] += ` ${line.trim()}`;
      continue;
    }
    flushList();
    paragraph.push(line.trim());
  }
  flushParagraph();
  flushList();
  return blocks;
}

/** Texto do slide sem marcação, para descrição e busca. */
export function slidePlainText(slide: DeckSlide): string {
  const inline = (parts: Inline[]) => parts.map((p) => p.text).join('');
  return slide.blocks
    .map((b) => (b.type === 'p' ? inline(b.inline) : b.items.map(inline).join(' ')))
    .join(' ');
}

/** Limpa rótulos internos de roadmap (ver blog-clean.ts) linha a linha. */
function cleanBody(body: string): string {
  return body
    .split('\n')
    .map((line) => (line.trim() ? cleanPostText(line) : line))
    .join('\n');
}

/** Slides válidos de um artigo. Vazio quando não há apresentação. */
export function deckSlides(presentation?: PresentationData | null): DeckSlide[] {
  const raw = presentation?.slides;
  if (!Array.isArray(raw)) return [];
  const slides: DeckSlide[] = [];
  raw.forEach((slide, index) => {
    const title = typeof slide?.title === 'string' ? cleanPostText(slide.title.trim()) : '';
    if (!title) return;
    const kind = KINDS.includes(slide.kind as SlideKind) ? (slide.kind as SlideKind) : 'secao';
    const body = typeof slide.body === 'string' ? cleanBody(slide.body) : '';
    slides.push({ key: slide._key || `slide-${index + 1}`, kind, title, blocks: parseSlideBody(body) });
  });
  return slides;
}

/** O artigo tem apresentação publicável (2 slides ou mais)? */
export function hasPresentation(post: Pick<BlogPostData, 'presentation'>): boolean {
  return deckSlides(post.presentation).length >= MIN_SLIDES;
}

/**
 * Degradês da marca para a capa, o cartão e a citação de cada apresentação.
 * Todos são escuros o bastante para texto branco sob uma camada escura.
 * A ordem alterna cor quente e cor fria, para vizinhos não se parecerem.
 */
export const DECK_GRADIENTS = [
  'roxo-noite',
  'laranja-noite',
  'verde-noite',
  'azul-noite',
  'vinho-noite',
  'grafite',
  'rubro',
] as const;

export type DeckGradient = (typeof DECK_GRADIENTS)[number];

/** Caminho público (AVIF, 1920 px) de um degradê da apresentação. */
export function gradientSrc(name: DeckGradient | 'g03'): string {
  return name === 'g03' ? '/gradients/g03.avif' : `/gradients/web/${name}.avif`;
}

export type CardVariant = 'a' | 'b' | 'c';

/** Composição do cartão pela posição na grade de 3 colunas: muda a cada linha. */
export function cardVariant(index: number): CardVariant {
  return (['a', 'c', 'b'] as const)[(index + Math.floor(index / 3)) % 3];
}

export interface PresentationPost extends BlogPostData {
  slides: DeckSlide[];
  /** Degradê próprio da apresentação (capa, cartão e citação). */
  gradient: DeckGradient;
}

/**
 * Cada apresentação ganha um degradê pela ordem de publicação (a mais antiga
 * primeiro). Uma apresentação nova entra no fim da fila e não muda a cor das
 * outras. Em ordem de publicação, vizinhos sempre têm degradês diferentes.
 */
function assignGradients<T extends { slug: { current: string }; publishedAt: string }>(
  posts: T[],
): Map<string, DeckGradient> {
  const oldestFirst = [...posts].sort(
    (a, b) => a.publishedAt.localeCompare(b.publishedAt) || a.slug.current.localeCompare(b.slug.current),
  );
  return new Map(oldestFirst.map((post, i) => [post.slug.current, DECK_GRADIENTS[i % DECK_GRADIENTS.length]]));
}

// Mesmo critério do blog: no build de produção, falha de rede derruba o build
// (a Vercel mantém o site anterior). Silenciar publicaria uma lista vazia.
export async function getPresentations(lang: Lang): Promise<PresentationPost[]> {
  let posts: BlogPostData[] = [];
  try {
    posts = (await client.fetch(presentationsByLanguageQuery, { lang })) ?? [];
  } catch (error) {
    if (import.meta.env.PROD) throw error;
    console.error(`Erro ao buscar apresentações (${lang}):`, error);
    return [];
  }
  const decks = posts
    .map((post) => ({
      ...post,
      excerpt: post.excerpt ? cleanPostText(post.excerpt) : post.excerpt,
      slides: deckSlides(post.presentation),
    }))
    .filter((post) => post.slides.length >= MIN_SLIDES);
  const gradients = assignGradients(decks);
  return decks.map((post) => ({ ...post, gradient: gradients.get(post.slug.current) ?? DECK_GRADIENTS[0] }));
}

/**
 * Versões da apresentação em cada idioma (inclui a própria), para o hreflang e
 * para o seletor. Só entram idiomas em que a apresentação existe.
 */
export function presentationAlternates(post: BlogPostData, lang: Lang) {
  const known = new Map<Lang, string>([[lang, presentationPath(lang, post.slug.current)]]);
  for (const alt of post.alternates ?? []) {
    if (alt.hasPresentation && LANGS.includes(alt.language) && alt.slug && !known.has(alt.language)) {
      known.set(alt.language, presentationPath(alt.language, alt.slug));
    }
  }
  return LANGS.filter((code) => known.has(code)).map((code) => ({ lang: code, href: known.get(code)! }));
}

/** Para onde o seletor leva quando a apresentação não existe naquele idioma. */
export function presentationFallbacks(): Record<Lang, string> {
  return { pt: presentationsPath('pt'), en: presentationsPath('en'), es: presentationsPath('es') };
}
