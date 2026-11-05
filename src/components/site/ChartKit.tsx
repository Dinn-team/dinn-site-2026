import { useId, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { fmt } from './vizPrimitives';

// Gráficos do site no padrão da biblioteca Dinn (rules/DESIGN_SYSTEM_V2.md, seção 11).
// SVG puro, tokens --chart-1 a --chart-5 (src/styles/charts-tokens.css), estilos em site-charts.css.
// Regras aplicadas: curvas e pontas redondas, tooltip branco, guia vertical, só a série em foco
// com preenchimento, cor + traço, aria-label, teclado (setas, Esc), "Ver tabela" e resumo em texto.

export const SERIES_COLORS = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)'];
const LINE_COLORS = ['var(--chart-1)', 'var(--chart-5-line)', 'var(--chart-3)'];
const LINE_DASH: (string | undefined)[] = [undefined, '7 6', '2 5'];

type Summary = (a: string, b: string, first: string, last: string, peak: string, peakAt: string) => string;
const TEXT: Record<string, { table: string; chart: string; col: string; days: (n: number) => string; summary: Summary }> = {
  pt: { table: 'Tabela', chart: 'Gráfico', col: 'Período', days: (n) => `Últimos ${n} dias`, summary: (a, b, first, last, peak, peakAt) => `De ${first} a ${last}, vai de ${a} para ${b}. O pico é ${peak}, em ${peakAt}.` },
  en: { table: 'Table', chart: 'Chart', col: 'Period', days: (n) => `Last ${n} days`, summary: (a, b, first, last, peak, peakAt) => `From ${first} to ${last}, it goes from ${a} to ${b}. The peak is ${peak}, on ${peakAt}.` },
  es: { table: 'Tabla', chart: 'Gráfico', col: 'Período', days: (n) => `Últimos ${n} días`, summary: (a, b, first, last, peak, peakAt) => `De ${first} a ${last}, pasa de ${a} a ${b}. El pico es ${peak}, en ${peakAt}.` },
};
export const textFor = (locale: string) => TEXT[locale.slice(0, 2)] ?? TEXT.pt;

// ── Tooltip ───────────────────────────────────────────────────────────────
export type TipRow = { c: string; l: string; v: string };
export type TipData = { x: number; y: number; title?: string; rows: TipRow[] };

export function TipBox({ tip }: { tip: TipData | null }) {
  if (!tip) return null;
  return (
    <div className="ch-tip" style={{ left: `clamp(80px, ${tip.x}px, calc(100% - 80px))`, top: tip.y }} role="status">
      {tip.title && <div className="ch-tip-h">{tip.title}</div>}
      {tip.rows.map((r) => (
        <div className="ch-tip-r" key={r.l}><i style={{ background: r.c }} /><span>{r.l}</span><b>{r.v}</b></div>
      ))}
    </div>
  );
}

/** Posição do ponteiro dentro de um elemento, em px. */
const within = (e: PointerEvent, el: HTMLElement | null) => {
  const r = el?.getBoundingClientRect();
  return r ? { x: e.clientX - r.left, y: e.clientY - r.top } : { x: 0, y: 0 };
};

// ── Curva suave (monótona), igual à da biblioteca ────────────────────────
export function curve(p: [number, number][]): string {
  const n = p.length;
  if (n < 3) return 'M' + p.map((q) => q.join(',')).join('L');
  const dx: number[] = [], m: number[] = [], t: number[] = [];
  for (let i = 0; i < n - 1; i++) { dx[i] = p[i + 1][0] - p[i][0]; m[i] = (p[i + 1][1] - p[i][1]) / dx[i]; }
  t[0] = m[0]; t[n - 1] = m[n - 2];
  for (let i = 1; i < n - 1; i++) t[i] = m[i - 1] * m[i] <= 0 ? 0 : (m[i - 1] + m[i]) / 2;
  for (let i = 0; i < n - 1; i++) {
    if (m[i] === 0) { t[i] = t[i + 1] = 0; continue; }
    const a = t[i] / m[i], b = t[i + 1] / m[i], s = a * a + b * b;
    if (s > 9) { const k = 3 / Math.sqrt(s); t[i] = k * a * m[i]; t[i + 1] = k * b * m[i]; }
  }
  let d = `M${p[0][0]},${p[0][1]}`;
  for (let i = 0; i < n - 1; i++) {
    const h = dx[i] / 3;
    d += `C${p[i][0] + h},${p[i][1] + t[i] * h} ${p[i + 1][0] - h},${p[i + 1][1] - t[i + 1] * h} ${p[i + 1][0]},${p[i + 1][1]}`;
  }
  return d;
}

