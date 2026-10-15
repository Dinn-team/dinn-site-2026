import { useState, useEffect } from 'react';
import { getLanguage, subscribeToLanguage, Language } from './store';
import { getDictionary, isLoaded, resolvePath } from './translations';

// For non-React usage (e.g. Astro components on client side or vanilla JS)
export function getTranslation(lang: Language, key: string) {
  // Cai no PT enquanto o dicionário do idioma escolhido não chegou.
  const dictionary = getDictionary(lang) || getDictionary('pt');
  let text = resolvePath(dictionary, key);
  // Chave que ainda não existe no idioma escolhido cai no português, em vez de
  // mostrar o nome da chave na tela.
  if (text === undefined && lang !== 'pt') text = resolvePath(getDictionary('pt'), key);
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
    const current = getLanguage();
    setLang(current);
    // Se o dicionário chegou entre o render e esta inscrição, o aviso já
    // passou sem ninguém ouvindo: renderiza de novo para não ficar em PT.
    if (current !== 'pt' && isLoaded(current)) setRevision((r) => r + 1);
    return unsubscribe;
  }, []);

  const t = (key: string) => {
    return getTranslation(lang, key);
  };

  return { t, lang };
}
