import { Fragment, type ComponentType, type ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ChevronRight, Lock } from 'lucide-react';

// Peças gráficas das páginas de oferta: sequência de cartões com setas (mesmo
// desenho da confiança), hub com caminhos, linha do tempo de leituras e blocos
// de responsabilidade. Sem texto próprio: tudo chega por props.

type IconType = ComponentType<{ size?: number; strokeWidth?: number; 'aria-hidden'?: boolean | 'true' }>;

const EASE = [0.22, 1, 0.36, 1] as const;
const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8% 0px' },
  transition: { delay: 0.1 * i, duration: 0.6, ease: EASE },
});

export type FlowNode = { icon: IconType; title: string; sub?: string; tone?: 'main' | 'lock' };

/** Sequência de cartões com setas entre eles. A seta é um item próprio, nunca
 *  por cima do cartão; no celular vira uma seta para baixo. */
export function FlowChain({ title, nodes, className = '' }: { title?: string; nodes: FlowNode[]; className?: string }) {
  return (
    <div className={`tr-panel vz-chain ${className}`}>
      {title && <p className="tr-panel-title">{title}</p>}
      <ol className="tr-flow-chain">
        {nodes.map((n, i) => {
          const Icon = n.icon;
          return (
            <Fragment key={n.title}>
              <motion.li className="tr-flow-item" {...reveal(i)}>
                <div className={`tr-flow-node ${n.tone ? `is-${n.tone}` : ''}`}>
                  <span className="tr-flow-icon"><Icon size={22} aria-hidden="true" strokeWidth={1.8} /></span>
                  <strong>{n.title}</strong>
                  {n.sub && <span>{n.sub}</span>}
                </div>
              </motion.li>
              {i < nodes.length - 1 && (
                <li className="tr-link vz-link" aria-hidden="true">
                  <ChevronRight size={20} strokeWidth={2.4} />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </div>
  );
}

/** Dois lados com um cadeado no meio: quem entrega × quem configura. */
export function SplitPanels({
  left, right,
}: {
  left: { title: string; items: string[]; icon: IconType };
  right: { title: string; items: string[]; icon: IconType };
}) {
  const L = left.icon;
  const R = right.icon;
  return (
    <div className="tr-split vz-split">
      <motion.div className="tr-split-col" {...reveal(0)}>
        <span className="tr-split-icon"><L size={22} aria-hidden="true" strokeWidth={1.8} /></span>
        <h3>{left.title}</h3>
        <ul>{left.items.map((i) => <li key={i}><Check size={16} aria-hidden="true" />{i}</li>)}</ul>
      </motion.div>
      <span className="tr-split-lock" aria-hidden="true"><Lock size={18} /></span>
      <motion.div className="tr-split-col is-client" {...reveal(1)}>
        <span className="tr-split-icon"><R size={22} aria-hidden="true" strokeWidth={1.8} /></span>
        <h3>{right.title}</h3>
        <ul>{right.items.map((i) => <li key={i}><Check size={16} aria-hidden="true" />{i}</li>)}</ul>
      </motion.div>
    </div>
  );
}

/** Hub no centro com caminhos até cada modalidade (5 nós, 2 à esquerda e 3 à
 *  direita). Os sinais correm pelas linhas. */
export function HubDiagram({ center, nodes, label }: { center: string; nodes: { icon: IconType; label: string }[]; label: string }) {
  // posições em % do quadro: [x, y]
  const POS: [number, number][] = [[14, 20], [14, 80], [86, 14], [86, 50], [86, 86]];
  return (
    <figure className="vz-hub" aria-label={label}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {nodes.slice(0, 5).map((_, i) => {
          const [x, y] = POS[i];
          const d = `M${x} ${y} C ${x < 50 ? 34 : 66} ${y}, ${x < 50 ? 38 : 62} 50, 50 50`;
          return (
            <g key={i}>
              <path className="vz-wire" d={d} />
              <path className="vz-signal" d={d} pathLength={100} style={{ ['--d' as string]: `${i * 0.5}s` }} />
            </g>
          );
        })}
      </svg>
      <div className="vz-hub-core">
        <span>{center}</span>
      </div>
      {nodes.slice(0, 5).map((n, i) => {
        const Icon = n.icon;
        const [x, y] = POS[i];
        return (
          <motion.div
            key={n.label}
            className="vz-hub-node"
            style={{ left: `${x}%`, top: `${y}%` }}
            {...reveal(i)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <Icon size={18} aria-hidden="true" strokeWidth={1.8} />
            <strong>{n.label}</strong>
          </motion.div>
        );
      })}
    </figure>
  );
}

/** Um dia de leituras: observado (uma por dia), estimado (recalculado na
 *  atualização) e tempo real (só quando alguém consulta). */
export function ReadingsTimeline({ lanes, label }: { lanes: { name: string; note?: string }[]; label: string }) {
  const HOURS = ['00h', '06h', '12h', '18h', '24h'];
  const KINDS = ['observed', 'estimated', 'live'] as const;
  return (
    <div className="tr-panel vz-timeline" role="img" aria-label={label}>
      <p className="tr-panel-title">{label}</p>
      <div className="vz-hours" aria-hidden="true">
        {HOURS.map((h) => <span key={h}>{h}</span>)}
      </div>
      {lanes.slice(0, 3).map((l, i) => (
        <motion.div key={l.name} className={`vz-lane is-${KINDS[i]}`} {...reveal(i)}>
          <div className="vz-lane-head">
            <strong>{l.name}</strong>
            {l.note && <span>{l.note}</span>}
          </div>
          <div className="vz-track" aria-hidden="true">
            {KINDS[i] === 'observed' && (
              <>
                <i className="vz-dot" style={{ left: '25%' }} />
                <i className="vz-dot is-ghost" style={{ left: '100%' }} />
              </>
            )}
            {KINDS[i] === 'estimated' && <i className="vz-band" style={{ left: '25%', right: '0' }} />}
            {KINDS[i] === 'live' && (
              <>
                <i className="vz-ping" style={{ left: '38%', ['--d' as string]: '0s' }} />
                <i className="vz-ping" style={{ left: '61%', ['--d' as string]: '1.1s' }} />
                <i className="vz-ping" style={{ left: '82%', ['--d' as string]: '2.2s' }} />
              </>
            )}
          </div>
        </motion.div>
      ))}
      <i className="vz-playhead" aria-hidden="true" />
    </div>
  );
}

/** Ícone num quadro com anel que respira: abre cartões de texto. */
export function IconTile({ icon: Icon, tone = 'brand' }: { icon: IconType; tone?: 'brand' | 'green' | 'amber' }) {
  return (
    <span className={`vz-tile is-${tone}`} aria-hidden="true">
      <Icon size={22} strokeWidth={1.8} />
    </span>
  );
}

export function VizBand({ children }: { children: ReactNode }) {
  return <div className="vz-band-wrap">{children}</div>;
}

/** Duas cidades ligadas por um arco: sinais correm de uma à outra. */
export function CityLink({ from, to, label, aria }: { from: { city: string; country: string }; to: { city: string; country: string }; label: string; aria: string }) {
  return (
    <figure className="vz-cities" role="img" aria-label={aria}>
      <svg viewBox="0 0 520 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="vz-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.1" fill="#CBD0D8" />
          </pattern>
          <radialGradient id="vz-fade" cx="50%" cy="50%" r="60%">
            <stop offset="0" stopColor="#fff" stopOpacity="1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="vz-mask"><rect width="520" height="340" fill="url(#vz-fade)" /></mask>
        </defs>
        <rect width="520" height="340" fill="url(#vz-dots)" mask="url(#vz-mask)" />
        <path id="vz-arc" d="M140 232 Q 290 20 392 104" className="vz-arc" />
        <path d="M140 232 Q 290 20 392 104" className="vz-arc-flow" />
        <circle r="5" className="vz-arc-dot">
          <animateMotion dur="4.2s" repeatCount="indefinite" path="M140 232 Q 290 20 392 104" />
        </circle>
        <circle r="5" className="vz-arc-dot is-back">
          <animateMotion dur="4.2s" begin="2.1s" repeatCount="indefinite" path="M392 104 Q 290 20 140 232" />
        </circle>
        <g className="vz-city"><circle cx="140" cy="232" r="22" className="vz-halo" /><circle cx="140" cy="232" r="9" /></g>
        <g className="vz-city is-b"><circle cx="392" cy="104" r="22" className="vz-halo" /><circle cx="392" cy="104" r="9" /></g>
      </svg>
      <span className="vz-cities-chip" style={{ left: '27%', top: '74%' }}><strong>{from.city}</strong>{from.country}</span>
      <span className="vz-cities-chip" style={{ left: '75%', top: '40%' }}><strong>{to.city}</strong>{to.country}</span>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

/** Faixa de fatos com contagem que sobe quando entra na tela. */
export function StatStrip({ title, items }: { title: string; items: { value: number; suffix?: string; label: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(1);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const k = Math.min(1, (now - t0) / 1400);
      setN(1 - Math.pow(1 - k, 3));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView]);
  return (
    <div className="tr-panel vz-stats" ref={ref}>
      <p className="tr-panel-title">{title}</p>
      <ul>
        {items.map((it, i) => (
          <motion.li key={it.label} {...reveal(i)}>
            <strong>{n >= 1 ? it.value : Math.round(it.value * n)}<span>{it.suffix}</span></strong>
            <span>{it.label}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
