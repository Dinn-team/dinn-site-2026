# Revisão do site novo (branch `redesign`) — 12/11/2026

Base: commit `99c3bdd`, build local com 133 páginas. Seis revisões em paralelo: legal, clientes, produto, blog, imagens, técnico.
Não é parecer jurídico. Os pontos legais são sinais para levar ao advogado.

## Veredito
Não publicar como está. Sete bloqueios abaixo. Todos têm correção. Três dependem de autorização de terceiros.

## A. O que impede o lançamento

| # | Bloqueio | Evidência |
|---|---|---|
| 1 | Formulário de contato pode não enviar. Todo botão "Solicitar demo" leva a `/contato`. | `src/lib/contact-form.ts:14`: sem `PUBLIC_HUBSPOT_FORM_GUID` na Vercel o envio falha. O revisor técnico também não achou no HubSpot as 11 propriedades `dinn_*` que o formulário envia. |
| 2 | Nenhum cliente tem autorização registrada para nome, logo, números e caso (Sanofi, Eurofarma, Libbs, Lilly, Marjan). | O código só tem `approved` em citações. A nota de pendências diz que a marca da Lilly está pendente. O documento-fonte da Lilly diz "não publicar sem OK formal". |
| 3 | GA4 e Apollo carregam em toda página, sem banner de cookies. | `src/layouts/Layout.astro:99-187`. A política promete consentimento que o site não tem. |
| 4 | Home mostra logos de 15 laboratórios que não são clientes ao lado dos clientes, sem aviso de marca. | `QuemAtende2.tsx`, `pt.home2.ts:57-58`. O aviso existe só em `/clientes`, dentro de um modal. |
| 5 | Blog com números sem prova, rótulos internos vazados e autora fictícia. | Ver seção B, item "Blog". |
| 6 | Números de capa e planos sem base. | Ver seção B, itens "Home" e "Planos". |
| 7 | Merge perde a correção do PR #15 se os conflitos forem resolvidos a favor da redesign. | 6 conflitos: `CTASection.tsx`, `SolucoesSection.tsx`, `animated-hero.tsx`, `Footer.tsx`, `ArticlePage.astro`, `links.ts`. A main tem a agenda HubSpot `meetings-eu1`. |

## B. Riscos legais (levar ao jurídico)

**Marca e direito de imagem**
- Logos de ~50 laboratórios sem autorização. "Public domain" no Commons cobre o desenho, não a marca registrada (Lei 9.279/96).
- Marjan: logo em arquivo `removebg-preview`, baixa resolução. Logos de cliente pintados com cor aproximada em `src/lib/labs.ts`.
- Fonte Britti Sans (8 arquivos `woff2`, preload em toda página): sem licença no repositório.
- Fotos Pexels com pessoas identificáveis. Foto de Joinville e Valência sem crédito. Logo Astellas (CC BY 2.5) com crédito incompleto.

**Publicidade enganosa (CDC arts. 36-37, CONAR)**
- Home: "92,7% das recomendações da Jean" vem de 6 consultores da Sanofi em 2024. "64,3%" vem de um ciclo da Eurofarma em 2025. A home não diz base, período nem "um caso".
- `/clientes`: "Os nomes dos laboratórios ficam preservados" na mesma página que mostra os 5 nomes. O bloco "Resultados somados" soma períodos diferentes. O uso de 59 pessoas (85% da Libbs) aparece como uso de vários laboratórios.
- `/clientes`: "A Dinn pode atender todos os laboratórios da lista". Sem base. `/cobertura` não mostra número.
- Blog: "caso real" com 28%, 35%, 88%, 22% e "até 90% de precisão". Sem cliente, período ou fonte. Os números não aparecem em nenhuma página de caso.
- Blog 2025: "tempo real", "visão total", "controle total". `/confianca` diz base D-1.
- Funcionalidade Jean: Gmail, Outlook, calendário e WhatsApp. Sem entrega no changelog. A memória do projeto diz que a spec não os considera entregues.
- Conecta, Forecast, Distribuição e Share aparecem como entregues. O `brain/product.md` os marca como candidato, piloto ou em desenvolvimento.
- Planos: "Compromisso mínimo 3 meses". O rascunho de origem tem `commercial_use: prohibited`. A política comercial é 12 a 36 meses.

**LGPD / GDPR**
- Política de privacidade incompleta (arts. 9, 33, 41): não trata lead, formulário, HubSpot, Apollo, GA, Vercel, Sanity, Fillout nem o provedor de LLM. Retenção sem prazo. Transferência sem país.
- Encarregado é o CTO, com e-mail pessoal (`vini@dinn.ai`). Possível conflito de funções.
- Contradição: política e termos mandam não enviar dado de paciente. O Localizador e dois casos usam "endereço do paciente".
- Nomes, cargos e fotos de 4 pessoas reais (Natali, Roberto, Camila, Wilson) ficam públicos em `public/depoiment/` e nos pacotes JS. Sem consentimento registrado.
- Dados de reunião e e-mail de clientes nas páginas Libbs e Lilly. O documento-fonte da Libbs diz "nenhuma frase pode ser publicada como citação direta sem confirmação".
- Time e rodapé em Valência. A política EN/ES diz que não cobre GDPR. O PT não tem esse parágrafo.

