# Modelo de apresentação Dinn (Gamma e outros)

Modelo de 17 slides baseado nas páginas de funcionalidade e de cliente do site.
Segue o Design System v2 (`rules/DESIGN_SYSTEM_V2.md`) e a biblioteca de gráficos (seção 11).
O deck visual está no artefato "Modelo de apresentação Dinn". Este arquivo traz a versão em texto, para colar no Gamma.

## 1. Tema (copie para o Gamma, Canva, PowerPoint ou Keynote)

| Item | Valor |
|---|---|
| Fonte de título | Roboto, peso 400, tracking negativo |
| Fonte de texto | Inter |
| Roxo (principal, botão) | `#7008E7` |
| Roxo escuro | `#3D0A82` |
| Lilás | `#C9AAF7` (trilha `#F1EBFC`) |
| Preto da marca | `#08090A` |
| Lime (pico, ganho, selo) | `#E4F222` |
| Laranja (ruptura, queda, calor) | `#FD673E` (linha fina `#EE5A2F`) |
| Fundo claro | `#FFFFFF` e `#F6F4FB` |
| Texto secundário | `#5C5A6E` |
| Borda | `#E6E3EF` |
| Raio | cartão 28 px, botão em pílula |
| Logo | `Dinn_logo_v2_Light.png` sobre fundo escuro e `Dinn_logo_v2_Dark.png` sobre fundo claro (`public/logo/`) |

Fundos: use as imagens de degradê da marca, uma diferente por slide. Nunca use roxo liso nem degradê desenhado em CSS.
No deck, cada slide usa: capa `g00`, divisor `web/azul-noite`, indicador em destaque `web/roxo-noite`, solução `web/verde-noite`, tela do produto `g11`, citação `web/pessego`, próximos passos `g08`, `web/azul-noite` e `web/laranja-noite`, fechamento `g03`.
Escuros: texto branco, com camada preta de 25 a 50%. Claros (`g03`, `web/pessego`): texto preto.
Arquivos em `public/gradients/` e `public/gradients/web/`. Nunca use os `*-unsplash.avif` (pesados). No Gamma, suba o JPG ou PNG de 1920 × 1080 como imagem de fundo do cartão.

Regras fixas:

1. Título em uma cor só, até 8 palavras.
2. Botão sempre com texto branco sobre roxo.
3. Texto branco só sobre fundo escuro.
4. Sem selo de status: "Beta", "Novo", "Em breve".
5. Todo botão leva a `dinn.ai/contato`.
6. Texto em ASD-STE100: até 20 palavras por frase, voz ativa, um termo por conceito (*signal*, *stock-out*, *sell-through*, *coverage*, *source*, *refresh*).

## 2. Catálogo de slides

| # | Slide | Origem no site | Campos | Limite |
|---|---|---|---|---|
| 1 | Capa | Hero da home | título, frase de apoio, cliente, data | título 8 palavras |
| 2 | Sumário | Colunas com fio fino | 3 a 4 seções com 1 frase | frase 20 palavras |
| 3 | Divisor de seção | Hero escuro | nome da seção, 1 frase | nome 4 palavras |
| 4 | Três passos | "Como funciona" (funcionalidade) | 3 títulos e 3 textos | texto 25 palavras |
| 5 | Quatro indicadores | Números (cliente) | 4 valores, rótulos, variação | 1 cartão em destaque |
| 6 | Problema e solução | Problema e solução (cliente) | 2 títulos, 3 itens cada | item 20 palavras |
| 7 | Gráfico de linha | Comparador (biblioteca) | até 3 séries e a média | rótulo só na ponta |
| 8 | Ranking | Barras em pílula | até 5 itens | resto em "Outros" |
| 9 | Rosca | Parte do todo | até 4 ou 5 fatias, total | legenda em texto |
| 10 | Antes e depois | Antes e depois (cliente) | 2 valores, diferença | mesma escala |
| 11 | Linha do tempo | Linha do tempo (cliente) | 4 marcos | frase 20 palavras |
| 12 | Tela do produto | Tela em laço (funcionalidade) | print 16:10, 3 pontos | só tela em produção |
| 13 | Citação | Citação (cliente) | frase, nome, cargo | só com aprovação |
| 14 | O que faz e não faz | "O que faz e o que não faz" | até 4 itens por coluna | copie do documento |
| 15 | Como ler o resultado | Tabela "Como ler" | 3 a 4 linhas | 4 linhas por slide |
| 16 | Próximos passos | Cards de recurso | 3 cartões e links | 1 frase por cartão |
| 17 | Fechamento | Fechamento | convite, botão | 1 botão |

## 3. Regras dos gráficos

1. Séries em roxo, lilás, preto, lime, laranja, sempre nessa ordem.
2. Cor e traço identificam a série: roxo contínuo, laranja tracejado, média pontilhada e sempre visível.
3. Só a série em foco recebe preenchimento.
4. Rótulo só na ponta da linha ou no item em destaque.
5. Texto de eixo e legenda em cinza ou preto. Nunca na cor da série.
6. Filtro ativo em roxo com texto branco.
7. Todo número leva período, base de comparação e fonte.
8. Dado do dia anterior (D-1) não é tempo real. Dados de exemplo levam a legenda "Dados e nomes ilustrativos".

## 4. Gamma: como usar

**Rota principal: colar texto.**

1. No Gamma, escolha "Colar texto" e depois "Manter o texto como está" (cada `---` vira um cartão).
2. Em Tema, crie um tema personalizado com as cores e as fontes da seção 1.
3. Cole o esqueleto da seção 5. Troque os colchetes.
4. Peça gráficos pelo comando de cada cartão (campo "Gráfico"). Gamma monta o gráfico com os dados que você informa.

