import { useEffect, useMemo, useRef, useState, type ReactElement } from 'react';
import type { Def, DemoProps } from '@/components/site/AppDemos';
import { ProductScreen } from '@/components/site/ProductScreen';
import { PriceDemo2, RuptureDemo, TurnDemo } from '@/components/site/RealHomeDemos';
import { DistributionDemo2, JeanDemo2, LocatorDemo2, MarketDemo2, OpportunitiesDemo2 } from '@/components/site/RealMapDemos';
import type { ScreenKey, Shot } from './types';

type Demo = (p: DemoProps) => ReactElement;

const SCREENS: Record<ScreenKey, Demo> = {
  rupture: RuptureDemo,
  turn: TurnDemo,
  price: PriceDemo2,
  locator: LocatorDemo2,
  market: MarketDemo2,
  opps: OpportunitiesDemo2,
  dist: DistributionDemo2,
  jean: JeanDemo2,
};

/** Roteiro de uma tela parada: vai direto à fase e enquadra o alvo (modo passo da demo). */
export const stillDef = (s: Shot): Def => ({ beats: [], steps: [{ phase: s.phase, to: s.to }], final: s.phase });

/**
 * Tela do Dinn parada num ponto do roteiro (uma "porta" da funcionalidade).
 * Só monta quando chega perto da tela do visitante: são várias telas por página.
 */
export function ShotView({ shot, eager = false }: { shot: Shot; eager?: boolean }) {
  const box = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(eager);
  useEffect(() => {
    if (on) return;
    const el = box.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { rootMargin: '300px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [on]);
  const def = useMemo(() => stillDef(shot), [shot]);
  const Demo = SCREENS[shot.screen];
  return (
    <div ref={box} className="fx-still">
      {on && <ProductScreen demo={Demo} step={0} def={def} />}
    </div>
  );
}
