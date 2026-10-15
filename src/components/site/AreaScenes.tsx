import type { CSSProperties, ReactNode } from 'react';
import { rng } from '@/components/home/neural';
import { AVAIL, LEVEL } from '@/components/home/palette';

// Seis ilustrações animadas, uma por área de solução. Cada uma recebe o
// progresso da rolagem (0 a 1) e conta, em quatro passos, o mesmo exemplo que
// a página descreve em texto: sinal, validação, leitura e retorno. Tudo é
// desenho (SVG) com dados de exemplo; nenhum ponto é uma loja real.

type Labels = Record<string, any>;
export type SceneProps = { p: number; L: Labels; shared: Labels };

export const W = 560;
export const H = 440;
export const LILAC = '#B79EFF';
export const ACCENT = '#5625F2';
export const SKY = '#38BDF8';
export const AMBER = '#FBBF24';
const INK = '#16191D';

export const clamp = (v: number) => Math.min(1, Math.max(0, v));
/** Fração (0–1) em que `p` está dentro do trecho [a, b]. */
export const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
export const show = (v: number): CSSProperties => ({ opacity: v, transform: `translateY(${((1 - v) * 10).toFixed(1)}px)` });

export function Chip({ x, y, text, tone = 'lilac', v = 1, w }: { x: number; y: number; text: string; tone?: 'lilac' | 'amber' | 'red' | 'green'; v?: number; w?: number }) {
  const width = w ?? Math.max(60, text.length * 6.6 + 26);
  const colors = {
    lilac: { bg: 'rgba(86,37,242,0.4)', line: 'rgba(183,158,255,0.7)', fg: '#fff' },
    amber: { bg: 'rgba(251,191,36,0.16)', line: 'rgba(251,191,36,0.7)', fg: '#FDE68A' },
    red: { bg: 'rgba(239,68,68,0.18)', line: 'rgba(239,68,68,0.75)', fg: '#FECACA' },
    green: { bg: 'rgba(16,185,129,0.16)', line: 'rgba(16,185,129,0.7)', fg: '#A7F3D0' },
  }[tone];
  return (
    <g style={show(v)} className="as-g">
      <rect x={x} y={y} width={width} height={28} rx={14} fill={colors.bg} stroke={colors.line} />
      <text x={x + width / 2} y={y + 18.5} textAnchor="middle" fontSize={12} fontWeight={600} fill={colors.fg}>{text}</text>
    </g>
  );
}

export function Svg({ title, children }: { title: string; children: ReactNode }) {
  return (
    <svg className="as-svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title}>
      {children}
    </svg>
  );
}

