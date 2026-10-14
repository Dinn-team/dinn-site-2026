#!/usr/bin/env node
// Changelog da Dinn — automação e camada de tratamento.
//
// O que faz
//   1. Lê, no GitHub, as publicações em produção (PRs mesclados na branch de
//      produção) dos repositórios listados em SOURCES.
//   2. Ignora o que já foi tratado (src/data/changelog.json) e tudo o que foi
//      mesclado até "reviewedUntil".
//   3. Um modelo de IA reescreve título e resumo em linguagem simples, nos três
//      idiomas, separando o que é interno (não publica) do que o usuário percebe.
//   4. Com --auto-publish, o item entra direto como "published", desde que passe
//      na trava de segurança (nomes de clientes e de redes, códigos internos,
//      e-mails, termos sensíveis). Se não passar, fica como "draft" para revisão.
//
// Rodada diária: .github/workflows/changelog-daily.yml (06:00 em Brasília).
//
// Uso local
//   node scripts/changelog-sync.mjs                         # lista o pendente
//   node scripts/changelog-sync.mjs --write                 # grava rascunhos
//   node scripts/changelog-sync.mjs --write --auto-publish  # publica o que passar na trava
//   node scripts/changelog-sync.mjs --since 2026-09-01      # força outra data
//
// Requisitos
//   - GitHub: `gh` autenticado ou GITHUB_TOKEN com leitura nos repositórios.
//   - Tratamento: ANTHROPIC_API_KEY (modelo em ANTHROPIC_MODEL). Sem a chave,
//     os pendentes vão para changelog.pending.json, para tratamento manual.
//
// Nunca é exibido no site: repositório, número de PR, nomes de pessoas ou de
// clientes, códigos de tarefa internos.

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src/data/changelog.json');
const PENDING = join(ROOT, 'src/data/changelog.pending.json');

// Repositórios cuja publicação em produção entra no changelog público.
// Só entra o que chegou à branch de produção; staging e develop não contam.
// Para incluir outro produto, acrescente uma linha.
const SOURCES = [
  { repo: 'Dinn-team/dinn-manager-app', branch: 'main', area: 'platform' },
  { repo: 'Dinn-team/dinn-site-2026', branch: 'main', area: 'site' },
];

// Trava de segurança: se o texto tratado citar algo daqui, o item NÃO é
// publicado automaticamente (vira rascunho para revisão humana).
const DENY = [
  /\b(lilly|libbs|eurofarma|marjan|sanofi|biolab|fini)\b/i,
  /\b(panvel|raia|drogasil|dpsp|pague\s*menos|araujo|ara[uú]jo|drogaria|vtex|bitbrowser)\b/i,
  /\bDINN-[A-Z]+-\d+\b/,
  /[\w.+-]+@[\w-]+\.[\w.]+/,
  /\b(token|senha|password|api[\s_-]?key|secret|credencial|migration|migra[cç][aã]o|prisma|cloud\s*run|terraform|amplify|staging)\b/i,
  /\b(beta|piloto|pilot|em breve|coming soon)\b/i,
  /\b(tempo real|real[\s-]?time)\b/i,
];
const flagged = (entry) => {
  const text = JSON.stringify([entry.title, entry.summary, entry.highlights]);
  return DENY.find((re) => re.test(text)) ?? null;
};

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const AUTO = args.includes('--auto-publish');
const sinceArg = args.includes('--since') ? args[args.indexOf('--since') + 1] : null;

const data = JSON.parse(readFileSync(DATA, 'utf8'));
const since = sinceArg ?? data.reviewedUntil ?? '1970-01-01';
const known = new Set(data.entries.map((e) => `${e.source?.repo}#${e.source?.pr}`));

function listMergedPrsGh({ repo, branch }) {
  try {
    const out = execFileSync(
      'gh',
      ['pr', 'list', '--repo', repo, '--base', branch, '--state', 'merged', '--limit', '100', '--json', 'number,title,body,mergedAt,url'],
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] },
    );
    return JSON.parse(out);
  } catch {
    return null;
  }
}

async function listMergedPrsRest({ repo, branch }) {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (!token) throw new Error(`Sem acesso ao GitHub para ${repo}: faça "gh auth login" ou defina GITHUB_TOKEN.`);
  const res = await fetch(`https://api.github.com/repos/${repo}/pulls?state=closed&base=${branch}&per_page=100&sort=updated&direction=desc`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) throw new Error(`GitHub respondeu ${res.status} para ${repo}`);
  const prs = await res.json();
  return prs.filter((p) => p.merged_at).map((p) => ({ number: p.number, title: p.title, body: p.body ?? '', mergedAt: p.merged_at, url: p.html_url }));
}

