// Geometria e utilidades compartilhadas pelos canvases "neurais" da home.
// Tudo aqui é desenho: nenhum ponto corresponde a uma farmácia real.

export type Pt = { x: number; y: number };

// Contorno simplificado do Brasil (lon, lat). Só serve para espalhar pontos
// com a silhueta do país; não tem precisão cartográfica.
const BRAZIL: [number, number][] = [
  [-51.6, 4.2], [-50.0, 1.8], [-48.5, -1.0], [-44.5, -2.4], [-41.5, -2.9],
  [-38.5, -3.7], [-35.2, -5.4], [-34.8, -7.1], [-35.1, -9.0], [-37.0, -11.0],
  [-38.5, -13.0], [-39.0, -15.5], [-39.3, -17.8], [-40.3, -20.3], [-41.0, -22.0],
  [-43.2, -23.0], [-45.0, -23.7], [-46.5, -24.2], [-48.0, -25.3], [-48.6, -27.0],
  [-48.8, -28.6], [-50.0, -30.0], [-51.2, -31.5], [-52.5, -33.0], [-53.4, -33.7],
  [-53.8, -32.0], [-55.6, -30.9], [-57.6, -30.2], [-55.8, -27.6], [-54.6, -25.6],
  [-54.2, -24.0], [-55.8, -22.3], [-57.8, -22.1], [-58.2, -20.0], [-57.5, -18.0],
  [-58.4, -16.3], [-60.2, -15.1], [-60.5, -13.7], [-62.0, -13.0], [-64.4, -12.4],
  [-65.4, -10.9], [-66.6, -9.9], [-69.5, -11.0], [-70.6, -9.5], [-72.9, -9.4],
  [-73.9, -7.4], [-73.0, -5.0], [-70.0, -4.2], [-69.9, -1.0], [-69.5, 1.0],
  [-67.0, 2.0], [-64.0, 2.0], [-63.4, 3.9], [-62.0, 4.0], [-60.0, 5.2],
  [-59.5, 3.0], [-58.0, 1.5], [-56.0, 2.0], [-54.0, 2.2], [-52.5, 2.5],
];

// Capitais e polos de consumo: concentram pontos, como acontece com as farmácias.
const HUBS: [number, number, number][] = [
  [-46.6, -23.5, 5], [-43.2, -22.9, 3], [-43.9, -19.9, 2.4], [-47.9, -15.8, 1.6],
  [-38.5, -12.97, 1.8], [-34.9, -8.05, 1.8], [-38.5, -3.7, 1.6], [-51.2, -30.0, 2],
  [-49.3, -25.4, 2], [-49.3, -16.7, 1.4], [-60.0, -3.1, 1], [-48.5, -1.45, 1.1],
  [-47.06, -22.9, 1.6], [-40.3, -20.3, 1.1], [-48.5, -27.6, 1.1],
];

const LON = [-74, -34.5];
const LAT = [-34, 5.4];

function inPoly(x: number, y: number, poly: [number, number][]) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

/** Gerador pseudoaleatório com semente: o desenho sai igual a cada visita. */
export function rng(seed = 7) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** Pontos dentro do Brasil, normalizados para 0..1 (x→leste, y→sul). */
export function brazilPoints(n: number, seed = 11): Pt[] {
  const r = rng(seed);
  const out: Pt[] = [];
  const totalW = HUBS.reduce((a, h) => a + h[2], 0);
  let guard = 0;
  while (out.length < n && guard++ < n * 40) {
    let lon: number;
    let lat: number;
    if (r() < 0.55) {
      // perto de um polo
      let pick = r() * totalW;
      let hub = HUBS[0];
      for (const h of HUBS) {
        pick -= h[2];
        if (pick <= 0) { hub = h; break; }
      }
      const a = r() * Math.PI * 2;
      const d = Math.pow(r(), 1.6) * 3.2;
      lon = hub[0] + Math.cos(a) * d;
      lat = hub[1] + Math.sin(a) * d * 0.85;
    } else {
      lon = LON[0] + r() * (LON[1] - LON[0]);
      lat = LAT[0] + r() * (LAT[1] - LAT[0]);
    }
    if (!inPoly(lon, lat, BRAZIL)) continue;
    out.push({ x: (lon - LON[0]) / (LON[1] - LON[0]), y: 1 - (lat - LAT[0]) / (LAT[1] - LAT[0]) });
  }
  return out;
}

