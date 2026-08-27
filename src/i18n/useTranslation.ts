import { useState, useEffect } from 'react';
import { getLanguage, subscribeToLanguage, Language } from './store';
import { getDictionary, resolvePath } from './translations';

// For non-React usage (e.g. Astro components on client side or vanilla JS)
export function getTranslation(lang: Language, key: string) {
  // Cai no PT enquanto o dicionário do idioma escolhido não chegou.
  const dictionary = getDictionary(lang) || getDictionary('pt');
  const text = resolvePath(dictionary, key);
  return text !== undefined ? text : key;
}

export function useTranslation() {
  const [lang, setLang] = useState<Language>(getLanguage());
  // Força novo render quando o dicionário chega sem que o idioma tenha mudado.
  const [, setRevision] = useState(0);

  useEffect(() => {
    const unsubscribe = subscribeToLanguage((newLang) => {
      setLang(newLang);
      setRevision((r) => r + 1);
    });
    // Double check in case it changed between mount and effect
    setLang(getLanguage());
    return unsubscribe;
  }, []);

  const t = (key: string) => {
    return getTranslation(lang, key);
  };

  return { t, lang };
}
