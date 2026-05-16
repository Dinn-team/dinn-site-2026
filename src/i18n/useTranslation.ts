import { useState, useEffect } from 'react';
import { getLanguage, subscribeToLanguage, Language } from './store';
import { translations, resolvePath } from './translations';

// For non-React usage (e.g. Astro components on client side or vanilla JS)
export function getTranslation(lang: Language, key: string) {
  const dictionary = translations[lang] || translations['pt'];
  const text = resolvePath(dictionary, key);
  return text !== undefined ? text : key;
}

export function useTranslation() {
  const [lang, setLang] = useState<Language>(getLanguage());

  useEffect(() => {
    const unsubscribe = subscribeToLanguage((newLang) => {
      setLang(newLang);
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
