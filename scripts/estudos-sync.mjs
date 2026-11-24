#!/usr/bin/env node
// Traz para o site os estudos de mercado aprovados no Orion (pesquisas da Sarah).
//
// O que faz, para cada pesquisa com status "aprovada", revisor registrado e os 3 PDFs:
//   1. lê título, subtítulo, resumo e palavras-chave nos 3 idiomas (Firestore, projeto dinn-ai);
//   2. baixa os 3 PDFs completos do bucket privado para public/estudos/arquivos/<token>/;
//   3. gera a amostra (até 5 páginas por idioma) em WebP, em public/estudos/<slug>/;
//   4. grava os dados em src/data/estudos.json.
//
// Rodar na raiz do projeto, com o gcloud já logado numa conta @dinn.ai:
//   node scripts/estudos-sync.mjs
//
// Precisa de: gcloud no PATH, Python 3 com PyMuPDF (python -m pip install --user pymupdf).
// Nada vai para produção sozinho: o resultado fica no Git local. Publicar é commit e push.
//
// Para tirar um estudo do site sem apagar: em src/data/estudos.json, ponha "hidden": true
// nele. A próxima sincronização mantém o estudo escondido.

import { execSync, execFileSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import sharp from 'sharp';

const PROJECT = 'dinn-ai';
const BUCKET = 'dinn-ai.firebasestorage.app';
const FIRESTORE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;
const DATA_FILE = 'src/data/estudos.json';
const PUBLIC_DIR = 'public/estudos';
const PYTHON = process.env.PYTHON || 'python';

/** Idioma do Orion → idioma do site. */
const LANGS = { 'pt-BR': 'pt', 'en-US': 'en', 'es-ES': 'es' };

/** Mesma ordem dos degradês das apresentações (src/lib/presentations.ts). */
const GRADIENTS = ['roxo-noite', 'laranja-noite', 'verde-noite', 'azul-noite', 'vinho-noite', 'grafite', 'rubro'];

const SAMPLE_WIDTH = 1100;
const COVER_WIDTH = 560;

const STOPWORDS = new Set(['a', 'as', 'o', 'os', 'e', 'de', 'da', 'do', 'das', 'dos', 'na', 'no', 'nas', 'nos', 'em', 'sobre', 'para', 'por', 'com']);

function token() {
  return execSync('gcloud auth print-access-token', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

const AUTH = token();
const HEADERS = { Authorization: `Bearer ${AUTH}`, 'x-goog-user-project': PROJECT };

/** Valor do Firestore REST → JS simples. */
function plain(v) {
  if (!v || typeof v !== 'object') return v;
  if ('stringValue' in v) return v.stringValue;
  if ('integerValue' in v) return Number(v.integerValue);
  if ('doubleValue' in v) return v.doubleValue;
  if ('booleanValue' in v) return v.booleanValue;
  if ('nullValue' in v) return null;
  if ('timestampValue' in v) return v.timestampValue;
  if ('mapValue' in v) return Object.fromEntries(Object.entries(v.mapValue.fields ?? {}).map(([k, x]) => [k, plain(x)]));
  if ('arrayValue' in v) return (v.arrayValue.values ?? []).map(plain);
  return v;
}

async function getJson(url) {
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) throw new Error(`HTTP ${res.status} em ${url.split('?')[0]}`);
  return res.json();
}

async function listResearch() {
  const fields = ['status', 'pdfs', 'revisor', 'concluida_em'].map((f) => `mask.fieldPaths=${f}`).join('&');
  const out = [];
  let pageToken = '';
  do {
    const json = await getJson(`${FIRESTORE}/marketing_pesquisas?pageSize=300&${fields}${pageToken ? `&pageToken=${pageToken}` : ''}`);
    for (const doc of json.documents ?? []) {
      const data = Object.fromEntries(Object.entries(doc.fields ?? {}).map(([k, x]) => [k, plain(x)]));
      out.push({ id: doc.name.split('/').pop(), ...data });
    }
    pageToken = json.nextPageToken ?? '';
  } while (pageToken);
  return out;
}

async function sections(id, orionLang) {
  const json = await getJson(`${FIRESTORE}/marketing_pesquisas/${id}/partes/secoes_${orionLang}`);
  return plain(json.fields.valor);
}

async function download(path) {
  const url = `https://storage.googleapis.com/storage/v1/b/${BUCKET}/o/${encodeURIComponent(path)}?alt=media`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${AUTH}` } });
  if (!res.ok) throw new Error(`HTTP ${res.status} ao baixar ${path}`);
  return Buffer.from(await res.arrayBuffer());
}

function slugify(title) {
  const words = title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(/\s+/);
  const out = [];
  for (const w of words) {
    if ([...out, w].join('-').length > 60) break;
    out.push(w);
  }
  while (out.length && STOPWORDS.has(out[out.length - 1])) out.pop();
  return out.join('-');
}

const isComplete = (r) =>
  r.status === 'aprovada' && r.revisor?.nome && Object.keys(LANGS).every((l) => r.pdfs?.[l]?.path);

async function main() {
  const previous = existsSync(DATA_FILE) ? JSON.parse(readFileSync(DATA_FILE, 'utf8')) : [];
  const byId = new Map(previous.map((s) => [s.id, s]));

  const all = await listResearch();
  const approved = all.filter(isComplete).sort((a, b) => (a.revisor.em < b.revisor.em ? -1 : 1));
  console.log(`Orion: ${all.length} pesquisas, ${approved.length} aprovadas com os 3 PDFs.`);

  const tmp = mkdtempSync(join(tmpdir(), 'dinn-estudos-'));
  const result = [];
  let nextGradient = previous.length;

  for (const r of approved) {
    const old = byId.get(r.id);
    const langs = {};
    let slug = old?.slug;

    for (const [orionLang, lang] of Object.entries(LANGS)) {
      const secs = await sections(r.id, orionLang);
      const cover = secs.find((s) => s.chave === 'titulo_relatorio');
      const abstract = secs.find((s) => s.chave === 'resumo');
      if (!cover?.titulo) throw new Error(`${r.id}: sem título em ${orionLang}`);
      if (lang === 'pt' && !slug) slug = slugify(cover.titulo);
      langs[lang] = {
        title: cover.titulo.trim(),
        subtitle: (cover.paragrafos?.[0] ?? '').trim(),
        abstract: (abstract?.paragrafos ?? []).map((p) => p.trim()).filter(Boolean),
        keywords: abstract?.palavras_chave ?? [],
      };
    }

    const fileToken = old?.token ?? randomBytes(6).toString('hex');
    const studyDir = join(PUBLIC_DIR, slug);
    const filesDir = join(PUBLIC_DIR, 'arquivos', fileToken);
    rmSync(studyDir, { recursive: true, force: true });
    mkdirSync(studyDir, { recursive: true });
    mkdirSync(filesDir, { recursive: true });

    for (const [orionLang, lang] of Object.entries(LANGS)) {
      const meta = r.pdfs[orionLang];
      const bytes = await download(meta.path);
      const file = `dinn-${slug}-${lang}.pdf`;
      writeFileSync(join(filesDir, file), bytes);

      const pdfTmp = join(tmp, `${slug}-${lang}.pdf`);
      const pngDir = join(tmp, `${slug}-${lang}`);
      writeFileSync(pdfTmp, bytes);
      const picked = JSON.parse(
        execFileSync(PYTHON, ['-P', 'scripts/estudos-amostra.py', pdfTmp, pngDir, String(SAMPLE_WIDTH)], { encoding: 'utf8' }),
      );
      const sample = [];
      for (let n = 1; n <= picked.pages.length; n++) {
        const name = `amostra-${lang}-${n}.webp`;
        await sharp(join(pngDir, `${n}.png`)).webp({ quality: 82 }).toFile(join(studyDir, name));
        sample.push({ src: `/estudos/${slug}/${name}`, page: picked.pages[n - 1] });
      }
      const coverName = `capa-${lang}.webp`;
      await sharp(join(pngDir, '1.png')).resize({ width: COVER_WIDTH }).webp({ quality: 82 }).toFile(join(studyDir, coverName));

      Object.assign(langs[lang], {
        pages: picked.total,
        bytes: bytes.length,
        file: `/estudos/arquivos/${fileToken}/${file}`,
        cover: `/estudos/${slug}/${coverName}`,
        sample,
      });
    }

    result.push({
      id: r.id,
      slug,
      token: fileToken,
      hidden: old?.hidden ?? false,
      gradient: old?.gradient ?? GRADIENTS[nextGradient++ % GRADIENTS.length],
      publishedAt: r.revisor.em.slice(0, 10),
      reviewer: r.revisor.nome,
      langs,
    });
    console.log(`  ok  ${slug} (${r.id})`);
  }

  // Estudo que saiu do Orion (ou deixou de estar aprovado) continua no site até alguém tirar.
  for (const old of previous) {
    if (!result.some((s) => s.id === old.id)) {
      result.push(old);
      console.log(`  mantido sem mudança: ${old.slug} (não está mais aprovado no Orion)`);
    }
  }

  result.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : a.publishedAt > b.publishedAt ? -1 : a.id < b.id ? 1 : -1));
  writeFileSync(DATA_FILE, `${JSON.stringify(result, null, 2)}\n`);
  rmSync(tmp, { recursive: true, force: true });
  console.log(`Gravado ${DATA_FILE} com ${result.length} estudos.`);
}

main().catch((err) => {
  console.error(`Falhou: ${err.message}`);
  process.exit(1);
});
