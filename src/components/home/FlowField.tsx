import { useRef, type CSSProperties } from 'react';
import { useLive } from './useLive';

// Fundo escuro do herói: as correntes da cena continuando para fora dela.
// Duas esteiras (trilho com bordas de neon, caixinhas andando e pulsos de luz)
// e dois veios de rio (azul, em ondas, com fios claros correndo) atravessam a
// área escura, saindo da base da imagem. Substitui a rede neural, que não
// falava a língua da cena. SVG puro: só deslocamento de traço, sem biblioteca.

const W = 1600;
const H = 600;

type Lane = { y: number; amp: number; waves: number; phase: number; slope: number };

// curva em S que desce suavemente da esquerda para a direita (sentido da correnteza)
function curve(l: Lane, dy = 0): string {
  const N = 72;
  let d = '';
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const x = t * W;
    const y = l.y + l.slope * t + l.amp * Math.sin(t * Math.PI * 2 * l.waves + l.phase) + dy;
    d += `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

const BELTS: Lane[] = [
  { y: 150, amp: 52, waves: 1.15, phase: 0.4, slope: 90 },
  { y: 372, amp: 44, waves: 0.9, phase: 2.3, slope: 56 },
];
const RIVERS: Lane[] = [
  { y: 60, amp: 64, waves: 1.45, phase: 1.1, slope: 270 },
  { y: 262, amp: 58, waves: 1.25, phase: 3.5, slope: 210 },
];

// período do desenho do traço (soma dash+gap) e duração do ciclo, para o loop fechar
const dash = (period: number, secs: number, delay = 0): CSSProperties =>
  ({ '--p': period, '--d': `${secs}s`, animationDelay: `${-delay}s` }) as CSSProperties;

export function FlowField() {
  const ref = useRef<HTMLDivElement>(null);
  useLive(ref); // fora da tela as correntes dormem

  return (
    <div className="dh-flowfield" ref={ref} aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        {RIVERS.map((r, i) => {
          const d = curve(r);
          return (
            <g key={`r${i}`} className="ff-river">
              <path d={d} className="ff-river-bed" />
              <path d={d} className="ff-dash ff-river-streak" strokeDasharray="110 250" style={dash(360, 7.5, i * 2.6)} />
              <path d={d} className="ff-dash ff-river-glint" strokeDasharray="26 154" style={dash(180, 4.2, i * 1.3)} />
            </g>
          );
        })}
        {BELTS.map((b, i) => (
          <g key={`b${i}`} className="ff-belt">
            <path d={curve(b)} className="ff-belt-surface" />
            <path d={curve(b, -11)} className="ff-belt-edge" />
            <path d={curve(b, 11)} className="ff-belt-edge" />
            {/* caixinhas andando no trilho */}
            <path d={curve(b)} className="ff-dash ff-belt-boxes" strokeDasharray="15 41" style={dash(56, 2.8, i * 0.9)} />
            {/* pulsos de luz nas bordas, como o neon da esteira da cena */}
            <path d={curve(b, -11)} className="ff-dash ff-belt-pulse" strokeDasharray="80 640" style={dash(720, 8, i * 3.1)} />
            <path d={curve(b, 11)} className="ff-dash ff-belt-pulse" strokeDasharray="80 640" style={dash(720, 8, i * 3.1 + 4)} />
          </g>
        ))}
      </svg>
    </div>
  );
}
