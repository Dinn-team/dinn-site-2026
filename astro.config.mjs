import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

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