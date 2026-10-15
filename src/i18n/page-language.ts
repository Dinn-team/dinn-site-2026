// Idioma da página × idioma escolhido no seletor.
//
// O seletor (store.ts) guarda a escolha do leitor no navegador. Páginas que
// existem em vários idiomas, cada uma na sua URL (blog e artigos), declaram no
// <html> o idioma em que foram geradas e as versões equivalentes:
//
//   <html data-page-lang="en" data-lang-route="auto">
//   <link rel="alternate" hreflang="pt-BR" href=".../articles/x/">
//   <meta name="dinn:lang-fallback:es" content="/es/blog/">
//
// Este módulo lê essas marcas e leva o leitor à versão do idioma escolhido.
// Só roda no navegador.

import { HTML_LANG, isLang, type Lang } from './routes';

/** Idioma em que a página atual foi gerada (PT quando não declara). */
export function pageLanguage(): Lang {
  if (typeof document === 'undefined') return 'pt';
  const declared = document.documentElement.dataset.pageLang;
  return isLang(declared) ? declared : 'pt';
}

function alternateHref(lang: Lang): string | null {
  const link = document.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${HTML_LANG[lang]}"]`,
  );
  return link?.getAttribute('href') ?? null;
}

function fallbackHref(lang: Lang): string | null {
  const meta = document.querySelector<HTMLMetaElement>(`meta[name="dinn:lang-fallback:${lang}"]`);
  return meta?.content ?? null;
}

/**
 * Leva o leitor à versão da página no idioma `lang`, se a página acompanha o
 * seletor (`data-lang-route="auto"`). Devolve true quando iniciou a navegação.
 *
 * `useFallback` é para troca explícita no seletor: sem versão equivalente, vai
 * para a lista do blog no idioma. Na abertura da página não usamos fallback:
 * sem tradução, o leitor continua no artigo em português.
 */
export function routeToLanguage(lang: Lang, options: { useFallback?: boolean } = {}): boolean {
  if (typeof document === 'undefined') return false;
  if (document.documentElement.dataset.langRoute !== 'auto') return false;
  if (pageLanguage() === lang) return false;

  const target = alternateHref(lang) ?? (options.useFallback ? fallbackHref(lang) : null);
  if (!target) return false;

  // O hreflang é absoluto (https://dinn.ai/...), mas o leitor pode estar em
  // localhost ou num preview da Vercel: navegamos só pelo caminho, mantendo o
  // domínio em que ele está.
  const url = new URL(target, window.location.href);
  const destination = url.pathname + url.search + url.hash;
  if (destination === window.location.pathname + window.location.search + window.location.hash) return false;

  // replace: o botão "voltar" não pode devolver o leitor a uma página que o
  // redirecionaria de novo para o idioma escolhido.
  window.location.replace(destination);
  return true;
}
