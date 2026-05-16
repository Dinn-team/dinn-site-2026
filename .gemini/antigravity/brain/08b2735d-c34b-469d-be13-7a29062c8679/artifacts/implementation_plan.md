# Implementação de Sistema Multi-idioma (i18n)

Este plano descreve como adicionaremos o suporte a múltiplos idiomas (PT-BR, EN-US, ES-419) no site, garantindo a troca de idioma instantânea sem recarregar a página, conforme solicitado.

> [!IMPORTANT]
> **Revisão Necessária**: A abordagem técnica escolhida envolve migrar o conteúdo textual de arquivos estáticos (`.astro`) para dicionários de tradução em um arquivo centralizado (`.ts`) e o encapsulamento de conteúdos puramente textuais (como a Política de Privacidade) em componentes React. Isso garante a reatividade instantânea (troca "ao vivo" sem reload) em todo o site.

> [!IMPORTANT]
> **Padrão Universal (Presente e Futuro)**: O sistema de tradução será estabelecido como um padrão arquitetural estrito do projeto. **Tudo** no site será traduzido agora, e qualquer nova página ou componente criado no futuro deverá obrigatoriamente utilizar este sistema multi-idiomas, garantindo que 100% da aplicação se mantenha traduzível.

## Proposed Changes

### 1. Sistema Central de Tradução (`src/i18n`)

#### [NEW] `src/i18n/store.ts`
Criaremos um gerenciador de estado simples (Vanilla JS) que:
- Detecta o idioma do navegador (`navigator.language`) na primeira visita.
- Aplica PT-BR como fallback.
- Salva e recupera o idioma atual do `localStorage`.
- Dispara eventos globais (`lang-change`) para notificar a interface sobre trocas de idioma.

#### [NEW] `src/i18n/useTranslation.ts`
Um *hook* customizado do React que se inscreve nos eventos do `store.ts` e força uma nova renderização (re-render) dos componentes sempre que o idioma muda. Ele retornará uma função `t(key)` para buscar o texto correto.

#### [NEW] `src/i18n/translations.ts`
O arquivo mestre com todos os textos do site, estruturado por seções e por idiomas (`pt`, `en`, `es`).

---

### 2. Seletor de Idioma no Header

#### [MODIFY] `src/components/Header.tsx`
- Adicionaremos o seletor visual (dropdown) na parte direita da navegação desktop.
- No mobile, o seletor será integrado de forma harmoniosa no menu "hamburguer", não quebrando o layout.
- O dropdown exibirá as opções com as bandeiras: `🇧🇷 Português`, `🇺🇸 English`, `🇲🇽 Español`.
- Os itens de navegação (Home, Soluções, etc.) passarão a usar a função de tradução.

---

### 3. Refatoração dos Componentes React Atuais

Os componentes abaixo terão seus textos "chumbados" (hardcoded) substituídos por chamadas ao dicionário de tradução (`t('chave_do_texto')`):

#### [MODIFY] `src/components/ui/animated-hero.tsx`
#### [MODIFY] `src/components/ui/ClientLogos.tsx`
#### [MODIFY] `src/components/ui/SolucoesSection.tsx`
#### [MODIFY] `src/components/ui/CasosDeUsoSection.tsx`
#### [MODIFY] `src/components/ui/AntesEDepoisSection.tsx`
#### [MODIFY] `src/components/CTASection.tsx`
#### [MODIFY] `src/components/FAQ.tsx`
#### [MODIFY] `src/components/Footer.tsx`

---

### 4. Ajustes na Arquitetura Astro (Reatividade)

Astro renderiza HTML estático no servidor. Para que a troca de idiomas seja instantânea sem "reload" da página, os dados textuais não podem ser apenas passados via propriedades no arquivo `.astro`. 

#### [MODIFY] `src/pages/index.astro`
- Removeremos a definição de dados estáticos como `painPoints`, `faqItems` e `features` do arquivo `.astro`. Estes passarão a viver internamente no dicionário de traduções, e os componentes React (`FAQ`, `CasosDeUsoSection`) buscarão os dados diretamente de lá.

#### [MODIFY] `src/pages/politicas-de-privacidade.astro`
- O texto estático atual de políticas será convertido para consumir as traduções.
- **Abordagem proposta**: Criaremos um componente React `<PrivacyPolicyContent client:load />` que conterá todo o texto e marcação da política. O arquivo `.astro` apenas chamará este componente. Isso garante a troca imediata de idioma da política sem recarregar a página e sem riscos de corromper a marcação HTML.

---

## Verification Plan

### Testes Manuais
- Acessar o site e verificar se o idioma padrão (PT-BR) é selecionado.
- Alterar o idioma no Header para `English` e verificar se:
  - Todo o texto da página inicial muda instantaneamente.
  - A página de "Políticas" reflete a mudança.
- Recarregar a página e confirmar se o idioma salvo (`English`) é mantido via `localStorage`.
- Testar o comportamento responsivo do menu no mobile com o seletor de idiomas presente.
- Validar as formatações nativas solicitadas, como moedas (`R$`, `$`).