// ── 1. Inteligência & Pricing: seu laboratório × a categoria ──────────────
export function PricingScene({ p, L }: SceneProps) {
  const lab = [100, 101, 103, 104, 105, 106];
  const mkt = [100, 103, 105, 107, 109, 111];
  const x0 = 70, x1 = 510, y0 = 80, y1 = 290;
  const X = (i: number) => x0 + (i * (x1 - x0)) / 5;
  const Y = (v: number) => y1 - ((v - 98) / 15) * (y1 - y0);
  const path = (a: number[]) => a.map((v, i) => `${i ? 'L' : 'M'}${X(i)},${Y(v)}`).join(' ');
  const gap = `${path(mkt)} ${lab.map((v, i) => `L${X(5 - i)},${Y(lab[5 - i])}`).join(' ')} Z`;
  const dots = Array.from({ length: 14 }, (_, i) => i);
  const only = new Set([2, 5, 8, 11, 12]);
  return (
    <Svg title={L.title}>
      {[0, 1, 2, 3].map((g) => (
        <line key={g} x1={x0} x2={x1} y1={y0 + g * 70} y2={y0 + g * 70} stroke="rgba(255,255,255,0.08)" strokeDasharray="3 5" />
      ))}
      {['S1', 'S2', 'S3', 'S4', 'S5', 'S6'].map((s, i) => (
        <text key={s} x={X(i)} y={y1 + 24} textAnchor="middle" fontSize={11} fill="rgba(255,255,255,0.45)">{s}</text>
      ))}
      <g style={{ opacity: seg(p, 0.5, 0.68) * 0.9 }} className="as-g">
        <path d={gap} fill="rgba(251,191,36,0.18)" />
      </g>
      <path d={path(mkt)} pathLength={1} fill="none" stroke={SKY} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={1} strokeDashoffset={1 - easeOut(seg(p, 0.22, 0.5))} />
      <path d={path(lab)} pathLength={1} fill="none" stroke={LILAC} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={1} strokeDashoffset={1 - easeOut(seg(p, 0.02, 0.26))} />
      <g style={show(seg(p, 0.46, 0.58))} className="as-g">
        <text x={x1 + 4} y={Y(111) + 4} fontSize={13} fontWeight={700} fill={SKY}>+11%</text>
        <text x={x1 + 4} y={Y(106) + 18} fontSize={13} fontWeight={700} fill={LILAC}>+6%</text>
      </g>
      <g style={show(seg(p, 0.02, 0.14))} className="as-g">
        <circle cx={x0} cy={44} r={5} fill={LILAC} />
        <text x={x0 + 12} y={48} fontSize={12.5} fontWeight={600} fill="#fff">{L.lab}</text>
        <circle cx={x0 + 170} cy={44} r={5} fill={SKY} />
        <text x={x0 + 182} y={48} fontSize={12.5} fontWeight={600} fill="#fff">{L.market}</text>
      </g>
      <Chip x={x0 + 150} y={y1 + 40} text={L.sameStores} tone="lilac" v={seg(p, 0.55, 0.68)} />
      {dots.map((i) => {
        const hot = only.has(i);
        const v = easeOut(seg(p, 0.74 + i * 0.008, 0.88 + i * 0.008));
        return (
          <g key={i} style={{ opacity: v }} className="as-g">
            <circle cx={70 + i * 32.5} cy={398} r={8} fill={hot ? 'rgba(251,191,36,0.9)' : 'rgba(183,158,255,0.35)'} />
            {hot && <circle className="as-pulse" cx={70 + i * 32.5} cy={398} r={8} fill="none" stroke={AMBER} />}
          </g>
        );
      })}
      <text x={70} y={374} fontSize={12} fontWeight={600} fill={AMBER} style={{ opacity: seg(p, 0.78, 0.9) }} className="as-g">{L.onlyCompetitor}</text>
    </Svg>
  );
}

// ── 2. Trade, KAM & Campo: da carteira à fila da semana ───────────────────
export function TradeScene({ p, L, shared }: SceneProps) {
  const cols = 8;
  const rows = shared.queueRows as { name: string; level: string; value: string; check: string }[];
  const hot = [3, 10, 14, 21, 27, 33];
  const hotLevels = ['critico', 'alto', 'alto', 'moderado', 'moderado', 'leve'] as const;
  const r = rng(5);
  const swap = easeOut(seg(p, 0.8, 0.96));
  const order = [1, 0, 2, 3];
  return (
    <Svg title={L.title}>
      {Array.from({ length: 40 }, (_, i) => {
        const cx = 36 + (i % cols) * 30;
        const cy = 96 + Math.floor(i / cols) * 44;
        const hi = hot.indexOf(i);
        const appear = easeOut(seg(p, 0.0 + r() * 0.12, 0.16 + r() * 0.1));
        const focus = seg(p, 0.26, 0.42);
        const fill = hi >= 0 ? LEVEL[hotLevels[hi]].dot : 'rgba(183,158,255,0.5)';
        return (
          <g key={i} style={{ opacity: appear * (hi >= 0 ? 1 : 1 - focus * 0.65) }} className="as-g">
            <circle cx={cx} cy={cy} r={9} fill={hi >= 0 && focus > 0.05 ? fill : 'rgba(183,158,255,0.5)'} />
            {hi >= 0 && focus > 0.3 && <circle className="as-pulse" cx={cx} cy={cy} r={9} fill="none" stroke={fill} />}
          </g>
        );
      })}
      <text x={36} y={62} fontSize={12.5} fontWeight={600} fill="#fff" style={{ opacity: seg(p, 0.02, 0.12) }} className="as-g">{L.portfolio}</text>
      <Chip x={36} y={310} text={L.concentrated} tone="amber" v={seg(p, 0.3, 0.42)} />
      <g style={show(seg(p, 0.5, 0.62))} className="as-g">
        <rect x={296} y={50} width={244} height={300} rx={18} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" />
        <text x={314} y={78} fontSize={13} fontWeight={700} fill="#fff">{L.queue}</text>
      </g>
      {rows.slice(0, 4).map((row, i) => {
        const slot = order.indexOf(i);
        const from = i;
        const y = 94 + (from + (slot - from) * swap) * 62;
        const v = seg(p, 0.54 + i * 0.05, 0.68 + i * 0.05);
        const tone = LEVEL[(['critico', 'alto', 'alto', 'moderado'] as const)[i]];
        const done = seg(p, 0.7 + i * 0.03, 0.8 + i * 0.03);
        return (
          <g key={row.name} style={{ opacity: v, transform: `translateY(${((1 - v) * 10).toFixed(1)}px)` }} className="as-g">
            <rect x={306} y={y} width={224} height={54} rx={12} fill="rgba(22,25,29,0.85)" stroke="rgba(255,255,255,0.12)" />
            <circle cx={324} cy={y + 20} r={5} fill={tone.dot} />
            <text x={336} y={y + 24} fontSize={12.5} fontWeight={600} fill="#fff">{row.name}</text>
            <text x={520} y={y + 24} textAnchor="end" fontSize={12.5} fontWeight={700} fill={tone.dot}>{row.value}</text>
            <text x={318} y={y + 43} fontSize={11.5} fill="rgba(255,255,255,0.62)">{row.check}</text>
            <g style={{ opacity: done }}>
              <circle cx={506} cy={y + 41} r={8} fill="rgba(16,185,129,0.9)" />
              <path d={`M${501.5},${y + 41} l3,3 l6,-6`} stroke="#fff" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        );
      })}
      <Chip x={306} y={368} text={L.feedback} tone="green" v={seg(p, 0.8, 0.92)} />
    </Svg>
  );
}

