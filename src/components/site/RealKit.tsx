import { useEffect, useState, type ReactNode, type RefObject } from 'react';
import {
  Bookmark, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronsUpDown, ChartPie, Download, Factory, FileWarning, House, Info,
  LifeBuoy, Lightbulb, LoaderCircle, PanelLeft, RefreshCw, Search, Target, TriangleAlert,
} from 'lucide-react';
import { Frame, fmt, reduced } from './AppDemos';
import { JeanOrbIcon } from './JeanOrb';

// Peças das telas fiéis ao app do Dinn (RealDemos.tsx). Base: os prints da
// plataforma em referencia-plataforma/ (nov/2026). Mesmo desenho do app:
// menu lateral aberto, barra do topo, filtros em pílula, cards com borda fina,
// gráfico de área, selos sem contorno, medidor de ruptura e botões do app.
// Dados fictícios (nomes de produto e de rede do modo demonstração).

export const RW = 1280;
export const RH = 800;
export const BRAND = '#5130e9';
export const SKY = '#0ea5e9';
export const AMBER = '#f59e0b';
export const GREEN = '#10b981';
export const RED = '#ef4444';
export const GREY = '#9ca3af';

// ── Moldura ────────────────────────────────────────────────────────────────
const NAV = [
  { k: 'home', icon: House, label: 'Início' },
  { k: 'jean', icon: JeanOrbIcon, label: 'Jean' },
  { k: 'market', icon: ChartPie, label: 'Mercado' },
  { k: 'opps', icon: Target, label: 'Oportunidades' },
  { k: 'locator', icon: Search, label: 'Localizar Produtos' },
  { k: 'dist', icon: Factory, label: 'Distribuição' },
];

export function RSide({ nav }: { nav: string }) {
  return (
    <nav className="rl-side" aria-hidden="true">
      <img src="/logo/Dinn_logo_v2_Light.svg" alt="" width={86} height={34} />
      <ul>
        {NAV.map(({ k, icon: I, label }) => (
          <li key={k} className={k === nav ? 'on' : ''}><I size={18} />{label}</li>
        ))}
      </ul>
      <ul className="rl-side-sep">
        <li className={nav === 'support' ? 'on' : ''}><LifeBuoy size={18} />Suporte</li>
      </ul>
      <div className="rl-user"><span>A</span><p><b>Ana Exemplo</b><small>ana@exemplo.com.br</small></p></div>
    </nav>
  );
}

type Cur = Parameters<typeof Frame>[0]['cur'];
/** Tela inteira: menu lateral aberto + área principal. */
export function RFrame({ app, cur, nav, label, h = RH, children }: { app: RefObject<HTMLDivElement | null>; cur: Cur; nav: string; label: string; h?: number; children: ReactNode }) {
  return (
    <Frame app={app} w={RW} h={h} nav={nav} cur={cur} label={label} side={<RSide nav={nav} />} kind="rl-app">
      {children}
    </Frame>
  );
}

/** Barra do topo: saudação com a data do dado (D-1) ou caminho da página. */
export function RTop({ crumb, sub, actions = true }: { crumb?: string; sub?: string; actions?: boolean }) {
  return (
    <header className="rl-top">
      <PanelLeft size={18} className="rl-top-ico" />
      {crumb ? (
        <p className="rl-crumb"><span>Início</span><ChevronRight size={14} /><b>{crumb}</b>{sub && <small>{sub}</small>}</p>
      ) : (
        <p className="rl-hello"><b>Olá, Ana.</b><small>{sub ?? 'Atualizado em 03/11/2026 (D-1)'}</small></p>
      )}
      <span className="rl-top-r">
        <span className="rl-pill rl-pill-jean"><JeanOrbIcon size={15} />Jean</span>
        {actions && <><span className="rl-pill"><Bookmark size={15} />Ver</span><span className="rl-pill"><Lightbulb size={15} className="rl-bulb" />Boa prática</span></>}
      </span>
    </header>
  );
}

