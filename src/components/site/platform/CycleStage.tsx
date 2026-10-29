import { useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Eye, GraduationCap, Network, Send, ShieldCheck, Target, type LucideIcon } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { useScrollProgress } from '@/components/home/useScrollProgress';
import { scrollToStage } from '@/components/home/scroll-to';
import { fill } from './hooks';

// O ciclo da Dinn em seis passos, num anel preso à tela que se desenha com a
// rolagem (mesmo padrão do palco das soluções). O arco avança, cada nó acende
// e, ao lado, o passo ativo mostra descrição, exemplo e sinais. Com menos
// movimento, o anel já aparece completo e os seis passos ficam todos à mostra.

type Stage = { name: string; title: string; desc: string; example: string; chips: string[] };

const SIZE = 520;
const C = SIZE / 2;
const R = 164;
const NODE = 29;
const ICONS: LucideIcon[] = [Eye, ShieldCheck, Network, Target, Send, GraduationCap];
const ACCENT = 'var(--primary)';
const LILAC = '#B79EFF';

const pos = (i: number, r = R) => {
  const a = ((-90 + i * 60) * Math.PI) / 180;
  return { x: C + r * Math.cos(a), y: C + r * Math.sin(a), a };
};

function Ring({ p, active, all, onGo }: { p: number; active: number; all: boolean; onGo?: (i: number) => void }) {
  const { t } = useTranslation();
  const stages = useStages();
  const arc = all ? 1 : p;
  const headA = ((-90 + 360 * p) * Math.PI) / 180;
  const head = { x: C + R * Math.cos(headA), y: C + R * Math.sin(headA) };
  return (
    <svg className="pf-ring" viewBox={`0 0 ${SIZE} ${SIZE}`} role="group" aria-label={t('platformViz.cycle.ringLabel') as string}>
      <circle cx={C} cy={C} r={R - 46} fill="none" stroke="#E5E1F7" strokeDasharray="3 9" strokeLinecap="round" className="pf-ring-inner" />
      <circle cx={C} cy={C} r={R} fill="none" stroke="#E5E7EB" strokeWidth={6} />
      <circle
        cx={C}
        cy={C}
        r={R}
        fill="none"
        stroke={ACCENT}
        strokeWidth={6}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray="1 1"
        strokeDashoffset={1 - arc}
        transform={`rotate(-90 ${C} ${C})`}
        style={{ opacity: arc < 0.004 ? 0 : 1 }}
      />
      {!all && p > 0.01 && p < 0.995 && (
        <g>
          <circle cx={head.x} cy={head.y} r={15} fill={LILAC} opacity={0.35} className="pf-ring-pulse" />
          <circle cx={head.x} cy={head.y} r={7} fill="#fff" stroke={ACCENT} strokeWidth={3} />
        </g>
      )}
      {stages.map((s, i) => {
        const { x, y, a } = pos(i);
        const lit = all || p >= i / 6 - 0.001;
        const on = !all && i === active;
        const Icon = ICONS[i] ?? Eye;
        const lx = x + Math.cos(a) * (NODE + 14);
        const ly = y + Math.sin(a) * (NODE + 14);
        const anchor = Math.abs(Math.cos(a)) < 0.2 ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end';
        const dy = Math.abs(Math.cos(a)) < 0.2 ? (Math.sin(a) < 0 ? -4 : 18) : 5;
        return (
          <g
            key={s.name}
            className={onGo ? 'pf-node-hit' : undefined}
            role={onGo ? 'button' : undefined}
            tabIndex={onGo ? 0 : undefined}
            aria-label={onGo ? `${t('platformViz.cycle.goTo')} ${i + 1}: ${s.name}` : undefined}
            aria-current={onGo && on ? 'step' : undefined}
            onClick={onGo ? () => onGo(i) : undefined}
            onKeyDown={onGo ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onGo(i); } } : undefined}
          >
            {on && <circle cx={x} cy={y} r={NODE + 11} fill="none" stroke={LILAC} strokeWidth={2} className="pf-node-halo" />}
            <circle
              cx={x}
              cy={y}
              r={on ? NODE + 3 : NODE}
              fill={lit ? ACCENT : '#fff'}
              stroke={lit ? ACCENT : '#CBD0D8'}
              strokeWidth={2.5}
              className="pf-node"
            />
            <Icon x={x - 12} y={y - 12} width={24} height={24} color={lit ? '#fff' : '#9CA3AF'} strokeWidth={2} />
            <text
              x={lx}
              y={ly + dy}
              textAnchor={anchor}
              fontSize={16}
              fontWeight={on ? 600 : 500}
              fill={lit ? '#2A2F36' : '#8B91A0'}
              className="pf-node-label"
            >
              {s.name}
            </text>
          </g>
        );
      })}
      <text x={C} y={C - 4} textAnchor="middle" fontSize={56} fontWeight={500} fill={ACCENT} style={{ fontVariantNumeric: 'tabular-nums' }}>
        {all ? '↻' : String(active + 1).padStart(2, '0')}
      </text>
      <text x={C} y={C + 30} textAnchor="middle" fontSize={18} fontWeight={600} fill="#2A2F36">
        {all ? (t('platformViz.cycle.loop') as string) : stages[active]?.name}
      </text>
    </svg>
  );
}

