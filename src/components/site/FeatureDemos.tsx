import type { ReactElement } from 'react';
import type { DemoProps } from './AppDemos';
import { ConnectionMapDemo } from './offer/ConnectionMap';
import { PriceDemo2, RuptureDemo, TurnDemo } from './RealHomeDemos';
import { DistributionDemo2, JeanDemo2, LocatorDemo2, MarketDemo2, OpportunitiesDemo2 } from './RealMapDemos';
import { SupportDemo } from './RealSupportDemo';

// Qual tela do Dinn cada funcionalidade e cada área mostra. As telas são fiéis ao app
// (RealHomeDemos.tsx, RealMapDemos.tsx e RealSupportDemo.tsx, prints de nov/2026).
// Padrão de uso nas páginas: ProductScreen.tsx e docs/padrao-telas-animadas.md.

type Demo = (p: DemoProps) => ReactElement;

/** A tela de cada funcionalidade. Dinn Conecta usa o mapa de conexões da página /produtos/conecta. */
export const FEATURE_DEMO: Record<string, Demo> = {
  ruptura: RuptureDemo,
  giro: TurnDemo,
  preco: PriceDemo2,
  localizador: LocatorDemo2,
  mercado: MarketDemo2,
  oportunidades: OpportunitiesDemo2,
  distribuicao: DistributionDemo2,
  jean: JeanDemo2,
  conecta: ConnectionMapDemo,
  suporte: SupportDemo,
};

/** A tela de cada área de Soluções. */
export const AREA_DEMO: Record<string, Demo> = {
  'inteligencia-pricing': MarketDemo2,
  'trade-kam-campo': RuptureDemo,
  'supply-distribuicao': DistributionDemo2,
  'sac-customer-experience': LocatorDemo2,
  'marketing-lancamentos': TurnDemo,
  'ti-dados-governanca': ConnectionMapDemo,
};

/** Seis passos do ciclo da plataforma, cada um numa tela (modo passo). */
export const CYCLE_SCREENS: { Demo: Demo; step: number }[] = [
  { Demo: RuptureDemo, step: 1 },
  { Demo: LocatorDemo2, step: 2 },
  { Demo: MarketDemo2, step: 1 },
  { Demo: OpportunitiesDemo2, step: 3 },
  { Demo: JeanDemo2, step: 3 },
  { Demo: LocatorDemo2, step: 3 },
];