// ── 3. Supply & Distribuição: o CD de um lado, as farmácias do outro ──────
export function SupplyScene({ p, L }: SceneProps) {
  const cols = 6;
  const out = new Set([1, 4, 7, 9, 12, 14, 17, 20, 22]); // 9 de 24 ≈ 38%
  const cd = { x: 40, y: 120, w: 128, h: 230 };
  const fill = easeOut(seg(p, 0.0, 0.24)) * 0.82;
  const dotAt = (i: number) => ({ x: 270 + (i % cols) * 44, y: 96 + Math.floor(i / cols) * 58 });
  return (
    <Svg title={L.title}>
      <g className="as-g">
        <rect x={cd.x} y={cd.y} width={cd.w} height={cd.h} rx={20} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" />
        <rect x={cd.x + 22} y={cd.y + 28} width={cd.w - 44} height={cd.h - 80} rx={10} fill="rgba(255,255,255,0.08)" />
        <rect x={cd.x + 22} y={cd.y + 28 + (cd.h - 80) * (1 - fill)} width={cd.w - 44} height={(cd.h - 80) * fill} rx={10} fill={ACCENT} />
        <text x={cd.x + cd.w / 2} y={cd.y + cd.h - 18} textAnchor="middle" fontSize={14} fontWeight={700} fill="#fff">{L.cd}</text>
      </g>
      <text x={cd.x} y={cd.y - 14} fontSize={12.5} fontWeight={600} fill="#fff" style={{ opacity: seg(p, 0.14, 0.26) }} className="as-g">{L.cdCoverage}</text>
      {Array.from({ length: 24 }, (_, i) => {
        const d = dotAt(i);
        const line = easeOut(seg(p, 0.26 + i * 0.006, 0.44 + i * 0.006));
        return (
          <line key={`l${i}`} x1={cd.x + cd.w} y1={cd.y + cd.h / 2} x2={cd.x + cd.w + (d.x - cd.x - cd.w) * line} y2={cd.y + cd.h / 2 + (d.y - cd.y - cd.h / 2) * line} stroke="rgba(183,158,255,0.25)" strokeWidth={1} />
        );
      })}
      {Array.from({ length: 24 }, (_, i) => {
        const d = dotAt(i);
        const red = out.has(i);
        const appear = easeOut(seg(p, 0.22 + i * 0.006, 0.4 + i * 0.006));
        const turn = seg(p, 0.42 + (i % 7) * 0.02, 0.56 + (i % 7) * 0.02);
        return (
          <g key={i} style={{ opacity: appear }} className="as-g">
            <circle cx={d.x} cy={d.y} r={11} fill={red && turn > 0.5 ? 'rgba(239,68,68,0.95)' : 'rgba(183,158,255,0.5)'} />
            {red && turn > 0.5 && p > 0.7 && <circle className="as-pulse" cx={d.x} cy={d.y} r={11} fill="none" stroke="#EF4444" />}
          </g>
        );
      })}
      <text x={270} y={62} fontSize={12.5} fontWeight={600} fill="#fff" style={{ opacity: seg(p, 0.24, 0.36) }} className="as-g">{L.pharmacies}</text>
      <Chip x={270} y={372} text={L.out} tone="red" v={seg(p, 0.5, 0.6)} />
      <Chip x={40} y={372} text={L.verdict} tone="amber" v={seg(p, 0.62, 0.74)} />
      <Chip x={40} y={406} text={L.verify} tone="lilac" v={seg(p, 0.8, 0.92)} />
    </Svg>
  );
}

