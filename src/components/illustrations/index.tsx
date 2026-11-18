import { useState } from 'react';
import { Box, Frame, Line3, Poly3, pt, pts, vars, type V3 } from './iso';

// Quatro ilustrações para a página Pesquisas. Linha fina de 1 px, faces na cor
// do fundo, guias pontilhadas e um único detalhe em roxo. Animam quando o
// cartão que as contém (.il-host) recebe o mouse.

/** Pesquisa sob demanda: camadas empilhadas; o mouse levanta as de cima e abre o recorte. */
export function IlStack({ label }: { label?: string }) {
  const [hover, setHover] = useState<number | null>(null);
  const N = 4;
  const W = 130;
  const H = 12;
  const o = -W / 2;
  return (
    <Frame label={label} vb="-154 -139 308 214">
      <g transform="translate(0 -8)" onPointerLeave={() => setHover(null)}>
        {Array.from({ length: N }, (_, i) => (
          <g
            key={i}
            className="il-layer"
            style={vars({ '--i': i, '--y': hover !== null && i >= hover ? '-18px' : '0px' })}
            onPointerEnter={() => setHover(i)}
          >
            <Box x={o} y={o} z={i * H} w={W} d={W} h={H} />
            {i === N - 1 && (
              <polygon
                className="il-accent il-cut"
                points={[[o + 30, o + 30], [o + 30 + 52, o + 30], [o + 30 + 52, o + 30 + 52], [o + 30, o + 30 + 52]]
                  .map(([x, y]) => pt(x, y, N * H).map((n) => n.toFixed(2)).join(','))
                  .join(' ')}
              />
            )}
          </g>
        ))}
        {/* guias nos cantos */}
        <Line3 a={[o + W, o, 0]} b={[o + W, o, 70]} className="il-guide" />
        <Line3 a={[o, o + W, 0]} b={[o, o + W, 70]} className="il-guide" />
      </g>
    </Frame>
  );
}

/** Relatórios recorrentes: a mesma lâmina repetida no tempo; o mouse abre o leque. */
export function IlPlates({ label }: { label?: string }) {
  const n = 6;
  const gap = 26;
  const d = 96;
  const x0 = -((n - 1) * gap) / 2 - 8;
  const y0 = -d / 2;
  return (
    <Frame label={label} vb="-194 -180 377 262">
      <g transform="translate(0 6)">
        {Array.from({ length: n }, (_, i) => {
          const h = 104 - i * 12;
          const x = x0 + i * gap;
          const last = i === n - 1;
          const bars = [0.72, 0.5, 0.32].map((f) => [x + 3, y0 + 14, h * f] as const);
          return (
            <g key={i} className="il-plate" style={vars({ '--i': i })}>
              <Box x={x} y={y0} w={3} d={d} h={h} />
              {last &&
                bars.map(([bx, by, bz], k) => (
                  <Line3 key={k} a={[bx, by, bz]} b={[bx, by + d * [0.7, 0.5, 0.35][k], bz]} className="il-accent" />
                ))}
              {!last && i > 1 && <Line3 a={[x + 3, y0 + 14, h * 0.5]} b={[x + 3, y0 + 14 + d * 0.4, h * 0.5]} />}
            </g>
          );
        })}
      </g>
    </Frame>
  );
}

