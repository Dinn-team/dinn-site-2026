import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type RefObject } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Check, ChevronDown, House, LifeBuoy, Map as MapIcon, MapPin, ChartPie, Truck } from 'lucide-react';
import { JeanOrbIcon } from './JeanOrb';

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

export const BRAND = '#5625f2';
export const GREY = '#a3a3b2';
export const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const fmt = (v: number, d = 0) => v.toLocaleString('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d });

// ── Motor: roteiro, cursor e passos ─────────────────────────────────────────
// Linguagem de movimento: skill motion-de-produto (.agents/skills/motion-de-produto).
// Na home (FrameCamera ligada) a tela se comporta como um vídeo de produto:
// - a câmera trabalha por PLANOS: abre a tela inteira para situar, depois vai à
//   região que importa em 0,9 s (curva inOut) e não persegue o cursor (regra 3);
// - em cada plano há deriva lenta de escala, 1,00 a 1,035 (regra 7);
// - o cursor anda em arco (0,45 a 0,8 s) e o clique aperta e solta (componentes Cursor e Clique);
// - o alvo clicado responde com um pulso (data-press) e a digitação tem ritmo irregular;
// - o laço recomeça com um corte em movimento (desfoque), não com um salto.
/**
 * Câmera depois da ação do passo (só na home):
 * - 'out' ou 'wide': abre para a tela inteira;
 * - 'hold' ou nada: não mexe;
 * - { at, z }: enquadra outro elemento (z multiplica o zoom que faz a região caber).
 * Antes da ação, `shot` enquadra uma região ('wide' = tela inteira) e espera o movimento terminar.
 */
export type Cam = 'out' | 'wide' | 'hold' | { at: string; z?: number };
export type Beat = { to?: string; click?: boolean; phase?: number; type?: [string, string]; wait: number; cam?: Cam; shot?: string; z?: number };
type Cur = { x: number; y: number; n: number; show: boolean; cam: number; fx: number; fy: number; fw: number; fh: number; zf: number; fade?: number };
/** `start`: fase em que o laço recomeça (padrão 0). */
export type Def = { beats: Beat[]; steps: { phase: number; to?: string }[]; final: number; start?: number };
export type DemoProps = { step?: number; def?: Def };

/** Tempo da câmera entre planos (s) e curva inOut da skill. */
export const CAM_MOVE = 1.1;
export const EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function useDemo(def: Def, step?: number) {
  const app = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(step === undefined ? 0 : def.steps[step]?.phase ?? 0);
  const [typed, setTyped] = useState<Record<string, string>>({});
  const [cur, setCur] = useState<Cur>({ x: 760, y: 560, n: 0, show: false, cam: 0, fx: 470, fy: 300, fw: 940, fh: 600, zf: 1, fade: 0 });
  const [ring, setRing] = useState<string | null>(null);
  const [press, setPress] = useState<string | null>(null);
  const seen = useInView(app, { margin: '-10% 0px' });
  const camOn = useContext(FrameCamera);

  // Retângulo de um alvo em coordenadas da tela (sem escala nem câmera).
  const rectOf = (key: string) => {
    const w = app.current;
    const el = w?.querySelector(`[data-t="${key}"]`) as HTMLElement | null;
    if (!w || !el) return null;
    const a = w.getBoundingClientRect();
    const b = el.getBoundingClientRect();
    const s = a.width / w.offsetWidth || 1;
    return { x: (b.left - a.left) / s, y: (b.top - a.top) / s, w: b.width / s, h: b.height / s };
  };
  const camTo = (key: string, zf = 1) => {
    if (!camOn) return;
    const r = rectOf(key);
    if (r) setCur((c) => ({ ...c, cam: 1, fx: r.x + r.w / 2, fy: r.y + r.h / 2, fw: r.w, fh: r.h, zf }));
  };
  const camOut = () => {
    if (camOn) setCur((c) => ({ ...c, cam: 0 }));
  };

  const spot = (key: string) => {
    const r = rectOf(key);
    if (!r) return null;
    return { x: r.x + Math.min(r.w * 0.5, 120), y: r.y + Math.min(r.h * 0.6, 28) };
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
      // No palco de rolagem a câmera também trabalha por plano: vai ao alvo do passo e abre quando não há alvo.
      if (s.to) camTo(s.to, 0.85);
      else camOut();
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
    // Digitação com ritmo irregular (18 a 28 caracteres por segundo, ±30%), igual a cada volta.
    const jitter = (i: number) => 0.7 + 0.6 * ((Math.sin(i * 12.9898) * 43758.5453) % 1 + 1) % 1;
    (async () => {
      let first = true;
      while (on) {
        setPhase(def.start ?? 0);
        setTyped({});
        setPress(null);
        setCur((c) => ({ ...c, x: 760, y: 560, show: false, cam: 0, fade: 0 }));
        await sleep(camOn ? (first ? 500 : 700) : 900);
        first = false;
        for (const b of def.beats) {
          if (camOn && b.shot) {
            if (b.shot === 'wide') camOut();
            else camTo(b.shot, b.z ?? 1);
            await sleep(CAM_MOVE * 1000 - 150);
          }
          if (b.to) {
            const p = spot(b.to);
            if (p) setCur((c) => ({ ...c, ...p, show: true }));
            await sleep(camOn ? 980 : 850);
          }
          if (b.click && b.to) {
            const q = spot(b.to);
            if (q) setCur((c) => ({ ...c, ...q }));
            await sleep(60);
            setCur((c) => ({ ...c, n: c.n + 1 }));
            setPress(b.to);
            await sleep(170);
          }
          if (b.type) {
            const [key, text] = b.type;
            for (let i = 1; i <= text.length; i++) {
              setTyped((t) => ({ ...t, [key]: text.slice(0, i) }));
              await sleep(44 * jitter(i));
            }
          }
          if (b.phase !== undefined) setPhase(b.phase);
          if (camOn) {
            const cam = b.cam;
            if (cam === 'out' || cam === 'wide') {
              await sleep(160);
              camOut();
            } else if (cam && typeof cam === 'object') {
              await sleep(160); // o elemento novo precisa estar na tela para ser medido
              camTo(cam.at, cam.z ?? 1);
            }
          }
          await sleep(b.wait);
        }
        // Fim do laço: a câmera abre, o cursor sai e a tela some num desfoque (corte em movimento).
        camOut();
        setCur((c) => ({ ...c, show: false }));
        await sleep(camOn ? 900 : 500);
        if (camOn) {
          setCur((c) => ({ ...c, fade: 1 }));
          await sleep(420);
        }
      }
    })();
    return () => {
      on = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seen, step === undefined]);

  // O pulso do alvo clicado dura o tempo da animação de CSS.
  useEffect(() => {
    if (!press) return;
    const id = setTimeout(() => setPress(null), 450);
    return () => clearTimeout(id);
  }, [press, cur.n]);

  /** Marca um alvo do roteiro: `data-t` para o cursor, `data-ring` no passo atual e `data-press` no clique. */
  const tg = (key: string) => ({ 'data-t': key, 'data-ring': ring === key ? '' : undefined, 'data-press': press === key ? '' : undefined });
  return { app, phase, typed, cur, tg };
}

// ── Moldura: escala, menu lateral e cursor ─────────────────────────────────
const NAV = [
  { k: 'home', icon: House, label: 'Início' },
  { k: 'insights', icon: JeanOrbIcon, label: 'Jean' },
  { k: 'market', icon: ChartPie, label: 'Mercado' },
  { k: 'opps', icon: MapIcon, label: 'Oportunidades' },
  { k: 'locator', icon: MapPin, label: 'Localizar Produtos' },
  { k: 'dist', icon: Truck, label: 'Distribuição' },
];

/** Escala máxima da tela. Padrão 1 (nunca maior que o tamanho natural). */
export const FrameMaxScale = createContext(1);

/**
 * Câmera da tela (home, "Como a Dinn funciona"). Ligada, a tela entra já em
 * movimento (escala 1,08 → 1), abre inteira para situar e depois trabalha por
 * planos: cada plano enquadra uma região em 0,9 s (curva inOut) e deriva devagar
 * até 1,035. O enquadramento é preso às bordas da tela: nunca mostra área vazia.
 */
export const FrameCamera = createContext(false);

type Stop = { stop: () => void };
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

export function Frame({
  app, w = 940, h, nav, label, cur, children, bare = false, side, kind = '',
}: {
  app: RefObject<HTMLDivElement | null>; w?: number; h: number; nav: string; label: string; bare?: boolean;
  /** Menu lateral próprio (telas fiéis ao app, RealKit.tsx). Substitui o menu de ícones. */
  side?: ReactNode; kind?: string;
  cur: { x: number; y: number; n: number; show: boolean; cam?: number; fx?: number; fy?: number; fw?: number; fh?: number; zf?: number; fade?: number }; children: ReactNode;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const max = useContext(FrameMaxScale);
  const camOn = useContext(FrameCamera);
  const [s, setS] = useState(0.6);
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const f = () => setS(Math.min(max, el.clientWidth / w));
    f();
    const ro = new ResizeObserver(f);
    ro.observe(el);
    return () => ro.disconnect();
  }, [w, max]);

  // Câmera: zoom (z), foco (fx, fy) e deriva (d). O plano novo chega em 0,9 s;
  // depois a deriva sobe devagar. A tela entra já em movimento (d = 1,08).
  const sMV = useMotionValue(s);
  const zMV = useMotionValue(1);
  const fxMV = useMotionValue(w / 2);
  const fyMV = useMotionValue(h / 2);
  const dMV = useMotionValue(camOn && !reduced() ? 1.05 : 1);
  useEffect(() => { sMV.set(s); }, [s, sMV]);
  useEffect(() => {
    if (!camOn) return;
    // Zoom máximo por dispositivo: quanto menor a janela, mais perto (até 2,4x).
    const zDev = clamp(1.2 / Math.max(s, 0.01), 1.4, 2.4);
    let z = 1;
    let fx = w / 2;
    let fy = h / 2;
    if (cur.cam) {
      const fw = Math.max(cur.fw ?? 1, 1);
      const fh = Math.max(cur.fh ?? 1, 1);
      // A região inteira cabe no quadro, com 8% de margem; z multiplica esse ajuste.
      z = clamp(Math.min(w / (fw * 1.16), h / (fh * 1.16)) * (cur.zf ?? 1), 1, zDev);
      fx = cur.fx ?? fx;
      fy = cur.fy ?? fy;
      // Região mais alta que o quadro: enquadra o topo dela, não o meio.
      const visH = h / z;
      if (fh > visH * 0.92) fy = fy - fh / 2 + visH / 2 - 12 / z;
    }
    const quick = reduced() ? 0 : CAM_MOVE;
    const run: Stop[] = [
      animate(zMV, z, { duration: quick, ease: EASE_IN_OUT }),
      animate(fxMV, fx, { duration: quick, ease: EASE_IN_OUT }),
      animate(fyMV, fy, { duration: quick, ease: EASE_IN_OUT }),
      animate(dMV, 1, { duration: quick * 1.15, ease: EASE_OUT_EXPO }),
    ];
    // A câmera nunca para: depois do plano, deriva lenta de escala (regra 7).
    const id = setTimeout(() => { run.push(animate(dMV, 1.025, { duration: 9, ease: [0.37, 0, 0.63, 1] })); }, quick * 1000);
    return () => {
      clearTimeout(id);
      run.forEach((a) => a.stop());
    };
  }, [camOn, cur.cam, cur.fx, cur.fy, cur.fw, cur.fh, cur.zf, s, w, h, zMV, fxMV, fyMV, dMV]);
  const camTransform = useTransform([sMV, zMV, fxMV, fyMV, dMV], ([s0, z, fx, fy, d]: number[]) => {
    const S = s0 * z * d;
    const W = w * s0;
    const H = h * s0;
    const tx = Math.min(0, Math.max(W - w * S, W / 2 - fx * S));
    const ty = Math.min(0, Math.max(H - h * S, H / 2 - fy * S));
    return `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) scale(${S.toFixed(4)})`;
  });

  // Cursor em arco (curva de Bézier) com aperto no clique. Ao aparecer, entra de baixo e da direita.
  const cxMV = useMotionValue(cur.x);
  const cyMV = useMotionValue(cur.y);
  const cScale = useMotionValue(1);
  const shown = useRef(cur.show);
  useEffect(() => {
    const b: [number, number] = [cur.x, cur.y];
    const wasShown = shown.current;
    shown.current = cur.show;
    if (!cur.show || reduced()) {
      if (!cur.show) return;
      cxMV.set(b[0]);
      cyMV.set(b[1]);
      return;
    }
    const a: [number, number] = wasShown ? [cxMV.get(), cyMV.get()] : [b[0] + 150, b[1] + 120];
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const dist = Math.hypot(dx, dy);
    if (dist < 1) return;
    const c: [number, number] = [(a[0] + b[0]) / 2 - dy * 0.16, (a[1] + b[1]) / 2 + dx * 0.16];
    const ctl = animate(0, 1, {
      duration: clamp(dist / 900, 0.6, 1),
      ease: EASE_IN_OUT,
      onUpdate: (k) => {
        cxMV.set((1 - k) ** 2 * a[0] + 2 * (1 - k) * k * c[0] + k * k * b[0]);
        cyMV.set((1 - k) ** 2 * a[1] + 2 * (1 - k) * k * c[1] + k * k * b[1]);
      },
    });
    return () => ctl.stop();
  }, [cur.x, cur.y, cur.show, cxMV, cyMV]);
  useEffect(() => {
    if (!cur.n || reduced()) return;
    const ctl = animate(cScale, [1, 0.9, 1], { duration: 0.3, times: [0, 0.4, 1], ease: 'easeOut' });
    return () => ctl.stop();
  }, [cur.n, cScale]);
  const cursorTransform = useTransform([cxMV, cyMV, cScale], ([x, y, k]: number[]) => `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${k.toFixed(3)})`);

  return (
    <div ref={wrap} className={`da-stage dd-stage${camOn ? ' dd-cam' : ''}${cur.fade ? ' dd-cut' : ''}`} style={{ height: h * s }} role="img" aria-label={label} data-ui="">
      <motion.div ref={app} className={`dnn-app dd-app ${bare ? 'dd-bare' : ''} ${kind}`} style={{ width: w, height: h, transform: camOn ? camTransform : `scale(${s})` }}>
        {side}
        {!bare && !side && <nav className="dd-side" aria-hidden="true">
          <img src="/logo/Dinn_logo_v2_Light.svg" alt="" width={34} height={14} />
          {NAV.map(({ k, icon: I }) => (
            <span key={k} className={k === nav ? 'on' : ''}><I size={18} /></span>
          ))}
          <span className="dd-side-sep" />
          <span><LifeBuoy size={18} /></span>
        </nav>}
        <div className="dd-main">{children}</div>
        <motion.div className="demo-cursor dd-arc" style={{ transform: cursorTransform, opacity: cur.show ? 1 : 0 }} aria-hidden="true">
          {cur.n > 0 && <span key={cur.n} className="demo-ripple" />}
          <svg width="44" height="44" viewBox="0 0 24 24"><path d="M4 2 L4 19 L8.5 14.8 L11.8 22 L14.6 20.8 L11.4 13.8 L17.5 13.6 Z" fill="#111" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" /></svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ── Peças da interface ─────────────────────────────────────────────────────
export function Num({ v, on, d = 0, suffix = '' }: { v: number; on: boolean; d?: number; suffix?: string }) {
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

export const Bar = ({ title, sub }: { title: string; sub?: string }) => (
  <div className="da-bar"><b>{title}</b>{sub && <span>{sub}</span>}</div>
);

export function Chip({ label, value, empty, open, items, picked, tg, k }: {
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

export function Metric({ icon, label, children, tg, k }: { icon: ReactNode; label: string; children: ReactNode; tg?: (k: string) => object; k?: string }) {
  return (
    <div className="da-metric" {...(tg && k ? tg(k) : {})}>
      <span className="da-metric-icon">{icon}</span>
      <span><b>{children}</b><small>{label}</small></span>
    </div>
  );
}

export const Panel = ({ title, aside, children, className = '', t }: { title: string; aside?: ReactNode; children: ReactNode; className?: string; t?: object }) => (
  <section className={`da-card ${className}`} {...t}>
    <header><h4>{title}</h4>{aside}</header>
    {children}
  </section>
);

export const Seg = ({ items, on = 0 }: { items: string[]; on?: number }) => (
  <span className="da-seg">{items.map((x, i) => <i key={x} className={i === on ? 'on' : ''}>{x}</i>)}</span>
);

export function Line({ labels, series, min, max, on, h = 170, unit = '', d = 1 }: {
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

export function Donut({ items, colors, on }: { items: { label: string; value: number }[]; colors: string[]; on: boolean }) {
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

export const LEVEL: Record<string, string> = { Crítico: 'crit', Alto: 'high', Moderado: 'mod', Leve: 'low' };

export function Levels({ on, rows, t }: { on: boolean; rows: [string, number, number][]; t?: object }) {
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

export function Rank({ title, rows, on, t, tg, className = '' }: { title: string; rows: [string, string, number][]; on: boolean; t?: object; tg?: (k: string) => object; className?: string }) {
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

export const Tip = ({ children }: { children: ReactNode }) => <span className="dd-tip">{children}</span>;

