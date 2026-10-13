import { useEffect, useRef, useState } from 'react';
import { useScrollProgress } from './useScrollProgress';
import { useTranslation } from '@/i18n/useTranslation';
import { BRAZIL_ASPECT, brainPoints, brazilPoints, clamp01, ease, glowSprite, nearestEdges, prefersReducedMotion, rng, type Pt } from './neural';

// "Por dentro do Dinn": seção presa à tela enquanto o visitante rola. Um único
// canvas conta o funcionamento em quatro atos:
//   1. Observa  — o Brasil aparece como pontos de luz (farmácias)
//   2. Conecta  — fibras ligam cada farmácia ao CD que a abastece
//   3. Entende  — os pontos se reorganizam num cérebro; surgem os sinais
//   4. Entrega  — pulsos saem do cérebro para os destinos (plataforma, IA…)
// O progresso da rolagem dirige tudo; não há vídeo nem imagem pesada.

type Stage = { name: string; title: string; desc: string; chips: string[] };

type Layout = {
  w: number;
  h: number;
  mobile: boolean;
  box: { x: number; y: number; size: number };
  outputs: Pt[];
  signals: Pt[];
};

// Larguras que o CSS reserva (home-story.css): coluna de texto e rótulos de
// saída. A geometria do canvas parte delas para nada ficar sob o texto nem
// encostar na borda da tela.
const LABEL_W = 124;
const EDGE = 32;

function computeLayout(w: number, h: number, count: number): Layout {
  const mobile = w < 1000;
  if (mobile) {
    // acima do bloco de texto (que ocupa a parte de baixo): cérebro menor e
    // rótulos logo abaixo dele, sem encostar nos botões 01–04
    const size = Math.min(w * 0.72, h * 0.3);
    const cx = w / 2;
    const cy = h * 0.3;
    const box = { x: cx - size / 2, y: cy - size / 2, size };
    const outputs: Pt[] = Array.from({ length: count }, (_, i) => ({
      x: w * (0.14 + (0.72 * i) / Math.max(1, count - 1)),
      // rótulos alternam em duas alturas: lado a lado não cabem em 375px
      y: cy + size / 2 + h * 0.03 + (i % 2) * 36,
    }));
    const signals: Pt[] = [
      { x: Math.max(70, box.x + size * 0.14), y: box.y + size * 0.04 },
      { x: Math.min(w - 70, box.x + size * 0.86), y: box.y + size * 0.1 },
      { x: Math.max(70, box.x + size * 0.1), y: box.y + size * 0.82 },
      { x: Math.min(w - 70, box.x + size * 0.9), y: box.y + size * 0.92 },
    ];
    return { w, h, mobile, box, outputs, signals };
  }

  const copyLeft = Math.min(80, Math.max(24, w * 0.05));
  const copyRight = copyLeft + Math.min(w * 0.4, 500);
  const availLeft = copyRight + 32;
  const xOut = w - EDGE - LABEL_W; // coluna dos rótulos de saída
  const brainRight = xOut - 84; // espaço para as fibras curvas
  const room = brainRight - availLeft;
  const size = Math.max(240, Math.min(h * 0.66, room));
  const cx = availLeft + room / 2;
  const cy = h * 0.54;
  const box = { x: cx - size / 2, y: cy - size / 2, size };
  const spread = Math.min(size * 0.9, h - 240);
  const outputs: Pt[] = Array.from({ length: count }, (_, i) => ({
    x: xOut,
    y: cy - spread / 2 + (spread * i) / Math.max(1, count - 1),
  }));
  const signals: Pt[] = [
    { x: Math.max(availLeft + 100, box.x + size * 0.16), y: box.y + size * 0.04 },
    { x: Math.min(xOut - 120, box.x + size * 0.84), y: box.y + size * 0.02 },
    { x: Math.max(availLeft + 100, box.x + size * 0.12), y: box.y + size * 0.86 },
    { x: Math.min(xOut - 120, box.x + size * 0.86), y: box.y + size * 0.96 },
  ];
  return { w, h, mobile, box, outputs, signals };
}