const MONTH_NAMES = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
};
const MONTHS: Record<string, number> = { jan: 1, ene: 1, feb: 2, fev: 2, mar: 3, apr: 4, abr: 4, may: 5, mai: 5, jun: 6, jul: 7, aug: 8, ago: 8, sep: 9, set: 9, oct: 10, out: 10, nov: 11, dec: 12, dic: 12, dez: 12 };

/** Lê "29/06", "6 Jul" ou "19 oct". `txt` é verdadeiro quando o mês vem escrito. */
function parseLabel(s: string): { d: number; mo: number; txt: boolean } | null {
  const a = /^(\d{1,2})\/(\d{1,2})/.exec(s);
  if (a) return { d: +a[1], mo: +a[2], txt: false };
  const b = /^(\d{1,2})\s+([A-Za-zçÇ]{3})/.exec(s);
  return b && MONTHS[b[2].toLowerCase()] ? { d: +b[1], mo: MONTHS[b[2].toLowerCase()], txt: true } : null;
}

/** Dias entre o primeiro e o último rótulo de data. Devolve null se não der para ler. */
export function spanDays(labels: string[]): number | null {
  const known = labels.filter(Boolean).map(parseLabel).filter(Boolean) as { d: number; mo: number }[];
  if (known.length < 2) return null;
  const f = known[0], l = known[known.length - 1];
  const t0 = Date.UTC(2026, f.mo - 1, f.d), t1 = Date.UTC(l.mo < f.mo ? 2027 : 2026, l.mo - 1, l.d);
  return Math.round((t1 - t0) / 864e5);
}

/** Preenche rótulos vazios de uma série ("29/06", "", "13/07"…) por interpolação de dias, no mesmo estilo. */
export function fillLabels(labels: string[], locale = 'pt-BR'): string[] {
  const out = [...labels];
  const known = labels.map((l, i) => (parseLabel(l) ? i : -1)).filter((i) => i >= 0);
  const names = locale.startsWith('es') ? MONTH_NAMES.es : MONTH_NAMES.en;
  for (let k = 0; k < known.length - 1; k++) {
    const a = parseLabel(labels[known[k]])!, b = parseLabel(labels[known[k + 1]])!;
    const t0 = Date.UTC(2026, a.mo - 1, a.d), t1 = Date.UTC(b.mo < a.mo ? 2027 : 2026, b.mo - 1, b.d);
    for (let i = known[k] + 1; i < known[k + 1]; i++) {
      const dt = new Date(t0 + ((t1 - t0) * (i - known[k])) / (known[k + 1] - known[k]));
      const d = dt.getUTCDate(), mo = dt.getUTCMonth();
      out[i] = a.txt ? `${d} ${names[mo]}` : `${String(d).padStart(2, '0')}/${String(mo + 1).padStart(2, '0')}`;
    }
  }
  return out;
}

// ── Gráfico de linhas ────────────────────────────────────────────────────
export type LineChartProps = {
  title: string;
  labels: string[];
  series: { name: string; values: number[] }[];
  unit?: string;
  digits?: number;
  locale: string;
  on: boolean;
};

