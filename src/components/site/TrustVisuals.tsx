import { Fragment } from 'react';
import { motion } from 'framer-motion';
import {
  Activity, AlertTriangle, Building2, Check, ChevronRight, Clock, Eye, Gauge, KeyRound, Layers, Lightbulb, Lock, Mail,
  PackageX, Server, Settings, ShieldCheck, ShoppingCart, Store, User, Warehouse,
} from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import { LEVEL } from '@/components/home/palette';
import { IlEstimated, IlInferred, IlObserved } from '@/components/illustrations/trust';

// Visuais da página Confiança: o que um sinal diz sobre si, o que ele não
// prova, de onde vem e com que frequência chega, e como o acesso é protegido.
// Fundo claro, mesma paleta da página; cada peça entra suavemente na tela.

type Dict = Record<string, any>;
type IconType = ComponentType<{ size?: number; 'aria-hidden'?: boolean | 'true'; strokeWidth?: number }>;

const EASE = [0.22, 1, 0.36, 1] as const;
const ACCENT = 'var(--primary)';
const LILAC = 'color-mix(in oklab, var(--primary) 45%, #fff)';
const GREEN = '#10B981';
const AMBER = '#F59E0B';
const GREY = 'var(--border)';
// Fundo suave de uma cor (equivale ao antigo sufixo hex "1A"/"12").
const tint = (c: string, pct = 10) => `color-mix(in oklab, ${c} ${pct}%, transparent)`;

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
                <span className="tr-chip" style={{ color: tones[i], background: tint(tones[i]) }}><Icon size={15} aria-hidden="true" /></span>
                <span className="tr-callout-label">{c.label}</span>
                <span className="tr-callout-value">{c.value}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.figure>
  );
}

// ── Os três tipos de sinal: ilustrações isométricas (src/components/illustrations/trust.tsx)
export function SignalGrid() {
  const { t } = useTranslation();
  const signals = (t('trust.signals.items') as { name: string; def: string; example: string }[]) ?? [];
  const v = (t('trustVisual.kinds') as Dict) ?? {};
  const kinds = (v.items as { meter: string; rows: { label: string; value: string }[] }[]) ?? [];
  const layout = (t('trustLayout') as Dict) ?? {};
  const arts = [<IlObserved key="o" />, <IlEstimated key="e" />, <IlInferred key="i" />];
  const levels = [3, 2, 1];
  const tones = [GREEN, ACCENT, AMBER];
  const rowLabels = (kinds[0]?.rows ?? []).map((r) => r.label);

  // Grade com subgrade: os rótulos ficam numa coluna só e as linhas dos três
  // sinais alinham entre si. No celular vira três cartões, com o rótulo em cada linha.
  return (
    <div className="tr-sg">
      <div className="tr-sg-col tr-sg-labels" aria-hidden="true">
        <p className="tr-sg-kind">{layout.kind}</p>
        <p className="tr-sg-cell">{v.proximity}</p>
        {rowLabels.map((l) => <p key={l} className="tr-sg-cell">{l}</p>)}
        <p className="tr-sg-cell">{layout.example}</p>
      </div>
      {signals.map((s, i) => (
        <motion.article key={s.name} className="tr-sg-col" {...reveal(i)}>
          <div className="tr-sg-head il-host">
            <div className="tr-kind-art">{arts[i]}</div>
            <span className="sp-tag" style={{ color: tones[i], background: tint(tones[i]) }}>{s.name}</span>
            <p className="tr-kind-def">{s.def}</p>
          </div>
          <div className="tr-sg-cell" data-label={v.proximity}>
            <div className="tr-sg-meter">
              <span aria-hidden="true">{[0, 1, 2].map((k) => <i key={k} style={{ background: k < levels[i] ? tones[i] : 'var(--border)' }} />)}</span>
              <strong>{kinds[i]?.meter}</strong>
            </div>
          </div>
          {(kinds[i]?.rows ?? []).map((r) => (
            <div key={r.label} className="tr-sg-cell" data-label={r.label}>{r.value}</div>
          ))}
          <div className="tr-sg-cell is-example" data-label={layout.example}>“{s.example}”</div>
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

export function NotProveList() {
  const { t } = useTranslation();
  const v = (t('trustVisual.notProve') as Dict) ?? {};
  const layout = (t('trustLayout') as Dict) ?? {};
  const pairs = (v.pairs as { a: string; b: string }[]) ?? [];
  const texts = (t('trust.notProve.items') as string[]) ?? [];

  return (
    <div className="tr-np-list">
      <div className="tr-np-head" aria-hidden="true">
        <span>{v.sees}</span>
        <span />
        <span>{v.doesNot}</span>
        <span>{layout.why}</span>
      </div>
      <ul>
        {pairs.map((p, i) => (
          <motion.li key={p.a} {...reveal(i)}>
            <p className="tr-np-a" data-label={v.sees}><strong>{p.a}</strong></p>
            <span className="tr-np-neq" aria-hidden="true">≠</span>
            <p className="tr-np-b" data-label={v.doesNot}>{p.b}</p>
            <p className="tr-np-why" data-label={layout.why}>{texts[i]}</p>
          </motion.li>
        ))}
      </ul>
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
        {/* Cada seta é um item próprio entre os cartões (nunca por cima deles):
            no desktop fica centrada na altura do cartão, no celular vira uma
            seta para baixo entre um cartão e o outro. */}
        <ol className="tr-flow-chain">
          {flow.map((n, i) => (
            <Fragment key={n.title}>
              <motion.li className="tr-flow-item" {...reveal(i)}>
                <Node icon={FLOW_ICONS[i] ?? Layers} title={n.title} sub={n.sub} tone={i === 4 ? 'main' : i === 5 ? 'lock' : undefined} />
              </motion.li>
              {i < flow.length - 1 && (
                <li className="tr-link" aria-hidden="true"><ChevronRight size={20} strokeWidth={2.4} /></li>
              )}
            </Fragment>
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
