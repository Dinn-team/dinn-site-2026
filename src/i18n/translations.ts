import { ptBR } from './locales/pt';
import type { Language } from './store';

// Só o PT entra no bundle inicial. EN e ES viram chunks separados, buscados
// apenas se o visitante trocar de idioma — antes, os três dicionários (~68 KB
// de fonte) eram baixados por todo mundo para usar um.
//
// Isso não muda o que o visitante vê primeiro: o HTML já era gerado sempre em
// PT e trocado no cliente. O que muda é que a troca agora custa uma requisição.
const loaders: Record<Exclude<Language, 'pt'>, () => Promise<Record<string, unknown>>> = {
  en: () => import('./locales/en').then((m) => m.enUS),
  es: () => import('./locales/es').then((m) => m.es419),
};

const loaded: Partial<Record<Language, Record<string, unknown>>> = {
  pt: ptBR as unknown as Record<string, unknown>,
};

/** Dicionário já em memória, ou undefined se o idioma ainda não foi buscado. */
export function getDictionary(lang: Language) {
  return loaded[lang];
}

export function isLoaded(lang: Language) {
  return loaded[lang] !== undefined;
}

/** Busca o dicionário do idioma. Resolve imediatamente se já estiver carregado. */
export async function loadDictionary(lang: Language): Promise<void> {
  if (loaded[lang]) return;
  const loader = loaders[lang as Exclude<Language, 'pt'>];
  if (!loader) return;
  try {
    loaded[lang] = await loader();
  } catch {
    // Rede falhou: seguimos em PT em vez de quebrar a página.
  }
}

export type TranslationKey = string;

// Helper function to resolve dot-notation paths
export function resolvePath(obj: any, path: string): string | any {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}
