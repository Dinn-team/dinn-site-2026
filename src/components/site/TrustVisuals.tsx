import { motion } from 'framer-motion';
import {
  Activity, AlertTriangle, Building2, Check, Clock, Eye, Gauge, KeyRound, Layers, Lightbulb, Lock, Mail,
  PackageX, Server, Settings, ShieldCheck, ShoppingCart, Store, User, Warehouse,
} from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import { LEVEL } from '@/components/home/palette';

// Visuais da página Confiança: o que um sinal diz sobre si, o que ele não
// prova, de onde vem e com que frequência chega, e como o acesso é protegido.
// Fundo claro, mesma paleta da página; cada peça entra suavemente na tela.

type Dict = Record<string, any>;
type IconType = ComponentType<{ size?: number; 'aria-hidden'?: boolean | 'true'; strokeWidth?: number }>;

const EASE = [0.22, 1, 0.36, 1] as const;
const ACCENT = '#5625F2';
const LILAC = '#B79EFF';
const GREEN = '#10B981';
const AMBER = '#F59E0B';
const GREY = '#CBD0D8';

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8% 0px' },
  transition: { delay: 0.08 * i, duration: 0.6, ease: EASE },
});

// ── Hero: um sinal na tela, com tudo o que ele diz sobre si ───────────────
export function SignalAnatomy() {
  const { t } = useTranslation();
  const a = (t('trustVisual.anatomy') as Dict) ?? {};
  const callouts = (a.callouts as { label: string; value: string }[]) ?? [];
  const level = ((t('teams.visuals.queue.rows') as { level: string }[]) ?? [])[0]?.level ?? '';
  const icons: IconType[] = [Eye, Clock, Gauge, AlertTriangle, Check];
  const tones = [GREEN, ACCENT, ACCENT, AMBER, GREEN];
  const spark = [30, 34, 38, 45, 52, 57, 60, 71, 78, 87];
  const pts = spark.map((v, i) => `${8 + i * 22},${58 - (v / 100) * 50}`).join(' ');

  return (
    <motion.figure className="tr-anatomy" {...reveal()} aria-label={a.title}>
      <div className="tr-card">
        <div className="tr-card-head">
          <span className="tr-card-dot" />
          <div>
            <strong>{a.signal}</strong>
            <span>{a.store}</span>
          </div>
          <span className="tr-level" style={{ color: LEVEL.critico.fg, background: LEVEL.critico.bg }}>
            <i style={{ background: LEVEL.critico.dot }} />{level}
          </span>
        </div>
        <div className="tr-card-metric">
          <span className="tr-big">86,7%</span>
          <svg viewBox="0 0 220 64" aria-hidden="true">
            <polyline points={pts} fill="none" stroke={LEVEL.critico.dot} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray="1" className="tr-draw" />
            <circle cx={8 + 9 * 22} cy={58 - 0.87 * 50} r="4.5" fill={LEVEL.critico.dot} />
          </svg>
        </div>
        <ul className="tr-callouts">
          {callouts.map((c, i) => {
            const Icon = icons[i] ?? Check;
            return (
              <motion.li key={c.label} {...reveal(i + 1)}>
                <span className="tr-chip" style={{ color: tones[i], background: `${tones[i]}1A` }}><Icon size={15} aria-hidden="true" /></span>
                <span className="tr-callout-label">{c.label}</span>
                <span className="tr-callout-value">{c.value}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <figcaption>{a.note}</figcaption>
    </motion.figure>
  );
}

// ── Os três tipos de sinal, com ilustração e régua de proximidade ─────────
function ObservedArt() {
  return (
    <svg viewBox="0 0 240 130" role="img" aria-hidden="true">
      <rect x="14" y="26" width="76" height="78" rx="12" fill="#fff" stroke="#DADDE3" />
      <rect x="26" y="40" width="42" height="7" rx="3.5" fill="#E5E7EB" />
      <rect x="26" y="55" width="54" height="7" rx="3.5" fill="#E5E7EB" />
      <rect x="26" y="70" width="30" height="7" rx="3.5" fill="#E5E7EB" />
      <circle cx="72" cy="88" r="10" fill={GREEN} />
      <path d="M67,88 l4,4 l7,-8" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M96,65 H140" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 7" className="tr-flow" />
      <path d="M136,58 l8,7 l-8,7" stroke={GREEN} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M150,52 L188,28 L226,52 Z" fill={ACCENT} />
      <rect x="156" y="52" width="64" height="48" rx="6" fill="#EEE9FF" stroke={ACCENT} />
      <rect x="180" y="72" width="16" height="28" rx="3" fill="#fff" stroke={ACCENT} />
      <path d="M188,60 v8 M184,64 h8" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function EstimatedArt() {
  const ys = [18, 52, 86];
  return (
    <svg viewBox="0 0 240 130" role="img" aria-hidden="true">
      {ys.map((y) => (
        <g key={y}>
          <rect x="14" y={y} width="50" height="28" rx="7" fill="#EEE9FF" stroke={ACCENT} />
          <path d={`M26,${y + 14} h26`} stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
          <path d={`M70,${y + 14} C108,${y + 14} 112,65 142,65`} fill="none" stroke={LILAC} strokeWidth="2" strokeDasharray="3 5" className="tr-flow" />
        </g>
      ))}
      <rect x="148" y="34" width="78" height="62" rx="10" fill="none" stroke={ACCENT} strokeWidth="2.2" strokeDasharray="6 5" />
      <text x="187" y="76" textAnchor="middle" fontSize="30" fontWeight="700" fill={ACCENT}>≈</text>
    </svg>
  );
}

function InferredArt() {
  return (
    <svg viewBox="0 0 240 130" role="img" aria-hidden="true">
      <rect x="12" y="30" width="58" height="70" rx="10" fill="#fff" stroke="#DADDE3" />
      {[0, 1, 2].map((r) => [0, 1, 2].map((c) => (
        <circle key={`${r}${c}`} cx={28 + c * 14} cy={46 + r * 16} r="4.5" fill={ACCENT} opacity="0.8" />
      )))}
      <path d="M72,65 H92" stroke={GREY} strokeWidth="2" strokeDasharray="3 4" />
      <circle cx="120" cy="65" r="26" fill="#FEF3C7" stroke={AMBER} strokeWidth="2" strokeDasharray="5 5" />
      <text x="120" y="75" textAnchor="middle" fontSize="28" fontWeight="700" fill="#B45309">?</text>
      <path d="M148,65 H168" stroke={GREY} strokeWidth="2" strokeDasharray="3 4" />
      {[26, 62, 98].map((y) => (
        <g key={y}>
          <rect x="174" y={y} width="52" height="26" rx="7" fill="#fff" stroke="#DADDE3" />
          <circle cx="188" cy={y + 13} r="5" fill="#EF4444" />
          <rect x="198" y={y + 10} width="20" height="6" rx="3" fill="#E5E7EB" />
        </g>
      ))}
    </svg>
  );
}

export function SignalKinds() {
  const { t } = useTranslation();
  const signals = (t('trust.signals.items') as { name: string; def: string; example: string }[]) ?? [];
  const v = (t('trustVisual.kinds') as Dict) ?? {};
  const kinds = (v.items as { meter: string; rows: { label: string; value: string }[] }[]) ?? [];
  const arts = [<ObservedArt key="o" />, <EstimatedArt key="e" />, <InferredArt key="i" />];
  const levels = [3, 2, 1];
  const tones = [GREEN, ACCENT, AMBER];

  return (
    <div className="tr-kinds">
      {signals.map((s, i) => (
        <motion.article key={s.name} className="tr-kind" {...reveal(i)}>
          <div className="tr-kind-art" style={{ background: `${tones[i]}12` }}>{arts[i]}</div>
          <span className="sp-tag" style={{ color: tones[i], background: `${tones[i]}1A` }}>{s.name}</span>
          <p className="tr-kind-def">{s.def}</p>
          <div className="tr-meter" aria-label={`${v.proximity}: ${kinds[i]?.meter}`}>
            <span>{v.proximity}</span>
            <div aria-hidden="true">
              {[0, 1, 2].map((k) => <i key={k} style={{ background: k < levels[i] ? tones[i] : '#E5E7EB' }} />)}
            </div>
            <strong>{kinds[i]?.meter}</strong>
          </div>
          <dl className="tr-rows">
            {(kinds[i]?.rows ?? []).map((r) => (
              <div key={r.label}>
                <dt>{r.label}</dt>
                <dd>{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="tr-example">“{s.example}”</p>
        </motion.article>
      ))}
    </div>
  );
}

// ── O que um sinal não prova: o que aparece × o que isso não confirma ─────
const NOT_ICONS: [IconType, IconType][] = [
  [PackageX, AlertTriangle],
  [Warehouse, Store],
  [Activity, ShoppingCart],
  [Lightbulb, Settings],
];

export function NotProveCards() {
  const { t } = useTranslation();
  const v = (t('trustVisual.notProve') as Dict) ?? {};
  const pairs = (v.pairs as { a: string; b: string }[]) ?? [];
  const texts = (t('trust.notProve.items') as string[]) ?? [];

  return (
    <div className="tr-notprove">
      {pairs.map((p, i) => {
        const [A, B] = NOT_ICONS[i] ?? NOT_ICONS[0];
        return (
          <motion.article key={p.a} className="tr-np" {...reveal(i)}>
            <div className="tr-np-pair">
              <div className="tr-np-side">
                <span className="tr-np-cap">{v.sees}</span>
                <span className="tr-np-icon"><A size={26} aria-hidden="true" strokeWidth={1.8} /></span>
                <strong>{p.a}</strong>
              </div>
              <span className="tr-np-neq" aria-hidden="true">≠</span>
              <div className="tr-np-side is-b">
                <span className="tr-np-cap">{v.doesNot}</span>
                <span className="tr-np-icon"><B size={26} aria-hidden="true" strokeWidth={1.8} /></span>
                <strong>{p.b}</strong>
              </div>
            </div>
            <p>{texts[i]}</p>
          </motion.article>
        );
      })}
    </div>
  );
}

// ── Cobertura e atualização: da consulta à leitura ────────────────────────
export function CoverageViz() {
  const { t } = useTranslation();
  const v = (t('trustVisual.coverage') as Dict) ?? {};
  const steps = (v.steps as { label: string; text: string }[]) ?? [];
  const factors = (v.factors as string[]) ?? [];
  const widths = [86, 58, 72, 44];

  return (
    <div className="tr-coverage">
      <div className="tr-panel">
        <p className="tr-panel-title">{v.timelineTitle}</p>
        <ol className="tr-timeline">
          {steps.map((s, i) => (
            <motion.li key={s.label} {...reveal(i)}>
              <span className={`tr-node ${i === 1 ? 'is-main' : ''}`}>{i + 1}</span>
              <strong>{s.label}</strong>
              <p>{s.text}</p>
            </motion.li>
          ))}
        </ol>
        <p className="tr-ondemand"><span className="tr-pulse" aria-hidden="true" />{v.onDemand}</p>
      </div>
      <div className="tr-panel">
        <p className="tr-panel-title">{v.factorsTitle}</p>
        <ul className="tr-factors">
          {factors.map((f, i) => (
            <li key={f}>
              <span>{f}</span>
              <div aria-hidden="true">
                <motion.i initial={{ width: 0 }} whileInView={{ width: `${widths[i]}%` }} viewport={{ once: true }} transition={{ delay: 0.15 * i, duration: 0.9, ease: EASE }} />
              </div>
            </li>
          ))}
        </ul>
        <p className="tr-factors-note">{v.factorsNote}</p>
      </div>
    </div>
  );
}

// ── Segurança: o caminho do acesso e quem cuida de quê ────────────────────
const FLOW_ICONS: IconType[] = [User, Mail, KeyRound, ShieldCheck, Layers, Lock];

function Node({ icon: Icon, title, sub, tone }: { icon: IconType; title: string; sub: string; tone?: 'main' | 'lock' }) {
  return (
    <div className={`tr-flow-node ${tone ? `is-${tone}` : ''}`}>
      <span className="tr-flow-icon"><Icon size={22} aria-hidden="true" strokeWidth={1.8} /></span>
      <strong>{title}</strong>
      <span>{sub}</span>
    </div>
  );
}

export function SecurityFlow(): ReactNode {
  const { t } = useTranslation();
  const v = (t('trustVisual.security') as Dict) ?? {};
  const flow = (v.flow as { title: string; sub: string }[]) ?? [];
  const dinn = (v.dinn as { title: string; items: string[] }) ?? { title: '', items: [] };
  const client = (v.client as { title: string; items: string[] }) ?? { title: '', items: [] };

  return (
    <div className="tr-security">
      <div className="tr-panel">
        <p className="tr-panel-title">{v.flowTitle}</p>
        <ol className="tr-flow-chain">
          {flow.map((n, i) => (
            <motion.li key={n.title} {...reveal(i)}>
              <Node icon={FLOW_ICONS[i] ?? Layers} title={n.title} sub={n.sub} tone={i === 4 ? 'main' : i === 5 ? 'lock' : undefined} />
              {i < flow.length - 1 && <span className="tr-arrow" aria-hidden="true" />}
            </motion.li>
          ))}
        </ol>
      </div>
      <div className="tr-panel">
        <p className="tr-panel-title">{v.splitTitle}</p>
        <div className="tr-split">
          <motion.div className="tr-split-col" {...reveal(0)}>
            <span className="tr-split-icon"><Server size={22} aria-hidden="true" strokeWidth={1.8} /></span>
            <h3>{dinn.title}</h3>
            <ul>{dinn.items.map((x) => <li key={x}><Check size={15} aria-hidden="true" />{x}</li>)}</ul>
          </motion.div>
          <span className="tr-split-lock" aria-hidden="true"><Lock size={18} /></span>
          <motion.div className="tr-split-col is-client" {...reveal(1)}>
            <span className="tr-split-icon"><Building2 size={22} aria-hidden="true" strokeWidth={1.8} /></span>
            <h3>{client.title}</h3>
            <ul>{client.items.map((x) => <li key={x}><Check size={15} aria-hidden="true" />{x}</li>)}</ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ── Implantação: acordo → implantação → uso ───────────────────────────────
export function DeployBar() {
  const { t } = useTranslation();
  const v = (t('trustVisual.deploy') as Dict) ?? {};
  const steps = (v.steps as { label: string; text: string }[]) ?? [];
  const grow = [18, 64, 18];

  return (
    <div className="tr-deploy">
      <p className="tr-panel-title">{v.title}</p>
      <div className="tr-deploy-bar" aria-hidden="true">
        {grow.map((g, i) => (
          <motion.span
            key={i}
            className={i === 1 ? 'is-main' : ''}
            style={{ flexBasis: `${g}%` }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * i, duration: 0.8, ease: EASE }}
          />
        ))}
      </div>
      <ol className="tr-deploy-steps">
        {steps.map((s, i) => (
          <li key={s.label} style={{ flexBasis: `${grow[i]}%` }} className={i === 1 ? 'is-main' : ''}>
            <strong>{s.label}</strong>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
