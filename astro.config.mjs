// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // SUSTITUYE CON TU DOMINIO REAL
  site: 'https://www.cumbresymareas.com.ar',
  integrations: [sitemap()],
});