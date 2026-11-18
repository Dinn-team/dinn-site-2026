// Monta os dados de /laboratorios a partir de fontes públicas. Uso:
//   node scripts/build-labs-data.mjs <wikipedia.json> <anvisa.csv>
// - wikipedia.json: página https://en.wikipedia.org/wiki/List_of_largest_biomedical_companies_by_revenue
//   (resposta do firecrawl_scrape, com a chave "markdown"). Dá a receita de 2016 a 2025.
// - anvisa.csv: https://dados.anvisa.gov.br/dados/DADOS_ABERTOS_MEDICAMENTOS.csv (latin1).
//   Dá os laboratórios com medicamento ativo no Brasil, por registro (agrupados pela raiz do CNPJ).
// Saídas: src/data/laboratorios.json (global, com receita e série) e src/data/labs-brasil.json.
import { readFileSync, writeFileSync } from 'node:fs';

const [wikiPath, anvisaPath] = process.argv.slice(2);
const labs = JSON.parse(readFileSync('src/data/laboratorios.json', 'utf8'));
const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

// ── Receita por ano (Wikipedia) ───────────────────────────────────────────
const md = JSON.parse(readFileSync(wikiPath, 'utf8')).markdown;
const strip = (t) => t.replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[\\[\d+\\]\]\([^)]*\)/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').trim();
const wiki = new Map();
for (const l of md.split('\n').filter((x) => /^\| \d+ \|/.test(x))) {
  const c = l.split('|').map((x) => strip(x.trim()));
  const nums = c.slice(6, 16).map((v) => parseFloat(v)); // 2025 ... 2016
  wiki.set(norm(c[3].replace(/ \(.*$/, '').replace(/ "Novo.*$/, '')), nums);
}
const ALIAS = { 'eli lilly': 'eli lilly co', 'msd merck co': 'merck co', 'johnson johnson janssen': 'johnson johnson', abbott: 'abbott laboratories', gsk: 'glaxosmithkline', takeda: 'takeda pharmaceutical', teva: 'teva pharmaceuticals', 'novo nordisk': 'novo', astellas: 'astellas pharma', 'daiichi sankyo': 'daiichi sankyo', 'bristol myers squibb': 'bristol myers squibb', 'gilead sciences': 'gilead sciences' };
// Variação 2025 contra 2024 (ChemAnalyst), para quem não está na lista da Wikipedia.
const CHG = { 'boehringer-ingelheim': 0.036, takeda: 0.075, 'bausch-health': 0.067, biogen: 0.022, ucb: 0.258, grifols: 0.043, servier: 0.162, organon: -0.029, 'sun-pharma': 0.094, eisai: 0.046, galderma: 0.181, ipsen: 0.081, stada: 0.06, perrigo: -0.028, chiesi: 0.062, lundbeck: 0.119, 'pierre-fabre': 0.046, aurobindo: 0.094, hikma: 0.071, cipla: 0.071, recordati: 0.118, ferring: 0.074, 'dr-reddy-s': 0.185, lupin: 0.138, zydus: 0.328, 'daiichi-sankyo': 0.178 };

for (const l of labs.filter((x) => x.group === 'global')) {
  const key = ALIAS[norm(l.name)] ?? norm(l.name);
  const row = [...wiki.entries()].find(([k]) => k === key || k.startsWith(key + ' '))?.[1];
  let series; // do mais antigo ao mais novo
  if (row && row.filter((v) => !Number.isNaN(v)).length >= 3) {
    series = row.slice().reverse().map((v, i) => ({ year: 2016 + i, v })).filter((p) => !Number.isNaN(p.v));
    // o último ponto é o ano oficial do cadastro (2025, ou 2024 quando 2025 não saiu)
    if (l.year === 2024) series = series.filter((p) => p.year <= 2024);
  } else if (CHG[l.slug] !== undefined) {
    series = [{ year: l.year - 1, v: +(l.revenueBn / (1 + CHG[l.slug])).toFixed(2) }, { year: l.year, v: l.revenueBn }];
  }
  if (series) { l.series = series.map((p) => [p.year, +p.v.toFixed(2)]); }
}
writeFileSync('src/data/laboratorios.json', JSON.stringify(labs, null, 1));

// ── Laboratórios com medicamento ativo no Brasil (Anvisa) ─────────────────
const lines = readFileSync(anvisaPath).toString('latin1').split(/\r?\n/);
const hdr = lines[0].split(';');
const ix = (n) => hdr.indexOf(n);
const comp = new Map();
for (let i = 1; i < lines.length; i++) {
  if (!lines[i]) continue;
  const c = lines[i].split(';').map((x) => x.replace(/^"|"$/g, ''));
  if (c.length !== hdr.length || c[ix('SITUACAO_REGISTRO')] !== 'Ativo') continue;
  const [cnpj, ...nm] = c[ix('EMPRESA_DETENTORA_REGISTRO')].split(' - ');
  if (!/^\d{14}$/.test(cnpj)) continue;
  const root = cnpj.slice(0, 8);
  const e = comp.get(root) ?? { root, names: new Map(), regs: new Set() };
  const name = nm.join(' - ');
  e.names.set(name, (e.names.get(name) ?? 0) + 1);
  e.regs.add(c[ix('NUMERO_REGISTRO_PRODUTO')]);
  comp.set(root, e);
}
const SMALL = new Set(['de', 'da', 'do', 'das', 'dos', 'e', 'em', 'a']);
const KEEP = new Set(['EMS', 'UCB', 'MSD', 'GSK', 'BR', 'USA', 'IFAL', 'KOP', 'LBS', 'JRD']);
const clean = (raw) => {
  let s = raw.replace(/\s*-\s*(EPP|ME|EIRELI)\s*$/i, '').replace(/\b(LTDA|S\/A|S\.A\.?|SA|EIRELI)\b\.?/gi, '').replace(/[,\s]+$/g, '').replace(/\s+/g, ' ').trim();
  return s.split(' ').map((w, i) => {
    const up = w.toUpperCase();
    if (KEEP.has(up)) return up;
    const low = w.toLocaleLowerCase('pt-BR');
    if (i > 0 && SMALL.has(low)) return low;
    return low.charAt(0).toLocaleUpperCase('pt-BR') + low.slice(1);
  }).join(' ');
};
const slugify = (s) => norm(s).replace(/ /g, '-');
const used = new Set();
const brasil = [...comp.values()]
  .map((e) => ({ root: e.root, raw: [...e.names.entries()].sort((a, b) => b[1] - a[1])[0][0], regs: e.regs.size }))
  .sort((a, b) => b.regs - a.regs || a.raw.localeCompare(b.raw))
  .map((e, i) => {
    let slug = slugify(clean(e.raw));
    if (used.has(slug)) slug += '-' + e.root;
    used.add(slug);
    return { rank: i + 1, slug, name: clean(e.raw), regs: e.regs, cnpjRoot: e.root };
  });
writeFileSync('src/data/labs-brasil.json', JSON.stringify(brasil));
console.log('globais', labs.filter((x) => x.group === 'global').length, 'com série', labs.filter((x) => x.series).length, '| Brasil', brasil.length);
