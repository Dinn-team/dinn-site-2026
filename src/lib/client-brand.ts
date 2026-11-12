// Cor de cada case nos cartões e nos heróis (/clientes e /clientes/<slug>). A chave é o endereço público do case.
// O arquivo-base é um degradê de public/gradients e o filtro CSS gira o matiz para a
// cor da marca do cliente: roxo para verde, vermelho, azul…
// Marjan mistura verde, azul e laranja, por isso usa o degradê verde-água, mais saturado.


export const CLIENT_BRAND: Record<string, { g: string; filter: string }> = {
  'localizador-para-sac': { g: 'g00', filter: 'hue-rotate(190deg) saturate(1.3) brightness(1.75)' },
  'oportunidades-de-mercado': { g: 'g00', filter: 'hue-rotate(95deg) saturate(1.5) brightness(1.4)' },
  'carteira-de-medicos': { g: 'g00', filter: 'hue-rotate(-35deg) saturate(1.1)' },
  'forca-de-vendas-global': { g: 'g08', filter: 'none' },
  'ruptura-no-pdv': { g: 'g06', filter: 'saturate(2.3) brightness(1) contrast(1.05)' },
};

export const CLIENT_BRAND_FALLBACK = { g: 'g00', filter: 'none' };

export const brandOf = (slug: string) => CLIENT_BRAND[slug] ?? CLIENT_BRAND_FALLBACK;
