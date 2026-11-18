// Gera os mapas de fundo das telas do Dinn no site (RealKit.tsx).
// Imitam o mapa cinza claro do app: quadras cinza, ruas brancas com borda,
// avenidas, rio e parques. Desenho próprio, sem dados nem imagens de terceiros.
// Uso: node scripts/gen-app-maps.mjs  (grava em public/app-screens/)
import { mkdirSync, writeFileSync } from 'node:fs';

const OUT = 'public/app-screens';
mkdirSync(OUT, { recursive: true });

// Gerador pseudoaleatório com semente: o mapa sai igual a cada execução.
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const r1 = (n) => Math.round(n);
const pathOf = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join('');
const smooth = (pts) => {
  // Catmull-Rom para Bézier: linha curva e suave.
  let d = `M${r1(pts[0][0])} ${r1(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${r1(c1[0])} ${r1(c1[1])} ${r1(c2[0])} ${r1(c2[1])} ${r1(p2[0])} ${r1(p2[1])}`;
  }
  return d;
};

// Grade de ruas deformada, girada e recortada por um polígono (um bairro).
function district({ rand, cx, cy, angle, step, size, warp, drop }) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const n = Math.ceil(size / step);
  const pt = (u, v) => {
    const du = u + warp * Math.sin(v / 210 + cx) + warp * 0.5 * Math.sin(v / 90);
    const dv = v + warp * Math.cos(u / 230 + cy) + warp * 0.4 * Math.cos(u / 70);
    return [cx + du * cos - dv * sin, cy + du * sin + dv * cos];
  };
  const offs = [];
  let o = -size / 2;
  while (o < size / 2) {
    offs.push(o);
    o += step * (0.75 + rand() * 0.6);
  }
  const segs = [];
  for (const dir of [0, 1]) {
    for (const off of offs) {
      let cur = [];
      for (let k = -n / 2; k <= n / 2; k++) {
        const t = k * step;
        const p = dir ? pt(off, t) : pt(t, off);
        if (rand() < drop) {
          if (cur.length > 1) segs.push(cur);
          cur = [p];
        } else cur.push(p);
      }
      if (cur.length > 1) segs.push(cur);
    }
  }
  return segs.map(pathOf).join('');
}

const blob = (rand, cx, cy, r, n = 9) => {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const rr = r * (0.7 + rand() * 0.5);
    pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
  }
  pts.push(pts[0], pts[1]);
  return smooth(pts) + 'Z';
};

