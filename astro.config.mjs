import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.cumbresymareas.com.ar',
  integrations: [sitemap()],
  output: 'static', // Agrega esta línea
  adapter: cloudflare(),
});