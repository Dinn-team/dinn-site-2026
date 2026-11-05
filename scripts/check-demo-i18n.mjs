// Confere se todo t('texto em português') das telas de demonstração tem tradução em EN e ES.
// Uso: node scripts/check-demo-i18n.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = 'src/components';
const dictDir = 'src/components/site/demo-i18n';
const reg = {};
for (const f of readdirSync(dictDir).filter((x) => x.endsWith('.json'))) Object.assign(reg, JSON.parse(readFileSync(join(dictDir, f), 'utf8')));

const files = [];
(function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (n.endsWith('.tsx')) files.push(p);
  }
})(root);

let missing = 0, used = 0;
const usedKeys = new Set();
const RE = /\bt\(\s*(?:'((?:\\.|[^'\\])*)'|"((?:\\.|[^"\\])*)"|`((?:\\.|[^`\\$])*)`)/g;
for (const f of files) {
  const src = readFileSync(f, 'utf8');
  if (!src.includes('useDemoT')) continue;
  RE.lastIndex = 0;
  let m;
  while ((m = RE.exec(src))) {
    const raw = m[1] ?? m[2] ?? m[3];
    const key = raw.split("\\'").join("'").split('\\"').join('"').split('\\n').join('\n');
    used++;
    usedKeys.add(key);
    const e = reg[key];
    if (!e || !e.en || !e.es) { missing++; console.log(`${f}: sem tradução: ${JSON.stringify(key)}`); }
  }
}
const unused = Object.keys(reg).filter((k) => !usedKeys.has(k));
console.log(`\n${used} chamadas, ${missing} sem tradução, ${unused.length} chaves de dicionário sem uso.`);
process.exit(missing ? 1 : 0);
