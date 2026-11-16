// Agenda de demonstração no HubSpot. Único lugar com essa URL: todos os botões
// "Solicitar demo" do site apontam para cá.
// Portal da Dinn na região EU1 (meetings-eu1), o mesmo da main. Sem nome nem
// e-mail na URL: dado pessoal não vai em parâmetro de link.
export const DEMO_URL = 'https://meetings-eu1.hubspot.com/eduardo-fonseca';

// Porta de entrada de todo pedido de contato ou demonstração: o formulário em
// /contato, primeira camada do funil (estágio "Captado"). A agenda acima passa
// a ser o passo seguinte, mostrado depois do envio.
export const CONTACT_PATH = '/contato';

/** Link para o formulário, com o ponto do site de onde a pessoa veio
 *  (`origem`, ex.: "menu", "home-final", "artigo-<slug>"). Não usa utm_*:
 *  parâmetro de campanha em link interno reinicia a origem da sessão no GA4. */
export const contactUrl = (origin?: string) =>
  origin ? `${CONTACT_PATH}?origem=${encodeURIComponent(origin)}` : CONTACT_PATH;
