import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Factory, MapPin, Stethoscope, Store } from 'lucide-react';
import { TrendChart } from './chat/ChatWidgets';
import { AVAIL, LEVEL, availKey, levelKey, priorityTone } from './palette';
import { brazilPoints, rng, prefersReducedMotion } from './neural';

// Visuais "vivos" de cada aba de time. São recriações das telas do Dinn
// Manager (Localizar produto, ranking de PDVs, Distribuidores, Oportunidades),
// com dados de exemplo e animação que conta o que a tela faz.

const EASE = [0.22, 1, 0.36, 1] as const;

export function AppFrame({ app, tag, children }: { app: string; tag: string; children: ReactNode }) {
  return (
    <div className="tv-frame">
      <div className="tv-bar">
        <span className="tv-brand" aria-hidden="true" />
        <span className="tv-app">{app}</span>
        <span className="tv-tag">{tag}</span>
      </div>
      <div className="tv-body">{children}</div>
    </div>
  );
}

function Badge({ color, bg, label }: { color: string; bg: string; label: string }) {
  return (
    <span className="tv-badge" style={{ color, background: bg }}>
      <i style={{ background: color }} />
      {label}
    </span>
  );
}

/** Contador que avança enquanto o visual está montado (para animações em ciclo). */
function useTicker(ms: number, max: number) {
  const [n, setN] = useState(prefersReducedMotion() ? max : 0);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => setN((v) => (v + 1) % (max + 1)), ms);
    return () => clearInterval(id);
  }, [ms, max]);
  return n;
}

// ── SAC: localizador ───────────────────────────────────────────────────────
type LocRow = { name: string; dist: string; level: string; stock: string };
export function LocatorVisual({ v }: { v: { you: string; rows: LocRow[]; insight: string } }) {
  const pins = [
    { x: 228, y: 118 }, { x: 140, y: 196 }, { x: 268, y: 222 }, { x: 96, y: 92 }, { x: 300, y: 70 },
  ];
  const streets = useMemo(() => {
    const r = rng(3);
    return Array.from({ length: 14 }, (_, i) => {
      const vertical = i % 2 === 0;
      const p = 20 + r() * 320;
      return vertical ? `M${p},0 L${p + (r() - 0.5) * 60},300` : `M0,${p * 0.85} L360,${p * 0.85 + (r() - 0.5) * 50}`;
    });
  }, []);
  return (
    <div className="tv-split">
      <svg viewBox="0 0 360 300" className="tv-map" aria-hidden="true">
        <rect width="360" height="300" fill="#F3F4F6" />
        {streets.map((d, i) => <path key={i} d={d} stroke="#fff" strokeWidth={i % 3 ? 4 : 7} fill="none" />)}
        <motion.circle cx={184} cy={150} fill="rgba(86,37,242,0.06)" stroke="rgba(86,37,242,0.35)" strokeDasharray="4 5"
          initial={{ r: 0 }} animate={{ r: 128 }} transition={{ duration: 1.4, ease: EASE }} />
        {pins.map((p, i) => {
          const row = v.rows[i % v.rows.length];
          const c = AVAIL[availKey(row?.level ?? 'alta')];
          return (
            <g key={i}>
              <motion.path d={`M184,150 L${p.x},${p.y}`} stroke={c.dot} strokeWidth={1.5} strokeDasharray="3 4" fill="none"
                initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ delay: 0.9 + i * 0.3, duration: 0.5 }} />
              <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.1 + i * 0.3, type: 'spring', stiffness: 380, damping: 18 }}
                style={{ transformOrigin: `${p.x}px ${p.y}px` }}>
                <circle cx={p.x} cy={p.y} r={13} fill={c.dot} stroke="#fff" strokeWidth={3} />
                <Store x={p.x - 6} y={p.y - 6} width={12} height={12} color="#fff" strokeWidth={2.2} />
              </motion.g>
            </g>
          );
        })}
        <g>
          <circle cx={184} cy={150} r={18} fill="rgba(86,37,242,0.18)" className="tv-pulse" />
          <circle cx={184} cy={150} r={9} fill="#5625F2" stroke="#fff" strokeWidth={3} />
        </g>
        <foreignObject x={124} y={170} width={120} height={24}>
          <div className="tv-map-label">{v.you}</div>
        </foreignObject>
      </svg>
      <div className="tv-list">
        {v.rows.map((r, i) => {
          const c = AVAIL[availKey(r.level)];
          return (
            <motion.div key={r.name} className="tv-row" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 + i * 0.3, duration: 0.45, ease: EASE }}>
              <div>
                <strong>{r.name}</strong>
                <span>{r.dist} · {r.stock}</span>
              </div>
              <Badge color={c.fg} bg={c.bg} label={r.level} />
            </motion.div>
          );
        })}
        <motion.div className="tv-insight" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8, duration: 0.5, ease: EASE }}>
          <span className="tv-insight-dot" /> {v.insight}
        </motion.div>
      </div>
    </div>
  );
}