**Concorrência e termos de terceiros**
- `/plataforma`, FAQ e Localizador dizem que "agentes consultam os canais digitais das farmácias". O documento de marca manda nunca descrever o método de coleta. Risco com os termos de uso desses sites.
- Marjan: texto sobre usar preço e giro para pressionar o desconto de uma rede. O documento-fonte pede revisão jurídica.
- Blog: "precificação dinâmica" e ajuste de política comercial pelo preço do concorrente. Medicamento tem preço-teto da CMED.

**Transparência sobre IA**
- Autora "Maia, Head of Marketing no Dinn" assina os 74 artigos, com foto que parece gerada por IA. A memória do projeto trata a Maia como automação, e o cargo perdeu a palavra "digital" no cadastro.
- 19 artigos saíram sem revisão humana, um por dia desde 15/10. O comentário em `client.ts` diz que a automação só grava rascunho. Os dados mostram 0 rascunhos.
- Aviso de IA: não conheço lei brasileira em vigor que exija. O Regulamento de IA da UE (art. 50) pode se aplicar por causa de Valência. Confirmar.

**Termos de uso**: sem foro, sem teto de responsabilidade, sem regra para saídas da Jean e da Zoe. Trata "plugin" e não o site inteiro.

## C. Corrigir antes de publicar (rápido, sem terceiros)

- Blog: 8 artigos com rótulo interno no texto ("Dinn Pulse (em desenvolvimento)", "Dinn Share (próxima)"). 3 dos 7 cards da página 1 do blog. "Pulse", "Share" e "Forecast" não existem no site novo.
- Blog: lista de 12 marcas de terceiros com "Veeva CRM, a ferramenta mais utilizada" e "O DINN se destaca". "PME Pharma" e "SAP S/4HANA Pharma" não foram confirmados.
- Blog: artigo só em EN/ES (turnover), 5 slugs ES cortados no meio, slug PT em `/en` e `/es`, alt de diagrama em PT, 3 erros de texto ("a atrito", "riesgo", "desconfianza").
- Home e Sobre: "14 dias do pedido ao painel". A linha do tempo do caso Lilly mostra 9 dias até produção.
- Marjan: "14% do giro" e "32 por 100 vendidas" na mesma página, com bases diferentes.
- Planos: limites numéricos e prazos mínimos sem aprovação do Comercial.
- Changelog: "atualizado todos os dias". Última entrada em 30/09, `updatedAt` 14/10.
- Sem página 404 (`src/pages/404.astro` não existe).
- `dinn.ai` redireciona (307) para `www.dinn.ai`. Canonical, hreflang e sitemap usam o apex. Já é assim na main.
- Sem `vercel.json`: `/blog/<slug>` vira meta-refresh, não 301.
- `og-image.png` e `logo.png` (JSON-LD) mostram a marca antiga. Favicon mostra a v2. Não há `favicon.ico`.
- Menu, rodapé e "Solicitar demo" saem em português no HTML das páginas EN/ES.
- `/suporte` tem 6 H1. 12 páginas com hreflang sem barra final.
- Meta description cortada com "…" nas páginas Eurofarma, Libbs, Lilly, Ruptura.
- Dependências: `pnpm audit` dá 157 achados (2 críticos: astro 6.3.1 e `tar`). O site é estático e a exposição parece baixa. Remover `sanity` e `@sanity/vision` das dependências do site.
- Arquivos locais não commitados: 3 SVGs de logo com 12,4 MB cada (o commitado tinha 2,4 KB). O site usa só os PNG. Não commitar.
- Peso morto em `public/`: ~17 MB de `*-unsplash.avif`, `prints_screns/` (um print mostra redes reais com percentuais e outro uma pessoa e um endereço), `hero/`, `cta/`.
- `public/showcase/CREDITS.md` fica público. `lancamento.webp` mostra caixas de marcas de terceiros. `campo.webp` mostra um depósito sem relação com visita a farmácia.
- Vídeo de 17,9 MB: licença da trilha e da narração sem registro. Conferir a cena "ao vivo, consulta feita agora" contra a regra D-1.

## D. O que está bom
- 0 link interno quebrado. 0 arquivo referenciado e ausente. 0 segredo no código ou no `dist`.
- Nenhuma URL do site atual some no novo (sitemap atual: 90 URLs, novo: 132).
- Chaves i18n iguais em PT, EN e ES. Números iguais nos três idiomas.
- CNPJ 57.639.944/0001-20 consta na Receita como "DINN TECNOLOGIA LTDA.", ativo, e o endereço bate com o do site.
- Nenhuma referência a `dinn.com.br`, "lorem", "TODO", "Beta" ou "Em breve". A `/confianca` não promete ISO nem SOC 2.
- Nenhum nome real de rede de farmácia nas telas de exemplo. O texto da `/comparativos` não nomeia concorrentes.

## E. Não verificado
- Aceites e contratos dos clientes. Contratos e NDAs. Autorização das farmácias e redes.
- Valor de `PUBLIC_HUBSPOT_FORM_GUID` na Vercel e resposta real da API do HubSpot.
- Licença e origem de fotos (Maia, equipe, capas do blog, cidades, Pexels), logos do Commons e trilha do vídeo.
- Plágio nos artigos (crédito da ferramenta de busca acabou).
- Texto completo de EN e ES: li só estrutura, números, promessas, páginas legais e artigos por comparação.
- Contraste, CLS e LCP. Renderização visual no navegador.
- Se os nomes de exemplo (Dorvalin, Cefalgin etc.) colidem com marca no INPI.
