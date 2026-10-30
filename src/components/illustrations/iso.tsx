import type { CSSProperties, ReactNode } from 'react';

// Biblioteca de ilustrações em linha da Dinn: base isométrica.
// Projeção: x cresce para a direita e para baixo, y para a esquerda e para baixo,
// z sobe. A câmera olha de +x +y: as faces visíveis de uma caixa são a de cima,
// a da esquerda (y + profundidade) e a da direita (x + largura). Quem está mais
// perto (x + y maior) deve ser desenhado depois.
const C = Math.cos(Math.PI / 6);
const S = 0.5;

export type V3 = [number, number, number];

export const pt = (x: number, y: number, z: number): [number, number] => [(x - y) * C, (x + y) * S - z];

const fmt = (n: number) => n.toFixed(2);
export const pts = (list: V3[]) => list.map(([x, y, z]) => pt(x, y, z).map(fmt).join(',')).join(' ');

/** Caixa com as três faces visíveis. Preenchimento e traço vêm do CSS (.il-face). */
export function Box({
  x, y, z = 0, w, d, h, topClass = '', cls = '',
}: {
  x: number; y: number; z?: number; w: number; d: number; h: number; topClass?: string; cls?: string;
}) {
  const x1 = x + w;
  const y1 = y + d;
  const z1 = z + h;
  return (
    <>
      <polygon className={`il-face ${cls}`} points={pts([[x, y1, z], [x1, y1, z], [x1, y1, z1], [x, y1, z1]])} />
      <polygon className={`il-face ${cls}`} points={pts([[x1, y, z], [x1, y1, z], [x1, y1, z1], [x1, y, z1]])} />
      <polygon className={`il-face ${cls} ${topClass}`} points={pts([[x, y, z1], [x1, y, z1], [x1, y1, z1], [x, y1, z1]])} />
    </>
  );
}

/** Linha entre dois pontos 3D. */
export function Line3({ a, b, className = 'il-line' }: { a: V3; b: V3; className?: string }) {
  const [x1, y1] = pt(...a);
  const [x2, y2] = pt(...b);
  return <line className={className} x1={fmt(x1)} y1={fmt(y1)} x2={fmt(x2)} y2={fmt(y2)} />;
}

/** Linha poligonal com vários pontos 3D. */
export function Poly3({ list, className = 'il-line' }: { list: V3[]; className?: string }) {
  return <polyline className={className} points={pts(list)} />;
}

/** Moldura comum: todas as ilustrações têm a mesma proporção (1,44:1), para alinhar
 *  nos cartões. `vb` enquadra o desenho com folga de 20 %. */
export function Frame({ label, vb, children }: { label?: string; vb: string; children: ReactNode }) {
  return (
    <svg className="il" viewBox={vb} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      {children}
    </svg>
  );
}

export const vars = (v: Record<string, string | number>) => v as CSSProperties;
