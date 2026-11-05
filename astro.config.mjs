import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Base para URLs absolutas (canonical, og:url, sitemap). Sem isso o
  // @astrojs/sitemap não gera nada e as tags canônicas ficam relativas.
  site: process.env.PUBLIC_SITE_URL || 'https://dinn.ai',

  integrations: [
    react(),
    sitemap({
      // /feedback-pt é formulário interno; não deve ser indexado nem listado.
      filter: (page) => !page.includes('/feedback-pt'),
    }),
  ],

  // O Astro não lê PORT sozinho; sem isso o dev server ignora a porta atribuída
  // pelo ambiente e tenta sempre a 4321.
  server: {
    port: Number(process.env.PORT) || 4321,
  },

  redirects: {
    '/blog/[slug]': '/articles/[slug]',
    // O ranking de laboratórios mora em /clientes (05/11/2026)
    '/laboratorios': '/clientes#ranking',
    // Funcionalidades que viraram parte das nove (03/11/2026)
    '/funcionalidades/disponibilidade': '/funcionalidades/ruptura',
    '/funcionalidades/estimado': '/funcionalidades/ruptura',
    '/funcionalidades/historico': '/funcionalidades/ruptura',
    '/funcionalidades/giro-preco': '/funcionalidades/giro',
    '/funcionalidades/tempo-real': '/funcionalidades/localizador',
    '/funcionalidades/insights': '/funcionalidades/jean',
    '/funcionalidades/priorizacao': '/funcionalidades/jean',
    '/funcionalidades/exportacoes': '/produtos/conecta',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
