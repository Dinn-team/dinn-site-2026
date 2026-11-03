import type { CSSProperties, ReactNode } from 'react';
import { rng } from '@/components/home/neural';
import { Box, Line3, Poly3, pt, pts, type V3 } from '@/components/illustrations/iso';
import { easeOut, seg, SCENES, type SceneProps } from './AreaScenes';

// Cenas dos casos de uso: uma por história, guiadas pela rolagem em quatro
// tempos. Mesma linguagem das ilustrações em linha do site (src/components/
// illustrations): desenho isométrico, traço de 1 px, faces na cor do fundo e um
// único detalhe em roxo. Cor de apoio da marca: laranja para o problema e
// verde-limão para o que se resolveu. Os PDVs, redes e cidades são genéricos:
// preservam a indústria e os dados; só os números do próprio usuário (60% e
// 45%) aparecem.

function Iso({ title, vb, children }: { title: string; vb: string; children: ReactNode }) {
  return (
    <svg className="il cs-iso" viewBox={vb} role="img" aria-label={title}>
      <g transform="translate(0 14)">{children}</g>
    </svg>
  );
}

/** Peça que desce ao entrar: opacidade e deslocamento vêm do progresso. */
const drop = (v: number, dy = -14): CSSProperties => ({ opacity: v, translate: `0px ${((1 - v) * dy).toFixed(1)}px` });

const Plate = ({ x, y, w, d }: { x: number; y: number; w: number; d: number }) => <Box x={x} y={y} w={w} d={d} h={4} />;

// ── 1. Dias de estoque em Fortaleza ────────────────────────────────────────
function FrozenStockScene({ p, L }: SceneProps) {
  const spots = [
    { x: -118, y: -52, h: 30, f: 0.55 }, { x: -76, y: -52, h: 44, f: 0.4 }, { x: -34, y: -52, h: 36, f: 0.6 },
    { x: -118, y: -8, h: 40, f: 0.7 }, { x: -76, y: -8, h: 26, f: 0.35 }, { x: -34, y: -8, h: 38, f: 0.5 },
  ];
  const order = spots.map((s, i) => ({ ...s, i })).sort((a, b) => a.x + a.y - (b.x + b.y));
  const gaugeH = 74;
  const fill = easeOut(seg(p, 0.5, 0.72)) * gaugeH * 0.62;
  const flow = seg(p, 0.46, 0.58);
  const days = 8;
  return (
    <Iso title={L.title} vb="-206 -119 330 220">
      <Plate x={-130} y={-62} w={118} d={104} />
      {order.map(({ x, y, h, f, i }) => {
        const v = easeOut(seg(p, i * 0.035, 0.14 + i * 0.035));
        const hot = seg(p, 0.26 + i * 0.03, 0.34 + i * 0.03) > 0.5;
        const hf = Math.round(h * f);
        return (
          <g key={i} style={drop(v)}>
            <Box x={x} y={y} z={4} w={34} d={34} h={hf} cls={hot ? 'il-warn-face' : ''} />
            <Box x={x} y={y} z={4 + hf} w={34} d={34} h={h - hf} />
          </g>
        );
      })}
      {/* a soma: guias levam o parado até a coluna, que enche */}
      <g style={{ opacity: flow }}>
        {spots.map((s, i) => (
          <Poly3 key={i} list={[[s.x + 17, s.y + 17, 4 + s.h + 6], [14, s.y + 17, 4 + s.h + 6], [14, -8, 4 + gaugeH + 6], [38, -8, 4 + gaugeH + 6]]} className="il-guide il-flow" />
        ))}
      </g>
      <g style={{ opacity: seg(p, 0.46, 0.56) }}>
        <Plate x={24} y={-26} w={52} d={52} />
        <Box x={36} y={-14} z={4} w={28} d={28} h={gaugeH} cls="il-glass" />
        <Box x={36} y={-14} z={4} w={28} d={28} h={Math.max(0.1, fill)} cls="il-warn-face" />
      </g>
      {/* dias de cobertura: a fila de peças acende até passar do necessário */}
      {Array.from({ length: days }, (_, i) => {
        const v = easeOut(seg(p, 0.76 + i * 0.012, 0.86 + i * 0.012));
        const covered = i < 6 && seg(p, 0.84, 0.95) * 8 > i;
        return (
          <g key={i} style={drop(v, -8)}>
            <Box x={-118 + i * 26} y={58} z={0} w={20} d={20} h={8} cls={covered ? 'il-ok-face' : ''} topClass={covered ? '' : ''} />
          </g>
        );
      })}
      <g style={{ opacity: seg(p, 0.8, 0.9) }}>
        <Line3 a={[-118 + 4.5 * 26 + 10, 58, 12]} b={[-118 + 4.5 * 26 + 10, 58, 40]} className="il-accent" />
        <polygon className="il-accent il-accent-face" points={pts([[-118 + 4.5 * 26 + 10, 52, 40], [-118 + 4.5 * 26 + 16, 58, 40], [-118 + 4.5 * 26 + 10, 64, 40], [-118 + 4.5 * 26 + 4, 58, 40]])} />
      </g>
    </Iso>
  );
}