export function LineChart({ title, labels, series, unit = '', digits = 0, locale, on }: LineChartProps) {
  const uid = useId().replace(/:/g, '');
  const wrap = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState<number | null>(null);
  const [table, setTable] = useState(false);
  const tx = textFor(locale);
  const W = 640, H = 230, m = { l: 40, r: 18, t: 30, b: 12 };
  const full = fillLabels(labels, locale).map((l) => l.replace('*', ''));
  const span = spanDays(labels);
  const n = series[0].values.length;
  const last = n - 1;
  const maxRaw = Math.max(...series.flatMap((s) => s.values), 1);
  const step = maxRaw > 400 ? 200 : maxRaw > 100 ? 50 : maxRaw > 40 ? 10 : maxRaw > 10 ? 5 : 1;
  const top = Math.ceil(maxRaw / step) * step;
  const X = (i: number) => m.l + 6 + (n === 1 ? 0 : (i / (n - 1)) * (W - m.l - m.r - 12));
  const Y = (v: number) => m.t + (1 - v / top) * (H - m.t - m.b);
  const pts = series.map((s) => s.values.map((v, i) => [X(i), Y(v)] as [number, number]));
  const f = (v: number) => `${fmt(v, digits, locale)}${unit}`;
  const ticks = [0, top / 2, top];

  const lead = series[0];
  const peak = lead.values.indexOf(Math.max(...lead.values));
  const summary = tx.summary(f(lead.values[0]), f(lead.values[last]), full[0], full[last], f(lead.values[peak]), full[peak]);

  const near = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * W;
    let b = 0, d = 1e9;
    for (let i = 0; i < n; i++) { const dd = Math.abs(X(i) - px); if (dd < d) { d = dd; b = i; } }
    setIdx(b);
  };
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') setIdx(null);
    else if (e.key === 'ArrowRight') { e.preventDefault(); setIdx((i) => Math.min(last, (i ?? -1) + 1)); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); setIdx((i) => Math.max(0, (i ?? n) - 1)); }
    else if (e.key === 'Home') setIdx(0);
    else if (e.key === 'End') setIdx(last);
  };

  const cw = wrap.current?.clientWidth ?? W;
  const ch = wrap.current?.clientHeight ?? H;
  const tip: TipData | null = idx === null ? null : {
    x: (X(idx) / W) * cw,
    y: (Math.min(...pts.map((p) => p[idx][1])) / H) * ch - 10,
    title: full[idx],
    rows: series.map((s, k) => ({ c: LINE_COLORS[k % 3], l: s.name, v: f(s.values[idx]) })),
  };

  return (
    <div className="ch">
      <div className="ch-bar">
        <p className="ch-range">{span === null ? `${full[0]} – ${full[last]}` : tx.days(span)}</p>
        <p className="ch-sr">{summary}</p>
        <button type="button" className="ch-toggle" aria-pressed={table} onClick={() => setTable((v) => !v)}>{table ? tx.chart : tx.table}</button>
      </div>
      {table ? (
        <div className="ch-table-wrap">
          <table className="ch-table">
            <thead><tr><th>{tx.col}</th>{series.map((s) => <th key={s.name}>{s.name}</th>)}</tr></thead>
            <tbody>{full.map((l, i) => <tr key={l + i}><td>{l}</td>{series.map((s) => <td key={s.name}>{f(s.values[i])}</td>)}</tr>)}</tbody>
          </table>
        </div>
      ) : (
        <div
          ref={wrap}
          className="ch-plot"
          tabIndex={0}
          role="group"
          aria-label={`${title}. ${summary}`}
          onPointerMove={near}
          onPointerDown={near}
          onPointerLeave={() => setIdx(null)}
          onBlur={() => setIdx(null)}
          onKeyDown={onKey}
        >
          <svg viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
            <defs>
              <linearGradient id={`g${uid}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" style={{ stopColor: 'var(--chart-1)' }} stopOpacity=".34" />
                <stop offset="1" style={{ stopColor: 'var(--chart-1)' }} stopOpacity="0" />
              </linearGradient>
            </defs>
            {ticks.map((t) => (
              <g key={t}>
                <line className="ch-grid" x1={m.l} x2={W - m.r} y1={Y(t)} y2={Y(t)} />
                <text className="ch-t" x={m.l - 10} y={Y(t) + 4} textAnchor="end">{fmt(t, 0, locale)}{unit}</text>
              </g>
            ))}
            {/* só a série em foco (a primeira) recebe preenchimento */}
            <path d={`${curve(pts[0])}L${X(last)},${Y(0)}L${X(0)},${Y(0)}Z`} className="ch-area" style={{ fill: `url(#g${uid})`, opacity: on ? 1 : 0 }} />
            {series.map((s, k) => {
              const dash = LINE_DASH[k % 3];
              return (
                <path
                  key={s.name}
                  d={curve(pts[k])}
                  className="ch-ln"
                  pathLength={dash ? undefined : 1}
                  style={{
                    stroke: LINE_COLORS[k % 3],
                    strokeDasharray: dash ?? 1,
                    strokeDashoffset: dash || on ? 0 : 1,
                    opacity: dash ? (on ? 1 : 0) : 1,
                    transitionDelay: `${k * 120}ms`,
                  }}
                />
              );
            })}
            {/* rótulo na ponta da série em foco */}
            {series.length === 1 && (
              <g className="ch-end" style={{ opacity: on ? 1 : 0 }}>
                <circle cx={X(last)} cy={Y(lead.values[last])} r="5.5" className="ch-dot" style={{ stroke: 'var(--chart-1)' }} />
                <rect x={X(last) - 30} y={Y(lead.values[last]) - 36} width="60" height="24" rx="12" className="ch-pill" />
                <text x={X(last)} y={Y(lead.values[last]) - 20} textAnchor="middle" className="ch-pill-t">{f(lead.values[last])}</text>
              </g>
            )}
            {idx !== null && (
              <g>
                <line className="ch-guide" x1={X(idx)} x2={X(idx)} y1={m.t} y2={H - m.b} />
                {pts.map((p, k) => <circle key={k} className="ch-dot" r="5" cx={p[idx][0]} cy={p[idx][1]} style={{ stroke: LINE_COLORS[k % 3] }} />)}
              </g>
            )}
          </svg>
          <TipBox tip={tip} />
        </div>
      )}
      {series.length > 1 && (
        <ul className="ch-legend">
          {series.map((s, k) => (
            <li key={s.name}>
              <svg width="22" height="8" aria-hidden="true"><line x1="1" x2="21" y1="4" y2="4" stroke={LINE_COLORS[k % 3]} strokeWidth="2.5" strokeLinecap="round" strokeDasharray={LINE_DASH[k % 3]} /></svg>
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ── Barras em pílula (ranking) ───────────────────────────────────────────
export type BarItem = { label: string; value: number; display?: string; hot?: boolean; group?: string };

export function PillBars({ items, max, unit = '', digits, locale, on }: { items: BarItem[]; max?: number; unit?: string; digits?: number; locale: string; on: boolean }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<TipData | null>(null);
  const hi = max ?? Math.max(...items.map((i) => i.value));
  const text = (it: BarItem) => it.display ?? `${fmt(it.value, digits ?? (Number.isInteger(it.value) ? 0 : 1), locale)}${unit}`;
  return (
    <div ref={wrap} className="ch-rank" onPointerLeave={() => setTip(null)}>
      <ul>
        {items.map((it, i) => (
          <li
            key={it.label}
            onPointerMove={(e) => {
              const p = within(e, wrap.current);
              setTip({ x: p.x, y: p.y - 14, rows: [{ c: it.hot ? 'var(--chart-5)' : 'var(--chart-1)', l: it.label, v: text(it) }] });
            }}
          >
            <span className="ch-rk-name">{it.label}</span>
            <b className="ch-rk-val">{text(it)}</b>
            <span className="ch-rk-track">
              <i style={{ width: on ? `${(it.value / hi) * 100}%` : 0, background: it.hot ? 'var(--chart-5)' : 'var(--chart-1)', transitionDelay: `${i * 60}ms` }} />
            </span>
          </li>
        ))}
      </ul>
      <TipBox tip={tip} />
    </div>
  );
}

// ── Rosca ─────────────────────────────────────────────────────────────────
const pol = (cx: number, cy: number, r: number, a: number): [number, number] => {
  const t = ((a - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(t), cy + r * Math.sin(t)];
};
const arc = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const [x0, y0] = pol(cx, cy, r, a0), [x1, y1] = pol(cx, cy, r, a1);
  return `M${x0},${y0}A${r},${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1},${y1}`;
};

export function DonutChart({ items, center, locale, on }: { items: { label: string; value: number }[]; center?: { value: string; label: string }; locale: string; on: boolean }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [act, setAct] = useState<number | null>(null);
  const [tip, setTip] = useState<TipData | null>(null);
  const S = 200, sw = 26, r = S / 2 - sw / 2 - 6, c = S / 2;
  const total = items.reduce((s, i) => s + i.value, 0) || 1;
  const gap = items.length > 1 ? ((sw + 6) / r) * (180 / Math.PI) : 0;
  const pct = (v: number) => `${fmt((v / total) * 100, 1, locale)}%`;
  const label = items.map((i) => `${i.label}: ${pct(i.value)}`).join('; ');
  const cur = act === null ? center : { value: pct(items[act].value), label: items[act].label };
  let a = 0;
  return (
    <div ref={wrap} className="ch-donut" onPointerLeave={() => { setAct(null); setTip(null); }}>
      <svg viewBox={`0 0 ${S} ${S}`} role="img" aria-label={label}>
        {items.map((it, i) => {
          const span = (it.value / total) * 360;
          const a0 = a + gap / 2;
          const a1 = Math.min(Math.max(a0 + 1, a + span - gap / 2), a0 + 359.9);
          a += span;
          return (
            <path
              key={it.label}
              d={arc(c, c, r, a0, a1)}
              fill="none"
              strokeLinecap="round"
              strokeWidth={sw}
              className="ch-arc"
              style={{ stroke: SERIES_COLORS[i % 5], opacity: !on ? 0 : act === null || act === i ? 1 : 0.5, transform: on ? 'scale(1)' : 'scale(.6)', transitionDelay: `${i * 120}ms` }}
              onPointerEnter={() => setAct(i)}
              onPointerMove={(e) => {
                const p = within(e, wrap.current);
                setTip({ x: p.x, y: p.y - 14, rows: [{ c: SERIES_COLORS[i % 5], l: it.label, v: pct(it.value) }] });
              }}
            />
          );
        })}
        {cur && (
          <g textAnchor="middle" pointerEvents="none">
            <text x={c} y={c + 6} className="ch-donut-v">{cur.value}</text>
            <text x={c} y={c + 26} className="ch-t">{cur.label.length > 22 ? cur.label.slice(0, 21) + '…' : cur.label}</text>
          </g>
        )}
      </svg>
      <ul className="ch-donut-legend">
        {items.map((it, i) => (
          <li key={it.label} className={act === i ? 'is-on' : ''} onPointerEnter={() => setAct(i)}>
            <i style={{ background: SERIES_COLORS[i % 5] }} /><span>{it.label}</span><b>{pct(it.value)}</b>
          </li>
        ))}
      </ul>
      <TipBox tip={tip} />
    </div>
  );
}

// ── Mini linha e barra do ranking de laboratórios ─────────────────────────
export function Spark({ series, label }: { series: [number, number][]; label: string }) {
  const uid = useId().replace(/:/g, '');
  const [hover, setHover] = useState(false);
  const w = 150, h = 38, pad = 5;
  const vs = series.map((p) => p[1]);
  const lo = Math.min(...vs), hi = Math.max(...vs);
  const x = (i: number) => pad + (i * (w - pad * 2)) / Math.max(1, series.length - 1);
  const y = (v: number) => pad + (1 - (hi === lo ? 0.5 : (v - lo) / (hi - lo))) * (h - pad * 2);
  const d = curve(series.map((q, i) => [x(i), y(q[1])] as [number, number]));
  const last = series.length - 1;
  return (
    <svg className="ch-spark" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <defs>
        <linearGradient id={`s${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--chart-1)' }} stopOpacity=".3" />
          <stop offset="1" style={{ stopColor: 'var(--chart-1)' }} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d}L${x(last)},${h}L${x(0)},${h}Z`} style={{ fill: `url(#s${uid})` }} />
      <path d={d} className="ch-ln is-static" style={{ stroke: 'var(--chart-1)', strokeWidth: 2.2 }} />
      <circle cx={x(last)} cy={y(series[last][1])} r={hover ? 5 : 3.5} className="ch-dot" style={{ stroke: 'var(--chart-1)' }} />
    </svg>
  );
}

export function PillBar({ pct, label }: { pct: number; label: string }) {
  return <span className="ch-pillbar" role="img" aria-label={label}><i style={{ width: `${Math.max(2, pct)}%` }} /></span>;
}

const fmtItem = (it: BarItem, unit: string, digits: number | undefined, locale: string) =>
  it.display ?? `${fmt(it.value, digits ?? (Number.isInteger(it.value) ? 0 : 1), locale)}${unit}`;

type ChartBaseProps = { items: BarItem[]; max?: number; unit?: string; digits?: number; locale: string; on: boolean };

// ── Colunas com destaque (série no tempo) ────────────────────────────────
function rbar(x: number, y: number, w: number, h: number, rt: number): string {
  rt = Math.max(0, Math.min(rt, w / 2, h / 2));
  return `M${x},${y + rt}A${rt},${rt} 0 0 1 ${x + rt},${y}H${x + w - rt}A${rt},${rt} 0 0 1 ${x + w},${y + rt}V${y + h}H${x}Z`;
}

export function Columns({ items, max, unit = '', digits, locale, on }: ChartBaseProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<TipData | null>(null);
  const W = 520, H = 250, m = { l: 40, r: 8, t: 38, b: 34 };
  const top = max ?? Math.ceil(Math.max(...items.map((i) => i.value)) / 10) * 10;
  const band = (W - m.l - m.r) / items.length;
  const bw = Math.min(46, band * 0.58);
  const Y = (v: number) => m.t + (1 - v / top) * (H - m.t - m.b);
  const label = items.map((i) => `${i.label}: ${fmtItem(i, unit, digits, locale)}`).join('; ');
  return (
    <div ref={wrap} className="ch-plot" role="img" aria-label={label} onPointerLeave={() => setTip(null)}>
      <svg viewBox={`0 0 ${W} ${H}`}>
        {[0, top / 2, top].map((t) => (
          <g key={t}>
            <line className="ch-grid" x1={m.l} x2={W - m.r} y1={Y(t)} y2={Y(t)} />
            <text className="ch-t" x={m.l - 10} y={Y(t) + 4} textAnchor="end">{fmt(t, 0, locale)}{unit}</text>
          </g>
        ))}
        {items.map((it, i) => {
          const x = m.l + band * i + (band - bw) / 2;
          const y = Y(it.value);
          const cx = x + bw / 2;
          return (
            <g key={it.label}>
              <path
                d={rbar(x, y, bw, H - m.b - y, Math.min(14, bw / 2))}
                className={`ch-col ${it.hot ? 'is-hot' : ''}`}
                style={{ transform: on ? 'scaleY(1)' : 'scaleY(0)', transitionDelay: `${i * 70}ms` }}
                onPointerMove={() => {
                  const w = wrap.current?.clientWidth ?? W, h = wrap.current?.clientHeight ?? H;
                  setTip({ x: (cx / W) * w, y: (y / H) * h - 8, rows: [{ c: 'var(--chart-1)', l: it.label, v: fmtItem(it, unit, digits, locale) }] });
                }}
              />
              <text className="ch-t" x={cx} y={H - 10} textAnchor="middle">{it.label}</text>
              {it.hot && (
                <g className="ch-end" style={{ opacity: on ? 1 : 0 }}>
                  <rect x={cx - 28} y={y - 34} width="56" height="24" rx="12" className="ch-pill" />
                  <text x={cx} y={y - 18} textAnchor="middle" className="ch-pill-t">{fmtItem(it, unit, digits, locale)}</text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
      <TipBox tip={tip} />
    </div>
  );
}

// ── Anéis de meta (notas contra um teto) ─────────────────────────────────
const RING_COLORS = ['var(--chart-1)', 'var(--chart-3)', 'var(--chart-2-line)'];
export function Rings({ items, max = 100, unit = '', digits, locale, on }: ChartBaseProps) {
  return (
    <ul className="ch-rings">
      {items.map((it, i) => {
        const p = Math.min(1, it.value / max);
        const color = it.hot ? 'var(--chart-5)' : RING_COLORS[i % RING_COLORS.length];
        // O centro mostra só o número. O texto longo de `display` fica no aria-label.
        const u = unit || (it.display?.includes('%') ? '%' : '');
        const short = `${fmt(it.value, digits ?? (Number.isInteger(it.value) ? 0 : 1), locale)}${u}`;
        return (
          <li key={it.label}>
            <svg viewBox="0 0 120 120" role="img" aria-label={`${it.label}: ${fmtItem(it, unit, digits, locale)}`}>
              <circle cx="60" cy="60" r="46" fill="none" strokeWidth="13" style={{ stroke: 'var(--chart-track)' }} />
              <circle
                cx="60" cy="60" r="46" fill="none" strokeWidth="13" strokeLinecap="round" pathLength={1}
                transform="rotate(-90 60 60)"
                className="ch-ring"
                style={{ stroke: color, strokeDasharray: `${on ? p : 0} 1`, transitionDelay: `${i * 120}ms` }}
              />
              <text x="60" y="65" textAnchor="middle" className="ch-ring-v">{short}</text>
            </svg>
            <span>{it.label}</span>
          </li>
        );
      })}
    </ul>
  );
}

// ── Cartões de indicador ─────────────────────────────────────────────────
const KPI_COLORS = ['var(--chart-1)', 'var(--chart-3)', 'var(--chart-2-line)'];

export function KpiCards({ items, max = 100, unit = '', digits, locale, on }: ChartBaseProps) {
  // Um cartão em destaque por gráfico (Design System v2, 11.8): o marcado como `hot`, ou o primeiro.
  const hotAt = items.findIndex((i) => i.hot);
  const feat = hotAt >= 0 ? hotAt : 0;
  return (
    <ul className="ch-kpis">
      {items.map((it, i) => (
        <li key={it.label} className={i === feat ? 'is-feat' : ''}>
          <b>{fmtItem(it, unit, digits, locale)}</b>
          <span>{it.label}</span>
          <span className="ch-pillbar" aria-hidden="true">
            <i style={{ width: on ? `${Math.min(100, (it.value / max) * 100)}%` : 0, background: i === feat ? 'var(--chart-4)' : it.hot ? 'var(--chart-5)' : KPI_COLORS[i % KPI_COLORS.length], transitionDelay: `${i * 80}ms` }} />
          </span>
        </li>
      ))}
    </ul>
  );
}

// ── Pirulito, com abas quando os itens têm grupo ─────────────────────────
export function Lollipops({ items, max, unit = '', digits, locale, on }: ChartBaseProps) {
  const groups = [...new Set(items.map((i) => i.group).filter(Boolean))] as string[];
  const [tab, setTab] = useState(groups[0]);
  const wrap = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<TipData | null>(null);
  const shown = groups.length > 1 ? items.filter((i) => i.group === tab) : items;
  const hi = max ?? Math.max(...items.map((i) => i.value));
  const lead = Math.max(...shown.map((i) => i.value));
  // A cor segue o grupo (a aba), não o ranking: roxo, laranja, preto.
  const gi = Math.max(0, groups.indexOf(tab ?? ''));
  const tone = ['var(--chart-1)', 'var(--chart-5-line)', 'var(--chart-3)'][gi % 3];
  return (
    <div ref={wrap} className="ch-lp" style={{ ['--lp' as string]: tone }} onPointerLeave={() => setTip(null)}>
      {groups.length > 1 && (
        <div className="ch-tabs" role="group">
          {groups.map((g) => <button key={g} type="button" aria-pressed={tab === g} onClick={() => setTab(g)}>{g}</button>)}
        </div>
      )}
      <ul>
        {shown.map((it, i) => (
          <li
            key={it.label}
            onPointerMove={(e) => {
              const p = within(e, wrap.current);
              setTip({ x: p.x, y: p.y - 14, rows: [{ c: 'var(--chart-1)', l: it.label, v: fmtItem(it, unit, digits, locale) }] });
            }}
          >
            <span className="ch-rk-name">{it.label}</span>
            <b className="ch-rk-val">{fmtItem(it, unit, digits, locale)}</b>
            <span className="ch-lp-track">
              <i className="ch-lp-stem" style={{ width: on ? `${(it.value / hi) * 100}%` : 0, transitionDelay: `${i * 70}ms` }} />
              <i className={`ch-lp-dot ${it.value === lead ? 'is-lead' : ''}`} style={{ left: on ? `${(it.value / hi) * 100}%` : 0, transitionDelay: `${i * 70}ms` }} />
            </span>
          </li>
        ))}
      </ul>
      <TipBox tip={tip} />
    </div>
  );
}

// ── Mapa de hexágonos do Brasil ──────────────────────────────────────────
// [linha, coluna] de cada UF numa grade de hexágonos (linhas ímpares deslocadas meia célula).
const UF_GRID: Record<string, [number, number]> = {
  RR: [0, 3], AP: [0, 5],
  AM: [1, 2], PA: [1, 4], MA: [1, 5], CE: [1, 6], RN: [1, 7],
  AC: [2, 1], RO: [2, 2], MT: [2, 3], TO: [2, 4], PI: [2, 5], PE: [2, 6], PB: [2, 7],
  MS: [3, 3], GO: [3, 4], BA: [3, 5], SE: [3, 6], AL: [3, 7],
  DF: [4, 4], MG: [4, 5], ES: [4, 6],
  PR: [5, 3], SP: [5, 4], RJ: [5, 5],
  RS: [6, 2], SC: [6, 3],
};

export function HexMap({ items, unit = '', digits, locale, on }: ChartBaseProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<TipData | null>(null);
  const R = 22, w = Math.sqrt(3) * R, rowH = 1.5 * R;
  const byUf = new Map(items.filter((i) => UF_GRID[i.label]).map((i) => [i.label, i]));
  const rest = items.find((i) => !UF_GRID[i.label]);
  const hi = Math.max(...[...byUf.values()].map((i) => i.value), 1);
  const W = 9 * w + w / 2, H = 6 * rowH + 2 * R;
  const label = items.map((i) => `${i.label}: ${fmtItem(i, unit, digits, locale)}`).join('; ');
  const hex = (cx: number, cy: number, r: number) =>
    [0, 1, 2, 3, 4, 5].map((k) => {
      const a = (Math.PI / 180) * (60 * k - 30);
      return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
    }).join(' ');
  return (
    <div ref={wrap} className="ch-hex" onPointerLeave={() => setTip(null)}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label}>
        {Object.entries(UF_GRID).map(([uf, [r, c]], k) => {
          const cx = c * w + w / 2 + (r % 2 ? w / 2 : 0), cy = r * rowH + R;
          const it = byUf.get(uf);
          const t = it ? it.value / hi : 0;
          const fill = it ? `color-mix(in oklab, var(--chart-1) ${Math.round(28 + 72 * t)}%, var(--chart-soft))` : 'var(--chart-track)';
          const data = it ?? rest;
          return (
            <g
              key={uf}
              className="ch-hexcell"
              style={{ opacity: on ? 1 : 0, transform: on ? 'scale(1)' : 'scale(.5)', transitionDelay: `${k * 18}ms` }}
              onPointerMove={() => {
                const wd = wrap.current?.clientWidth ?? W, hd = wrap.current?.clientHeight ?? H;
                setTip({ x: (cx / W) * wd, y: (cy / H) * hd - R, title: it ? undefined : uf, rows: data ? [{ c: it ? 'var(--chart-1)' : 'var(--chart-2)', l: it ? uf : data.label, v: fmtItem(data, unit, digits, locale) }] : [] });
              }}
            >
              <polygon points={hex(cx, cy, R - 2.5)} style={{ fill, stroke: fill }} strokeWidth="5" strokeLinejoin="round" />
              <text x={cx} y={cy + 4} textAnchor="middle" className="ch-hex-t" style={{ fill: it && t > 0.45 ? '#fff' : 'var(--chart-muted)' }}>{uf}</text>
            </g>
          );
        })}
      </svg>
      {rest && <p className="ch-hex-rest"><i />{rest.label}: <b>{fmtItem(rest, unit, digits, locale)}</b></p>}
      <TipBox tip={tip} />
    </div>
  );
}
