import { useEffect, useRef } from 'react';
import { glowSprite, nearestEdges, prefersReducedMotion, rng, type Pt } from './neural';

// Campo neural do topo da página: pontos de luz que se ligam aos vizinhos
// como sinapses. É o "cérebro" sendo formado. A intensidade sobe quando o
// visitante conversa com o Dinn (prop energy) e o cursor acende a vizinhança.
//
// Desempenho: um único canvas 2D, brilho por sprite pré-renderizado, pausa
// quando sai da tela ou a aba fica oculta, e um quadro estático para quem
// pede menos movimento.

type Props = {
  /** 0 = repouso, 1 = pensando: mais pulsos e mais brilho. */
  energy?: number;
  className?: string;
  density?: number;
};

type Node = Pt & { r: number; phase: number; born: number; depth: number };
type Pulse = { e: number; t: number; speed: number; dir: 1 | -1 };

export function NeuralField({ energy = 0, className, density = 1 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const energyRef = useRef(energy);
  energyRef.current = energy;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = prefersReducedMotion();
    const sprite = glowSprite('rgba(183,158,255,1)');
    const hot = glowSprite('rgba(255,255,255,1)');
    const rand = rng(23);

    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let edges: [number, number][] = [];
    let edgeBorn: number[] = [];
    const pulses: Pulse[] = [];
    const mouse = { x: -9999, y: -9999, active: false };
    let raf = 0;
    let running = false;
    let start = performance.now();
    let lastSpawn = 0;

    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Mais pontos em telas grandes, sem passar de um teto razoável.
      const count = Math.round(Math.min(150, Math.max(55, (w * h) / 11000)) * density);
      nodes = [];
      for (let i = 0; i < count; i++) {
        // concentra os pontos numa elipse central larga: o "núcleo"
        const a = rand() * Math.PI * 2;
        const d = Math.pow(rand(), 0.75);
        const x = 0.5 + Math.cos(a) * d * 0.62;
        const y = 0.52 + Math.sin(a) * d * 0.58;
        const depth = 0.35 + rand() * 0.65;
        nodes.push({
          x: x * w,
          y: y * h,
          r: 0.7 + depth * 1.5,
          phase: rand() * Math.PI * 2,
          born: 200 + Math.hypot(x - 0.5, y - 0.52) * 2600 + rand() * 500,
          depth,
        });
      }
      const norm = nodes.map((n) => ({ x: n.x / w, y: n.y / h }));
      edges = nearestEdges(norm, 3, 0.2);
      edgeBorn = edges.map(([a, b]) => Math.max(nodes[a].born, nodes[b].born) + 150 + rand() * 600);
      start = performance.now();
    }

    function spawn(now: number) {
      const e = energyRef.current;
      const interval = 520 - e * 440;
      if (now - lastSpawn < interval || edges.length === 0) return;
      lastSpawn = now;
      const n = 1 + Math.round(e * 3);
      for (let i = 0; i < n; i++) {
        pulses.push({ e: Math.floor(rand() * edges.length), t: 0, speed: 0.6 + rand() * 0.9 + e, dir: rand() > 0.5 ? 1 : -1 });
      }
      if (pulses.length > 90) pulses.splice(0, pulses.length - 90);
    }

    function curvePoint(ax: number, ay: number, bx: number, by: number, t: number) {
      // curva suave: o ponto de controle sai da reta, como uma fibra
      const mx = (ax + bx) / 2 + (by - ay) * 0.12;
      const my = (ay + by) / 2 - (bx - ax) * 0.12;
      const u = 1 - t;
      return { x: u * u * ax + 2 * u * t * mx + t * t * bx, y: u * u * ay + 2 * u * t * my + t * t * by, mx, my };
    }

    function frame(now: number) {
      const t = now - start;
      const e = energyRef.current;
      ctx!.clearRect(0, 0, w, h);

      // fibras
      ctx!.lineWidth = 0.7;
      for (let i = 0; i < edges.length; i++) {
        const grow = Math.min(1, Math.max(0, (t - edgeBorn[i]) / 900));
        if (grow <= 0) continue;
        const a = nodes[edges[i][0]];
        const b = nodes[edges[i][1]];
        const end = curvePoint(a.x, a.y, b.x, b.y, grow);
        let alpha = (0.07 + 0.1 * Math.min(a.depth, b.depth)) * (1 + e * 0.8);
        if (mouse.active) {
          const dm = Math.hypot((a.x + b.x) / 2 - mouse.x, (a.y + b.y) / 2 - mouse.y);
          alpha += Math.max(0, 1 - dm / 180) * 0.35;
        }
        ctx!.strokeStyle = `rgba(183,158,255,${Math.min(alpha, 0.6)})`;
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        if (grow < 1) {
          ctx!.lineTo(end.x, end.y);
        } else {
          ctx!.quadraticCurveTo(end.mx, end.my, b.x, b.y);
        }
        ctx!.stroke();
      }

      // ligação do cursor aos neurônios próximos
      if (mouse.active) {
        for (const n of nodes) {
          const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (d < 140) {
            ctx!.strokeStyle = `rgba(183,158,255,${(1 - d / 140) * 0.45})`;
            ctx!.beginPath();
            ctx!.moveTo(mouse.x, mouse.y);
            ctx!.lineTo(n.x, n.y);
            ctx!.stroke();
          }
        }
      }

      // neurônios
      ctx!.globalCompositeOperation = 'lighter';
      for (const n of nodes) {
        const life = Math.min(1, Math.max(0, (t - n.born) / 700));
        if (life <= 0) continue;
        const twinkle = 0.55 + 0.45 * Math.sin(now / 900 + n.phase);
        let glow = (0.25 + n.depth * 0.5) * twinkle * life * (1 + e * 0.6);
        if (mouse.active) glow += Math.max(0, 1 - Math.hypot(n.x - mouse.x, n.y - mouse.y) / 160) * 0.8;
        const s = n.r * 9 * (0.8 + glow * 0.5);
        ctx!.globalAlpha = Math.min(1, glow);
        ctx!.drawImage(sprite, n.x - s / 2, n.y - s / 2, s, s);
        ctx!.globalAlpha = Math.min(1, life * (0.6 + n.depth * 0.4));
        ctx!.fillStyle = '#E9E1FF';
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r * 0.7, 0, Math.PI * 2);
        ctx!.fill();
      }

      // pulsos viajando pelas fibras
      if (!reduced) spawn(now);
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += (p.speed * 16) / 1000;
        if (p.t >= 1) { pulses.splice(i, 1); continue; }
        const [ia, ib] = edges[p.e];
        const a = p.dir === 1 ? nodes[ia] : nodes[ib];
        const b = p.dir === 1 ? nodes[ib] : nodes[ia];
        if (t < Math.max(a.born, b.born) + 900) continue;
        const pt = curvePoint(a.x, a.y, b.x, b.y, p.t);
        const fade = Math.sin(p.t * Math.PI);
        const s = 14 + e * 10;
        ctx!.globalAlpha = fade * (0.7 + e * 0.3);
        ctx!.drawImage(hot, pt.x - s / 2, pt.y - s / 2, s, s);
      }
      ctx!.globalAlpha = 1;
      ctx!.globalCompositeOperation = 'source-over';
    }

    function loop(now: number) {
      if (!running) return;
      frame(now);
      raf = requestAnimationFrame(loop);
    }
    function play() {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    build();
    if (reduced) {
      start = performance.now() - 10000;
      frame(performance.now());
    }

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? play() : stop()), { threshold: 0 });
    io.observe(canvas);

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        const prev = start;
        build();
        start = prev - 10000; // não refaz a animação de nascimento a cada redimensionamento
        if (reduced) frame(performance.now());
      }, 150);
    };
    const onMove = (ev: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ev.clientX - rect.left;
      mouse.y = ev.clientY - rect.top;
      mouse.active = mouse.y >= 0 && mouse.y <= rect.height;
    };
    const onLeave = () => { mouse.active = false; };
    const onVis = () => (document.hidden ? stop() : play());

    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVis);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [density]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