/** Página com cabeçalho fixo (topo + filtros) e corpo que rola (`y` em px). */
export function RPage({ top, filters, y = 0, children }: { top: ReactNode; filters?: ReactNode; y?: number; children: ReactNode }) {
  return (
    <div className="rl-page">
      {top}
      {filters && <div className="rl-filters">{filters}</div>}
      <div className="rl-viewport">
        <div className="rl-body" style={{ transform: `translate3d(0, ${-y}px, 0)` }}>{children}</div>
      </div>
    </div>
  );
}

// ── Filtros ────────────────────────────────────────────────────────────────
type Tg = (k: string) => object;
/** Filtro em pílula, como no app: rótulo, contagem e menu com busca e caixas de seleção. */
export function RSelect({ k, tg, label, count, value, w = 140, open, items, picked = [], search, disabled }: {
  k: string; tg: Tg; label: string; count?: number; value?: string; w?: number; open?: boolean; items?: string[]; picked?: number[]; search?: string; disabled?: boolean;
}) {
  return (
    <span className="rl-sel-wrap">
      <span className={`rl-sel ${disabled ? 'off' : ''} ${open ? 'is-open' : ''}`} style={{ width: w }} {...tg(k)}>
        <span className="rl-sel-v">{value ?? label}{count ? <i>{count}</i> : null}</span>
        <ChevronDown size={16} />
      </span>
      {open && items && (
        <span className="rl-menu">
          {search !== undefined && <span className="rl-menu-search"><Search size={14} />{search || <em>Buscar…</em>}</span>}
          {items.map((it, i) => (
            <span key={it} className={picked.includes(i) ? 'on' : ''} {...tg(`${k}-${i}`)}>
              <i>{picked.includes(i) && <Check size={11} strokeWidth={3} />}</i>{it}
            </span>
          ))}
        </span>
      )}
    </span>
  );
}

export const RSave = ({ clear = false, tg }: { clear?: boolean; tg?: Tg }) => (
  <>
    <span className="rl-sel rl-btn-line" {...(tg ? tg('save') : {})}><Bookmark size={15} />Salvar</span>
    {clear && <span className="rl-clear">✕ Limpar filtros</span>}
  </>
);

// ── Cards e números ────────────────────────────────────────────────────────
export function Count({ v, on, d = 0, suffix = '' }: { v: number; on: boolean; d?: number; suffix?: string }) {
  const [x, setX] = useState(on ? v : 0);
  useEffect(() => {
    if (!on) return;
    if (reduced()) return setX(v);
    let raf = 0;
    const from = x;
    const t0 = performance.now();
    const f = (n: number) => {
      // Contador: outExpo em 1,1 s, termina no valor exato (regra 8 da skill motion-de-produto).
      const k = Math.min(1, (n - t0) / 1100);
      setX(k >= 1 ? v : from + (v - from) * (1 - Math.pow(2, -10 * k)));
      if (k < 1) raf = requestAnimationFrame(f);
    };
    raf = requestAnimationFrame(f);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on, v]);
  return on ? <>{fmt(x, d)}{suffix}</> : <span className="rl-sk" />;
}

export function RKpi({ icon, label, children, t }: { icon: ReactNode; label: string; children: ReactNode; t?: object }) {
  return (
    <div className="rl-kpi" {...t}>
      <span className="rl-kpi-ico">{icon}</span>
      <span><small>{label}<Info size={13} /></small><b>{children}</b></span>
    </div>
  );
}

export function RCard({ title, sub, aside, children, className = '', t }: { title?: ReactNode; sub?: ReactNode; aside?: ReactNode; children: ReactNode; className?: string; t?: object }) {
  return (
    <section className={`rl-card ${className}`} {...t}>
      {title && <header><h4>{title}<Info size={14} /></h4>{aside}</header>}
      {sub && <p className="rl-card-sub">{sub}</p>}
      {children}
    </section>
  );
}