// ── 4. SAC & CX: o consumidor e as farmácias ao redor ─────────────────────
export function SacScene({ p, L, shared }: SceneProps) {
  const streets = (() => {
    const r = rng(9);
    return Array.from({ length: 12 }, (_, i) => {
      const v = i % 2 === 0;
      const k = 20 + r() * 330;
      return v ? `M${k},20 L${k + (r() - 0.5) * 60},420` : `M20,${k * 1.1} L360,${k * 1.1 + (r() - 0.5) * 50}`;
    });
  })();
  const me = { x: 200, y: 222 };
  const pins = [
    { x: 262, y: 168, k: 'alta' },
    { x: 118, y: 258, k: 'media' },
    { x: 292, y: 292, k: 'alta' },
    { x: 130, y: 128, k: 'sem' },
    { x: 322, y: 120, k: 'sem' },
  ] as const;
  const rows = shared.locatorRows as { name: string; dist: string; level: string; stock: string }[];
  const ring = easeOut(seg(p, 0.0, 0.34));
  return (
    <Svg title={L.title}>
      <clipPath id="sac-clip"><rect x={20} y={20} width={350} height={400} rx={22} /></clipPath>
      <g clipPath="url(#sac-clip)">
        <rect x={20} y={20} width={350} height={400} fill="rgba(255,255,255,0.04)" />
        {streets.map((d, i) => <path key={i} d={d} stroke="rgba(255,255,255,0.05)" strokeWidth={4} fill="none" />)}
        <circle cx={me.x} cy={me.y} r={150 * ring} fill="rgba(86,37,242,0.1)" stroke="rgba(183,158,255,0.55)" strokeDasharray="4 5" />
        <circle cx={me.x} cy={me.y} r={90 * ring} fill="none" stroke="rgba(183,158,255,0.3)" strokeDasharray="3 5" />
      </g>
      {pins.map((pin, i) => {
        const v = easeOut(seg(p, 0.22 + i * 0.05, 0.4 + i * 0.05));
        const c = AVAIL[pin.k].dot;
        const near = i === 0 && p > 0.55;
        return (
          <g key={i} style={{ opacity: v, transform: `translateY(${((1 - v) * -14).toFixed(1)}px)` }} className="as-g">
            <circle cx={pin.x} cy={pin.y} r={near ? 13 : 10} fill={c} stroke="#fff" strokeWidth={near ? 3 : 1.5} />
            <path d={`M${pin.x - 4},${pin.y} h8 M${pin.x},${pin.y - 4} v8`} stroke="#fff" strokeWidth={2} strokeLinecap="round" />
            {pin.k === 'sem' && p > 0.6 && <circle className="as-pulse" cx={pin.x} cy={pin.y} r={10} fill="none" stroke={c} />}
          </g>
        );
      })}
      <g className="as-g">
        <circle cx={me.x} cy={me.y} r={8} fill={LILAC} />
        <circle className="as-pulse" cx={me.x} cy={me.y} r={8} fill="none" stroke={LILAC} />
      </g>
      <text x={me.x} y={me.y + 28} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="#fff" style={{ opacity: seg(p, 0.0, 0.1) }} className="as-g">{L.you}</text>
      <g style={show(seg(p, 0.52, 0.66))} className="as-g">
        <rect x={382} y={34} width={158} height={238} rx={16} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" />
        {rows.slice(0, 4).map((r, i) => {
          const c = AVAIL[(['alta', 'media', 'alta', 'sem'] as const)[i]];
          return (
            <g key={r.name}>
              <circle cx={400} cy={66 + i * 56} r={5} fill={c.dot} />
              <text x={412} y={70 + i * 56} fontSize={11.5} fontWeight={600} fill="#fff">{r.name.split(' · ')[0]}</text>
              <text x={412} y={86 + i * 56} fontSize={11} fill="rgba(255,255,255,0.6)">{r.dist} · {r.stock}</text>
            </g>
          );
        })}
      </g>
      <Chip x={382} y={286} text={L.nearest} tone="green" v={seg(p, 0.6, 0.72)} w={158} />
      <Chip x={20} y={380} text={L.insight} tone="amber" v={seg(p, 0.78, 0.92)} w={350} />
    </Svg>
  );
}

