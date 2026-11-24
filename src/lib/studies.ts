// Relatórios e estudos de mercado: as pesquisas da Inteligência de Mercado que
// foram aprovadas no Orion. Os dados vêm de src/data/estudos.json, gravado por
// `node scripts/estudos-sync.mjs` (título, resumo, amostra e PDFs nos 3 idiomas).
//
// Para uso no servidor (build). Componentes de cliente só importam TIPOS daqui.

import raw from '@/data/estudos.json';
import { ptBR } from '@/i18n/locales/pt';
import { enUS } from '@/i18n/locales/en';
import { es419 } from '@/i18n/locales/es';
import { DATE_LOCALE, LANGS, studiesPath, studyPath, type Lang } from '@/i18n/routes';
import { gradientSrc, type DeckGradient } from '@/lib/presentations';

type StudyText = typeof ptBR.studies;

const LABELS: Record<Lang, StudyText> = {
  pt: ptBR.studies,
  en: enUS.studies as StudyText,
  es: es419.studies as StudyText,
};

export function studyLabels(lang: Lang): StudyText {
  return LABELS[lang];
}

/** Funções do formulário de contato (mesmos valores do HubSpot). */
export function studyRoles(lang: Lang): { value: string; label: string }[] {
  const dict = { pt: ptBR, en: enUS, es: es419 }[lang];
  return dict.contact.form.roles;
}

/** Mensagens de erro do formulário de contato, reaproveitadas no modal. */
export function studyErrors(lang: Lang) {
  const dict = { pt: ptBR, en: enUS, es: es419 }[lang];
  return {
    required: dict.contact.errors.required,
    requiredChoice: dict.contact.errors.requiredChoice,
    emailInvalid: dict.contact.errors.emailInvalid,
    emailPersonal: dict.contact.errors.emailPersonal,
  };
}

export interface StudySamplePage {
  src: string;
  /** Número da página no PDF (1 = capa). */
  page: number;
}

export interface StudyLang {
  title: string;
  subtitle: string;
  abstract: string[];
  keywords: string[];
  pages: number;
  bytes: number;
  file: string;
  cover: string;
  sample: StudySamplePage[];
}

export interface Study {
  id: string;
  slug: string;
  token: string;
  hidden: boolean;
  gradient: DeckGradient;
  /** Data da aprovação no Orion (AAAA-MM-DD). */
  publishedAt: string;
  reviewer: string;
  langs: Record<Lang, StudyLang>;
}

/** Estudos publicados, do mais novo para o mais antigo. */
export function getStudies(): Study[] {
  return (raw as unknown as Study[]).filter((s) => !s.hidden && LANGS.every((l) => s.langs?.[l]?.title));
}

export function studyGradient(study: Study): string {
  return gradientSrc(study.gradient);
}

/** Data AAAA-MM-DD sem o deslize de fuso (meio-dia evita cair no dia anterior). */
export function formatStudyDate(lang: Lang, date: string): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString(DATE_LOCALE[lang], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Troca `{chave}` pelo valor. */
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? `{${key}}`));
}

export function studyAlternates(slug?: string) {
  return LANGS.map((code) => ({ lang: code, href: slug ? studyPath(code, slug) : studiesPath(code) }));
}