// ── Campo: fila priorizada ─────────────────────────────────────────────────
type QRow = { name: string; level: string; value: string; check: string };
export function QueueVisual({ v }: { v: { sub: string; rows: QRow[] } }) {
  const scrambled = [3, 0, 4, 1, 2];
  const [sorted, setSorted] = useState(prefersReducedMotion());
  useEffect(() => {
    if (sorted) return;
    const id = window.setTimeout(() => setSorted(true), 1300);
    return () => clearTimeout(id);
  }, [sorted]);
  const order = sorted ? v.rows.map((_, i) => i) : scrambled.filter((i) => i < v.rows.length);
  return (
    <div className="tv-queue">
      <div className="tv-queue-head">
        <span>{v.sub}</span>
        <span className="tv-progress"><motion.i initial={{ width: '8%' }} animate={{ width: sorted ? '100%' : '35%' }} transition={{ duration: 1.2, ease: EASE }} /></span>
      </div>
      <ul>
        {order.map((idx, pos) => {
          const r = v.rows[idx];
          const c = LEVEL[levelKey(r.level)];
          return (
            <motion.li key={r.name} layout transition={{ type: 'spring', stiffness: 300, damping: 30 }} className={sorted ? 'is-sorted' : ''}>
              <span className="tv-rank">{sorted ? pos + 1 : '·'}</span>
              <div className="tv-queue-main">
                <strong>{r.name}</strong>
                <motion.span initial={false} animate={{ opacity: sorted ? 1 : 0 }} transition={{ delay: 0.3 + pos * 0.12 }}>{r.check}</motion.span>
              </div>
              <span className="tv-queue-val" style={{ color: sorted ? c.fg : '#9CA3AF' }}>{r.value}</span>
              <motion.span initial={false} animate={{ opacity: sorted ? 1 : 0.3 }}>
                <Badge color={sorted ? c.fg : '#9CA3AF'} bg={sorted ? c.bg : '#F3F4F6'} label={r.level} />
              </motion.span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

// ── Propaganda médica: entorno do consultório ──────────────────────────────
export function PrescriberVisual({ v }: { v: { center: string; withStock: string; without: string; insight: string } }) {
  const shops = useMemo(() => {
    const r = rng(9);
    return Array.from({ length: 12 }, (_, i) => {
      const bad = i >= 7; // as 5 sem estoque ficam juntas, à direita
      const a = bad ? -0.9 + r() * 1.5 : 1.0 + r() * 4.2;
      const d = 55 + r() * 70;
      return { x: 180 + Math.cos(a) * d * 1.25, y: 150 + Math.sin(a) * d, bad };
    });
  }, []);
  const good = shops.filter((s) => !s.bad).length;
  return (
    <div className="tv-prescriber">
      <svg viewBox="0 0 360 300" className="tv-map" aria-hidden="true">
        <rect width="360" height="300" fill="#F8F8FA" />
        {[60, 100, 140].map((r, i) => (
          <motion.circle key={r} cx={180} cy={150} r={r} fill="none" stroke="rgba(86,37,242,0.18)" strokeDasharray="3 6"
            initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.15, duration: 0.8, ease: EASE }} style={{ transformOrigin: '180px 150px' }} />
        ))}
        <motion.path d="M262,96 A110,96 0 0 1 270,214" fill="none" stroke="#EF4444" strokeWidth={14} strokeLinecap="round" opacity={0.12}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.6, duration: 0.8 }} />
        {shops.map((s, i) => {
          const c = s.bad ? '#EF4444' : '#10B981';
          return (
            <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.13, type: 'spring', stiffness: 400, damping: 20 }} style={{ transformOrigin: `${s.x}px ${s.y}px` }}>
              <circle cx={s.x} cy={s.y} r={9} fill={c} stroke="#fff" strokeWidth={2.5} />
            </motion.g>
          );
        })}
        <circle cx={180} cy={150} r={22} fill="rgba(86,37,242,0.14)" className="tv-pulse" />
        <circle cx={180} cy={150} r={16} fill="#5625F2" stroke="#fff" strokeWidth={3} />
        <Stethoscope x={171} y={141} width={18} height={18} color="#fff" strokeWidth={2} />
        <foreignObject x={130} y={172} width={100} height={24}><div className="tv-map-label">{v.center}</div></foreignObject>
      </svg>
      <div className="tv-kpi-row">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }}>
          <strong style={{ color: '#047857' }}>{good}</strong><span>{v.withStock}</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.45 }}>
          <strong style={{ color: '#B91C1C' }}>{shops.length - good}</strong><span>{v.without}</span>
        </motion.div>
        <motion.div className="tv-insight" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.9 }}>
          <span className="tv-insight-dot is-red" /> {v.insight}
        </motion.div>
      </div>
    </div>
  );
}

