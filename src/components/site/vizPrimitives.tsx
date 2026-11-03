import { useEffect, useRef, useState } from 'react';

// Peças de gráfico em SVG, sem biblioteca. Servem aos gráficos dos cases e às telas
// do produto reproduzidas em AppScreens.tsx.

export const fmt = (n: number, digits = 0, locale = 'pt-BR') =>
  n.toLocaleString(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits });

/** Vira `true` quando o elemento entra na tela. Sem movimento, já nasce `true`. */
export function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, on] as const;
}

// ── Rosca ─────────────────────────────────────────────────────────────────
export type DonutItem = { label: string; value: number };

export function DonutSvg({ items, colors, center, on = true, size = 168, stroke = 26 }: {
  items: DonutItem[];
  colors: string[];
  center?: { value: string; label: string };
  on?: boolean;
  size?: number;
  stroke?: number;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const total = items.reduce((s, i) => s + i.value, 0) || 1;
  let acc = 0;
  return (
    <svg className="cv-donut" viewBox={`0 0 ${size} ${size}`} role="img" aria-label={items.map((i) => `${i.label}: ${fmt(i.value, 1)}`).join('; ')}>
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--cv-track)" strokeWidth={stroke} />
        {items.map((it, i) => {
          const len = (it.value / total) * c;
          const gap = items.length > 1 ? 2 : 0;
          const el = (
            <circle
              key={it.label}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={colors[i % colors.length]}
              strokeWidth={stroke}
              strokeDasharray={`${on ? Math.max(len - gap, 0) : 0} ${c}`}
              strokeDashoffset={-acc}
              style={{ transition: `stroke-dasharray 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${i * 120}ms` }}
            />
          );
          acc += len;
          return el;
        })}
      </g>
      {center && (
        <g textAnchor="middle">
          <text x={size / 2} y={size / 2 + 2} className="cv-donut-value">{center.value}</text>
          <text x={size / 2} y={size / 2 + 20} className="cv-donut-label">{center.label}</text>
        </g>
      )}
    </svg>
  );
}

// ── Linhas ────────────────────────────────────────────────────────────────
export type LineSeries = { name: string; values: number[]; color: string; dashed?: boolean };

export function LineSvg({ labels, series, on = true, unit = '', digits = 0, height = 220, showValues = true, area = false, locale = 'pt-BR' }: {
  labels: string[];
  series: LineSeries[];
  on?: boolean;
  unit?: string;
  digits?: number;
  height?: number;
  showValues?: boolean;
  area?: boolean;
  locale?: string;
}) {
  const W = 520;
  const m = { l: 36, r: 14, t: 22, b: 30 };
  const maxRaw = Math.max(...series.flatMap((s) => s.values), 1);
  const step = maxRaw > 100 ? 50 : maxRaw > 40 ? 10 : maxRaw > 10 ? 5 : 1;
  const top = Math.ceil(maxRaw / step) * step;
  const iw = W - m.l - m.r;
  const ih = height - m.t - m.b;
  const pad = 18;
  const x = (i: number) => m.l + pad + (labels.length === 1 ? (iw - 2 * pad) / 2 : (i / (labels.length - 1)) * (iw - 2 * pad));
  const y = (v: number) => m.t + ih - (v / top) * ih;
  const ticks = [0, top / 2, top];
  return (
    <svg className="cv-line" viewBox={`0 0 ${W} ${height}`} role="img" aria-label={series.map((s) => s.name).join(', ')}>
      {ticks.map((t) => (
        <g key={t}>
          <line x1={m.l} x2={W - m.r} y1={y(t)} y2={y(t)} className="cv-grid-line" />
          <text x={m.l - 8} y={y(t) + 4} textAnchor="end" className="cv-axis">{fmt(t, top < 10 ? 1 : 0, locale)}{unit}</text>
        </g>
      ))}
      {labels.map((l, i) => (
        <text key={l + i} x={x(i)} y={height - 8} textAnchor="middle" className="cv-axis">{l}</text>
      ))}
      {series.map((s, si) => {
        const pts = s.values.map((v, i) => `${x(i)},${y(v)}`).join(' ');
        const areaPath = `M${x(0)},${y(0)} L${pts.replace(/ /g, ' L')} L${x(s.values.length - 1)},${y(0)} Z`;
        return (
          <g key={s.name}>
            {area && <path d={areaPath} fill={s.color} opacity={on ? 0.1 : 0} style={{ transition: 'opacity 0.8s ease 0.5s' }} />}
            <polyline
              points={pts}
              fill="none"
              stroke={s.color}
              strokeWidth={2.5}
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeDasharray={s.dashed ? '6 6' : undefined}
              pathLength={s.dashed ? undefined : 1}
              style={s.dashed ? { opacity: on ? 1 : 0, transition: 'opacity 0.8s ease' } : { strokeDasharray: 1, strokeDashoffset: on ? 0 : 1, transition: `stroke-dashoffset 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${si * 150}ms` }}
            />
            {s.values.map((v, i) => (
              <g key={i} style={{ opacity: on ? 1 : 0, transition: `opacity 0.4s ease ${0.5 + i * 0.08}s` }}>
                <circle cx={x(i)} cy={y(v)} r={4} fill="var(--cv-card)" stroke={s.color} strokeWidth={2}><title>{`${labels[i]}: ${fmt(v, digits, locale)}${unit}`}</title></circle>
                {showValues && series.length === 1 && (
                  <text x={x(i)} y={y(v) - 10} textAnchor="middle" className="cv-point">{fmt(v, digits, locale)}{unit}</text>
                )}
              </g>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
