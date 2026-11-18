# Dinn site — regras para IA

## Visual: Design System v2 (obrigatório)

Antes de criar ou mudar qualquer tela, hero ou seção, leia `rules/DESIGN_SYSTEM_V2.md`.
A home nova (`src/components/home2/*`, `src/styles/home2.css`) é o modelo visual de todo o site.
Referências de origem: `rules/REFERENCES_UI_UX.md` (Harvey e ElevenLabs).
O v1 (Britti Sans) foi removido do repositório em 12/11/2026. A Britti Sans não é mais usada em nenhuma parte do site.

Regras curtas:

- Todo hero e seção nova usa os padrões da home. Não invente layout novo sem registrar no v2.
- Título em uma cor só. Botão sempre com texto branco. Texto branco só sobre fundo escuro ou camada escura.
- Sem tags de status ("Beta", "Novo", "Em breve") na interface.
- Use tokens do tema (`--primary`, `--foreground`, `--muted`…), nunca hex solto.
- Menu e rodapé são globais: só acrescente ou renomeie itens.
- Páginas internas migram uma por vez para o padrão da home (lista de estado no v2, seção 9).

## Gráficos (biblioteca de 05/11/2026)

Antes de criar ou mudar qualquer gráfico, leia `rules/DESIGN_SYSTEM_V2.md`, seção 11. A biblioteca visual está em `rules/biblioteca-graficos.html` e os tokens em `rules/charts-tokens.css`.

- Séries em `--chart-1` a `--chart-5`, sempre na mesma ordem. Cor e traço identificam o produto. A média da carteira é pontilhada e fica sempre visível.
- Só a série em foco recebe preenchimento. Tooltip branco no tema claro. Filtro e botão ativo em roxo com texto branco.

## Atualização de páginas (padrão de 03/11/2026)

Para atualizar qualquer página, siga `rules/DESIGN_SYSTEM_V2.md`, seção 10.
A paleta da marca é a regra: roxo (`--primary`) manda; verde-limão (`--brand-lime`) e laranja (`--brand-orange`) são apoio.
Use os degradês de `public/gradients/web/` (nunca os `*-unsplash.avif` pesados). Use ilustração com movimento no hover (`.il-host`).
Rode a skill de front na varredura antes e depois. Páginas de história (casos) apontam para `/clientes`.

## Skill de design: design-taste-frontend (use em toda edição visual)

Instalada em `.agents/skills/design-taste-frontend` (ligada em `.claude/skills/`).
Origem: `npx skills add Leonxlnx/taste-skill --skill design-taste-frontend` (tasteskill.dev).
Detalhes em `docs/design-taste-skill.md`.

- Antes de criar ou mudar página, hero ou seção, chame a skill `design-taste-frontend`.
- Ela ajuda no espaçamento, na hierarquia, na tipografia e na revisão com captura de tela.
- O Design System v2 manda. Se a skill sugerir direção, cor ou fonte diferente do v2, siga o v2.
- Não rode `assets.mjs` sem avisar o Renan. O script baixa imagens de sites públicos.

## Skill de movimento: motion-de-produto (telas animadas do produto)

Instalada em `.agents/skills/motion-de-produto` (ligada em `.claude/skills/`). Detalhes em `docs/motion-de-produto-skill.md`.
Use ao criar ou mudar uma tela animada do Dinn: planos de câmera, cursor em arco, corte em movimento, números em outExpo.
**Padrão obrigatório:** toda tela do produto no site usa `ProductScreen`. Regras e passo a passo em `docs/padrao-telas-animadas.md`.

## Texto do site: Simplified Technical English (ASD-STE100)

Todo texto de interface e de site (`src/i18n/locales/*`) segue o ASD-STE100.
Escreva em EN primeiro. Depois adapte PT e ES com a mesma estrutura e o mesmo tamanho.

Regras:

1. Frase curta: até 20 palavras em instrução, até 25 em descrição.
2. Um assunto por frase. Divida frases com "and", "which", "while".
3. Voz ativa e tempo simples. Evite voz passiva, gerúndio e condicional desnecessário.
4. Verbo simples e concreto: "use", "show", "send", "see". Evite "leverage", "enable", "empower", "streamline", "unlock".
5. Um termo por conceito. Não troque sinônimos. Termos da Dinn: *signal*, *stock-out*, *sell-through*, *coverage*, *source*, *refresh*.
6. Corte adjetivo e advérbio de marketing ("powerful", "seamless", "robust", "real-time" sem dado).
7. Sem metáfora e sem frase retórica. Diga o que o produto faz.
8. Título: até 8 palavras. Botão: 1 a 3 palavras, verbo no início.
9. Mantenha: números, nomes de produto, nomes de empresa, marcação `*destaque*`, `<a>` e placeholders `{x}`.
10. Não reescreva texto jurídico (`privacy`, termos de uso). Só corte erro óbvio.

Regras de estrutura:

- Não mude chaves, ordem das chaves, nem o formato do arquivo.
- PT e ES devem ter a mesma chave que EN. Se o EN mudou, o PT e o ES mudam junto.
- Não invente dado, número ou promessa que o texto original não tinha.
- Mantenha o sentido. Se um corte tirar informação útil, mantenha a informação.