/** Proporção largura/altura do retângulo que contém o Brasil acima. */
export const BRAZIL_ASPECT = (LON[1] - LON[0]) / (LAT[1] - LAT[0]);

/** Pontos dentro de uma silhueta de cérebro vista de lado (lobo frontal à
 *  esquerda, temporal embaixo, cerebelo e tronco atrás), normalizados 0..1.
 *  A fissura lateral fica vazia: é ela que faz o desenho ser lido como cérebro. */
export function brainPoints(n: number, seed = 5): Pt[] {
  const r = rng(seed);
  const inE = (x: number, y: number, cx: number, cy: number, rx: number, ry: number) => ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 < 1;
  const inside = (x: number, y: number) => {
    const cerebrum = inE(x, y, 0.5, 0.4, 0.4, 0.3) || inE(x, y, 0.26, 0.47, 0.19, 0.22) || inE(x, y, 0.72, 0.42, 0.2, 0.24);
    const temporal = inE(x, y, 0.47, 0.6, 0.25, 0.12);
    const cerebellum = inE(x, y, 0.74, 0.69, 0.14, 0.09);
    const stem = y > 0.62 && y < 0.92 && Math.abs(x - (0.58 + (y - 0.62) * 0.12)) < 0.035;
    // fissura lateral: faixa estreita em diagonal
    const fy = 0.55 - (x - 0.3) * 0.32;
    const fissure = x > 0.3 && x < 0.66 && Math.abs(y - fy) < 0.018;
    // separação entre cérebro e cerebelo
    const notch = inE(x, y, 0.66, 0.66, 0.09, 0.045);
    return (cerebrum || temporal || cerebellum || stem) && !fissure && !notch;
  };
  // Parte dos pontos fica na borda (contorno e fissura): é o que desenha a
  // silhueta. O resto preenche o interior.
  const edge: Pt[] = [];
  const fill: Pt[] = [];
  const d = 0.022;
  let guard = 0;
  while ((edge.length < n * 0.45 || fill.length < n * 0.55) && guard++ < n * 400) {
    const x = r();
    const y = r();
    if (!inside(x, y)) continue;
    const onEdge = !inside(x + d, y) || !inside(x - d, y) || !inside(x, y + d) || !inside(x, y - d);
    if (onEdge) { if (edge.length < n * 0.45) edge.push({ x, y }); }
    else if (fill.length < n * 0.55) fill.push({ x, y });
  }
  return [...edge, ...fill].slice(0, n);
}

/** Para cada ponto, os k vizinhos mais próximos (pares únicos). */
export function nearestEdges(pts: Pt[], k: number, maxDist = Infinity): [number, number][] {
  const seen = new Set<string>();
  const edges: [number, number][] = [];
  for (let i = 0; i < pts.length; i++) {
    const d: [number, number][] = [];
    for (let j = 0; j < pts.length; j++) {
      if (i === j) continue;
      const dx = pts[i].x - pts[j].x;
      const dy = pts[i].y - pts[j].y;
      const dist = dx * dx + dy * dy;
      if (dist <= maxDist * maxDist) d.push([j, dist]);
    }
    d.sort((a, b) => a[1] - b[1]);
    for (let m = 0; m < Math.min(k, d.length); m++) {
      const j = d[m][0];
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push([i, j]);
    }
  }
  return edges;
}

/** Sprite de brilho pré-renderizado: desenhar uma imagem é bem mais barato
 *  que usar shadowBlur a cada quadro. */
export function glowSprite(color: string, size = 64) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d')!;
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grd.addColorStop(0, color);
  grd.addColorStop(0.25, color.replace(/[\d.]+\)$/, '0.35)'));
  grd.addColorStop(1, color.replace(/[\d.]+\)$/, '0)'));
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  return c;
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const ease = {
  outCubic: (t: number) => 1 - Math.pow(1 - t, 3),
  inOutCubic: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
};

export const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