/** Pontos de rolagem (0–1 da seção) em que cada ato está completo. */
const STAGE_TARGETS = [0.16, 0.42, 0.68, 0.94];

let scrollAnim = 0;
/** Rola a janela devagar até `to`, com ease. Qualquer gesto do visitante interrompe.
 *  O `html { scroll-behavior: smooth }` do design system brigaria com rAF; por
 *  isso cada passo usa behavior "instant". */
function animateScrollTo(to: number, ms: number) {
  cancelAnimationFrame(scrollAnim);
  const from = window.scrollY;
  if (ms <= 0 || Math.abs(to - from) < 2) {
    window.scrollTo({ top: to, behavior: 'instant' as ScrollBehavior });
    return;
  }
  const t0 = performance.now();
  const stop = () => {
    cancelAnimationFrame(scrollAnim);
    cleanup();
  };
  const cleanup = () => {
    window.removeEventListener('wheel', stop);
    window.removeEventListener('touchstart', stop);
    window.removeEventListener('keydown', stop);
  };
  window.addEventListener('wheel', stop, { passive: true });
  window.addEventListener('touchstart', stop, { passive: true });
  window.addEventListener('keydown', stop);
  const step = (now: number) => {
    const k = Math.min(1, (now - t0) / ms);
    window.scrollTo({ top: from + (to - from) * ease.inOutCubic(k), behavior: 'instant' as ScrollBehavior });
    if (k < 1) scrollAnim = requestAnimationFrame(step);
    else cleanup();
  };
  scrollAnim = requestAnimationFrame(step);
}

