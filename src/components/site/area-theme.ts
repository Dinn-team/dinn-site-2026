import type { ComponentType } from 'react';
import { IlGovern, IlLaunch, IlPricing, IlSac, IlSupply, IlTrade } from '@/components/illustrations/areas';

// Ilustração e degradês de cada área. Usados nos casos de uso e nas páginas de
// solução. Claros ficam atrás da ilustração (traço escuro); escuros levam texto
// branco com camada escura. Ver rules/DESIGN_SYSTEM_V2.md, seções 6.1 e 10.3.

export const AREA_ART: Record<string, ComponentType> = {
  'inteligencia-pricing': IlPricing,
  'trade-kam-campo': IlTrade,
  'supply-distribuicao': IlSupply,
  'sac-customer-experience': IlSac,
  'marketing-lancamentos': IlLaunch,
  'ti-dados-governanca': IlGovern,
};

export const AREA_LIGHT: Record<string, string> = {
  'inteligencia-pricing': 'web/lilas-azul',
  'trade-kam-campo': 'g00',
  'supply-distribuicao': 'web/laranja-bolha',
  'sac-customer-experience': 'g10',
  'marketing-lancamentos': 'web/pessego',
  'ti-dados-governanca': 'web/azul-claro',
};

export const AREA_DARK: Record<string, string> = {
  'inteligencia-pricing': 'web/roxo-noite',
  'trade-kam-campo': 'web/azul-noite',
  'supply-distribuicao': 'web/verde-noite',
  'sac-customer-experience': 'web/laranja-noite',
  'marketing-lancamentos': 'web/vinho-noite',
  'ti-dados-governanca': 'web/grafite',
};

// Fechamento com texto escuro: só degradês claros.
export const AREA_CLOSING: Record<string, string> = {
  'inteligencia-pricing': 'web/lilas-azul',
  'trade-kam-campo': 'web/azul-claro',
  'supply-distribuicao': 'web/laranja-bolha',
  'sac-customer-experience': 'g10',
  'marketing-lancamentos': 'web/pessego',
  'ti-dados-governanca': 'g03',
};

export const gradUrl = (g: string) => `url(/gradients/${g}.avif)`;

/** Tira a marcação *destaque* de um título: no v2 o título tem uma cor só. */
export const plain = (s: string) => String(s ?? '').replace(/\*+/g, '');
