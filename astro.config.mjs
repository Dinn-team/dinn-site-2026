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
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
