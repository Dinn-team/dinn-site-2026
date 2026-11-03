// Cor de cada cliente nos cartões e nos heróis (home, /clientes e /clientes/<slug>).
// O arquivo-base é um degradê de public/gradients e o filtro CSS gira o matiz para a
// cor da marca do cliente: roxo para verde, vermelho, azul…
// Marjan mistura verde, azul e laranja, por isso usa o degradê verde-água, mais saturado.

export const CLIENT_ORDER = ['Libbs', 'Lilly', 'Eurofarma', 'Marjan', 'Sanofi'];

export const CLIENT_BRAND: Record<string, { g: string; filter: string }> = {
  Libbs: { g: 'g00', filter: 'hue-rotate(190deg) saturate(1.3) brightness(1.75)' },
  Lilly: { g: 'g00', filter: 'hue-rotate(95deg) saturate(1.5) brightness(1.4)' },
  Eurofarma: { g: 'g00', filter: 'hue-rotate(-35deg) saturate(1.1)' },
  Sanofi: { g: 'g08', filter: 'none' },
  Marjan: { g: 'g06', filter: 'saturate(2.3) brightness(1) contrast(1.05)' },
};

export const CLIENT_BRAND_FALLBACK = { g: 'g00', filter: 'none' };

export const brandOf = (name: string) => CLIENT_BRAND[name] ?? CLIENT_BRAND_FALLBACK;