/** Fontes customizadas: quatro fontes ligadas a um núcleo; o mouse as aproxima e o fluxo corre. */
export function IlSources({ label }: { label?: string }) {
  const R = 78;
  const s = 30;
  const c = 44;
  const sources: { x: number; y: number; dir: [number, number] }[] = [
    { x: -R, y: 0, dir: [1, 0] },
    { x: 0, y: -R, dir: [0, 1] },
    { x: R, y: 0, dir: [-1, 0] },
    { x: 0, y: R, dir: [0, -1] },
  ];
  const sorted = [...sources].sort((a, b) => a.x + a.y - (b.x + b.y));
  return (
    <Frame label={label} vb="-114 -77 228 158">
      <g transform="translate(0 14)">
        {sources.map((p, i) => (
          <Line3 key={`l${i}`} a={[p.x, p.y, 0]} b={[0, 0, 0]} className="il-guide il-flow" />
        ))}
        {sorted.map((p) => {
          const [tx, ty] = pt(p.dir[0] * 12, p.dir[1] * 12, 0);
          const before = p.x + p.y < 0;
          return before ? (
            <g key={`${p.x},${p.y}`} className="il-src" style={vars({ '--tx': `${tx.toFixed(2)}px`, '--ty': `${ty.toFixed(2)}px` })}>
              <Box x={p.x - s / 2} y={p.y - s / 2} w={s} d={s} h={24} />
            </g>
          ) : null;
        })}
        <Box x={-c / 2} y={-c / 2} w={c} d={c} h={34} topClass="il-accent-face" />
        {sorted.map((p) => {
          const [tx, ty] = pt(p.dir[0] * 12, p.dir[1] * 12, 0);
          const before = p.x + p.y < 0;
          return !before ? (
            <g key={`${p.x},${p.y}`} className="il-src" style={vars({ '--tx': `${tx.toFixed(2)}px`, '--ty': `${ty.toFixed(2)}px` })}>
              <Box x={p.x - s / 2} y={p.y - s / 2} w={s} d={s} h={24} />
            </g>
          ) : null;
        })}
      </g>
    </Frame>
  );
}

/** Preparação e integração: dados soltos de um lado, organizados do outro; o mouse liga o canal. */
export function IlFlow({ label }: { label?: string }) {
  const pw = 84;
  const pd = 80;
  const lx = -118;
  const rx = 34;
  const py = -pd / 2;
  const blocks = [
    { x: lx + 10, y: py + 8, s: 22, h: 14 },
    { x: lx + 46, y: py + 20, s: 26, h: 34 },
    { x: lx + 20, y: py + 46, s: 24, h: 22 },
  ];
  return (
    <Frame label={label} vb="-164 -112 328 228">
      <g transform="translate(0 8)">
        <Box x={lx} y={py} w={pw} d={pd} h={8} />
        {blocks.map((b, i) => (
          <Box key={i} x={b.x} y={b.y} z={8} w={b.s} d={b.s} h={b.h} />
        ))}
        <Line3 a={[lx + pw, 0, 8]} b={[rx, 0, 8]} className="il-accent il-flow" />
        <Poly3 list={[[rx - 8, -5, 8], [rx, 0, 8], [rx - 8, 5, 8]]} className="il-accent" />
        <Box x={rx} y={py} w={pw} d={pd} h={8} />
        {[0, 1, 2].map((i) => (
          <g key={i} className="il-out" style={vars({ '--i': i })}>
            <Box x={rx + 12 + i * 24} y={-12} z={8} w={20} d={24} h={26} topClass={i === 2 ? 'il-accent-face' : ''} />
          </g>
        ))}
      </g>
    </Frame>
  );
}

/** MCP: a IA consulta os dados em leitura. O cubo desce até a pilha e o fluxo corre. */
export function IlMcp({ label }: { label?: string }) {
  const W = 110;
  const o = -W / 2;
  const c = 34;
  return (
    <Frame label={label} vb="-152 -108 304 211">
      <g transform="translate(0 30)">
        {[0, 1, 2].map((i) => (
          <Box key={i} x={o} y={o} z={i * 8} w={W} d={W} h={8} />
        ))}
        <Line3 a={[-30, o + 26, 24]} b={[-30, o + 26 + 50, 24]} className="il-accent" />
        <Line3 a={[-12, o + 26, 24]} b={[-12, o + 26 + 32, 24]} className="il-line" />
        <Line3 a={[0, 0, 24]} b={[0, 0, 70]} className="il-guide il-flow" />
        <g className="il-drop">
          <Box x={-c / 2} y={-c / 2} z={70} w={c} d={c} h={c} topClass="il-accent-face" />
        </g>
      </g>
    </Frame>
  );
}

