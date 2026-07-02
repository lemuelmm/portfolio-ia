import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://lemueldesign.com',
  trailingSlash: 'ignore',

  build: {
    format: 'directory',
  },

  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  adapter: cloudflare()
});