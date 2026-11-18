// Os arquivos são brancos: a faixa pinta cada logo com `color` (cor da marca), como nos demais logos.
// Logos dos clientes usados na faixa "Clientes" da home (QuemAtende2). Arquivos em public/clientes.
// A chave é a mesma de src/data/client-gains.ts. Na home o logo aparece pintado com a cor da marca
// sobre o fundo branco e leva a /clientes, não à página de cada case. A decisão de 16/11/2026 reverte a de
// 12/11/2026 só para a faixa da home: nome e logo de cliente seguem fora das páginas de case.

export type ClientLogo = { name: string; src: string; width: number; height: number; color: string };

export const CLIENT_LOGOS: Record<string, ClientLogo> = {
  eurofarma: { name: 'Eurofarma', src: '/clientes/2TT34cxYkS2JUU2rklS0yDIU5c.avif', width: 512, height: 92, color: '#0B4DA2' },
  libbs: { name: 'Libbs', src: '/clientes/YewE4auu86Zyxd9HTI5pPwyZujk.avif', width: 512, height: 189, color: '#00A651' },
  marjan: { name: 'Marjan', src: '/clientes/marjanlogo-removebg-preview.png', width: 392, height: 129, color: '#00A19B' },
  sanofi: { name: 'Sanofi', src: '/clientes/q5GXskJxl7qrQpg4qttvwnhJI.avif', width: 512, height: 132, color: '#7A00E6' },
  lilly: { name: 'Lilly', src: '/clientes/lilly-logo-png.png', width: 1631, height: 889, color: '#E4002B' },
};
