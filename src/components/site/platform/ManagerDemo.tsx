import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, RotateCcw } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { LEVEL, levelKey } from '@/components/home/palette';
import { rng } from '@/components/home/neural';
import { AppFrame } from '@/components/home/team-visuals';
import { useDemoActive, useStepper } from './hooks';

// Dinn Manager: a fila priorizada de lojas, com o nível e o que conferir. Cada
// loja conferida desce na fila e as outras sobem. O mini gráfico mostra a
// ruptura da loja em foco ao longo de 30 dias (valores de exemplo).

type Row = { name: string; level: string; value: string; check: string };

const num = (v: string) => parseFloat(String(v).replace(',', '.').replace('%', '')) || 0;

function Spark({ value, seed, from, to, title }: { value: number; seed: number; from: string; to: string; title: string }) {
  const pts = useMemo(() => {
    const r = rng(seed * 7 + 3);
    const n = 10;
    return Array.from({ length: n }, (_, k) => {
      const t = k / (n - 1);
      const base = value * (0.35 + 0.65 * t);
      return Math.max(2, Math.min(100, k === n - 1 ? value : base + (r() - 0.5) * value * 0.18));
    });
  }, [value, seed]);
  const W = 240;
  const H = 90;
  const top = Math.max(...pts) * 1.15;
  const x = (k: number) => 6 + (k * (W - 12)) / (pts.length - 1);
  const y = (v: number) => H - 8 - (v / top) * (H - 18);
  const d = pts.map((v, k) => `${k ? 'L' : 'M'}${x(k).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  return (
    <figure className="pf-spark">
      <figcaption>{title}</figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${title}: ${value}%`}>
        <line x1={6} x2={W - 6} y1={H - 8} y2={H - 8} stroke="#E5E7EB" />
        <motion.path
          key={`a-${seed}-${value}`}
          d={`${d} L${x(pts.length - 1)},${H - 8} L${x(0)},${H - 8} Z`}
          fill="#EF4444"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <motion.path
          key={`l-${seed}-${value}`}
          d={d}
          fill="none"
          stroke="#EF4444"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <circle cx={x(pts.length - 1)} cy={y(value)} r={4} fill="#EF4444" />
      </svg>
      <div className="pf-spark-axis"><span>{from}</span><strong>{value}%</strong><span>{to}</span></div>
    </figure>
  );
}

export function ManagerDemo() {
  const { t } = useTranslation();
  const rows = ((t('teams.visuals.queue.rows') as Row[]) ?? []).slice(0, 5);
  const n = rows.length;
  const { ref, inView, reduce } = useDemoActive();
  const [manual, setManual] = useState<Set<number> | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [f] = useStepper(inView && manual === null && !reduce, 1900, Math.max(2, n));

  const autoDone = new Set(Array.from({ length: reduce ? 0 : f }, (_, k) => k));
  const done = manual ?? autoDone;
  const order = [...rows.keys()].sort((a, b) => Number(done.has(a)) - Number(done.has(b)) || a - b);
  const focus = hover ?? order[0] ?? 0;

  const toggle = (idx: number) => {
    setManual((prev) => {
      const next = new Set(prev ?? autoDone);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div ref={ref} className="pf-demo">
      <AppFrame app={t('teams.visuals.queue.app') as string} tag={t('platformViz.demo.tag') as string}>
        <div className="pf-q-head">
          <span>{t('teams.visuals.queue.sub')}</span>
          {manual !== null && (
            <button type="button" className="pf-link" onClick={() => setManual(null)}>
              <RotateCcw size={12} aria-hidden="true" />
              {t('platformViz.demo.reset')}
            </button>
          )}
        </div>
        <div className="pf-q">
          <ul className="pf-q-list">
            {order.map((idx, pos) => {
              const r = rows[idx];
              const c = LEVEL[levelKey(r.level)];
              const isDone = done.has(idx);
              return (
                <motion.li key={r.name} layout transition={{ type: 'spring', stiffness: 320, damping: 32 }} className={isDone ? 'is-done' : ''}>
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    onMouseEnter={() => setHover(idx)}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover(idx)}
                    onBlur={() => setHover(null)}
                    aria-pressed={isDone}
                  >
                    <span className="pf-q-rank">{isDone ? <Check size={13} aria-hidden="true" /> : pos + 1}</span>
                    <span className="pf-q-main">
                      <strong>{r.name}</strong>
                      <span>{isDone ? t('platformViz.manager.done') : `${t('platformViz.manager.check')}: ${r.check}`}</span>
                    </span>
                    <span className="pf-q-val" style={{ color: isDone ? '#8B91A0' : c.fg }}>{r.value}</span>
                    <span className="tv-badge" style={{ color: isDone ? '#6B7280' : c.fg, background: isDone ? '#F3F4F6' : c.bg }}>
                      <i style={{ background: isDone ? '#9CA3AF' : c.dot }} />
                      {r.level}
                    </span>
                  </button>
                </motion.li>
              );
            })}
          </ul>
          <div className="pf-q-side">
            <p className="pf-q-store">{rows[focus]?.name}</p>
            <Spark
              value={num(rows[focus]?.value ?? '0')}
              seed={focus}
              from={t('platformViz.manager.chartFrom') as string}
              to={t('platformViz.manager.chartTo') as string}
              title={t('platformViz.manager.chartTitle') as string}
            />
          </div>
        </div>
        <p className="pf-demo-note"><span className="tv-insight-dot" />{manual === null ? t('platformViz.manager.caption') : t('platformViz.manager.hint')}</p>
      </AppFrame>
    </div>
  );
}
