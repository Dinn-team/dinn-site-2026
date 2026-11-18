import type { ReactElement } from 'react';
import { FrameCamera, reduced, type Def, type DemoProps } from './AppDemos';

/**
 * Padrão das telas animadas do Dinn no site (skill motion-de-produto).
 * Toda página que mostra uma tela do produto usa este componente. Ele liga a câmera
 * por planos, o cursor em arco e o corte em movimento, que vivem em AppDemos.tsx.
 *
 * - Laço (sem `step`): hero e abas. O cursor faz o roteiro da tela em loop.
 * - Passo (`step`): palco de rolagem. Cada passo enquadra o alvo da tela.
 * - Troque a tela com `key`, para o laço recomeçar limpo.
 *
 * Ver docs/padrao-telas-animadas.md.
 */
export function ProductScreen({ demo: Demo, step, def }: { demo: (p: DemoProps) => ReactElement; step?: number; def?: Def }) {
  return (
    <FrameCamera.Provider value={!reduced()}>
      <Demo step={step} def={def} />
    </FrameCamera.Provider>
  );
}