function BrainCanvas({ progress, outputsCount, onLayout }: { progress: { current: number }; outputsCount: number; onLayout: (l: Layout) => void }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduced = prefersReducedMotion();
    const sprite = glowSprite('rgba(183,158,255,1)');
    const white = glowSprite('rgba(255,255,255,1)');
    const N = 320;
    const mapPts = brazilPoints(N, 31);
    const brainPts = brainPoints(N, 8);
    // ordena o cérebro pela posição horizontal para a migração ser suave
    // (pontos do oeste vão para o lado esquerdo do cérebro, e assim por diante)
    const byX = (a: Pt, b: Pt) => a.x - b.x;
    const mapOrder = mapPts.map((p, i) => ({ p, i })).sort((a, b) => byX(a.p, b.p));
    const brainSorted = [...brainPts].sort(byX);
    const target: Pt[] = new Array(N);
    mapOrder.forEach((m, k) => { target[m.i] = brainSorted[k] ?? brainSorted[brainSorted.length - 1]; });

    // CDs: alguns pontos viram centros de distribuição; cada farmácia liga ao CD mais próximo
    const cdIdx = [0, 1, 2, 3, 4, 5, 6, 7].map((k) => Math.floor((k * N) / 8));
    const cdSet = new Set(cdIdx);
    const toCd = mapPts.map((p, i) => {
      if (cdSet.has(i)) return -1;
      let best = cdIdx[0];
      let bd = Infinity;
      for (const c of cdIdx) {
        const d = (mapPts[c].x - p.x) ** 2 + (mapPts[c].y - p.y) ** 2;
        if (d < bd) { bd = d; best = c; }
      }
      return best;
    });
    const brainEdges = nearestEdges(target, 3, 0.11);
    const r = rng(2);
    const born = mapPts.map(() => r());
    const depth = mapPts.map(() => 0.4 + r() * 0.6);
    type Pulse = { kind: 'cd' | 'brain' | 'out'; a: number; b: number; t: number; v: number };
    const pulses: Pulse[] = [];

    let L = computeLayout(1, 1, outputsCount);
    let raf = 0;
    let running = false;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas!.getBoundingClientRect();
      canvas!.width = Math.round(rect.width * dpr);
      canvas!.height = Math.round(rect.height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      L = computeLayout(rect.width, rect.height, outputsCount);
      onLayout(L);
    }

    const toScreenMap = (p: Pt) => {
      // o Brasil é ~quadrado (BRAZIL_ASPECT≈1); centraliza no box
      const s = L.box.size;
      const wMap = s * Math.min(1, BRAZIL_ASPECT);
      const hMap = s / Math.max(1, BRAZIL_ASPECT);
      return { x: L.box.x + (s - wMap) / 2 + p.x * wMap, y: L.box.y + (s - hMap) / 2 + p.y * hMap };
    };
    const toScreenBrain = (p: Pt) => ({ x: L.box.x + p.x * L.box.size, y: L.box.y + p.y * L.box.size * 0.92 + L.box.size * 0.04 });

    function draw(now: number) {
      const p = progress.current;
      const s1 = ease.outCubic(clamp01(p / 0.2));
      const s2 = ease.inOutCubic(clamp01((p - 0.22) / 0.2));
      const s3 = ease.inOutCubic(clamp01((p - 0.47) / 0.2));
      const s4 = ease.outCubic(clamp01((p - 0.72) / 0.18));
      const { w, h } = L;
      ctx!.clearRect(0, 0, w, h);

      // posição atual de cada ponto (mapa → cérebro)
      const pos = mapPts.map((m, i) => {
        const a = toScreenMap(m);
        const b = toScreenBrain(target[i]);
        // cada ponto parte num momento um pouco diferente: a migração "escorre"
        const k = clamp01(s3 * 1.35 - born[i] * 0.35);
        const e = ease.inOutCubic(k);
        return { x: a.x + (b.x - a.x) * e, y: a.y + (b.y - a.y) * e };
      });

      // fibras farmácia → CD (ato 2), somem enquanto o cérebro se forma
      const cdAlpha = s2 * (1 - s3);
      if (cdAlpha > 0.01) {
        ctx!.lineWidth = 0.7;
        for (let i = 0; i < N; i++) {
          const c = toCd[i];
          if (c < 0) continue;
          const grow = clamp01(s2 * 1.6 - born[i] * 0.6);
          if (grow <= 0) continue;
          const a = pos[i];
          const b = pos[c];
          ctx!.strokeStyle = `rgba(183,158,255,${0.22 * cdAlpha})`;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(a.x + (b.x - a.x) * grow, a.y + (b.y - a.y) * grow);
          ctx!.stroke();
        }
      }

      // sinapses do cérebro (ato 3), com um halo roxo atrás
      if (s3 > 0.01) {
        const bc = { x: L.box.x + L.box.size * 0.5, y: L.box.y + L.box.size * 0.48 };
        const halo = ctx!.createRadialGradient(bc.x, bc.y, 0, bc.x, bc.y, L.box.size * 0.6);
        halo.addColorStop(0, `rgba(86,37,242,${0.32 * s3})`);
        halo.addColorStop(1, 'rgba(86,37,242,0)');
        ctx!.fillStyle = halo;
        ctx!.fillRect(L.box.x - L.box.size * 0.2, L.box.y - L.box.size * 0.2, L.box.size * 1.4, L.box.size * 1.4);
        ctx!.lineWidth = 0.7;
        ctx!.strokeStyle = `rgba(183,158,255,${0.2 * s3})`;
        ctx!.beginPath();
        for (const [a, b] of brainEdges) {
          ctx!.moveTo(pos[a].x, pos[a].y);
          ctx!.lineTo(pos[b].x, pos[b].y);
        }
        ctx!.stroke();
      }

      // fibras de saída (ato 4)
      const brainCenter = { x: L.box.x + L.box.size / 2, y: L.box.y + L.box.size * 0.45 };
      const outCtrl = (o: Pt) => (L.mobile ? { x: o.x, y: brainCenter.y + (o.y - brainCenter.y) * 0.4 } : { x: brainCenter.x + (o.x - brainCenter.x) * 0.55, y: o.y });
      if (s4 > 0.01) {
        ctx!.lineWidth = 1.2;
        L.outputs.forEach((o, i) => {
          const grow = clamp01(s4 * 1.4 - i * 0.08);
          const c = outCtrl(o);
          ctx!.strokeStyle = `rgba(183,158,255,${0.45 * grow})`;
          ctx!.beginPath();
          ctx!.moveTo(brainCenter.x, brainCenter.y);
          // desenha a curva parcialmente
          const steps = 24;
          for (let k = 1; k <= Math.round(steps * grow); k++) {
            const t = k / steps;
            const u = 1 - t;
            ctx!.lineTo(u * u * brainCenter.x + 2 * u * t * c.x + t * t * o.x, u * u * brainCenter.y + 2 * u * t * c.y + t * t * o.y);
          }
          ctx!.stroke();
        });
      }

      // pontos
      ctx!.globalCompositeOperation = 'lighter';
      for (let i = 0; i < N; i++) {
        const life = clamp01(s1 * 1.5 - born[i] * 0.5);
        if (life <= 0) continue;
        const { x, y } = pos[i];
        const isCd = cdSet.has(i) && s3 < 0.6;
        const tw = reduced ? 1 : 0.6 + 0.4 * Math.sin(now / 800 + i);
        const g = life * depth[i] * tw * (0.6 + s3 * 0.5);
        const size = (isCd ? 22 : 10) * (0.7 + depth[i] * 0.5);
        ctx!.globalAlpha = Math.min(1, g);
        ctx!.drawImage(isCd ? white : sprite, x - size / 2, y - size / 2, size, size);
        ctx!.globalAlpha = life;
        ctx!.fillStyle = isCd ? '#fff' : '#E9E1FF';
        if (isCd && s2 > 0.05) {
          const q = 3.5 * (0.5 + s2 * 0.5) * (1 - s3);
          ctx!.fillRect(x - q, y - q, q * 2, q * 2);
        } else {
          ctx!.beginPath();
          ctx!.arc(x, y, 0.9 + depth[i] * 0.7, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      // pulsos
      if (!reduced) {
        if (Math.random() < 0.35 + s4 * 0.4) {
          if (s3 > 0.6 && s4 < 0.2) {
            const e = brainEdges[Math.floor(Math.random() * brainEdges.length)];
            if (e) pulses.push({ kind: 'brain', a: e[0], b: e[1], t: 0, v: 0.02 + Math.random() * 0.02 });
          } else if (s2 > 0.4 && s3 < 0.3) {
            const i = Math.floor(Math.random() * N);
            if (toCd[i] >= 0) pulses.push({ kind: 'cd', a: i, b: toCd[i], t: 0, v: 0.015 + Math.random() * 0.02 });
          }
          if (s4 > 0.3) pulses.push({ kind: 'out', a: Math.floor(Math.random() * L.outputs.length), b: 0, t: 0, v: 0.012 + Math.random() * 0.01 });
        }
        if (pulses.length > 140) pulses.splice(0, pulses.length - 140);
        for (let k = pulses.length - 1; k >= 0; k--) {
          const pl = pulses[k];
          pl.t += pl.v;
          if (pl.t >= 1) { pulses.splice(k, 1); continue; }
          let x: number;
          let y: number;
          if (pl.kind === 'out') {
            const o = L.outputs[pl.a];
            if (!o) { pulses.splice(k, 1); continue; }
            const c = outCtrl(o);
            const t = pl.t;
            const u = 1 - t;
            x = u * u * brainCenter.x + 2 * u * t * c.x + t * t * o.x;
            y = u * u * brainCenter.y + 2 * u * t * c.y + t * t * o.y;
          } else {
            const a = pos[pl.a];
            const b = pos[pl.b];
            x = a.x + (b.x - a.x) * pl.t;
            y = a.y + (b.y - a.y) * pl.t;
          }
          const sz = pl.kind === 'out' ? 18 : 12;
          ctx!.globalAlpha = Math.sin(pl.t * Math.PI);
          ctx!.drawImage(white, x - sz / 2, y - sz / 2, sz, sz);
        }
      }
      ctx!.globalAlpha = 1;
      ctx!.globalCompositeOperation = 'source-over';
    }

    const loop = (now: number) => {
      if (!running) return;
      draw(now);
      raf = requestAnimationFrame(loop);
    };
    // com menos movimento o laço continua (a rolagem ainda dirige o desenho),
    // mas sem pulsos nem cintilação
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !running) { running = true; raf = requestAnimationFrame(loop); }
      if (!e.isIntersecting) { running = false; cancelAnimationFrame(raf); }
    });
    resize();
    io.observe(canvas);
    window.addEventListener('resize', resize);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, [progress, outputsCount, onLayout]);

  return <canvas ref={ref} className="inside-canvas" aria-hidden="true" />;
}