// ── 5. Marketing & Lançamentos: presença semana a semana ──────────────────
export function LaunchScene({ p, L, shared }: SceneProps) {
  const big = [5, 14, 27, 41, 55, 68];
  const ind = [0, 2, 4, 8, 12, 17];
  const tot = [3, 10, 19, 30, 42, 54];
  const x0 = 60, x1 = 500, y0 = 70, y1 = 270;
  const X = (i: number) => x0 + (i * (x1 - x0)) / 5;
  const Y = (v: number) => y1 - (v / 80) * (y1 - y0);
  const path = (a: number[]) => a.map((v, i) => `${i ? 'L' : 'M'}${X(i)},${Y(v)}`).join(' ');
  const regions = (shared.regions as string[]) ?? [];
  const arrival = [1, 1, 2, 2, 3, 4, 4, 5, 6, 3, 1, 7];
  const week = 1 + seg(p, 0.74, 0.96) * 6;
  const line = (a: number[], color: string, from: number, to: number, w = 3.5, dash?: string) => (
    <path d={path(a)} pathLength={1} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash ?? 1} strokeDashoffset={dash ? 0 : 1 - easeOut(seg(p, from, to))} style={dash ? { opacity: seg(p, from, to) } : undefined} />
  );
  return (
    <Svg title={L.title}>
      {[0, 1, 2, 3].map((g) => <line key={g} x1={x0} x2={x1} y1={y0 + g * 66.6} y2={y0 + g * 66.6} stroke="rgba(255,255,255,0.08)" strokeDasharray="3 5" />)}
      {['S1', 'S2', 'S3', 'S4', 'S5', 'S6'].map((s, i) => <text key={s} x={X(i)} y={y1 + 22} textAnchor="middle" fontSize={11} fill="rgba(255,255,255,0.45)">{s}</text>)}
      {line(big, LILAC, 0.02, 0.28)}
      {line(ind, SKY, 0.26, 0.5)}
      {line(tot, 'rgba(255,255,255,0.7)', 0.48, 0.64, 2.5, '6 5')}
      <g style={show(seg(p, 0.02, 0.12))} className="as-g">
        <circle cx={x0} cy={40} r={5} fill={LILAC} />
        <text x={x0 + 12} y={44} fontSize={12.5} fontWeight={600} fill="#fff">{L.largeChains}</text>
      </g>
      <g style={show(seg(p, 0.26, 0.36))} className="as-g">
        <circle cx={x0 + 150} cy={40} r={5} fill={SKY} />
        <text x={x0 + 162} y={44} fontSize={12.5} fontWeight={600} fill="#fff">{L.independents}</text>
      </g>
      <g style={show(seg(p, 0.5, 0.64))} className="as-g">
        <circle cx={X(5)} cy={Y(54)} r={7} fill="#fff" />
        <circle className="as-pulse" cx={X(5)} cy={Y(54)} r={7} fill="none" stroke="#fff" />
        <text x={X(5) - 12} y={Y(54) - 14} textAnchor="end" fontSize={13} fontWeight={700} fill="#fff">{L.reached}</text>
      </g>
      <text x={x0} y={320} fontSize={12} fontWeight={600} fill="rgba(255,255,255,0.7)" style={{ opacity: seg(p, 0.7, 0.8) }} className="as-g">{L.regions}</text>
      {regions.slice(0, 12).map((r, i) => {
        const on = week >= arrival[i];
        const col = i % 6;
        const row = Math.floor(i / 6);
        return (
          <g key={r} style={{ opacity: seg(p, 0.7, 0.8) }} className="as-g">
            <rect x={x0 + col * 74} y={334 + row * 44} width={64} height={34} rx={10} fill={on ? 'rgba(86,37,242,0.85)' : 'rgba(255,255,255,0.06)'} stroke={on ? 'rgba(183,158,255,0.8)' : 'rgba(255,255,255,0.12)'} style={{ transition: 'fill 0.4s' }} />
            <text x={x0 + col * 74 + 32} y={356 + row * 44} textAnchor="middle" fontSize={12} fontWeight={600} fill={on ? '#fff' : 'rgba(255,255,255,0.45)'}>{r}</text>
          </g>
        );
      })}
    </Svg>
  );
}