/** Dinn Conecta: o conector encaixa na tomada do bloco de destino. */
export function IlConnect({ label }: { label?: string }) {
  const [px, py] = [-70, -42];
  const w = 112;
  const d = 84;
  const h = 44;
  const x1 = px + w;
  const sock: V3[] = [[x1, -15, 12], [x1, 15, 12], [x1, 15, 30], [x1, -15, 30]];
  return (
    <Frame label={label} vb="-135 -108 285 198">
      <g transform="translate(-14 10)">
        <Box x={px} y={py} w={w} d={d} h={h} />
        <polygon className="il-accent" points={pts(sock)} />
        <Line3 a={[px + 10, py + d, 14]} b={[px + 70, py + d, 14]} className="il-line" />
        <Line3 a={[px + 10, py + d, 24]} b={[px + 46, py + d, 24]} className="il-line" />
        <g className="il-plug" style={vars({ '--tx': '-26px', '--ty': '-15px' })}>
          <Line3 a={[x1 + 84, 0, 20]} b={[x1 + 120, 0, 20]} className="il-guide il-flow" />
          <Box x={x1 + 46} y={-14} z={12} w={38} d={28} h={16} />
          <Box x={x1 + 30} y={-10} z={16} w={16} d={6} h={4} />
          <Box x={x1 + 30} y={4} z={16} w={16} d={6} h={4} />
        </g>
      </g>
    </Frame>
  );
}

/** Pesquisas e fontes customizadas: uma lente percorre o universo e destaca um recorte. */
export function IlSearch({ label }: { label?: string }) {
  const n = 4;
  const t = 22;
  const g = 30;
  const o = -((n - 1) * g + t) / 2;
  const tile = (i: number, j: number) => ({ x: o + i * g, y: o + j * g });
  const a = tile(1, 1);
  const lens = { x: a.x + t / 2, y: a.y + t / 2 };
  const [sx, sy] = pt(g, 0, 0);
  return (
    <Frame label={label} vb="-116 -75 233 162">
      <g transform="translate(0 18)">
        {Array.from({ length: n * n }, (_, k) => {
          const i = k % n;
          const j = Math.floor(k / n);
          const p = tile(i, j);
          const cls = i === 1 && j === 1 ? 'il-tile-a' : i === 2 && j === 1 ? 'il-tile-b' : '';
          return (
            <g key={k} className={cls}>
              <Box x={p.x} y={p.y} w={t} d={t} h={3} topClass={cls === 'il-tile-a' ? 'il-accent-face' : ''} />
            </g>
          );
        })}
        <g className="il-lens" style={vars({ '--tx': `${sx.toFixed(2)}px`, '--ty': `${sy.toFixed(2)}px` })}>
          <ellipse className="il-accent" cx={pt(lens.x, lens.y, 30)[0]} cy={pt(lens.x, lens.y, 30)[1]} rx={30} ry={17.3} />
          <Line3 a={[lens.x + 24, lens.y + 24, 30]} b={[lens.x + 44, lens.y + 44, 30]} className="il-accent" />
        </g>
      </g>
    </Frame>
  );
}

/** Implantação e serviços: degraus que sobem, com a bandeira no topo. */
export function IlSteps({ label }: { label?: string }) {
  const n = 5;
  const w = 26;
  const d = 54;
  const x0 = -(n * w) / 2;
  const y0 = -d / 2;
  const hs = [10, 20, 30, 40, 50];
  return (
    <Frame label={label} vb="-99 -67 195 136">
      <g transform="translate(0 20)">
        <Line3 a={[x0, y0 + d + 4, 0]} b={[x0 + n * w, y0 + d + 4, 60]} className="il-guide" />
        {hs.map((h, i) => (
          <g key={i} className="il-step" style={vars({ '--i': i })}>
            <Box x={x0 + i * w} y={y0} w={w} d={d} h={h} topClass={i === n - 1 ? 'il-accent-face' : ''} />
          </g>
        ))}
        <g className="il-flag">
          <Line3 a={[x0 + (n - 1) * w + w / 2, 0, hs[n - 1]]} b={[x0 + (n - 1) * w + w / 2, 0, hs[n - 1] + 34]} className="il-accent" />
          <Poly3 list={[[x0 + (n - 1) * w + w / 2, 0, hs[n - 1] + 34], [x0 + (n - 1) * w + w / 2, 14, hs[n - 1] + 28], [x0 + (n - 1) * w + w / 2, 0, hs[n - 1] + 22]]} className="il-accent" />
        </g>
      </g>
    </Frame>
  );
}
