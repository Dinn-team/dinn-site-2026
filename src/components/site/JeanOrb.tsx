// Ícone da Jean: a grade de pontos que pulsa. É o mesmo desenho do Orion e do
// Dinn Manager (classe `insights-orb` lá). Use sempre este componente para a
// Jean: não troque por Sparkles, Brain ou outro ícone da biblioteca.
// Cada ponto tem o atraso de animação do original, então a onda sai do centro.

const DOTS: [number, number, number][] = [
  [12, 2.4, -0.71], [5.6, 5.6, -0.75], [8.8, 5.6, -0.88], [12, 5.6, -0.94], [15.2, 5.6, -0.88], [18.4, 5.6, -0.75],
  [5.6, 8.8, -0.88], [8.8, 8.8, -1.07], [12, 8.8, -1.17], [15.2, 8.8, -1.07], [18.4, 8.8, -0.88],
  [2.4, 12, -0.71], [5.6, 12, -0.94], [8.8, 12, -1.17], [12, 12, -1.4], [15.2, 12, -1.17], [18.4, 12, -0.94], [21.6, 12, -0.71],
  [5.6, 15.2, -0.88], [8.8, 15.2, -1.07], [12, 15.2, -1.17], [15.2, 15.2, -1.07], [18.4, 15.2, -0.88],
  [5.6, 18.4, -0.75], [8.8, 18.4, -0.88], [12, 18.4, -0.94], [15.2, 18.4, -0.88], [18.4, 18.4, -0.75],
  [12, 21.6, -0.71],
];

export function JeanOrb({ size = 24, className = '' }: { size?: number | string; className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={`jean-orb ${className}`.trim()} style={{ flex: 'none' }}>
      {DOTS.map(([cx, cy, delay]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.1" style={{ animationDelay: `${delay}s` }} />
      ))}
    </svg>
  );
}

/** Para listas de ícones que esperam um componente com a prop `size` (menu lateral). */
export const JeanOrbIcon = ({ size = 18 }: { size?: number | string }) => <JeanOrb size={size} />;