export const RSeg = ({ items, on = 0, t }: { items: string[]; on?: number; t?: (i: number) => object }) => (
  <span className="rl-seg">{items.map((x, i) => <i key={x} className={i === on ? 'on' : ''} {...(t ? t(i) : {})}>{x}</i>)}</span>
);

export const RDrop = ({ v, w = 150, t }: { v: string; w?: number; t?: object }) => (
  <span className="rl-drop" style={{ width: w }} {...t}>{v}<ChevronDown size={15} /></span>
);

export const RIconBtn = ({ children }: { children: ReactNode }) => <span className="rl-ibtn">{children}</span>;
export const RPager = () => (
  <span className="rl-pager"><RIconBtn><ChevronLeft size={15} /></RIconBtn><RIconBtn><ChevronRight size={15} /></RIconBtn><RIconBtn><Download size={15} /></RIconBtn></span>
);

// ── Selos, medidor e barras ────────────────────────────────────────────────
export const LV: Record<string, string> = { Crítico: 'crit', Alto: 'high', Moderado: 'mod', Leve: 'low' };
export const RBadge = ({ lv }: { lv: string }) => <span className={`rl-badge ${LV[lv] ?? lv}`}>{lv}</span>;

/** Medidor de % de ruptura: anel roxo, como na coluna "% Ruptura" do app. */
export function RGauge({ v, on = true }: { v: number; on?: boolean }) {
  const r = 17;
  const C = 2 * Math.PI * r;
  return (
    <span className="rl-gauge">
      <svg viewBox="0 0 42 42" aria-hidden="true">
        <circle cx="21" cy="21" r={r} fill="none" stroke="#ece8fd" strokeWidth="3.5" />
        <circle cx="21" cy="21" r={r} fill="none" stroke={BRAND} strokeWidth="3.5" strokeLinecap="round" transform="rotate(-90 21 21)"
          strokeDasharray={`${on ? Math.max(0.5, (v / 100) * C) : 0} ${C}`} style={{ transition: 'stroke-dasharray 1s cubic-bezier(.16,1,.3,1)' }} />
      </svg>
      <b>{v}%</b>
    </span>
  );
}

/** "16 dias de 30 dias" com barra, e alerta quando passa da metade. */
export const RDays = ({ d, of, on = true, warn }: { d: number; of: number; on?: boolean; warn?: boolean }) => (
  <span className="rl-days">
    {warn && <TriangleAlert size={14} className="rl-warn" />}
    <b>{d} dias</b><small>de {of} dias</small>
    <i><u style={{ width: on ? `${(d / of) * 100}%` : 0 }} /></i>
  </span>
);

export const RStock = ({ v, k = 'off' }: { v: string; k?: 'off' | 'mid' | 'ok' }) => <span className={`rl-stock ${k}`}>{v}</span>;

export const RConsult = ({ busy, t }: { busy?: boolean; t?: object }) => (
  <span className={`rl-consult ${busy ? 'busy' : ''}`} {...t}>
    {busy ? <LoaderCircle size={13} className="rl-spin" /> : <RefreshCw size={13} />}{busy ? 'Consultando…' : 'Consultar agora'}
  </span>
);
export const RReport = ({ t }: { t?: object }) => <span className="rl-report" {...t}><FileWarning size={13} />Reportar</span>;

export const RTh = ({ children, sort, active, t }: { children: ReactNode; sort?: boolean; active?: 'up' | 'down'; t?: object }) => (
  <th {...t} className={active ? 'on' : ''}>
    <span>{children}{sort && (active ? <ChevronDown size={13} className={active === 'up' ? 'up' : ''} /> : <ChevronsUpDown size={12} />)}<Info size={12} /></span>
  </th>
);