function useStages() {
  const { t } = useTranslation();
  return ((t('inside.stages') as Stage[]) ?? []).slice(0, 6);
}

function StepCard({ s, i, total }: { s: Stage; i: number; total: number }) {
  const { t } = useTranslation();
  return (
    <article className="pf-step">
      <p className="pf-step-meta">
        <span className="pf-step-n">{String(i + 1).padStart(2, '0')}</span>
        <span>{fill(t('platformViz.cycle.stepLabel') as string, { n: i + 1, total })}</span>
      </p>
      <h3>
        <span className="pf-step-name">{s.name}.</span> {s.title}
      </h3>
      <p className="pf-step-desc">{s.desc}</p>
      <div className="pf-step-ex">
        <strong>{t('platformViz.cycle.example')}</strong>
        <p>{s.example}</p>
      </div>
      <ul className="pf-chips">
        {s.chips.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </article>
  );
}

export function CycleStage() {
  const { t } = useTranslation();
  const stages = useStages();
  const reduce = !!useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);
  useScrollProgress(ref, (v) => setP(Math.round(v * 600) / 600));

  const total = stages.length || 6;
  const active = Math.min(total - 1, Math.floor(p * total * 0.9999));

  const goTo = (i: number) => scrollToStage(ref.current, i, total);

  if (reduce) {
    return (
      <section className="pf-cycle is-static" aria-labelledby="pf-cycle-title">
        <div className="wrap">
          <div className="sp-head pf-cycle-head">
            <h2 id="pf-cycle-title">{t('platform.cycle.title')}</h2>
            <p>{t('platform.cycle.intro')}</p>
          </div>
          <div className="pf-cycle-static">
            <Ring p={1} active={-1} all />
            <ol className="pf-step-list">
              {stages.map((s, i) => (
                <li key={s.name}><StepCard s={s} i={i} total={total} /></li>
              ))}
            </ol>
          </div>
          <p className="sp-more"><a href="/#por-dentro">{t('inside.eyebrow')} →</a></p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section ref={ref} className="pf-cycle" aria-labelledby="pf-cycle-title">
        <div className="pf-cycle-sticky">
          <div className="wrap pf-cycle-grid">
            <div className="pf-cycle-ring">
              <Ring p={p} active={active} all={false} onGo={goTo} />
            </div>
            <div className="pf-cycle-copy">
              <div className="sp-head pf-cycle-head">
                <h2 id="pf-cycle-title">{t('platform.cycle.title')}</h2>
                <p>{t('platform.cycle.intro')}</p>
              </div>
              {stages[active] && <StepCard key={active} s={stages[active]} i={active} total={total} />}
              <ol className="pf-segs" aria-label={t('platformViz.cycle.goTo') as string}>
                {stages.map((s, i) => (
                  <li key={s.name}>
                    <button
                      type="button"
                      className={i === active ? 'is-on' : i < active ? 'is-past' : ''}
                      aria-current={i === active ? 'step' : undefined}
                      aria-label={`${t('platformViz.cycle.goTo')} ${i + 1}: ${s.name}`}
                      onClick={() => goTo(i)}
                    >
                      <span>{i + 1}</span>
                    </button>
                  </li>
                ))}
              </ol>
              <p className="pf-hint" aria-hidden="true" style={{ opacity: p < 0.04 ? 1 : 0 }}>
                {t('platformViz.cycle.hint')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="wrap pf-cycle-more">
        <p className="sp-more"><a href="/#por-dentro">{t('inside.eyebrow')} →</a></p>
      </div>
    </>
  );
}
