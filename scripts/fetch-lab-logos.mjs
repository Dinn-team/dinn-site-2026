// Busca o logo de cada laboratório de src/data/laboratorios.json no Wikimedia Commons
// e salva em public/laboratorios/logos/<slug>.svg. Grava a origem e a licença de cada
// arquivo em public/laboratorios/logos/manifest.json. Quem não tem logo no Commons fica
// sem arquivo, e a página mostra o nome em texto.
// Uso: node scripts/fetch-lab-logos.mjs   (precisa de internet; refaz só o que falta)
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';

const labs = JSON.parse(readFileSync('src/data/laboratorios.json', 'utf8'));
const dir = 'public/laboratorios/logos';
mkdirSync(dir, { recursive: true });
const manifestPath = `${dir}/manifest.json`;
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {};
const UA = { 'User-Agent': 'DinnSiteBot/1.0 (ferramentas@dinn.ai) logo-research' };
const api = (p) => fetch(`https://commons.wikimedia.org/w/api.php?format=json&origin=*&${p}`, { headers: UA }).then((r) => r.json());
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

for (const lab of labs) {
  const file = `${dir}/${lab.slug}.svg`;
  if (existsSync(file)) continue;
  if (lab.clientLogo) continue;
  const q = lab.logoQuery;
  if (lab.logoFile) {
    const t = `File:${lab.logoFile}`;
    const info0 = await api(`action=query&prop=imageinfo&iiprop=url|extmetadata&titles=${encodeURIComponent(t)}`);
    const ii0 = Object.values(info0.query.pages)[0].imageinfo?.[0];
    if (ii0) {
      const text0 = await (await fetch(ii0.url, { headers: UA })).text();
      writeFileSync(file, text0);
      const m0 = ii0.extmetadata ?? {};
      manifest[lab.slug] = { found: true, title: t, page: `https://commons.wikimedia.org/wiki/${encodeURIComponent(t.replace(/ /g, '_'))}`, license: m0.LicenseShortName?.value ?? '', bytes: text0.length };
      console.log('OK (fixo)', lab.name, '←', t);
      continue;
    }
  }
  const res = await api(`action=query&list=search&srnamespace=6&srlimit=12&srsearch=${encodeURIComponent(`${q} logo svg`)}`);
  const first = norm(q).split(/[^a-z0-9]+/)[0];
  const hit = (res.query?.search ?? [])
    .map((s) => s.title)
    .filter((t) => /\.svg$/i.test(t) && /logo/i.test(t) && norm(t).includes(first) && !/(icon|symbol|old|vector icon|flag|stack)/i.test(t))
    .sort((a, b) => a.length - b.length)[0];
  if (!hit) { console.log('SEM LOGO', lab.name); manifest[lab.slug] = { found: false }; continue; }
  const info = await api(`action=query&prop=imageinfo&iiprop=url|extmetadata&titles=${encodeURIComponent(hit)}`);
  const page = Object.values(info.query.pages)[0];
  const ii = page.imageinfo?.[0];
  if (!ii) { console.log('SEM INFO', lab.name); continue; }
  const svg = await fetch(ii.url, { headers: UA });
  if (!svg.ok) { console.log('FALHA', lab.name, svg.status); continue; }
  const text = await svg.text();
  writeFileSync(file, text);
  const m = ii.extmetadata ?? {};
  manifest[lab.slug] = { found: true, title: hit, page: `https://commons.wikimedia.org/wiki/${encodeURIComponent(hit.replace(/ /g, '_'))}`, license: m.LicenseShortName?.value ?? '', bytes: text.length };
  console.log('OK', lab.name, '←', hit, '|', manifest[lab.slug].license, text.length);
  await new Promise((r) => setTimeout(r, 400));
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 1));
