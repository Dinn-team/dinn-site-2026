# Skill design-taste-frontend (tasteskill)

Instalada em 03/11/2026 por pedido do Renan. Site: https://www.tasteskill.dev/

## Instalação

```bash
npx skills add Leonxlnx/taste-skill --skill design-taste-frontend
```

- Pasta real: `.agents/skills/design-taste-frontend/`
- Ligação para o Claude Code: `.claude/skills/design-taste-frontend`
- Registro de versão: `skills-lock.json` (hash `53590ee9…`)
- Para atualizar, rode o mesmo comando outra vez.

## Quando usar

Em toda edição visual do site: página nova, hero, seção, revisão de espaçamento ou tipografia.
Chame a skill antes de editar e use o inspetor dela depois.

## Regra de precedência

O Design System v2 (`rules/DESIGN_SYSTEM_V2.md`) manda. A skill serve para
refinar execução dentro do v2. Ela não troca cor, fonte ou padrão de layout da home.

## Cuidados

- O painel de segurança do instalador marcou "Critical Risk" (Gen), "0 alerts" (Socket) e "Med Risk" (Snyk).
- Revisão manual em 03/11/2026: os scripts abrem o Chrome ou Edge local (`scripts/lib/cdp.mjs`)
  e `assets.mjs` consulta APIs públicas de imagem (Openverse, Wikimedia, Met, NASA, Internet Archive).
  Não achei envio de dado nem chave de API. Não é uma auditoria completa.
- Não rode `assets.mjs` sem avisar o Renan.
- Arquivos de trabalho da skill ficam em `.taste-skill/` na raiz do projeto.