export function InsideSection() {
  const { t } = useTranslation();
  const stages = (t('inside.stages') as Stage[]) ?? [];
  const outputs = (t('inside.outputs') as string[]) ?? [];
  const signals = (t('inside.signals') as string[]) ?? [];
  const ref = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0);
  const [p, setP] = useState(0);
  const [layout, setLayout] = useState<Layout | null>(null);
  // o canvas lê o progresso direto da ref; o React só re-renderiza em passos
  // de 1% (rótulos e texto do ato)
  const progress = useScrollProgress(ref, (v) => {
    setStage(Math.min(stages.length - 1, Math.max(0, Math.floor(v * stages.length * 0.999))));
    setP(Math.round(v * 100) / 100);
  });

  const s3 = clamp01((p - 0.5) / 0.15);
  const s4 = clamp01((p - 0.76) / 0.12);

  // Clicar em 01–04 faz a mesma animação da rolagem, só que sozinha e devagar.
  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const span = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const to = top + span * (STAGE_TARGETS[i] ?? 0);
    const dist = Math.abs(to - window.scrollY);
    const ms = prefersReducedMotion() ? 0 : Math.min(2800, Math.max(1200, 1100 + (dist / window.innerHeight) * 550));
    animateScrollTo(to, ms);
  };

  return (
    <section id="por-dentro" ref={ref} className="inside" style={{ height: `${Math.max(1, stages.length) * 100 + 60}vh` }}>
      <div className="inside-sticky">
        <BrainCanvas progress={progress} outputsCount={outputs.length} onLayout={setLayout} />

        {/* sinais com nome, ao redor do cérebro */}
        {layout && signals.map((s, i) => {
          const pt = layout.signals[i];
          if (!pt) return null;
          const on = s3 > 0.6 && s4 < 0.1;
          return (
            <span key={s} className="inside-signal" style={{ left: pt.x, top: pt.y, opacity: on ? 1 : 0, transform: `translate(-50%, -50%) scale(${on ? 1 : 0.9})`, transitionDelay: `${i * 0.12}s` }}>
              <i />{s}
            </span>
          );
        })}

        {/* destinos da entrega */}
        {layout && outputs.map((o, i) => {
          const pt = layout.outputs[i];
          const on = s4 > 0.25 + i * 0.1;
          return (
            <span key={o} className={`inside-output ${layout.mobile ? 'is-mobile' : ''}`} style={{ left: pt.x, top: pt.y, opacity: on ? 1 : 0 }}>
              {o}
            </span>
          );
        })}

        <div className="inside-copy">
          <h2 className="inside-eyebrow">{t('inside.eyebrow')}</h2>
          <div className="inside-rail" role="group" aria-label={t('inside.eyebrow') as string}>
            {stages.map((s, i) => (
              <button
                key={s.name}
                type="button"
                className={i === stage ? 'is-on' : i < stage ? 'is-past' : ''}
                aria-current={i === stage ? 'step' : undefined}
                onClick={() => goTo(i)}
              >
                <span>{String(i + 1).padStart(2, '0')}</span>{s.name}
              </button>
            ))}
          </div>
          {/* todos os atos ficam empilhados; o CSS troca o visível. Mais robusto
              que animar entrada/saída quando a rolagem pula vários atos de vez.
              Leitores de tela e buscadores leem os quatro, na ordem. */}
          <div className="inside-stages">
            {stages.map((s, i) => (
              <div key={s.name} className={`inside-stage ${i === stage ? 'is-on' : i < stage ? 'is-past' : ''}`}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="inside-chips">
                  {s.chips.map((c, k) => <span key={c} style={{ transitionDelay: i === stage ? `${0.15 + k * 0.06}s` : '0s' }}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