// ── Distribuição: CD × farmácias ───────────────────────────────────────────
type DCase = { name: string; cd: number; pdv: number; demand: string; read: string };
export function DistributionVisual({ v }: { v: { cd: string; cases: DCase[]; cdLabel: string; pdvLabel: string; demandLabel: string; formula: string } }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % v.cases.length), 4200);
    return () => clearInterval(id);
  }, [paused, v.cases.length]);
  const c = v.cases[active];
  const stores = useMemo(() => {
    const r = rng(17);
    return Array.from({ length: 11 }, (_, i) => ({ x: 250 + r() * 90, y: 22 + i * 24 + (r() - 0.5) * 8, k: r() }));
  }, []);
  const cdColor = c.cd < 20 ? '#EF4444' : c.cd < 45 ? '#F59E0B' : '#10B981';
  return (
    <div className="tv-dist">
      <div className="tv-dist-cases" role="tablist">
        {v.cases.map((x, i) => (
          <button key={x.name} type="button" role="tab" aria-selected={i === active} className={i === active ? 'is-active' : ''}
            onClick={() => { setActive(i); setPaused(true); }}>
            {x.name}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 360 290" className="tv-dist-svg" aria-hidden="true">
        {stores.map((s, i) => {
          const empty = s.k < c.pdv / 100;
          const d = `M86,145 C170,145 170,${s.y} ${s.x},${s.y}`;
          return (
            <g key={i}>
              <path d={d} fill="none" stroke={empty ? 'rgba(239,68,68,0.25)' : 'rgba(86,37,242,0.22)'} strokeWidth={1.4} />
              {!empty && c.cd > 15 && (
                <circle r={2.8} fill="#5625F2">
                  <animateMotion dur={`${1.6 + (i % 4) * 0.35}s`} repeatCount="indefinite" path={d} begin={`${(i % 5) * 0.3}s`} />
                </circle>
              )}
              <motion.circle cx={s.x} cy={s.y} r={8} stroke="#fff" strokeWidth={2.5}
                animate={{ fill: empty ? '#EF4444' : '#10B981' }} transition={{ duration: 0.5, delay: i * 0.04 }} />
            </g>
          );
        })}
        <rect x={34} y={105} width={56} height={80} rx={14} fill="#fff" stroke={cdColor} strokeWidth={2.5} />
        <motion.rect x={40} width={44} rx={8} fill={cdColor} opacity={0.18}
          animate={{ y: 179 - (68 * c.cd) / 100, height: (68 * c.cd) / 100 }} transition={{ duration: 0.8, ease: EASE }} />
        <Factory x={50} y={128} width={24} height={24} color={cdColor} strokeWidth={2} />
        <text x={62} y={205} textAnchor="middle" fontSize="11" fontWeight="700" fill="#1F2328">{v.cd}</text>
      </svg>
      <motion.div key={c.name} className="tv-dist-read" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: EASE }}>
        <div className="tv-meters">
          <Meter label={v.cdLabel} value={c.cd} color={cdColor} />
          <Meter label={v.pdvLabel} value={c.pdv} color="#EF4444" suffix="%" />
          <div className="tv-meter"><span>{v.demandLabel}</span><strong>{c.demand}</strong></div>
        </div>
        <p><strong>{c.name}.</strong> {c.read}</p>
        <small>{v.formula}</small>
      </motion.div>
    </div>
  );
}

