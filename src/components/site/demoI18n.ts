/// <reference types="astro/client" />
import { useTranslation } from '@/i18n/useTranslation';
import { getLanguage, type Language } from '@/i18n/store';
import type { Def } from './AppDemos';

// Idioma das telas de demonstração do produto (RealKit, RealHomeDemos, RealMapDemos,
// RealSupportDemo, JeanDemos e src/components/support). O texto-fonte fica em português
// dentro do componente. Cada texto vai por `t('texto em português')`, que procura a
// tradução em src/components/site/demo-i18n/*.json. Texto sem tradução volta em português.
// Confira as chaves com `node scripts/check-demo-i18n.mjs`.

type Entry = { en: string; es: string };
const modules = import.meta.glob('./demo-i18n/*.json', { eager: true, import: 'default' }) as Record<string, Record<string, Entry>>;
const REG: Record<string, Entry> = Object.assign({}, ...Object.values(modules));

/** Traduz um texto em português. `{n}` e outros marcadores ficam no texto e se trocam com `fill`. */
export const dtr = (lang: Language, pt: string): string => (lang === 'pt' ? pt : REG[pt]?.[lang] ?? pt);

/** Troca marcadores `{nome}` por valores. */
export const fill = (text: string, vars: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));

export function useDemoT() {
  const { lang } = useTranslation();
  const t = (pt: string, vars?: Record<string, string | number>) => {
    const out = dtr(lang as Language, pt);
    return vars ? fill(out, vars) : out;
  };
  return { t, lang: lang as Language };
}

/** Texto digitado pelo cursor (`type: [chave, texto]`) também troca de idioma. */
export function localizeDef(def: Def, t: (pt: string) => string): Def {
  return { ...def, beats: def.beats.map((b) => (b.type ? { ...b, type: [b.type[0], t(b.type[1])] as [string, string] } : b)) };
}

/** Código de idioma do navegador para formatar números e datas. */
export const demoLocale = (lang: Language = getLanguage()) => (lang === 'en' ? 'en-US' : lang === 'es' ? 'es-ES' : 'pt-BR');