// ── 2. O furo do reabastecimento: atraso, falta de pedido ou janela de compra
function DistributorGapScene({ p, L }: SceneProps) {
  const tests = [{ ok: true, at: 0.0, flip: 0.12 }, { ok: true, at: 0.1, flip: 0.22 }, { ok: false, at: 0.2, flip: 0.32 }, { ok: false, at: 0.3, flip: 0.42 }];
  const win = easeOut(seg(p, 0.5, 0.7));
  const move = easeOut(seg(p, 0.76, 0.94));
  const slots = 8;
  const crateX = -130 + move * 236;
  return (
    <Iso title={L.title} vb="-198 -127 381 254">
      {tests.map((t, i) => {
        const v = easeOut(seg(p, t.at, t.at + 0.14));
        const done = seg(p, t.flip, t.flip + 0.06) > 0.5;
        const cls = done ? (t.ok ? 'il-ok-face' : 'il-dashed') : '';
        return (
          <g key={i} style={drop(v)}>
            <Box x={-112 + i * 56} y={-70} z={0} w={36} d={36} h={t.ok || !done ? 22 : 14} cls={cls} />
          </g>
        );
      })}
      {/* calendário de compra do distribuidor */}
      <Plate x={-134} y={10} w={240} d={36} />
      {Array.from({ length: slots }, (_, i) => {
        const inWin = i >= 2 && i <= 5;
        const lit = inWin && win > (i - 2) / 4 - 0.01;
        return <Box key={i} x={-128 + i * 29} y={16} z={4} w={25} d={24} h={lit ? 6 : 2} cls={lit ? 'il-accent-face' : ''} />;
      })}
      <g style={{ opacity: win }}>
        <Line3 a={[-128 + 2 * 29, 16, 24]} b={[-128 + 6 * 29 - 4, 16, 24]} className="il-accent" />
      </g>
      {/* a reposição sai do CD e chega à loja depois da janela */}
      <g style={{ opacity: seg(p, 0.74, 0.8) }}>
        <Poly3 list={[[-134, 28, 14], [112, 28, 14]]} className="il-guide il-flow" />
      </g>
      <g style={{ translate: `${(pt(crateX, 0, 0)[0]).toFixed(1)}px ${(pt(crateX, 0, 0)[1]).toFixed(1)}px`, opacity: seg(p, 0.74, 0.8) }}>
        <Box x={0} y={22} z={10} w={14} d={14} h={14} cls="il-accent-face" />
      </g>
      <Box x={116} y={14} z={0} w={34} d={34} h={20} cls={move > 0.95 ? 'il-ok-face' : ''} />
    </Iso>
  );
}

