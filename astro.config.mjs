import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tedsvoiceacademy.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/success') && !page.includes('/404'),
    }),
  ],
  build: {
    assets: 'assets'
  },
  vite: {
    css: {
      devSourcemap: true
    }
  }
});
