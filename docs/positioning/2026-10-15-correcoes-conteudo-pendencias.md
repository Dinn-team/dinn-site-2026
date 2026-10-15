# Correções de conteúdo de 15/10/2026: o que entrou e o que depende de decisão

Base: `dinn_site_correcoes_conteudo_2026-10-15.md` (CEO Office, Comercial, Produto e Tecnologia). Este arquivo lista o que foi montado na branch `feat/reposicionar-narrativa-signals-to-action` e o que precisa de confirmação antes de publicar. Os textos dos drafts (planos, add-ons, Conecta) foram usados como proposta; a promoção a canônico vem depois.

## Páginas novas

| Página | Caminho | Fonte principal |
|---|---|---|
| Localizador e estoque em tempo real | `/produtos/localizador` | seção 4 do MD, evidência Libbs |
| Funcionalidades (14, do problema à decisão) | `/funcionalidades` | seção 4 |
| Dinn Conecta | `/produtos/conecta` | prévia 08 (dinn-data-preview) + seção 7 |
| Integrações e API | `/integracoes` | seção 7 |
| Planos e contratação | `/planos` | seção 8 (Plans 2.6, draft) |
| Cobertura | `/cobertura` | seção 6; dados em `src/data/coverage.json` |
| Pesquisas e projetos especiais | `/pesquisas` | seção 9 |
| Comparativos | `/comparativos` | seção 10 |
| Sobre a Dinn | `/sobre` | seção 12 |
| Clientes e casos | `/clientes` | seções 2 e 11 |
| Soluções por objetivo, área e funcionalidade | `/solucoes` | seção 2 |

Menu novo: Plataforma · Soluções · Clientes · Recursos · Planos · A Dinn (Confiança fica em "A Dinn"; Início é o logo).

## Ajustes em páginas existentes

- Home: cena de estoque em tempo real (`#tempo-real`); aba "Propaganda médica" removida; cada situação linka para a página da área; blocos de plataforma linkam para as páginas; frases trocadas ("estimativa de giro no recorte", "ajuda a investigar onde pode estar a restrição", "disponível no canal", registro do retorno sem reordenação automática).
- Confiança: acurácia (sem percentuais), selos e homologações, documentação técnica sob solicitação, divisão de responsabilidades.
- SSO: "sob consulta" em todo o site (antes: "habilitável").
- Casos: Fortaleza (dias de cobertura, não dias parados), distribuição (hipótese), SAC (sem certeza universal), preço (hipótese).
- DiWE/Dive Ventures removida do rodapé, copyright, descrição e dados estruturados.

## Decisões e confirmações pendentes

1. **Planos (seção 8):** revisar a matriz transcrita do YAML histórico. Itens que o MD marca como conflito: predição no Essential (publicado como "sob consulta"), faixas de PDV (não publicadas), compromisso mínimo 3/12/12 meses (publicado; confirmar), nome e escopo do complemento de tempo real.
2. **Dados da empresa:** razão social, CNPJ e endereço vieram do rodapé da prévia do Conecta (spec, seção 21). Validar contra o cadastro empresarial.
3. **Encarregado de dados:** os e-mails `@diwe.com.br` continuam nas políticas de privacidade e suporte. Trocar só depois de definir e validar o contato com domínio Dinn.
4. **Cobertura:** `coverage.json` está vazio de propósito. Preencher só com registro validado pelo produto.
5. **Funcionalidades:** confirmar escopo vendável atual de estimado/predito, histórico e visões salvas, alertas e exportações.
6. **SSO:** confirmar protocolos e operação antes de citar como incluso em qualquer plano.
7. **Casos e falas:** quatro casos tiveram texto causal ajustado; as falas foram reescritas e viram síntese editorial. Confirmar com os clientes. Autorização de uso de marca (Lilly) segue pendente.
8. **Idioma:** o espanhol do site é latino-americano (es-419). O MD pede espanhol de Espanha para Valência; decidir o público.
9. **Clay:** o documento Clay ainda atribui execução ao Conecta; reconciliar no OS.
10. **Materiais ricos e SEO (seção 13):** nenhum material foi anunciado; só entra quando existir.

## Contato: perfil do pedido (HubSpot)

O formulário `/contato` agora pergunta o que a pessoa quer fazer (conhecer, contratar plano, funcionalidades, integração, pesquisa) e, conforme a escolha, o plano de interesse, as funcionalidades e um texto livre. O link que traz a pessoa já deixa a opção marcada (`?origem=plano-essential`, `localizador`, `integracoes`, `pesquisas`…).

Propriedades de contato a criar no HubSpot e incluir no formulário (nomes em `src/lib/contact-form.ts`, `FIELDS`):

| Propriedade | Tipo | Valores |
|---|---|---|
| `dinn_tipo_contratacao` | lista | `conhecer`, `plano`, `funcionalidade`, `integracao`, `pesquisa` |
| `dinn_plano_interesse` | lista | `starter`, `essential`, `professional`, `nao_sei` |
| `dinn_funcionalidades_interesse` | seleção múltipla | `tempo_real`, `estimado`, `historico`, `giro_preco`, `distribuicao`, `insights`, `alertas`, `exportacoes` |
| `dinn_contexto_pedido` | texto | até 500 caracteres |

Sem essas propriedades no formulário do HubSpot, o envio pode ser recusado: criar antes de publicar.