// ── 3. SAC: do endereço do paciente à loja com produto ─────────────────────
function SacLocatorScene({ p, L }: SceneProps) {
  const stores = [
    { x: -84, y: -48, ok: false }, { x: 6, y: -62, ok: true }, { x: 66, y: -10, ok: true },
    { x: -66, y: 10, ok: false }, { x: -6, y: 30, ok: true },
  ];
  const pin = easeOut(seg(p, 0.0, 0.2));
  const route = seg(p, 0.62, 0.78);
  const before = easeOut(seg(p, 0.8, 0.9));
  const after = easeOut(seg(p, 0.86, 0.96));
  const best = stores[4];
  return (
    <Iso title={L.title} vb="-224 -99 385 243">
      <Plate x={-110} y={-80} w={200} d={140} />
      {/* a pessoa informa o endereço: o pino pousa no mapa */}
      <g style={drop(pin, -34)}>
        <Line3 a={[-30, -20, 4]} b={[-30, -20, 36]} className="il-accent" />
        <polygon className="il-accent il-accent-face" points={pts([[-30, -26, 36], [-24, -20, 36], [-30, -14, 36], [-36, -20, 36]])} />
      </g>
      {[...stores].map((s, i) => ({ ...s, i })).sort((a, b) => a.x + a.y - (b.x + b.y)).map(({ x, y, ok, i }) => {
        const v = easeOut(seg(p, 0.24 + i * 0.05, 0.38 + i * 0.05));
        const mark = seg(p, 0.4 + i * 0.04, 0.5 + i * 0.04) > 0.5;
        const chosen = i === 4 && route > 0.9;
        return (
          <g key={i} style={drop(v)}>
            <Box x={x} y={y} z={4} w={26} d={26} h={chosen ? 22 : 14} cls={chosen ? 'il-accent-face' : mark ? (ok ? 'il-ok-face' : 'il-dashed') : ''} />
          </g>
        );
      })}
      <g style={{ opacity: route }}>
        <Poly3 list={[[-30, -20, 6], [-30, best.y + 13, 6], [best.x + 13, best.y + 13, 6]]} className="il-guide il-flow" />
      </g>
      {/* tempo por atendimento: antes e com o Dinn */}
      <Plate x={-130} y={74} w={250} d={38} />
      <g style={drop(before, -6)}><Box x={-122} y={79} z={4} w={190 * before} d={12} h={5} /></g>
      <g style={drop(after, -6)}><Box x={-122} y={95} z={4} w={190 * 0.28 * after + 0.1} d={12} h={5} cls="il-ok-face" /></g>
    </Iso>
  );
}

// ── 4. O concorrente está na rede, o produto não: o preço pesa ────────────
function PriceGapScene({ p, L }: SceneProps) {
  const flip = easeOut(seg(p, 0.76, 0.92));
  const solid = flip > 0.5;
  return (
    <Iso title={L.title} vb="-196 -130 380 255">
      <Plate x={-136} y={-76} w={256} d={150} />
      {[0, 1, 2, 3].map((i) => {
        const y = -66 + i * 36;
        const comp = easeOut(seg(p, i * 0.05, 0.14 + i * 0.05));
        const you = easeOut(seg(p, 0.26 + i * 0.04, 0.4 + i * 0.04));
        const bars = easeOut(seg(p, 0.46 + i * 0.04, 0.62 + i * 0.04));
        return (
          <g key={i}>
            <g style={drop(comp)}><Box x={-122} y={y} z={4} w={24} d={24} h={18} /></g>
            <g style={drop(you)}><Box x={-64} y={y} z={4} w={24} d={24} h={solid ? 18 : 6} cls={solid ? 'il-ok-face' : 'il-dashed'} /></g>
            <g style={{ opacity: bars }}>
              <Box x={-16} y={y} z={4} w={64 * bars + 0.1} d={9} h={5} />
              <Box x={-16} y={y + 13} z={4} w={(96 - 32 * flip) * bars + 0.1} d={9} h={5} cls={solid ? 'il-ok-face' : 'il-warn-face'} />
            </g>
          </g>
        );
      })}
      {/* o preço pesando: o destaque em roxo fica na linha da negociação */}
      <g style={{ opacity: seg(p, 0.56, 0.7) }}>
        <Line3 a={[48, -72, 14]} b={[48, 66, 14]} className="il-accent il-flow" />
      </g>
    </Iso>
  );
}

