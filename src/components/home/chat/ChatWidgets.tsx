import { motion } from 'framer-motion';
import type { Widget } from './engine';
import { AVAIL, LEVEL, SERIES, TONE, availKey, levelKey, priorityTone } from '../palette';

// Versões "vivas" dos widgets do Dinn Insights (components/insights/widgets
// no dinn-manager-app), redesenhadas para o fundo escuro do topo da página.

const rise = (i: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.08 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
});

function Pill({ fg, bg, label }: { fg: string; bg: string; label: string }) {
  return (
    <span className="cw-pill" style={{ color: fg, background: bg }}>
      <i />
      {label}
    </span>
  );
}

function Table({ w }: { w: Extract<Widget, { type: 'table' }> }) {
  return (
    <div className="cw-table-wrap">
      <table className="cw-table">
        <thead>
          <tr>{w.columns.map((c) => <th key={c.label} className={c.kind === 'num' ? 'is-num' : ''}>{c.label}</th>)}</tr>
        </thead>
        <tbody>
          {w.rows.map((row, i) => (
            <motion.tr key={i} {...rise(i + 1)}>
              {row.map((cell, j) => {
                const kind = w.columns[j]?.kind;
                if (kind === 'level') { const c = LEVEL[levelKey(cell)]; return <td key={j}><Pill fg={c.fg} bg={c.bg} label={cell} /></td>; }
                if (kind === 'avail') { const c = AVAIL[availKey(cell)]; return <td key={j}><Pill fg={c.fg} bg={c.bg} label={cell} /></td>; }
                if (kind === 'verdict') return <td key={j}><span className="cw-verdict">{cell}</span></td>;
                return <td key={j} className={kind === 'num' ? 'is-num' : j === 0 ? 'is-strong' : ''}>{cell}</td>;
              })}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Kpis({ w }: { w: Extract<Widget, { type: 'kpis' }> }) {
  return (
    <div className="cw-kpis">
      {w.items.map((k, i) => (
        <motion.div key={k.label} className="cw-kpi" {...rise(i)}>
          <span>{k.label}</span>
          <strong className={k.tone ? `is-${k.tone}` : ''}>{k.value}</strong>
        </motion.div>
      ))}
    </div>
  );
}

/** Gráfico de linhas em SVG puro: as linhas "se desenham" ao aparecer. */
export function TrendChart({ labels, series, unit, height = 180, dark = false }: {
  labels: string[];
  series: { name: string; points: number[]; dashed?: boolean; tone?: string }[];
  unit: string;
  height?: number;
  dark?: boolean;
}) {
  const W = 520;
  const H = height;
  const pad = { l: 34, r: 12, t: 12, b: 24 };
  const all = series.flatMap((s) => s.points);
  const rawMin = Math.min(...all);
  const rawMax = Math.max(...all);
  const span = rawMax - rawMin || 1;
  const min = unit === '%' ? Math.max(0, Math.floor((rawMin - span * 0.15) / 10) * 10) : Math.floor(rawMin - span * 0.2);
  const max = unit === '%' ? Math.min(100, Math.ceil((rawMax + span * 0.15) / 10) * 10) : Math.ceil(rawMax + span * 0.2);
  const x = (i: number) => pad.l + (i * (W - pad.l - pad.r)) / Math.max(1, labels.length - 1);
  const y = (v: number) => pad.t + (1 - (v - min) / (max - min || 1)) * (H - pad.t - pad.b);
  const ticks = [min, (min + max) / 2, max];
  const grid = dark ? 'rgba(255,255,255,0.08)' : '#E5E7EB';
  const label = dark ? 'rgba(255,255,255,0.45)' : '#6B7280';
  let colorIdx = 0;

  return (
    <div className="cw-trend">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={series.map((s) => s.name).join(', ')}>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} stroke={grid} strokeDasharray="3 4" />
            <text x={pad.l - 8} y={y(t) + 4} textAnchor="end" fontSize="10" fill={label}>{Math.round(t)}{unit}</text>
          </g>
        ))}
        {labels.map((l, i) => (
          <text key={l} x={x(i)} y={H - 6} textAnchor="middle" fontSize="10" fill={label}>{l}</text>
        ))}
        {series.map((s, si) => {
          const color = s.dashed ? (dark ? 'rgba(255,255,255,0.55)' : '#6B7280') : s.tone ? TONE[s.tone] : SERIES[colorIdx++ % SERIES.length];
          const stroke = color;
          const d = s.points.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
          const area = `${d} L${x(s.points.length - 1)},${H - pad.b} L${x(0)},${H - pad.b} Z`;
          return (
            <g key={s.name}>
              {si === 0 && !s.dashed && (
                <motion.path d={area} fill={stroke} initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 0.9, duration: 0.8 }} />
              )}
              <motion.path
                d={d}
                fill="none"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={s.dashed ? '5 4' : undefined}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.15 + si * 0.2, duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />
              <motion.circle
                cx={x(s.points.length - 1)}
                cy={y(s.points[s.points.length - 1])}
                r={3.5}
                fill={stroke}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3 + si * 0.2 }}
              />
            </g>
          );
        })}
      </svg>
      <div className="cw-legend">
        {(() => {
          let c = 0;
          return series.map((s) => {
            const color = s.dashed ? (dark ? 'rgba(255,255,255,0.55)' : '#6B7280') : s.tone ? TONE[s.tone] : SERIES[c++ % SERIES.length];
            return (
              <span key={s.name}>
                <i style={{ background: color }} />
                {s.name}
              </span>
            );
          });
        })()}
      </div>
    </div>
  );
}

function Bars({ w }: { w: Extract<Widget, { type: 'bars' }> }) {
  const max = Math.max(...w.rows.map((r) => r.value));
  return (
    <div className="cw-bars">
      {w.rows.map((r, i) => {
        const color = r.tone ? TONE[r.tone] : '#5625F2';
        return (
          <div key={r.label} className="cw-bar">
            <span className="cw-bar-label"><i style={{ background: color }} />{r.label}</span>
            <span className="cw-bar-track">
              <motion.span
                style={{ background: color }}
                initial={{ width: 0 }}
                animate={{ width: `${(r.value / max) * 100}%` }}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
            <span className="cw-bar-value">{r.value} {w.unit}</span>
          </div>
        );
      })}
    </div>
  );
}

function Actions({ w, labels }: { w: Extract<Widget, { type: 'actions' }>; labels: ActionLabels }) {
  return (
    <div className="cw-actions">
      {w.items.map((a, i) => {
        const tone = priorityTone(a.priority);
        return (
          <motion.div key={a.title} className="cw-action" {...rise(i)}>
            <Pill fg={tone.fg} bg={tone.bg} label={a.priority} />
            <strong>{a.title}</strong>
            <p><b>{labels.why}</b> {a.why}</p>
            <p><b>{labels.how}</b> {a.how}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

export type ActionLabels = { why: string; how: string };

export function ChatWidget({ widget, tag, labels }: { widget: Widget; tag?: string; labels: ActionLabels }) {
  return (
    <motion.div
      className="cw"
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="cw-head">
        <span>{widget.title}</span>
        {tag && <span className="cw-tag">{tag}</span>}
      </div>
      <div className="cw-body">
        {widget.type === 'table' && <Table w={widget} />}
        {widget.type === 'kpis' && <Kpis w={widget} />}
        {widget.type === 'trend' && <TrendChart labels={widget.labels} series={widget.series} unit={widget.unit} />}
        {widget.type === 'bars' && <Bars w={widget} />}
        {widget.type === 'actions' && <Actions w={widget} labels={labels} />}
      </div>
    </motion.div>
  );
}
