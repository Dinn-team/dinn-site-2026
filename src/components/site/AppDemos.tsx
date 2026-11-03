import { useEffect, useRef, useState, type ReactElement, type ReactNode, type RefObject } from 'react';
import { useInView } from 'framer-motion';
import {
  Boxes, ChartPie, Check, ChevronDown, House, LifeBuoy, Lock, Map as MapIcon, MapPin, Package, Search,
  ShieldCheck, Sparkles, Store, TriangleAlert, Truck, Users, X,
} from 'lucide-react';

// Telas do Dinn animadas, para as páginas de solução. Base: o briefing em
// dinn-manager-app/docs/site-reproducao (screens/*.json). Só telas em produção:
// Início, Mercado, Localizar Produto e Conexões. Textos de `real_strings`, dados
// fictícios (Rede Alfa, Produto A 20 mg 30 cp, Laboratório Exemplo), dado de
// ontem (D-1). Só "Consultar agora" é consulta ao vivo.
//
// Cada demo tem dois modos:
// - laço (sem `step`): um cursor seleciona filtros, os números contam e os
//   gráficos se montam. Roda só quando a tela está à vista.
// - passo (`step` 0..3): mostra o estado do passo do exemplo e marca o ponto da
//   tela com um anel. A rolagem do palco troca o passo.
// Com "reduzir movimento", o laço mostra só o estado final, sem cursor.