// ── 5. Share de 60% para 45%: oportunidades e ações por praça ─────────────
function ShareOppsScene({ p, L }: SceneProps) {
  const shares = [60, 58, 55, 52, 48, 45];
  const r = rng(11);
  const tiles = Array.from({ length: 24 }, () => r());
  const hot = tiles.map((v, i) => ({ v, i })).sort((a, b) => b.v - a.v).slice(0, 3).map((t) => t.i);
  return (
    <Iso title={L.title} vb="-142 -148 364 310">
      <Plate x={-134} y={-32} w={150} d={46} />
      {shares.map((v, i) => {
        const e = easeOut(seg(p, i * 0.04, 0.16 + i * 0.04));
        const h = (v - 32) * 2;
        const last = i === shares.length - 1;
        return (
          <g key={i} style={drop(e)}>
            <Box x={-128 + i * 24} y={-26} z={4} w={20} d={20} h={h * e + 0.1} cls={last ? 'il-warn-face' : ''} />
          </g>
        );
      })}
      <g style={{ opacity: seg(p, 0.04, 0.14) }}>
        <text className="cs-num" x={pt(-118, -16, 4 + 28 * 2 + 8)[0]} y={pt(-118, -16, 4 + 28 * 2 + 8)[1]} textAnchor="middle">60%</text>
      </g>
      <g style={{ opacity: seg(p, 0.2, 0.3) }}>
        <text className="cs-num" x={pt(-8, -16, 4 + 13 * 2 + 8)[0]} y={pt(-8, -16, 4 + 13 * 2 + 8)[1]} textAnchor="middle">45%</text>
      </g>
      {/* as perdas por estado: um tabuleiro de peças, as maiores em laranja */}
      <Plate x={30} y={-34} w={176} d={96} />
      {tiles.map((v, i) => {
        const cx = i % 6;
        const cy = Math.floor(i / 6);
        const e = easeOut(seg(p, 0.26 + (cx + cy) * 0.02, 0.4 + (cx + cy) * 0.02));
        const isHot = v > 0.55;
        const act = hot.includes(i);
        const up = act ? easeOut(seg(p, 0.7 + hot.indexOf(i) * 0.06, 0.86 + hot.indexOf(i) * 0.06)) : 0;
        const pos: V3 = [38 + cx * 28, -26 + cy * 22, 4];
        return (
          <g key={i} style={drop(e, -8)}>
            <Box x={pos[0]} y={pos[1]} z={4} w={22} d={16} h={isHot ? 8 : 3} cls={isHot ? 'il-warn-face' : ''} />
            {act && (
              <g style={{ translate: `0px ${(-up * 12).toFixed(1)}px`, opacity: up }}>
                <Line3 a={[pos[0] + 11, pos[1] + 8, 14]} b={[pos[0] + 11, pos[1] + 8, 30]} className="il-accent" />
                <polygon className="il-accent il-accent-face" points={pts([[pos[0] + 11, pos[1] + 2, 30], [pos[0] + 17, pos[1] + 8, 30], [pos[0] + 11, pos[1] + 14, 30], [pos[0] + 5, pos[1] + 8, 30]])} />
              </g>
            )}
          </g>
        );
      })}
    </Iso>
  );
}

export const CASE_SCENES: Record<string, (props: SceneProps) => JSX.Element> = {
  'frozen-stock': FrozenStockScene,
  'distributor-gap': DistributorGapScene,
  'sac-locator': SacLocatorScene,
  'price-gap': PriceGapScene,
  'share-opps': ShareOppsScene,
};

/** 'area:<slug>' reaproveita a cena de uma solução. */
export function getCaseScene(visual: string): ((props: SceneProps) => JSX.Element) | null {
  if (visual.startsWith('area:')) return SCENES[visual.slice(5)] ?? null;
  return CASE_SCENES[visual] ?? null;
}