const SYSTEM = `Você é o editor do changelog público da Dinn, uma empresa de inteligência comercial para o canal farmacêutico.
Recebe o título e a descrição de uma publicação técnica (pull request) que acabou de ir para produção e devolve a versão pública.

Regras:
- Escreva em linguagem simples, para quem usa a plataforma ou o site, sem jargão técnico.
- Nunca cite: nomes de clientes ou parceiros, nomes de redes de farmácia, nomes de pessoas, códigos de tarefa internos (como DINN-...), nomes de repositórios, infraestrutura, segurança, chaves, migrações.
- Não mencione recursos desligados por padrão, protótipos ou testes internos. Não use as palavras beta, piloto ou em breve.
- Não prometa resultado nem use "tempo real" (use "consulta ao vivo" quando for o caso).
- Publicações de promoção (staging para main) agrupam vários assuntos: devolva uma entrada para cada novidade que o usuário percebe, no máximo 4, agrupando o que for parecido.
- Se a publicação for só interna (refatoração, testes, dependências, CI, documentação técnica, logs, correções que o usuário não percebe), devolva a lista vazia.
- Título com até 70 caracteres. Resumo com até duas frases. Até três destaques curtos (podem ser vazios).
- Entregue português do Brasil, inglês e espanhol latino-americano.

Responda somente com JSON, sem texto fora dele:
{"entries": [{"title": {"pt": string, "en": string, "es": string}, "summary": {"pt": string, "en": string, "es": string}, "highlights": {"pt": string[], "en": string[], "es": string[]}}]}`;

async function treat(pr) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-5-5',
      max_tokens: 2500,
      system: SYSTEM,
      messages: [{ role: 'user', content: `Título: ${pr.title}\n\nDescrição:\n${(pr.body ?? '').slice(0, 8000)}` }],
    }),
  });
  if (!res.ok) throw new Error(`Anthropic respondeu ${res.status}: ${await res.text()}`);
  const json = await res.json();
  const text = json.content?.map((c) => c.text ?? '').join('') ?? '';
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error(`Resposta sem JSON para o PR ${pr.number}`);
  const parsed = JSON.parse(match[0]);
  return Array.isArray(parsed.entries) ? parsed.entries : [];
}

const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);

const pending = [];
for (const src of SOURCES) {
  const prs = listMergedPrsGh(src) ?? (await listMergedPrsRest(src));
  const short = src.repo.split('/')[1];
  for (const pr of prs) {
    if (pr.mergedAt.slice(0, 10) <= since) continue;
    if (known.has(`${short}#${pr.number}`)) continue;
    pending.push({ ...pr, repo: short, area: src.area });
  }
}
pending.sort((a, b) => (a.mergedAt < b.mergedAt ? -1 : 1));

console.log(`Pendentes desde ${since}: ${pending.length}`);
for (const p of pending) console.log(`  ${p.mergedAt.slice(0, 10)}  ${p.repo}#${p.number}  ${p.title}`);
if (!WRITE || pending.length === 0) process.exit(0);

if (!process.env.ANTHROPIC_API_KEY) {
  writeFileSync(PENDING, JSON.stringify({ generatedAt: new Date().toISOString().slice(0, 10), items: pending }, null, 2) + '\n');
  console.log(`\nSem ANTHROPIC_API_KEY: pendentes gravados em ${PENDING} para tratamento manual.`);
  process.exit(0);
}

let published = 0;
let drafts = 0;
let failed = 0;
let lastOk = null;
for (const pr of pending) {
  try {
    const items = await treat(pr);
    items.forEach((t, i) => {
      if (!t?.title?.pt || !t?.summary?.pt) return;
      const entry = {
        id: `${pr.repo}-${pr.number}-${i + 1}-${slug(t.title.pt)}`,
        date: pr.mergedAt.slice(0, 10),
        area: pr.area,
        status: 'draft',
        title: t.title,
        summary: t.summary,
        highlights: t.highlights ?? { pt: [], en: [], es: [] },
        source: { repo: pr.repo, pr: pr.number },
      };
      const hit = flagged(entry);
      if (AUTO && !hit) {
        entry.status = 'published';
        published += 1;
      } else {
        drafts += 1;
        if (hit) console.log(`  trava (${hit}): ${t.title.pt}`);
      }
      data.entries.push(entry);
      console.log(`  ${entry.status === 'published' ? 'publicado' : 'rascunho'}: ${t.title.pt}`);
    });
    // marca o PR como tratado mesmo quando não rendeu item público (era interno)
    if (items.length === 0) {
      data.ignored = data.ignored ?? [];
      data.ignored.push({ repo: pr.repo, pr: pr.number, date: pr.mergedAt.slice(0, 10) });
    }
    lastOk = pr.mergedAt.slice(0, 10);
  } catch (err) {
    failed += 1;
    console.error(`  falhou ${pr.repo}#${pr.number}: ${err.message}`);
    break; // para no primeiro erro: o próximo ciclo retoma do mesmo ponto
  }
}
if (lastOk) {
  data.reviewedUntil = lastOk;
  data.updatedAt = new Date().toISOString().slice(0, 10);
  writeFileSync(DATA, JSON.stringify(data, null, 2) + '\n');
}
console.log(`\n${published} publicado(s), ${drafts} rascunho(s), ${failed} falha(s).`);
process.exit(failed ? 1 : 0);
