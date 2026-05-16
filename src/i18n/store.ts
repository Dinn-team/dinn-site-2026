export type Language = 'pt' | 'en' | 'es';

type Listener = (lang: Language) => void;

let currentLanguage: Language = 'pt';
const listeners: Set<Listener> = new Set();

const isClient = typeof window !== 'undefined';

export function initLanguage() {
  if (!isClient) return;

  const savedLang = localStorage.getItem('dinn-lang') as Language;
  if (savedLang && ['pt', 'en', 'es'].includes(savedLang)) {
    currentLanguage = savedLang;
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
  listeners.forEach(listener => listener(lang));
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
