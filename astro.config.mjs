import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tedsvoiceacademy.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/success'),
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
