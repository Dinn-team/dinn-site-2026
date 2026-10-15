// Rotas do blog por idioma. Sem dependências de dicionário nem de Sanity, para
// poder ser usado tanto no servidor (build) quanto nos componentes do cliente.
//
//   PT  /blog/        /articles/<slug>/
//   EN  /en/blog/     /en/articles/<slug>/
//   ES  /es/blog/     /es/articles/<slug>/
//
// PT é o idioma padrão e fica sem prefixo, como o resto do site.

export type Lang = 'pt' | 'en' | 'es';

export const LANGS: Lang[] = ['pt', 'en', 'es'];
export const DEFAULT_LANG: Lang = 'pt';

/** Valor do atributo `lang` do <html> e do hreflang. */
export const HTML_LANG: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es-419' };

/** og:locale (formato do Open Graph). */
export const OG_LOCALE: Record<Lang, string> = { pt: 'pt_BR', en: 'en_US', es: 'es_LA' };

/** Locale usado para formatar datas. */
export const DATE_LOCALE: Record<Lang, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-419' };

const PREFIX: Record<Lang, string> = { pt: '', en: '/en', es: '/es' };

export function isLang(value: unknown): value is Lang {
  return value === 'pt' || value === 'en' || value === 'es';
}

export function blogPath(lang: Lang): string {
  return `${PREFIX[lang]}/blog/`;
}

export function articlePath(lang: Lang, slug: string): string {
  return `${PREFIX[lang]}/articles/${slug}/`;
}

// Artigos antigos guardam a categoria como texto em português ("Estoque").
// Novos usam uma chave estável ("estoque"); o nome exibido vem do dicionário.
const LEGACY_CATEGORY: Record<string, string> = {
  'gestão': 'gestao',
  'gestao': 'gestao',
  'estoque': 'estoque',
  'preços': 'precos',
  'precos': 'precos',
  'mercado': 'mercado',
  'tendências': 'tendencias',
  'tendencias': 'tendencias',
  'estratégia': 'estrategia',
  'estrategia': 'estrategia',
  'tecnologia': 'tecnologia',
};

/** Normaliza o valor salvo no Sanity para a chave da categoria. */
export function categoryKey(value: string): string {
  return LEGACY_CATEGORY[value.trim().toLowerCase()] ?? value;
}