/** Linhas de classificação: ponto, nome, total, barra e %. */
export function RLevels({ head, rows, on, t, tg, sel }: {
  head: [string, string, string]; rows: { n: string; c: number; p: number; col: string }[]; on: boolean; t?: object; tg?: Tg; sel?: number;
}) {
  return (
    <table className="rl-levels" {...t}>
      <thead><tr><th>{head[0]}<ChevronsUpDown size={11} /></th><th>{head[1]}<ChevronsUpDown size={11} /></th><th /><th>{head[2]}<ChevronsUpDown size={11} /></th></tr></thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={r.n} className={sel === i ? 'on' : ''} {...(tg ? tg(`lv-${i}`) : {})}>
            <td><i style={{ background: r.col }} />{r.n}</td>
            <td><Count v={r.c} on={on} /></td>
            <td><span className="rl-bar"><u style={{ width: on ? `${r.p}%` : 0, background: r.col, transitionDelay: `${i * 0.08}s` }} /></span></td>
            <td><Count v={r.p} on={on} d={r.p % 1 ? 1 : 0} suffix="%" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ── Gráfico de área (recharts do app) ──────────────────────────────────────
const curve = (pts: [number, number][]) => {
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    d += `C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)},${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)} ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)},${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
};

export type Series = { values: number[]; color: string; name?: string; dash?: boolean };
let gid = 0;
export function RArea({ labels, series, ticks, on, w = 640, h = 240, unit = '', tip, fill = true, xEvery = 1, mark }: {
  labels: string[]; series: Series[]; ticks: number[]; on: boolean; w?: number; h?: number; unit?: string;
  tip?: { i: number; text: ReactNode }; fill?: boolean; xEvery?: number;
  /** Alvo invisível num ponto da 1ª série, para o cursor do roteiro. */
  mark?: { i: number; t: object };
}) {
  const [id] = useState(() => `rl-g${gid++}`);
  const L = 46, R = 14, T = 10, B = 28;
  const min = ticks[0];
  const max = ticks[ticks.length - 1];
  const x = (i: number) => L + (i * (w - L - R)) / (labels.length - 1);
  const y = (v: number) => T + (1 - (v - min) / (max - min)) * (h - T - B);
  return (
    <div className="rl-chart">
      <svg viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
        <defs>
          {series.map((s, k) => (
            <linearGradient key={k} id={`${id}-${k}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor={s.color} stopOpacity=".22" /><stop offset="1" stopColor={s.color} stopOpacity=".02" />
            </linearGradient>
          ))}
          <clipPath id={`${id}-c`}><rect x="0" y="0" height={h} width={on ? w : L} style={{ transition: on ? 'width 1.3s cubic-bezier(.16,1,.3,1)' : 'none' }} /></clipPath>
        </defs>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={L} x2={w - R} y1={y(t)} y2={y(t)} stroke="#ececef" strokeDasharray="3 3" />
            <line x1={L - 5} x2={L} y1={y(t)} y2={y(t)} stroke="#666" />
            <text x={L - 8} y={y(t) + 4} textAnchor="end" className="rl-ax">{fmt(t, 0)}{unit}</text>
          </g>
        ))}
        <line x1={L} x2={L} y1={T} y2={h - B} stroke="#666" />
        <line x1={L} x2={w - R} y1={h - B} y2={h - B} stroke="#666" />
        {labels.map((l, i) => i % xEvery === 0 && (
          <g key={l}>
            <line x1={x(i)} x2={x(i)} y1={h - B} y2={h - B + 5} stroke="#666" />
            <text x={x(i)} y={h - 8} textAnchor="middle" className="rl-ax">{l}</text>
          </g>
        ))}
        <g clipPath={`url(#${id}-c)`}>
          {series.map((s, k) => {
            const pts = s.values.map((v, i) => [x(i), y(v)] as [number, number]);
            const line = curve(pts);
            return (
              <g key={k}>
                {fill && <path d={`${line} L${x(s.values.length - 1)},${h - B} L${L},${h - B} Z`} fill={`url(#${id}-${k})`} />}
                <path d={line} fill="none" stroke={s.color} strokeWidth="2" strokeDasharray={s.dash ? '6 5' : undefined} />
              </g>
            );
          })}
        </g>
        {tip && on && series.map((s, k) => (
          <circle key={k} cx={x(tip.i)} cy={y(s.values[tip.i])} r="4.5" fill="#fff" stroke={s.color} strokeWidth="2" className="rl-pop" />
        ))}
        {tip && on && <line x1={x(tip.i)} x2={x(tip.i)} y1={T} y2={h - B} stroke="#d4d4d8" />}
      </svg>
      {mark && (
        <span className="rl-mark" style={{ left: `${(x(mark.i) / w) * 100}%`, top: `${(y(series[0].values[mark.i]) / h) * 100}%` }} {...mark.t} />
      )}
      {tip && on && (
        <span className="rl-tip rl-pop" style={{ left: `${(x(tip.i) / w) * 100}%`, top: `${(y(series[0].values[tip.i]) / h) * 100}%` }}>{tip.text}</span>
      )}
    </div>
  );
}

