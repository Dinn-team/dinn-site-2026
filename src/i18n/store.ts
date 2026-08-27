import { loadDictionary, isLoaded } from './translations';

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

  const savedLang = localStorage.getItem('dinn-lang') as Language;
  if (savedLang && ['pt', 'en', 'es'].includes(savedLang)) {
    currentLanguage = savedLang;
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
