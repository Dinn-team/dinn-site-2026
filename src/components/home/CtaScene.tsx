import { useRef } from 'react';
import { useLive } from './useLive';

// Cena da chamada final: o Dinn no centro, com a corrente de dados subindo
// para o cérebro. Mesma técnica do herói: uma imagem e camadas animadas por
// cima, recortadas por máscaras geradas dela (public/cta/). As classes e os
// quadros-chave são os do herói (home-v2.css); aqui só mudam as máscaras e as
// coordenadas dos detalhes.

const SCENE_W = 1672;
const SCENE_H = 941;

// as barras de lilás no centro, em 5 colunas que acendem em onda
const BARS = [0, 1, 2, 3, 4];
const BARS_X0 = 700;
const BARS_W = 290 / BARS.length;
const pct = (x: number) => `${(x / SCENE_W) * 100}%`;

export function CtaScene() {
  const ref = useRef<HTMLDivElement>(null);
  useLive(ref);

  return (
    <div className="dh-scene cta-scene" ref={ref} aria-hidden="true">
      <img
        className="dh-scene-img"
        src="/cta/cena-dinn.webp"
        width={SCENE_W}
        height={SCENE_H}
        alt=""
        loading="lazy"
        decoding="async"
      />

      <div className="dh-fx dh-fx-sky"><i /><i /><i /><i /></div>

      <div className="dh-fx dh-fx-water"><div className="dh-flow dh-flow-a" /><div className="dh-flow dh-flow-b" /><div className="dh-flow dh-flow-c" /></div>
      <div className="dh-fx dh-fx-fall"><div className="dh-flow" /></div>

      <div className="dh-fx dh-fx-holo"><div className="dh-holo-glow" /><div className="dh-holo-scan" /></div>
      <div className="dh-fx dh-fx-bars">
        {BARS.map((k) => (
          <i
            key={k}
            style={{
              clipPath: `inset(0 ${pct(SCENE_W - BARS_X0 - (k + 1) * BARS_W)} 0 ${pct(BARS_X0 + k * BARS_W)})`,
              animationDelay: `${k * 0.16}s`,
            }}
          />
        ))}
      </div>

      <svg className="dh-fx-svg" viewBox={`0 0 ${SCENE_W} ${SCENE_H}`} preserveAspectRatio="none">
        <g className="dh-data">
          <circle cx="772" cy="440" r="2.8" />
          <circle cx="806" cy="436" r="2.2" style={{ animationDelay: '-0.7s' }} />
          <circle cx="836" cy="444" r="3" style={{ animationDelay: '-1.4s' }} />
          <circle cx="868" cy="438" r="2.4" style={{ animationDelay: '-2.1s' }} />
          <circle cx="896" cy="446" r="2.2" style={{ animationDelay: '-2.8s' }} />
        </g>
        <ellipse className="dh-ring dh-ring-dinn" cx="832" cy="640" rx="300" ry="62" />
        <ellipse className="dh-ring dh-ring-dinn dh-ring-late" cx="832" cy="640" rx="300" ry="62" />
      </svg>

      <div className="cta-fade" />
    </div>
  );
}