const BRAND = '#5625f2';
const GREY = '#a3a3b2';
const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fmt = (v: number, d = 0) => v.toLocaleString('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d });

// ── Motor: roteiro, cursor e passos ─────────────────────────────────────────
type Beat = { to?: string; click?: boolean; phase?: number; type?: [string, string]; wait: number };
type Def = { beats: Beat[]; steps: { phase: number; to?: string }[]; final: number };

function useDemo(def: Def, step?: number) {
  const app = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(step === undefined ? 0 : def.steps[step]?.phase ?? 0);
  const [typed, setTyped] = useState<Record<string, string>>({});
  const [cur, setCur] = useState({ x: 760, y: 560, n: 0, show: false });
  const [ring, setRing] = useState<string | null>(null);
  const seen = useInView(app, { margin: '-10% 0px' });

  const spot = (key: string) => {
    const w = app.current;
    const el = w?.querySelector(`[data-t="${key}"]`) as HTMLElement | null;
    if (!w || !el) return null;
    const a = w.getBoundingClientRect();
    const b = el.getBoundingClientRect();
    const s = a.width / w.offsetWidth || 1;
    return { x: (b.left - a.left + Math.min(b.width * 0.5, 120)) / s, y: (b.top - a.top + Math.min(b.height * 0.6, 28)) / s };
  };

  // Modo passo
  useEffect(() => {
    if (step === undefined) return;
    const s = def.steps[step];
    if (!s) return;
    setPhase(s.phase);
    setTyped({});
    setRing(s.to ?? null);
    const id = requestAnimationFrame(() => {
      const p = s.to ? spot(s.to) : null;
      setCur((c) => (p ? { ...c, ...p, show: true } : { ...c, show: false }));
    });
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  // Modo laço
  useEffect(() => {
    if (step !== undefined || !seen) return;
    if (reduced()) {
      setPhase(def.final);
      return;
    }
    let on = true;
    // Depois do cleanup a pausa nunca termina: um laço antigo não mexe mais na tela.
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(() => on && r(), ms));
    (async () => {
      while (on) {
        setPhase(0);
        setTyped({});
        setCur((c) => ({ ...c, x: 760, y: 560, show: false }));
        await sleep(900);
        for (const b of def.beats) {
          if (b.to) {
            const p = spot(b.to);
            if (p) setCur((c) => ({ ...c, ...p, show: true }));
            await sleep(850);
          }
          if (b.click && b.to) {
            const q = spot(b.to);
            if (q) setCur((c) => ({ ...c, ...q }));
            await sleep(60);
            setCur((c) => ({ ...c, n: c.n + 1 }));
            await sleep(180);
          }
          if (b.type) {
            const [key, text] = b.type;
            for (let i = 1; i <= text.length; i++) {
              setTyped((t) => ({ ...t, [key]: text.slice(0, i) }));
              await sleep(45);
            }
          }
          if (b.phase !== undefined) setPhase(b.phase);
          await sleep(b.wait);
        }
        setCur((c) => ({ ...c, show: false }));
        await sleep(600);
      }
    })();
    return () => {
      on = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seen, step === undefined]);

  /** Marca um alvo do roteiro: `data-t` para o cursor e `data-ring` no passo atual. */
  const tg = (key: string) => ({ 'data-t': key, 'data-ring': ring === key ? '' : undefined });
  return { app, phase, typed, cur, tg };
}

// ── Moldura: escala, menu lateral e cursor ─────────────────────────────────
const NAV = [
  { k: 'home', icon: House, label: 'Início' },
  { k: 'insights', icon: Sparkles, label: 'Dinn Insights' },
  { k: 'market', icon: ChartPie, label: 'Mercado' },
  { k: 'opps', icon: MapIcon, label: 'Oportunidades' },
  { k: 'locator', icon: MapPin, label: 'Localizar Produtos' },
  { k: 'dist', icon: Truck, label: 'Distribuição' },
];

function Frame({
  app, w = 940, h, nav, label, cur, children,
}: {
  app: RefObject<HTMLDivElement | null>; w?: number; h: number; nav: string; label: string;
  cur: { x: number; y: number; n: number; show: boolean }; children: ReactNode;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const [s, setS] = useState(0.6);
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const f = () => setS(Math.min(1, el.clientWidth / w));
    f();
    const ro = new ResizeObserver(f);
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);
  return (
    <div ref={wrap} className="da-stage dd-stage" style={{ height: h * s }} role="img" aria-label={label}>
      <div ref={app} className="dnn-app dd-app" style={{ width: w, height: h, transform: `scale(${s})` }}>
        <nav className="dd-side" aria-hidden="true">
          <img src="/logo/Dinn_logo_v2_Light.svg" alt="" width={34} height={14} />
          {NAV.map(({ k, icon: I }) => (
            <span key={k} className={k === nav ? 'on' : ''}><I size={18} /></span>
          ))}
          <span className="dd-side-sep" />
          <span><LifeBuoy size={18} /></span>
        </nav>
        <div className="dd-main">{children}</div>
        <div className="demo-cursor" style={{ transform: `translate(${cur.x}px, ${cur.y}px)`, opacity: cur.show ? 1 : 0 }} aria-hidden="true">
          {cur.n > 0 && <span key={cur.n} className="demo-ripple" />}
          <svg width="44" height="44" viewBox="0 0 24 24"><path d="M4 2 L4 19 L8.5 14.8 L11.8 22 L14.6 20.8 L11.4 13.8 L17.5 13.6 Z" fill="#111" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </div>
  );
}

// ── Peças da interface ─────────────────────────────────────────────────────
function Num({ v, on, d = 0, suffix = '' }: { v: number; on: boolean; d?: number; suffix?: string }) {
  const [x, setX] = useState(on ? v : 0);
  useEffect(() => {
    if (!on) return setX(0);
    if (reduced()) return setX(v);
    let raf = 0;
    const t0 = performance.now();
    const f = (n: number) => {
      const k = Math.min(1, (n - t0) / 900);
      setX(v * (1 - Math.pow(1 - k, 3)));
      if (k < 1) raf = requestAnimationFrame(f);
    };
    raf = requestAnimationFrame(f);
    return () => cancelAnimationFrame(raf);
  }, [on, v]);
  return on ? <>{fmt(x, d)}{suffix}</> : <span className="dd-sk" />;
}

const Bar = ({ title, sub }: { title: string; sub?: string }) => (
  <div className="da-bar"><b>{title}</b>{sub && <span>{sub}</span>}</div>
);

function Chip({ label, value, empty, open, items, picked, tg, k }: {
  label: string; value?: string; empty?: string; open?: boolean; items?: string[]; picked?: number;
  tg: (k: string) => object; k: string;
}) {
  return (
    <span className="dd-chip-wrap">
      <span className={`da-chip dd-chip ${value ? 'has' : ''}`} {...tg(k)}>
        <em>{label}</em>{value ?? <span className="dd-ph">{empty ?? 'Todos'}</span>}<ChevronDown size={14} />
      </span>
      {open && items && (
        <span className="dd-menu">
          {items.map((it, i) => (
            <span key={it} className={i === picked ? 'on' : ''} {...tg(`${k}-${i}`)}>
              <i>{i === picked && <Check size={12} />}</i>{it}
            </span>
          ))}
        </span>
      )}
    </span>
  );
}

function Metric({ icon, label, children, tg, k }: { icon: ReactNode; label: string; children: ReactNode; tg?: (k: string) => object; k?: string }) {
  return (
    <div className="da-metric" {...(tg && k ? tg(k) : {})}>
      <span className="da-metric-icon">{icon}</span>
      <span><b>{children}</b><small>{label}</small></span>
    </div>
  );
}

const Panel = ({ title, aside, children, className = '', t }: { title: string; aside?: ReactNode; children: ReactNode; className?: string; t?: object }) => (
  <section className={`da-card ${className}`} {...t}>
    <header><h4>{title}</h4>{aside}</header>
    {children}
  </section>
);

const Seg = ({ items, on = 0 }: { items: string[]; on?: number }) => (
  <span className="da-seg">{items.map((x, i) => <i key={x} className={i === on ? 'on' : ''}>{x}</i>)}</span>
);

function Line({ labels, series, min, max, on, h = 170, unit = '', d = 1 }: {
  labels: string[]; series: { values: number[]; color: string }[]; min: number; max: number; on: boolean; h?: number; unit?: string; d?: number;
}) {
  const W = 520;
  const L = 40, R = 18, T = 18, B = 24;
  const x = (i: number) => L + (i * (W - L - R)) / (labels.length - 1);
  const y = (v: number) => T + (1 - (v - min) / (max - min)) * (h - T - B);
  const path = (vs: number[]) => vs.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const ticks = [min, (min + max) / 2, max];
  return (
    <svg className="dd-line" viewBox={`0 0 ${W} ${h}`} aria-hidden="true">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="#e5e5ea" strokeDasharray="3 4" />
          <text x={L - 8} y={y(t) + 4} textAnchor="end" fontSize="10" fill="#737373">{fmt(t, 0)}{unit}</text>
        </g>
      ))}
      {labels.map((l, i) => <text key={l} x={x(i)} y={h - 6} textAnchor="middle" fontSize="10" fill="#737373">{l}</text>)}
      {series.map((s, k) => (
        <g key={k}>
          {k === 0 && (
            <path d={`${path(s.values)} L${x(s.values.length - 1)},${h - B} L${L},${h - B} Z`} fill={s.color} style={{ opacity: on ? 0.1 : 0, transition: 'opacity .8s ease .6s' }} />
          )}
          <path d={path(s.values)} pathLength={1} fill="none" stroke={s.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
            style={{ strokeDasharray: 1, strokeDashoffset: on ? 0 : 1, transition: `stroke-dashoffset 1.3s cubic-bezier(.4,0,.2,1) ${k * 0.15}s` }} />
          {k === 0 && s.values.map((v, i) => (
            <g key={i} style={{ opacity: on ? 1 : 0, transition: `opacity .3s ease ${0.3 + i * 0.22}s` }}>
              <circle cx={x(i)} cy={y(v)} r="3.5" fill="#fff" stroke={s.color} strokeWidth="2" />
              <text x={x(i)} y={y(v) - 9} textAnchor="middle" fontSize="10" fontWeight="600" fill="#0a0a0a">{fmt(v, d)}{unit}</text>
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

function Donut({ items, colors, on }: { items: { label: string; value: number }[]; colors: string[]; on: boolean }) {
  const r = 48;
  const C = 2 * Math.PI * r;
  let acc = 0;
  return (
    <svg className="dd-donut" viewBox="0 0 130 130" aria-hidden="true">
      <circle cx="65" cy="65" r={r} fill="none" stroke="#efeff3" strokeWidth="20" />
      {items.map((it, i) => {
        const seg = (it.value / 100) * C;
        const off = acc;
        acc += seg;
        return (
          <circle key={it.label} cx="65" cy="65" r={r} fill="none" stroke={colors[i]} strokeWidth="20" transform="rotate(-90 65 65)"
            strokeDasharray={`${on ? seg : 0} ${C}`} strokeDashoffset={-off} style={{ transition: `stroke-dasharray .7s ease ${i * 0.12}s` }} />
        );
      })}
      <text x="65" y="66" textAnchor="middle" fontSize="20" fontWeight="600" fill="#0a0a0a">{on ? '100%' : ''}</text>
      <text x="65" y="82" textAnchor="middle" fontSize="10" fill="#737373">{on ? 'total' : ''}</text>
    </svg>
  );
}

const LEVEL: Record<string, string> = { Crítico: 'crit', Alto: 'high', Moderado: 'mod', Leve: 'low' };

function Levels({ on, rows, t }: { on: boolean; rows: [string, number, number][]; t?: object }) {
  return (
    <Panel className="side" title="Classificação de Ruptura" t={t}>
      <table className="da-table">
        <thead><tr><th>Nível</th><th>Total PDVs</th><th>%</th></tr></thead>
        <tbody>
          {rows.map(([n, c, p], i) => (
            <tr key={n} style={{ opacity: on ? 1 : 0.25, transition: `opacity .4s ease ${0.15 * i}s` }}>
              <td><span className={`da-badge ${LEVEL[n]}`}>{n}</span></td>
              <td><Num v={c} on={on} /></td>
              <td><Num v={p} on={on} d={1} suffix="%" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

function Rank({ title, rows, on, t, tg, className = '' }: { title: string; rows: [string, string, number][]; on: boolean; t?: object; tg?: (k: string) => object; className?: string }) {
  const lv = (v: number) => (v >= 40 ? 'Alto' : v >= 30 ? 'Moderado' : '');
  return (
    <Panel title={title} t={t} className={className}>
      <ul className="da-rank">
        {rows.map(([n, p, v], i) => (
          <li key={n} {...(tg ? tg(`rank-${i}`) : {})}>
            <span>{n}<small>{p}</small></span>
            <span className="da-track"><i className={lv(v)} style={{ width: on ? `${Math.min(100, v * 1.4)}%` : 0, transition: `width .9s cubic-bezier(.4,0,.2,1) ${i * 0.1}s` }} /></span>
            <b><Num v={v} on={on} d={1} suffix="%" /></b>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

const Tip = ({ children }: { children: ReactNode }) => <span className="dd-tip">{children}</span>;

// ── Início (hub): produto escolhido, números e gráficos ────────────────────
const PRODUCTS = ['Produto A 20 mg 30 cp', 'Produto A 40 mg 30 cp', 'Produto B 5 mg/mL 1 fr'];
const HOME_DEF: Def = {
  beats: [
    { to: 'prod', click: true, phase: 1, wait: 500 },
    { to: 'prod-0', click: true, phase: 2, wait: 700 },
    { phase: 3, wait: 2200 },
    { to: 'lv', wait: 3600 },
  ],
  steps: [{ phase: 3 }, { phase: 3 }, { phase: 3 }, { phase: 3 }],
  final: 3,
};

export function HomeDemo({ step }: { step?: number }) {
  const { app, phase, cur, tg } = useDemo(HOME_DEF, step);
  const on = phase >= 3;
  return (
    <Frame app={app} h={700} nav="home" cur={cur} label="Tela Início do Dinn: o cursor escolhe um produto e os números de ruptura e estoque carregam.">
      <Bar title="Olá, Ana Exemplo." sub="Atualizado em 02/11/2026 (D-1)" />
      <div className="da-filters">
        <Chip k="prod" tg={tg} label="Produtos" empty="Selecione" value={phase >= 2 ? PRODUCTS[0] : undefined} open={phase === 1} items={PRODUCTS} picked={phase >= 2 ? 0 : undefined} />
        <Chip k="uf" tg={tg} label="UF" value="SP" />
        <Chip k="model" tg={tg} label="Modelo" value="Todos" />
      </div>
      <div className={`da-metrics four ${phase === 2 ? 'dd-loading' : ''}`}>
        <Metric icon={<Store size={20} />} label="Total de PDV"><Num v={8240} on={on} /></Metric>
        <Metric icon={<Package size={20} />} label="Total de SKU"><Num v={6} on={on} /></Metric>
        <Metric icon={<Boxes size={20} />} label="Estoque aproximado"><Num v={1250000} on={on} /></Metric>
        <Metric icon={<TriangleAlert size={20} />} label="% sem estoque"><Num v={18.4} on={on} d={1} suffix="%" /></Metric>
      </div>
      <div className="da-row">
        <Panel className="grow" title="Ruptura" aside={<Seg items={['Semanal', 'Diário', '30 dias']} />}>
          <Line labels={['04/10', '11/10', '18/10', '25/10']} series={[{ values: [31.2, 29.8, 27.5, 24.9], color: BRAND }]} min={0} max={35} unit="%" on={on} h={190} />
        </Panel>
        <Levels on={on} t={tg('lv')} rows={[['Crítico', 1120, 13.6], ['Alto', 1870, 22.7], ['Moderado', 2650, 32.2], ['Leve', 2600, 31.6]]} />
      </div>
      <Rank title="Ranking de ruptura por rede" on={on} rows={[['Rede Alfa', '1.200 PDVs', 41.2], ['Rede Beta', '950 PDVs', 33.7], ['Rede Gama', '700 PDVs', 22.1]]} />
    </Frame>
  );
}

// ── Inteligência & Pricing: Mercado ────────────────────────────────────────
const MARKETS = ['Mercado Exemplo X', 'Mercado Exemplo Y'];
const LABS = [
  { label: 'Laboratório Exemplo', value: 34.2 },
  { label: 'Laboratório B', value: 28.1 },
  { label: 'Laboratório C', value: 18.2 },
  { label: 'Laboratório D', value: 11.3 },
  { label: 'Outros', value: 8.2 },
];
const LAB_COLORS = [BRAND, '#8b6cf6', '#b9a6fa', '#dcd3fc', '#e9e9ee'];
const MARKET_DEF: Def = {
  beats: [
    { to: 'mkt', click: true, phase: 1, wait: 500 },
    { to: 'mkt-0', click: true, phase: 2, wait: 700 },
    { phase: 3, wait: 1800 },
    { to: 'sales', wait: 1600 },
    { to: 'only', phase: 4, wait: 3600 },
  ],
  steps: [{ phase: 3, to: 'share' }, { phase: 3, to: 'period' }, { phase: 3, to: 'sales' }, { phase: 4, to: 'only' }],
  final: 4,
};

export function MarketDemo({ step }: { step?: number }) {
  const { app, phase, cur, tg } = useDemo(MARKET_DEF, step);
  const on = phase >= 3;
  return (
    <Frame app={app} h={450} nav="market" cur={cur} label="Tela Mercado do Dinn: o cursor escolhe o mercado e a participação e as vendas estimadas carregam.">
      <Bar title="Mercado" sub="Vendas estimadas a partir do giro de estoque" />
      <div className="da-filters">
        <Chip k="mkt" tg={tg} label="Mercado" empty="Selecione" value={phase >= 2 ? MARKETS[0] : undefined} open={phase === 1} items={MARKETS} picked={phase >= 2 ? 0 : undefined} />
        <Chip k="brick" tg={tg} label="Brick" />
        <Chip k="period" tg={tg} label="Período" value="Últimos 30 dias" />
      </div>
      <div className={`da-metrics three ${phase === 2 ? 'dd-loading' : ''}`}>
        <Metric icon={<Store size={20} />} label="Total de PDVs no mercado"><Num v={12400} on={on} /></Metric>
        <Metric icon={<Users size={20} />} label="PDVs só com concorrente" tg={tg} k="only">
          <Num v={3150} on={on} />
          {phase >= 4 && <Tip>PDVs com venda concorrente e nenhuma venda do seu laboratório no período.</Tip>}
        </Metric>
        <Metric icon={<Boxes size={20} />} label="PDVs que concentram 80%"><Num v={2860} on={on} /></Metric>
      </div>
      <div className="da-row">
        <Panel className="donut" title="Market share por laboratório" t={tg('share')}>
          <div className="da-donut-row">
            <Donut items={LABS} colors={LAB_COLORS} on={on} />
            <ul className="da-legend">
              {LABS.map((l, i) => (
                <li key={l.label}><i style={{ background: LAB_COLORS[i] }} />{l.label}<b><Num v={l.value} on={on} d={1} suffix="%" /></b></li>
              ))}
            </ul>
          </div>
        </Panel>
        <Panel className="grow" title="Vendas estimadas: laboratório vs. concorrentes" aside={<Seg items={['Semanal', 'Diário']} />} t={tg('sales')}>
          <Line labels={['04/10', '11/10', '18/10', '25/10', '01/11']} min={30} max={120} unit=" mil" on={on} h={180}
            series={[{ values: [41.2, 41.9, 42.6, 43.1, 43.7], color: BRAND }, { values: [97.8, 100.4, 103.1, 105.9, 108.6], color: GREY }]} />
          <p className="da-legend-inline"><i style={{ background: BRAND }} />Meu laboratório<i style={{ background: GREY }} />Concorrentes</p>
        </Panel>
      </div>
    </Frame>
  );
}

// ── Trade, KAM & Campo: Início, tabela de PDVs e detalhe ───────────────────
const PDVS: [string, string, string, number, number, string][] = [
  ['Farmácia Centro 014', 'Rede Alfa', 'Crítico', 86.7, 26, '0,2'],
  ['Farmácia Bairro 007', 'Rede Beta', 'Crítico', 80.0, 24, '0,4'],
  ['Farmácia Centro 021', 'Rede Alfa', 'Alto', 63.3, 19, '0,9'],
  ['Farmácia Avenida 032', 'Rede Gama', 'Alto', 56.7, 17, '1,1'],
  ['Farmácia Praça 003', 'Rede Beta', 'Moderado', 40.0, 12, '1,6'],
];
const ORDER_RAW = [2, 4, 0, 3, 1];
const QUEUE_DEF: Def = {
  beats: [
    { phase: 1, wait: 1400 },
    { to: 'col', click: true, phase: 2, wait: 1400 },
    { to: 'row-0', click: true, phase: 3, wait: 2600 },
    { to: 'close', click: true, phase: 2, wait: 500 },
    { to: 'save', click: true, phase: 4, wait: 3200 },
  ],
  steps: [{ phase: 1, to: 'rup' }, { phase: 1, to: 'lv' }, { phase: 3, to: 'row-0' }, { phase: 4, to: 'sheet' }],
  final: 3,
};

export function QueueDemo({ step }: { step?: number }) {
  const { app, phase, cur, tg } = useDemo(QUEUE_DEF, step);
  const on = phase >= 1;
  const rows = phase >= 2 ? PDVS : ORDER_RAW.map((i) => PDVS[i]);
  return (
    <Frame app={app} h={620} nav="home" cur={cur} label="Tela Início do Dinn: a tabela de pontos de venda é ordenada pela ruptura e o detalhe do PDV abre.">
      <Bar title="Olá, Ana Exemplo." sub="Atualizado em 02/11/2026 (D-1)" />
      <div className="da-filters">
        <Chip k="prod" tg={tg} label="Produtos" value={PRODUCTS[0]} />
        <Chip k="uf" tg={tg} label="UF" value="SP" />
        <Chip k="city" tg={tg} label="Cidade" value="Cidade Exemplo" />
        <span className="da-chip dd-btn-ghost" {...tg('save')}>Salvar</span>
      </div>
      <div className="da-row">
        <Panel className="grow" title="Ruptura" aside={<Seg items={['Semanal', 'Diário', '30 dias']} />} t={tg('rup')}>
          <Line labels={['04/10', '11/10', '18/10', '25/10']} series={[{ values: [22.4, 25.1, 28.9, 33.6], color: BRAND }]} min={0} max={40} unit="%" on={on} h={150} />
        </Panel>
        <Levels on={on} t={tg('lv')} rows={[['Crítico', 6, 15.0], ['Alto', 9, 22.5], ['Moderado', 13, 32.5], ['Leve', 12, 30.0]]} />
      </div>
      <Panel title="Pontos de venda" aside={<small className="dd-muted">Total: 40 PDVs na sua carteira</small>}>
        <table className="da-table dd-pdv">
          <thead>
            <tr><th>PDV</th><th>Nível</th><th {...tg('col')} className={phase >= 2 ? 'dd-sorted' : ''}>% Ruptura {phase >= 2 ? '↓' : ''}</th><th>Dias</th><th>Giro</th></tr>
          </thead>
          <tbody>
            {rows.map(([n, net, lv, r, d, g], i) => (
              <tr key={n} {...tg(`row-${i}`)} className={phase >= 3 && i === 0 ? 'dd-sel' : ''} style={{ opacity: on ? 1 : 0, transition: `opacity .4s ease ${i * 0.08}s` }}>
                <td><b>{n}</b><small>{net}</small></td>
                <td><span className={`da-badge ${LEVEL[lv]}`}>{lv}</span></td>
                <td>{fmt(r, 1)}%</td><td>{d}</td><td>{g} un./dia</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
      {phase === 3 && (
        <aside className="dd-drawer" {...tg('drawer')}>
          <header><b>Detalhes do PDV</b><span {...tg('close')}><X size={16} /></span></header>
          <p className="dd-drawer-name">Farmácia Centro 014<small>Rede Alfa · Aberto - Fecha às 22:00</small></p>
          <span className="da-tag">Estoque exato</span>
          <p className="dd-muted">Atualizado em 02/11/2026</p>
          <h5>Ranking de ruptura por SKU</h5>
          <ul className="dd-mini">
            <li><span>Produto A 20 mg 30 cp</span><span className="da-badge crit">Crítico</span><b>86,7%</b></li>
            <li><span>Produto A 40 mg 30 cp</span><span className="da-badge mod">Moderado</span><b>43,3%</b></li>
          </ul>
        </aside>
      )}
      {phase === 4 && (
        <aside className="dd-drawer" {...tg('sheet')}>
          <header><b>Salvar visualização</b><X size={16} /></header>
          <label className="dd-field-l">Nome da visualização<span className="da-field"><span>Carteira SP, semana 44</span></span></label>
          <ul className="dd-sum"><li><em>Produtos</em>{PRODUCTS[0]}</li><li><em>UF</em>SP</li><li><em>Cidade</em>Cidade Exemplo</li></ul>
          <span className="da-btn">Salvar</span>
        </aside>
      )}
    </Frame>
  );
}

// ── Supply & Distribuição: Início por cidade, estoque parado e redes ────────
const CITIES = ['Cidade Exemplo', 'Cidade Modelo', 'Cidade Teste'];
const NETS = ['Rede Alfa', 'Rede Beta', 'Rede Gama'];
const SUPPLY_DEF: Def = {
  beats: [
    { to: 'city', click: true, phase: 1, wait: 500 },
    { to: 'city-0', click: true, phase: 2, wait: 700 },
    { phase: 3, wait: 2000 },
    { to: 'rank-0', wait: 1500 },
    { to: 'rede', click: true, phase: 4, wait: 3200 },
  ],
  steps: [{ phase: 3, to: 'oos' }, { phase: 3, to: 'stock' }, { phase: 3, to: 'rankp' }, { phase: 4, to: 'rede' }],
  final: 3,
};

export function SupplyDemo({ step }: { step?: number }) {
  const { app, phase, cur, tg } = useDemo(SUPPLY_DEF, step);
  const city = phase >= 2;
  const on = phase >= 3;
  return (
    <Frame app={app} h={460} nav="home" cur={cur} label="Tela Início do Dinn: o cursor escolhe a cidade e a ruptura, o estoque parado e o ranking por rede carregam.">
      <Bar title="Olá, Ana Exemplo." sub="Atualizado em 02/11/2026 (D-1)" />
      <div className="da-filters">
        <Chip k="prod" tg={tg} label="Produtos" value={PRODUCTS[0]} />
        <Chip k="uf" tg={tg} label="UF" value="SP" />
        <Chip k="city" tg={tg} label="Cidade" value={city ? CITIES[0] : undefined} open={phase === 1} items={CITIES} picked={city ? 0 : undefined} />
        <Chip k="rede" tg={tg} label="Rede" value={phase === 4 ? 'Rede Alfa' : undefined} open={phase === 4} items={NETS} picked={phase === 4 ? 0 : undefined} />
      </div>
      <div className={`da-metrics four ${phase === 2 ? 'dd-loading' : ''}`}>
        <Metric icon={<Store size={20} />} label="Total de PDV"><Num v={420} on={on} /></Metric>
        <Metric icon={<Package size={20} />} label="Total de SKU"><Num v={6} on={on} /></Metric>
        <Metric icon={<Boxes size={20} />} label="Estoque aproximado" tg={tg} k="stock"><Num v={18600} on={on} /></Metric>
        <Metric icon={<TriangleAlert size={20} />} label="% sem estoque" tg={tg} k="oos"><Num v={38} on={on} d={1} suffix="%" /></Metric>
      </div>
      <div className="da-row">
        <Rank title="Ranking de ruptura por rede" on={on} className="grow" t={tg('rankp')} tg={tg}
          rows={[['Rede Alfa', '160 PDVs', 52.5], ['Rede Beta', '140 PDVs', 34.3], ['Rede Gama', '120 PDVs', 24.2]]} />
        <Panel className="side" title="Classificação de Estoque Parado">
          <table className="da-table">
            <thead><tr><th>Parado</th><th>Qtde. de PDVs</th><th>% do Total</th></tr></thead>
            <tbody>
              {([[7, 96, 22.9], [30, 51, 12.1], [60, 22, 5.2], [90, 9, 2.1]] as const).map(([d, c, p], i) => (
                <tr key={d} style={{ opacity: on ? 1 : 0.25, transition: `opacity .4s ease ${0.15 * i}s` }}>
                  <td>{d} dias</td><td><Num v={c} on={on} /></td><td><Num v={p} on={on} d={1} suffix="%" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
    </Frame>
  );
}

// ── SAC & Customer Experience: Localizar Produto ───────────────────────────
const STORES: [string, string, string, string, string, string, string][] = [
  ['Farmácia Centro 014', 'Rede Alfa', 'Aberto · Fecha às 22:00', 'Alto', '6–12 un', '0,6 km', 'ok'],
  ['Farmácia Centro 021', 'Rede Alfa', 'Aberto · Fecha às 20:00', 'Médio', '2–5 un', '1,1 km', 'warn'],
  ['Farmácia Bairro 007', 'Rede Beta', 'Fechado · Abre amanhã às 08:00', 'Indisponível', '0 un', '2,3 km', 'off'],
];
const PINS: [number, number, string][] = [
  [205, 150, 'ok'], [330, 215, 'warn'], [150, 270, 'off'], [420, 120, 'ok'], [470, 290, 'crit'],
  [260, 340, 'ok'], [390, 370, 'warn'], [110, 160, 'ok'], [510, 200, 'off'], [320, 95, 'warn'],
];
const PIN_COL: Record<string, string> = { ok: '#10b981', warn: '#f59e0b', crit: '#ef4444', off: '#9ca3af' };
const LOC_DEF: Def = {
  beats: [
    { to: 'f-prod', click: true, type: ['prod', 'Produto A 20 mg 30 cp'], phase: 1, wait: 400 },
    { to: 'f-addr', click: true, type: ['addr', 'Rua Exemplo, 100'], phase: 2, wait: 400 },
    { to: 'go', click: true, phase: 3, wait: 1300 },
    { phase: 4, wait: 1200 },
    { to: 'pin', click: true, phase: 5, wait: 1400 },
    { to: 'now', click: true, phase: 6, wait: 1500 },
    { phase: 7, wait: 3600 },
  ],
  steps: [{ phase: 2, to: 'f-addr' }, { phase: 5, to: 'stock' }, { phase: 4, to: 'sort' }, { phase: 4, to: 'store-2' }],
  final: 7,
};

export function LocatorDemo({ step }: { step?: number }) {
  const { app, phase, typed, cur, tg } = useDemo(LOC_DEF, step);
  const prod = typed.prod ?? (phase >= 1 ? 'Produto A 20 mg 30 cp' : '');
  const addr = typed.addr ?? (phase >= 2 ? 'Rua Exemplo, 100' : '');
  const found = phase >= 4;
  return (
    <Frame app={app} h={600} nav="locator" cur={cur} label="Tela Localizar Produto do Dinn: o cursor informa produto e endereço, as farmácias aparecem no mapa e o estoque é consultado agora.">
      <div className="da-loc">
        <aside className="da-loc-panel">
          <h3>Localizar Produto</h3>
          <div className="da-field" {...tg('f-prod')}><em>Produto</em><span className={prod ? '' : 'dd-ph'}>{prod || 'Nome ou SKU do produto...'}</span></div>
          <div className="da-field" {...tg('f-addr')}><em>Localização</em><span className={addr ? '' : 'dd-ph'}>{addr || 'Digite seu endereço de entrega...'}</span></div>
          <span className="da-btn dd-go" {...tg('go')}><Search size={14} /> Consultar farmácias</span>
          {phase === 3 && <p className="dd-muted dd-center">Buscando farmácias...</p>}
          {phase < 3 && <p className="dd-muted dd-center">Selecione um produto e localização<br />para ver as farmácias disponíveis</p>}
          {found && (
            <>
              <div className="da-loc-count"><span><b>12</b> Farmácias encontradas</span><small {...tg('sort')}>Mais próximas</small></div>
              {STORES.map(([n, net, hours, lv, rng, km, k], i) => (
                <div key={n} className="da-store dd-in" style={{ animationDelay: `${i * 0.12}s` }} {...tg(`store-${i}`)}>
                  <div className="da-store-top"><b>{n}</b><i>{km}</i></div>
                  <small>{net} · {hours}</small>
                  <div className="da-store-lv">
                    <span className={`da-badge ${k === 'off' ? 'dd-off' : k}`}>{k === 'off' ? lv : `Disponibilidade (${lv}): ${rng}`}</span>
                    {k !== 'off' && <span className="da-conf">{k === 'ok' ? 'A' : 'B'}</span>}
                  </div>
                </div>
              ))}
            </>
          )}
        </aside>
        <div className="da-map">
          <svg viewBox="0 0 580 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="580" height="520" fill="#eceef2" />
            {[[40, 30, 110, 80], [190, 20, 90, 120], [330, 40, 120, 70], [480, 30, 80, 100], [30, 190, 100, 90], [180, 180, 100, 110], [320, 160, 110, 90], [470, 180, 90, 100], [60, 330, 120, 100], [220, 340, 100, 80], [360, 330, 100, 110], [500, 340, 60, 90]].map(([x, y, w, h], i) => (
              <rect key={i} x={x} y={y} width={w} height={h} rx="8" fill="#f7f8fa" />
            ))}
            {[[0, 150, 580, 150], [0, 300, 580, 300], [160, 0, 160, 520], [300, 0, 300, 520], [450, 0, 450, 520]].map(([a, b, c, d], i) => (
              <line key={i} x1={a} y1={b} x2={c} y2={d} stroke="#fff" strokeWidth="14" />
            ))}
            {phase >= 2 && <circle cx="290" cy="235" r="7" fill={BRAND} stroke="#fff" strokeWidth="3" />}
            {found && PINS.map(([x, y, k], i) => (
              <g key={i} transform={`translate(${x} ${y})`} className="dd-pin" style={{ animationDelay: `${i * 0.06}s` }}>
                <circle r="13" fill={PIN_COL[k]} stroke="#fff" strokeWidth="3" />
                <rect x="-4.5" y="-4.5" width="9" height="9" rx="2" fill="#fff" />
              </g>
            ))}
          </svg>
          {found && <span className="dd-pin-hit" style={{ left: 205 - 14, top: 150 - 14 }} {...tg('pin')} />}
          {phase === 3 && <span className="dd-map-msg">Carregando estoque dos PDVs da região...</span>}
          {phase >= 5 && (
            <div className="da-popup dd-in" style={{ left: 250, top: 40 }}>
              <div className="da-popup-head"><b>Farmácia Centro 014</b><span className="da-tag">Estoque exato</span></div>
              <small>Rede Alfa · Aberto · Fecha às 22:00</small>
              <div className="da-popup-stock" {...tg('stock')}>
                <em>Estoque do produto</em>
                <b>{phase >= 7 ? '9 un' : '6–12 un'}</b>
                <small>{phase >= 7 ? 'Consulta feita agora · 14:32' : 'Estimativa de ontem, 02/11/2026'}</small>
              </div>
              <div className="da-popup-cols">
                <div><em>Preço</em><b>R$ 39,90</b><small>por unidade</small></div>
                <div><em>Confiabilidade do estoque</em><b>A - Confiável</b></div>
              </div>
              <span className="da-btn" {...tg('now')}>{phase === 6 ? 'Consultando PDV...' : 'Consultar agora'}</span>
            </div>
          )}
        </div>
      </div>
    </Frame>
  );
}

// ── Marketing & Lançamentos: Início com o produto novo ──────────────────────
const LAUNCH_DEF: Def = {
  beats: [
    { to: 'prod', click: true, phase: 1, wait: 500 },
    { to: 'prod-2', click: true, phase: 2, wait: 700 },
    { phase: 3, wait: 2000 },
    { to: 'model', click: true, phase: 4, wait: 500 },
    { to: 'model-1', click: true, phase: 5, wait: 1400 },
    { to: 'rankp', wait: 3200 },
  ],
  steps: [{ phase: 3, to: 'oos' }, { phase: 5, to: 'model' }, { phase: 5, to: 'rankp' }, { phase: 5, to: 'rank-3' }],
  final: 5,
};

export function LaunchDemo({ step }: { step?: number }) {
  const { app, phase, cur, tg } = useDemo(LAUNCH_DEF, step);
  const on = phase >= 3;
  const exact = phase >= 5;
  return (
    <Frame app={app} h={470} nav="home" cur={cur} label="Tela Início do Dinn: o cursor escolhe o produto lançado e a ruptura semana a semana e o ranking por rede carregam.">
      <Bar title="Olá, Ana Exemplo." sub="Atualizado em 02/11/2026 (D-1)" />
      <div className="da-filters">
        <Chip k="prod" tg={tg} label="Produtos" empty="Selecione" value={phase >= 2 ? PRODUCTS[2] : undefined} open={phase === 1} items={PRODUCTS} picked={phase >= 2 ? 2 : undefined} />
        <Chip k="uf" tg={tg} label="UF" value="Todas" />
        <Chip k="model" tg={tg} label="Modelo" value={exact ? 'Estoque exato' : 'Todos'} open={phase === 4} items={['Todos', 'Estoque exato', 'Estoque estimado']} picked={exact ? 1 : 0} />
      </div>
      <div className={`da-metrics four ${phase === 2 ? 'dd-loading' : ''}`}>
        <Metric icon={<Store size={20} />} label="Total de PDV"><Num v={exact ? 5120 : 8240} on={on} /></Metric>
        <Metric icon={<Package size={20} />} label="Total de SKU"><Num v={1} on={on} /></Metric>
        <Metric icon={<Boxes size={20} />} label={exact ? 'Estoque exato' : 'Estoque aproximado'}><Num v={exact ? 61400 : 96500} on={on} /></Metric>
        <Metric icon={<TriangleAlert size={20} />} label="% sem estoque" tg={tg} k="oos"><Num v={46} on={on} d={1} suffix="%" /></Metric>
      </div>
      <div className="da-row">
        <Panel className="grow" title="Ruptura" aside={<Seg items={['Semanal', 'Diário', '90 dias']} />}>
          <Line labels={['27/09', '04/10', '11/10', '18/10', '25/10', '01/11']} series={[{ values: [88.0, 79.5, 70.2, 61.8, 52.4, 46.0], color: BRAND }]} min={0} max={100} unit="%" on={on} h={170} d={0} />
        </Panel>
        <Rank title="Ranking de ruptura por rede" on={on} className="side" t={tg('rankp')} tg={tg}
          rows={[['Rede Alfa', '1.200 PDVs', 28.4], ['Rede Beta', '950 PDVs', 35.1], ['Rede Gama', '700 PDVs', 41.7], ['Avulsas', '2.300 PDVs', 82.6]]} />
      </div>
    </Frame>
  );
}

// ── TI, Dados & Governança: Conexões (MCP, somente leitura) ────────────────
const CONN_DEF: Def = {
  beats: [
    { to: 'scope', wait: 1600 },
    { to: 'auth', click: true, phase: 1, wait: 900 },
    { phase: 2, wait: 900 },
    { phase: 3, wait: 1800 },
    { to: 'revoke', click: true, phase: 4, wait: 1200 },
    { to: 'confirm', click: true, phase: 5, wait: 3200 },
  ],
  steps: [{ phase: 0, to: 'consent' }, { phase: 0, to: 'scope' }, { phase: 3, to: 'conn-0' }, { phase: 4, to: 'dialog' }],
  final: 3,
};

export function ConnectionsDemo({ step }: { step?: number }) {
  const { app, phase, cur, tg } = useDemo(CONN_DEF, step);
  return (
    <Frame app={app} h={480} nav="none" cur={cur} label="Telas do Dinn: um aplicativo de IA pede acesso somente leitura, a pessoa autoriza e depois revoga uma conexão em Conexões.">
      {phase < 3 ? (
        <div className="dd-consent" {...tg('consent')}>
          <img src="/logo/Dinn_logo_v2_Light.svg" alt="" width={56} height={22} />
          <h3>Autorizar aplicativo</h3>
          <p className="dd-muted">Um aplicativo pede permissão para consultar seus dados de estoque no Dinn.</p>
          <div className="dd-app-id"><span className="dd-app-ico">C</span><b>Claude</b><span className="da-badge ok"><ShieldCheck size={11} /> Verificado</span></div>
          <dl className="dd-dl">
            <div><dt>Sua conta</dt><dd>marina@exemplo.com.br</dd></div>
            <div><dt>Empresa</dt><dd>laboratorio-exemplo</dd></div>
            <div><dt>Devolve o acesso para</dt><dd>claude.ai</dd></div>
            <div {...tg('scope')}><dt>O que o aplicativo pode fazer</dt><dd>Consultar produtos e disponibilidade de estoque<small><Lock size={11} /> Somente leitura. O aplicativo não altera nada e vê apenas o que você já vê, nada além.</small></dd></div>
          </dl>
          <div className="dd-actions">
            <span className="dd-btn-out">Recusar</span>
            <span className="da-btn" {...tg('auth')}>{phase === 1 ? 'Processando…' : phase === 2 ? 'Voltando ao aplicativo…' : 'Autorizar'}</span>
          </div>
        </div>
      ) : (
        <div className="dd-conns">
          <Bar title="Conexões" />
          <p className="dd-muted">Aplicativos autorizados a consultar seus dados de estoque no Dinn.</p>
          <div className="dd-conn dd-in" {...tg('conn-0')}>
            <span className="dd-app-ico">C</span>
            <div><b>Claude</b><small>Empresa: laboratorio-exemplo · Autorizado em 03/11/2026 · Último uso: hoje, 09:14</small></div>
            <span className="dd-btn-out">Revogar</span>
          </div>
          {phase < 5 && (
            <div className="dd-conn dd-in" {...tg('conn-1')}>
              <span className="dd-app-ico dd-grey">A</span>
              <div><b>Assistente Exemplo <span className="da-badge mod">Não verificado</span></b><small>Empresa: laboratorio-exemplo · Autorizado em 20/10/2026 · Nunca usado</small></div>
              <span className="dd-btn-out" {...tg('revoke')}>Revogar</span>
            </div>
          )}
          {phase === 4 && (
            <div className="dd-dialog dd-in" {...tg('dialog')}>
              <b>Revogar esta conexão?</b>
              <p className="dd-muted">O aplicativo perde o acesso imediatamente. Para voltar a usá-lo, autorize de novo.</p>
              <div className="dd-actions"><span className="dd-btn-out">Cancelar</span><span className="da-btn dd-danger" {...tg('confirm')}>Revogar acesso</span></div>
            </div>
          )}
          {phase === 5 && <span className="dd-toast dd-in"><Check size={14} /> Conexão revogada.</span>}
        </div>
      )}
    </Frame>
  );
}

// ── Qual tela cada área mostra ─────────────────────────────────────────────
export const AREA_DEMO: Record<string, (p: { step?: number }) => ReactElement> = {
  'inteligencia-pricing': MarketDemo,
  'trade-kam-campo': QueueDemo,
  'supply-distribuicao': SupplyDemo,
  'sac-customer-experience': LocatorDemo,
  'marketing-lancamentos': LaunchDemo,
  'ti-dados-governanca': ConnectionsDemo,
};