function Meter({ label, value, color, suffix = '' }: { label: string; value: number; color: string; suffix?: string }) {
  return (
    <div className="tv-meter">
      <span>{label}</span>
      <div className="tv-meter-track"><motion.i style={{ background: color }} initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: 0.8, ease: EASE }} /></div>
      {suffix && <strong>{value}{suffix}</strong>}
    </div>
  );
}

// ── Lançamentos: presença semana a semana ──────────────────────────────────
export function LaunchVisual({ v }: { v: { legend: string[]; weeks: string[]; regions: string[]; insight: string } }) {
  const big = [5, 14, 27, 41, 55, 68, 74, 79];
  const ind = [0, 2, 4, 8, 12, 17, 22, 26];
  const week = useTicker(700, v.weeks.length);
  const shown = Math.max(1, week);
  const arrival = [1, 1, 2, 2, 3, 4, 4, 5, 6, 3, 1, 7]; // semana em que cada região "acende"
  return (
    <div className="tv-launch">
      <TrendChart
        dark={false}
        unit="%"
        height={170}
        labels={v.weeks}
        series={[
          { name: v.legend[0], points: big },
          { name: v.legend[1], points: ind, tone: 'sky' },
        ]}
      />
      <div className="tv-regions">
        {v.regions.map((r, i) => {
          const on = shown >= arrival[i];
          return (
            <motion.span key={r} animate={{ backgroundColor: on ? 'rgba(86,37,242,0.9)' : 'rgba(86,37,242,0.06)', color: on ? '#fff' : '#9CA3AF' }} transition={{ duration: 0.4 }}>
              {r}
            </motion.span>
          );
        })}
      </div>
      <div className="tv-insight"><span className="tv-insight-dot" /> {v.insight}</div>
    </div>
  );
}

