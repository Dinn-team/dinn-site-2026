// Dados e textos do blog para as páginas geradas no build (servidor).
// Não importar em componentes de cliente: traz os três dicionários inteiros.

import { client } from '@/sanity/lib/client';
import { articlesByLanguageQuery, postsByLanguageQuery } from '@/sanity/lib/queries';
import { ptBR } from '@/i18n/locales/pt';
import { enUS } from '@/i18n/locales/en';
import { es419 } from '@/i18n/locales/es';
import { articlePath, blogPath, categoryKey, DATE_LOCALE, LANGS, type Lang } from '@/i18n/routes';

type Blog = typeof ptBR.blog;

const BLOG_LABELS: Record<Lang, Blog> = {
  pt: ptBR.blog,
  en: enUS.blog as Blog,
  es: es419.blog as Blog,
};

export function blogLabels(lang: Lang): Blog {
  return BLOG_LABELS[lang];
}

/** Nome da categoria no idioma da página (aceita valores antigos em PT). */
export function categoryLabel(lang: Lang, value: string): string {
  const labels = BLOG_LABELS[lang].categories as Record<string, string>;
  return labels[categoryKey(value)] ?? value;
}

export interface PostAlternate {
  language: Lang;
  slug: string;
}

export interface BlogPostData {
  _id: string;
  _updatedAt?: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  coverImage?: any;
  author?: string;
  publishedAt: string;
  categories?: string[];
  language: Lang;
  translationKey: string;
  body?: any[];
  alternates?: PostAlternate[];
}

// No build de produção, falha de rede no Sanity derruba o build (a Vercel
// mantém o site anterior no ar). Silenciar publicaria um blog vazio e apagaria
// todos os artigos. Em desenvolvimento seguimos com lista vazia.
async function fetchPosts(query: string, lang: Lang): Promise<BlogPostData[]> {
  try {
    return (await client.fetch(query, { lang })) ?? [];
  } catch (error) {
    if (import.meta.env.PROD) throw error;
    console.error(`Erro ao buscar artigos (${lang}):`, error);
    return [];
  }
}

export function getPosts(lang: Lang) {
  return fetchPosts(postsByLanguageQuery, lang);
}

export function getArticles(lang: Lang) {
  return fetchPosts(articlesByLanguageQuery, lang);
}

/** Versões da página (inclui a própria) para o hreflang e o seletor. */
export function articleAlternates(post: BlogPostData, lang: Lang) {
  const known = new Map<Lang, string>([[lang, articlePath(lang, post.slug.current)]]);
  for (const alt of post.alternates ?? []) {
    if (LANGS.includes(alt.language) && alt.slug && !known.has(alt.language)) {
      known.set(alt.language, articlePath(alt.language, alt.slug));
    }
  }
  return LANGS.filter((code) => known.has(code)).map((code) => ({ lang: code, href: known.get(code)! }));
}

/** Para onde o seletor leva quando o artigo não existe naquele idioma. */
export function blogFallbacks(): Record<Lang, string> {
  return { pt: blogPath('pt'), en: blogPath('en'), es: blogPath('es') };
}

export function formatPostDate(lang: Lang, dateString: string): string {
  return new Date(dateString).toLocaleDateString(DATE_LOCALE[lang], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Tempo de leitura (média de 200 palavras por minuto). */
export function calcReadTime(body?: any[]): number {
  if (!body) return 1;
  const totalChars = body.reduce((acc: number, block: any) => {
    if (block._type === 'block' && block.children) {
      return acc + block.children.reduce((a: number, child: any) => a + (child.text?.length || 0), 0);
    }
    return acc;
  }, 0);
  const words = totalChars / 5;
  return Math.max(1, Math.ceil(words / 200));
}