**Rota de arquivo: importar o PPTX do tema.** Use `docs/gamma/dinn-gamma-theme.pptx` em Customize > Themes > + New Theme > Import file. O Gamma aceita só PPTX e Google Slides. O arquivo traz 9 slides, 6 layouts (capa, conteúdo, conteúdo cinza, divisor, citação, fechamento), as cores e as fontes do tema e o logo. Os 3 gráficos (linha, ranking, rosca) são nativos e editáveis. Na tela de revisão, confira o roxo `#7008E7`, as fontes Roboto e Inter e o logo. Depois use "Save and customize" e cole `docs/gamma/dinn-gamma-theme.css` na aba Custom CSS.

O deck visual do artefato também exporta PPTX pelo menu Share. Nele os gráficos viram imagem.

**Outros softwares.** No Canva, PowerPoint, Keynote e Google Slides, importe o PPTX ou recrie com a tabela da seção 1.

## 5. Esqueleto para colar no Gamma

Instrução para o Gamma, antes do texto: "Use um cartão por bloco. Mantenha os títulos curtos. Não crie texto novo. Use gráficos de linha, barras horizontais e rosca nas cores do tema. Rosto e foto não entram."

```
# [Título da apresentação em até 8 palavras]
[Uma frase de apoio, até 25 palavras.]
[Nome do cliente ou do time] · [Mês e ano]

---

# Sumário
- [Seção 1]: [1 frase]
- [Seção 2]: [1 frase]
- [Seção 3]: [1 frase]
- [Seção 4]: [1 frase]

---

# [Nome da seção]
[Uma frase que abre a seção.]

---

# Como funciona: [três passos para chegar ao resultado]
1. **[Escolha o recorte]**: [1 ou 2 frases curtas]
2. **[Leia o sinal]**: [1 ou 2 frases curtas]
3. **[Aja na loja]**: [1 ou 2 frases curtas]

---

# Resultados: [a conclusão com o número principal]
- **[00%]**: [o que mede, com período e base] ([+0 p.p.])
- **[00]**: [o que mede, com período e base]
- **[00%]**: [o que mede, com período e base]
- **[0,0x]**: [o que mede, com período e base]
Fonte: [fonte, período e base]

---

# [Do problema à solução, em uma frase]
**O problema.** [Resumo em uma frase]
- [Causa 1]
- [Causa 2]
- [Efeito no negócio, com número]

**A solução.** [Resumo em uma frase]
- [O que a Dinn mostra]
- [O que o time passou a fazer]
- [Resultado, com número e período]

---

# [Título do gráfico de linha]
Gráfico: linha, 12 semanas. Série em foco: [Produto A] (roxo, contínuo, com preenchimento). Série 2: [Produto B] (laranja, tracejado). Média da carteira: pontilhada, sempre visível.
Dados: [tabela com semana, A, B, média]
Resumo: [quanto mudou, em qual período, contra qual média]

---

# [Título do ranking]
Gráfico: barras horizontais em pílula, até 5 itens, do maior ao menor. Maior valor em laranja. Os demais em roxo.
Dados: [item, valor]
Resumo: [quem lidera, por quanto, em qual período]

---

# [Título da parte do todo]
Gráfico: rosca com legenda em texto. Total no centro.
Dados: [fatia, percentual]
Resumo: [qual parte pesa mais e que ação pede]

---

# [Título da comparação]
Antes: [39,0%] em [semana 1]. Depois: [26,2%] em [semana 12]. Diferença: [−12,8 p.p.].
Gráfico: duas colunas, mesma escala, depois em roxo.

---

# [Do primeiro passo ao resultado, em quatro marcos]
- [Semana 1]: **[Marco 1]**. [1 frase]
- [Mês 1]: **[Marco 2]**. [1 frase]
- [Mês 2]: **[Marco 3]**. [1 frase]
- [Mês 3]: **[Resultado]**. [Número e período]

---

# [Nome da tela ou da funcionalidade]
[Uma frase: o que a tela mostra e que decisão ela apoia.]
- [Onde olhar primeiro]
- [O que o número diz]
- [Qual é o próximo passo]
[Imagem: print da tela, 16:10. Legenda: Dados e nomes ilustrativos.]

---

> “[Frase do cliente, até 25 palavras, aprovada por escrito.]”
> [Nome], [cargo] · [empresa]

---

# [O que a solução faz e o que não faz]
**O que faz**
- [Capacidade 1]
- [Capacidade 2]
- [Capacidade 3]

**O que não faz**
- [Limite 1]
- [Limite 2]
- [Limite 3]

---

# [Leia a regra antes de comparar os números]
| Termo | Regra | Como aparece |
|---|---|---|
| [Termo 1] | [Regra curta] | [Onde o leitor vê] |
| [Termo 2] | [Regra curta] | [Onde o leitor vê] |
| [Termo 3] | [Regra curta] | [Onde o leitor vê] |

---

# [Três caminhos para seguir depois desta conversa]
- **[Funcionalidade ou ação 1]**: [1 frase]
- **[Funcionalidade ou ação 2]**: [1 frase]
- **[Funcionalidade ou ação 3]**: [1 frase]

---

# [Convite final em uma frase curta]
[Uma frase de apoio.]
Botão: Fale com a Dinn → dinn.ai/contato
```

## 6. Antes de usar

- [ ] Todo colchete foi trocado.
- [ ] Todo número tem período, base e fonte.
- [ ] Nenhum número foi inventado. Os números do modelo são de exemplo.
- [ ] Nome de cliente só com aprovação. Casos anônimos mantêm só o cargo.
- [ ] Telas só de funcionalidades em produção, com dados fictícios.
- [ ] Sem selo de status e sem promessa de resultado.