// ── 6. TI, Dados & Governança: fontes → Dinn → destinos ───────────────────
export function TechScene({ p, L, shared }: SceneProps) {
  const sources = (shared.sources as string[]) ?? [];
  const dests = (shared.destinations as string[]) ?? [];
  const types = (shared.types as string[]) ?? [];
  const hub = { x: 280, y: 190 };
  const sy = (i: number) => 110 + i * 78;
  const dy = (i: number) => 84 + i * 66;
  return (
    <Svg title={L.title}>
      <text x={34} y={70} fontSize={12} fontWeight={700} fill="rgba(255,255,255,0.6)" style={{ opacity: seg(p, 0, 0.1) }} className="as-g">{L.sources}</text>
      <text x={430} y={50} fontSize={12} fontWeight={700} fill="rgba(255,255,255,0.6)" style={{ opacity: seg(p, 0.5, 0.6) }} className="as-g">{L.destinations}</text>
      {sources.slice(0, 3).map((s, i) => {
        const v = easeOut(seg(p, 0.02 + i * 0.06, 0.18 + i * 0.06));
        return (
          <g key={s}>
            <path d={`M${150},${sy(i)} C${210},${sy(i)} ${210},${hub.y} ${hub.x - 44},${hub.y}`} fill="none" stroke="rgba(183,158,255,0.5)" strokeWidth={1.6} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - v} />
            <g style={show(v)} className="as-g">
              <rect x={30} y={sy(i) - 20} width={120} height={40} rx={12} fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.2)" />
              <text x={90} y={sy(i) + 5} textAnchor="middle" fontSize={12} fontWeight={600} fill="#fff">{s}</text>
            </g>
          </g>
        );
      })}
      <g className="as-g">
        <circle cx={hub.x} cy={hub.y} r={44} fill="rgba(86,37,242,0.5)" stroke="rgba(183,158,255,0.8)" strokeWidth={1.5} />
        <circle className="as-pulse as-pulse-slow" cx={hub.x} cy={hub.y} r={44} fill="none" stroke={LILAC} />
        <text x={hub.x} y={hub.y + 6} textAnchor="middle" fontSize={17} fontWeight={700} fill="#fff">{L.hub}</text>
      </g>
      {types.slice(0, 3).map((tp, i) => (
        <Chip key={tp} x={hub.x - 62 + (i % 2) * 0} y={262 + i * 34} text={tp} tone={(['green', 'lilac', 'amber'] as const)[i]} v={seg(p, 0.28 + i * 0.06, 0.4 + i * 0.06)} w={124} />
      ))}
      {dests.slice(0, 4).map((d, i) => {
        const v = easeOut(seg(p, 0.5 + i * 0.05, 0.66 + i * 0.05));
        return (
          <g key={d}>
            <path d={`M${hub.x + 44},${hub.y} C${360},${hub.y} ${370},${dy(i)} 430,${dy(i)}`} fill="none" stroke="rgba(183,158,255,0.5)" strokeWidth={1.6} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - v} />
            <g style={show(v)} className="as-g">
              <rect x={430} y={dy(i) - 20} width={110} height={40} rx={12} fill="rgba(86,37,242,0.3)" stroke="rgba(183,158,255,0.6)" />
              <text x={485} y={dy(i) + 5} textAnchor="middle" fontSize={12.5} fontWeight={600} fill="#fff">{d}</text>
            </g>
          </g>
        );
      })}
      <Chip x={392} y={366} text={L.readOnly} tone="green" v={seg(p, 0.7, 0.8)} w={148} />
      <g style={{ opacity: seg(p, 0.82, 0.94) }} className="as-g">
        <circle cx={hub.x} cy={hub.y} r={64} fill="none" stroke="rgba(16,185,129,0.8)" strokeWidth={1.5} strokeDasharray="5 6" />
      </g>
      <Chip x={30} y={402} text={L.access} tone="green" v={seg(p, 0.82, 0.94)} w={300} />
    </Svg>
  );
}

export const SCENES: Record<string, (props: SceneProps) => JSX.Element> = {
  'inteligencia-pricing': PricingScene,
  'trade-kam-campo': TradeScene,
  'supply-distribuicao': SupplyScene,
  'sac-customer-experience': SacScene,
  'marketing-lancamentos': LaunchScene,
  'ti-dados-governanca': TechScene,
};
