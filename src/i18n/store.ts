import { loadDictionary, isLoaded } from './translations';
import { pageLanguage, routeToLanguage } from './page-language';

export type Language = 'pt' | 'en' | 'es';

type Listener = (lang: Language) => void;

let currentLanguage: Language = 'pt';
const listeners: Set<Listener> = new Set();

const isClient = typeof window !== 'undefined';

function notify() {
  listeners.forEach((listener) => listener(currentLanguage));
}

/** Garante o dicionário em memória antes de avisar os componentes, senão eles
 *  renderizariam uma vez em PT e outra no idioma certo. */
function ensureDictionary(lang: Language) {
  if (isLoaded(lang)) return;
  loadDictionary(lang).then(notify);
}

export function initLanguage() {
  if (!isClient) return;

  // Página com idioma na URL (/en/..., /es/...): a URL vence a escolha guardada
  // e passa a ser a escolha do leitor.
  const urlLang = pageLanguage();
  if (urlLang !== 'pt') {
    currentLanguage = urlLang;
    localStorage.setItem('dinn-lang', urlLang);
    ensureDictionary(currentLanguage);
    return;
  }

  const savedLang = localStorage.getItem('dinn-lang') as Language;
  if (savedLang && ['pt', 'en', 'es'].includes(savedLang)) {
    currentLanguage = savedLang;
    // Página em PT com versão no idioma guardado (blog/artigos): vai para ela.
    if (routeToLanguage(savedLang)) return;
    ensureDictionary(currentLanguage);
    return;
  }

  // Detect from browser
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('pt')) {
    currentLanguage = 'pt';
  } else if (browserLang.startsWith('es')) {
    currentLanguage = 'es';
  } else if (browserLang.startsWith('en')) {
    currentLanguage = 'en';
  } else {
    currentLanguage = 'pt'; // Fallback
  }

  localStorage.setItem('dinn-lang', currentLanguage);
  if (routeToLanguage(currentLanguage)) return;
  ensureDictionary(currentLanguage);
}

export function getLanguage(): Language {
  return currentLanguage;
}

export function setLanguage(lang: Language) {
  if (currentLanguage === lang) return;
  currentLanguage = lang;
  if (isClient) {
    localStorage.setItem('dinn-lang', lang);
  }

  // Blog e artigos têm uma URL por idioma: trocar o idioma leva à versão
  // equivalente (ou à lista do blog no idioma, se o artigo não foi traduzido).
  if (isClient && routeToLanguage(lang, { useFallback: true })) return;

  // Já em memória: troca na hora. Ainda não: o dicionário é buscado e os
  // componentes são avisados quando ele chega.
  if (isLoaded(lang)) {
    notify();
  } else {
    loadDictionary(lang).then(notify);
  }
}

export function subscribeToLanguage(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

// Initialize on first load if we're in the browser
if (isClient) {
  initLanguage();
}
