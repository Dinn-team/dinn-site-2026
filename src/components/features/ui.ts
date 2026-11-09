import type { Language } from '@/i18n/store';

// Textos fixos da página de funcionalidade (títulos de seção, rótulos do índice, botões).
// O conteúdo de cada funcionalidade fica em content/<slug>.ts (PT) e content/{en,es}/<slug>.ts.
// EN em Simplified Technical English (ASD-STE100). ES em espanhol latino-americano neutro.

export type FeatureUi = {
  pageNav: string;
  nav: { como: string; jean: string; onde: string; dentro: string; ler: string; faz: string; usar: string; junto: string; duvidas: string };
  seeHow: string;
  illustrative: string;
  howTitle: string;
  whoUses: string;
  jeanLabel: string;
  jeanTitle: string;
  jeanLink: string;
  thinking: string;
  querying: string;
  srQuestion: string;
  srAnswer: string;
  doesTitle: string;
  does: string;
  doesNot: string;
  consult: string;
  analyze: string;
  extract: string;
  seePage: string;
  faqTitle: string;
};

export const UI: Record<Language, FeatureUi> = {
  pt: {
    pageNav: 'Nesta página',
    nav: { como: 'Como funciona', jean: 'Pergunte à Jean', onde: 'Onde aparece', dentro: 'Por dentro', ler: 'Como ler', faz: 'O que faz e não faz', usar: 'Como usar', junto: 'Junto com outras', duvidas: 'Dúvidas' },
    seeHow: 'Ver como funciona →',
    illustrative: 'Dados e nomes ilustrativos.',
    howTitle: 'Como funciona',
    whoUses: 'Quem usa',
    jeanLabel: 'Jean, a assistente da Dinn',
    jeanTitle: 'Pergunte à Jean',
    jeanLink: 'Conheça a Jean',
    thinking: 'Pensando',
    querying: 'Consultando os dados',
    srQuestion: 'Pergunta:',
    srAnswer: 'Resposta da Jean:',
    doesTitle: 'O que faz e o que não faz',
    does: 'Faz',
    doesNot: 'Não faz',
    consult: 'Consultar',
    analyze: 'Analisar',
    extract: 'Extrair',
    seePage: 'Ver a página',
    faqTitle: 'Dúvidas frequentes',
  },
  en: {
    pageNav: 'On this page',
    nav: { como: 'How it works', jean: 'Ask Jean', onde: 'Where it appears', dentro: 'Inside', ler: 'How to read', faz: 'What it does', usar: 'How to use', junto: 'Related features', duvidas: 'FAQ' },
    seeHow: 'See how it works →',
    illustrative: 'Illustrative data and names.',
    howTitle: 'How it works',
    whoUses: 'Who uses it',
    jeanLabel: 'Jean, the Dinn assistant',
    jeanTitle: 'Ask Jean',
    jeanLink: 'Meet Jean',
    thinking: 'Thinking',
    querying: 'Checking the data',
    srQuestion: 'Question:',
    srAnswer: 'Jean answers:',
    doesTitle: 'What it does and does not do',
    does: 'Does',
    doesNot: 'Does not',
    consult: 'Look up',
    analyze: 'Analyze',
    extract: 'Export',
    seePage: 'See the page',
    faqTitle: 'Frequently asked questions',
  },
  es: {
    pageNav: 'En esta página',
    nav: { como: 'Cómo funciona', jean: 'Pregunta a Jean', onde: 'Dónde aparece', dentro: 'Por dentro', ler: 'Cómo leer', faz: 'Qué hace y qué no', usar: 'Cómo usar', junto: 'Funciones relacionadas', duvidas: 'Preguntas' },
    seeHow: 'Ver cómo funciona →',
    illustrative: 'Datos y nombres ilustrativos.',
    howTitle: 'Cómo funciona',
    whoUses: 'Quién la usa',
    jeanLabel: 'Jean, la asistente de Dinn',
    jeanTitle: 'Pregunta a Jean',
    jeanLink: 'Conoce a Jean',
    thinking: 'Pensando',
    querying: 'Consultando los datos',
    srQuestion: 'Pregunta:',
    srAnswer: 'Respuesta de Jean:',
    doesTitle: 'Qué hace y qué no hace',
    does: 'Hace',
    doesNot: 'No hace',
    consult: 'Consultar',
    analyze: 'Analizar',
    extract: 'Extraer',
    seePage: 'Ver la página',
    faqTitle: 'Preguntas frecuentes',
  },
};