// ── Cidade (Localizador de Produtos) ──────────────────────────────────────
function city() {
  const W = 1000, H = 900;
  const rand = rng(44);
  const districts = [
    { cx: 260, cy: 230, angle: 0.32, step: 30, poly: '0,0 560,0 470,420 0,520' },
    { cx: 700, cy: 220, angle: -0.18, step: 26, poly: '560,0 1000,0 1000,470 470,420' },
    { cx: 280, cy: 700, angle: 0.62, step: 33, poly: '0,520 470,420 560,900 0,900' },
    { cx: 760, cy: 690, angle: 0.05, step: 28, poly: '470,420 1000,470 1000,900 560,900' },
  ];
  let defs = '';
  let streets = '';
  districts.forEach((d, i) => {
    defs += `<clipPath id="c${i}"><polygon points="${d.poly}"/></clipPath>`;
    const p = district({ rand, cx: d.cx, cy: d.cy, angle: d.angle, step: d.step, size: 900, warp: 16, drop: 0.07 });
    defs += `<path id="p${i}" d="${p}"/>`; streets += `<g clip-path="url(#c${i})"><use href="#p${i}" class="k"/><use href="#p${i}" class="s"/></g>`;
  });
  const parks = [blob(rand, 430, 640, 46), blob(rand, 820, 140, 34), blob(rand, 130, 120, 30), blob(rand, 660, 760, 28)]
    .map((d) => `<path d="${d}" fill="#e4ecdd"/>`).join('');
  const river = smooth([[-20, 300], [120, 330], [230, 390], [300, 500], [330, 640], [420, 760], [560, 830], [700, 860], [1020, 880]]);
  const rail = smooth([[1020, 250], [860, 300], [720, 380], [640, 470], [600, 600], [640, 760], [700, 920]]);
  const ave = [
    smooth([[-20, 150], [200, 170], [420, 210], [600, 240], [800, 230], [1020, 210]]),
    smooth([[380, -20], [400, 200], [430, 420], [470, 620], [500, 920]]),
    smooth([[-20, 560], [220, 540], [420, 500], [640, 520], [860, 560], [1020, 600]]),
    smooth([[880, -20], [840, 220], [780, 420], [760, 640], [800, 920]]),
  ];
  const labels = [
    ['Perdizes', 250, 330], ['Santa Cecília', 470, 270], ['República', 560, 380], ['Bela Vista', 590, 470],
    ['Pinheiros', 200, 470], ['Vila Mariana', 610, 700], ['Itaim Bibi', 300, 690], ['Moema', 420, 860],
    ['Mooca', 860, 420], ['Ipiranga', 820, 780],
  ].map(([t, x, y]) => `<text x="${x}" y="${y}">${t}</text>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
<defs>${defs}<style>.k{fill:none;stroke:#dcdcdc;stroke-width:5;stroke-linejoin:round;stroke-linecap:round}.s{fill:none;stroke:#fff;stroke-width:3;stroke-linejoin:round;stroke-linecap:round}.ak{fill:none;stroke:#cfcfcf;stroke-width:11;stroke-linecap:round}.as{fill:none;stroke:#fff;stroke-width:8;stroke-linecap:round}text{font:500 17px Inter,Arial,sans-serif;fill:#5f5f63;paint-order:stroke;stroke:#f4f4f4;stroke-width:4px;letter-spacing:.02em}</style></defs>
<rect width="${W}" height="${H}" fill="#f1f1f0"/>${parks}
${streets}
<path d="${river}" fill="none" stroke="#d4d6de" stroke-width="18" stroke-linecap="round"/>
${ave.map((d) => `<path d="${d}" class="ak"/><path d="${d}" class="as"/>`).join('')}
<path d="${rail}" fill="none" stroke="#c4c4c8" stroke-width="2.5" stroke-dasharray="9 6"/>
${labels}</svg>`;
}

// ── Região (Distribuição): estradas, manchas urbanas e um lago ─────────────
function region() {
  const W = 1000, H = 760;
  const rand = rng(7);
  const towns = [
    ['Formosa', 760, 130, 34], ['Planaltina', 610, 175, 40], ['Águas Lindas de Goiás', 330, 220, 30], ['Luziânia', 540, 560, 36],
    ['Anápolis', 90, 610, 44], ['Unaí', 930, 620, 26], ['Cristalina', 660, 740, 24], ['Goianápolis', 50, 720, 18],
    ['Abadiânia', 230, 480, 16], ['Pirenópolis', 80, 300, 20], ['Gama', 440, 430, 26], ['Brasília', 520, 300, 70],
  ];
  let urb = '';
  towns.forEach(([, x, y, r], i) => {
    urb += `<clipPath id="t${i}"><path d="${blob(rand, x, y, r)}"/></clipPath>`;
  });
  let urbG = '';
  towns.forEach(([, x, y, r], i) => {
    const p = district({ rand, cx: x, cy: y, angle: rand() * 0.8, step: Math.max(7, r / 5), size: r * 3, warp: 3, drop: 0.08 });
    urbG += `<g clip-path="url(#t${i})"><rect x="${x - r * 2}" y="${y - r * 2}" width="${r * 4}" height="${r * 4}" fill="#e6e6e6"/><path d="${p}" fill="none" stroke="#fafafa" stroke-width="1.6"/></g>`;
  });
  const roads = [
    [[-20, 640], [120, 600], [260, 520], [400, 420], [520, 310], [640, 190], [800, 120], [1020, 80]],
    [[300, -20], [380, 140], [470, 260], [520, 310], [560, 450], [560, 600], [640, 780]],
    [[520, 310], [700, 380], [860, 520], [1020, 640]],
    [[-20, 320], [140, 330], [330, 240], [520, 310]],
    [[610, 175], [640, 60], [700, -20]],
  ].map(smooth);
  const lake = smooth([[420, 330], [470, 300], [520, 330], [560, 360], [540, 390], [500, 380], [470, 410], [430, 390], [420, 330]]);
  const lake2 = smooth([[250, 600], [300, 560], [350, 600], [330, 650], [280, 680], [240, 650], [250, 600]]);
  const df = 'M300 150 L760 150 L760 470 L300 470 Z';
  const labels = towns.map(([t, x, y, r]) => `<text x="${x}" y="${Number(y) + Number(r) + 20}" text-anchor="middle">${t}</text>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
<defs>${urb}<style>.k{fill:none;stroke:#d2d2d2;stroke-width:6;stroke-linecap:round}.s{fill:none;stroke:#fff;stroke-width:3.5;stroke-linecap:round}text{font:500 16px Inter,Arial,sans-serif;fill:#5f5f63;paint-order:stroke;stroke:#f3f3f3;stroke-width:4px;letter-spacing:.02em}</style></defs>
<rect width="${W}" height="${H}" fill="#f3f3f2"/>
<path d="${df}" fill="none" stroke="#c9c9cc" stroke-width="2"/>
<path d="${lake}" fill="#d4d6df"/><path d="${lake2}" fill="#d4d6df"/>
${urbG}
${roads.map((d) => `<path d="${d}" class="k"/><path d="${d}" class="s"/>`).join('')}
${labels}</svg>`;
}

writeFileSync(`${OUT}/mapa-cidade.svg`, city());
writeFileSync(`${OUT}/mapa-regiao.svg`, region());
console.log('ok');