// ── Estoque parado: faixas e o par parado × ruptura ────────────────────────
export function StalledVisual({ v }: { v: { bands: { label: string; value: number }[]; from: string; to: string; distance: string } }) {
  const tones = ['#22C55E', '#FACC15', '#F97316', '#EF4444'];
  const max = Math.max(...v.bands.map((b) => b.value));
  return (
    <div className="tv-stalled">
      <div className="tv-bands">
        {v.bands.map((b, i) => (
          <div key={b.label} className="tv-band">
            <span><i style={{ background: tones[i] }} />{b.label}</span>
            <div className="tv-meter-track"><motion.i style={{ background: tones[i] }} initial={{ width: 0 }} animate={{ width: `${(b.value / max) * 100}%` }} transition={{ delay: 0.2 + i * 0.15, duration: 0.9, ease: EASE }} /></div>
            <strong>{b.value}</strong>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 360 120" className="tv-pair" aria-hidden="true">
        <defs>
          <marker id="tv-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#5625F2" />
          </marker>
        </defs>
        <motion.path id="tv-pair-path" d="M70,62 C140,10 220,10 290,62" fill="none" stroke="#5625F2" strokeWidth={2} strokeDasharray="5 6" markerEnd="url(#tv-arrow)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1, duration: 1 }} />
        {[0, 0.5, 1].map((d) => (
          <circle key={d} r={3.5} fill="#5625F2">
            <animateMotion dur="2.2s" begin={`${2 + d}s`} repeatCount="indefinite" path="M70,62 C140,10 220,10 290,62" />
          </circle>
        ))}
        <circle cx={70} cy={62} r={18} fill="#FEF3C7" stroke="#F59E0B" strokeWidth={2.5} />
        <Store x={61} y={53} width={18} height={18} color="#B45309" strokeWidth={2} />
        <circle cx={290} cy={62} r={18} fill="#FEE2E2" stroke="#EF4444" strokeWidth={2.5} />
        <Store x={281} y={53} width={18} height={18} color="#B91C1C" strokeWidth={2} />
        <text x={180} y={30} textAnchor="middle" fontSize="11" fontWeight="700" fill="#5625F2">{v.distance}</text>
        <text x={70} y={100} textAnchor="middle" fontSize="11" fill="#4B5563">{v.from}</text>
        <text x={290} y={100} textAnchor="middle" fontSize="11" fill="#4B5563">{v.to}</text>
      </svg>
    </div>
  );
}

// ── Concorrência: mercado comparável ───────────────────────────────────────
export function CompetitionVisual({ v }: { v: { you: string; them: string; reading: string; gap: string } }) {
  const total = 60;
  const gap = 23;
  return (
    <div className="tv-compete">
      <TrendChart
        dark={false}
        unit=""
        height={160}
        labels={['S1', 'S2', 'S3', 'S4', 'S5', 'S6']}
        series={[
          { name: v.you, points: [100, 101, 103, 104, 105, 106] },
          { name: v.them, points: [100, 103, 105, 107, 109, 111], tone: 'sky' },
        ]}
      />
      <motion.p className="tv-reading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>{v.reading}</motion.p>
      <div className="tv-gap">
        <div className="tv-dots">
          {Array.from({ length: total }, (_, i) => (
            <motion.i key={i} initial={{ backgroundColor: '#E5E7EB' }} animate={{ backgroundColor: i < gap ? '#0EA5E9' : '#E5E7EB' }} transition={{ delay: 1.8 + i * 0.03 }} />
          ))}
        </div>
        <div><strong>{gap}</strong><span>{v.gap}</span></div>
      </div>
    </div>
  );
}

// ── Demanda: mapa de oportunidades ─────────────────────────────────────────
export function DemandVisual({ v }: { v: { questions: string[]; actions: { priority: string; title: string }[] } }) {
  const pts = useMemo(() => brazilPoints(420, 4), []);
  const q = useTicker(3600, v.questions.length - 1);
  // focos de calor por pergunta (coordenadas normalizadas do mapa)
  const heat = [
    [{ x: 0.86, y: 0.36, c: '#10B981' }, { x: 0.74, y: 0.68, c: '#10B981' }, { x: 0.62, y: 0.55, c: '#F59E0B' }],
    [{ x: 0.7, y: 0.75, c: '#EF4444' }, { x: 0.58, y: 0.88, c: '#EF4444' }, { x: 0.8, y: 0.62, c: '#F59E0B' }],
    [{ x: 0.9, y: 0.28, c: '#10B981' }, { x: 0.35, y: 0.25, c: '#F59E0B' }, { x: 0.66, y: 0.6, c: '#10B981' }],
  ][q] ?? [];
  const W = 300;
  const H = 300;
  return (
    <div className="tv-demand">
      <div className="tv-demand-q">
        {v.questions.map((x, i) => <span key={x} className={i === q ? 'is-active' : ''}>{x}</span>)}
      </div>
      <div className="tv-demand-body">
        <svg viewBox={`0 0 ${W} ${H}`} className="tv-brazil" aria-hidden="true">
          <defs>
            {['#10B981', '#EF4444', '#F59E0B'].map((c) => (
              <radialGradient key={c} id={`tv-heat-${c.slice(1)}`}>
                <stop offset="0%" stopColor={c} stopOpacity="0.75" />
                <stop offset="100%" stopColor={c} stopOpacity="0" />
              </radialGradient>
            ))}
          </defs>
          {heat.map((h, i) => (
            <motion.circle key={`${q}-${i}`} cx={h.x * W} cy={h.y * H} fill={`url(#tv-heat-${h.c.slice(1)})`}
              initial={{ r: 0, opacity: 0 }} animate={{ r: 46, opacity: 1 }} transition={{ delay: i * 0.25, duration: 0.9, ease: EASE }} />
          ))}
          {pts.map((p, i) => <circle key={i} cx={p.x * W} cy={p.y * H} r={1.6} fill="#C7CBD4" />)}
        </svg>
        <div className="tv-demand-actions">
          {v.actions.map((a, i) => {
            const t = priorityTone(a.priority);
            return (
              <motion.div key={a.title} className="tv-row" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.25, ease: EASE }}>
                <Badge color={t.fg} bg={t.bg} label={a.priority} />
                <strong>{a.title}</strong>
              </motion.div>
            );
          })}
          <div className="tv-pin-note"><MapPin size={13} /> {v.questions[q]}</div>
        </div>
      </div>
    </div>
  );
}