// ── Rosca (market share) ───────────────────────────────────────────────────
export function RDonut({ items, on, center, sub = 'total', size = 170, t, hi }: {
  items: { label: string; value: number; color: string }[]; on: boolean; center: string; sub?: string; size?: number; t?: (i: number) => object; hi?: number;
}) {
  const r = 50;
  const C = 2 * Math.PI * r;
  let acc = 0;
  return (
    <svg className="rl-donut" viewBox="0 0 140 140" style={{ width: size, height: size }} aria-hidden="true">
      {items.map((it, i) => {
        const seg = (it.value / 100) * C;
        const off = acc;
        acc += seg;
        return (
          <circle key={it.label} cx="70" cy="70" r={r} fill="none" stroke={it.color} strokeWidth={hi === i ? 22 : 18} transform="rotate(-90 70 70)"
            strokeDasharray={`${on ? Math.max(0, seg - 0.6) : 0} ${C}`} strokeDashoffset={-off}
            style={{ transition: `stroke-dasharray 1s cubic-bezier(.16,1,.3,1) ${i * 0.08}s, stroke-width .35s cubic-bezier(.175,.885,.32,1.275)` }} {...(t ? t(i) : {})} />
        );
      })}
      <text x="70" y="72" textAnchor="middle" className="rl-donut-v">{on ? center : ''}</text>
      <text x="70" y="88" textAnchor="middle" className="rl-donut-s">{on ? sub : ''}</text>
    </svg>
  );
}

// ── Pinos do mapa ──────────────────────────────────────────────────────────
export const PIN: Record<string, string> = { ok: GREEN, mid: AMBER, low: RED, off: GREY };
export function RPin({ x, y, k, i = 0, size = 30, t, on }: { x: number; y: number; k: string; i?: number; size?: number; t?: object; on?: boolean }) {
  return (
    <span className={`rl-pin ${on ? 'on' : ''}`} style={{ left: x, top: y, width: size, height: size, background: PIN[k] ?? k, animationDelay: `${i * 0.025}s` }} {...t}>
      <svg viewBox="0 0 24 24" width={size * 0.5} height={size * 0.5} aria-hidden="true"><path d="M4 9.5 5.5 5h13L20 9.5M4 9.5V19h16V9.5M4 9.5c0 1.4 1.1 2.5 2.7 2.5 1.5 0 2.7-1.1 2.7-2.5 0 1.4 1.1 2.5 2.6 2.5s2.7-1.1 2.7-2.5c0 1.4 1.2 2.5 2.7 2.5S20 10.9 20 9.5M10 19v-4h4v4" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinejoin="round" /></svg>
    </span>
  );
}

/** Número pseudoaleatório com semente: posições fixas a cada visita. */
export function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
