import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://lemueldesign.com',
  trailingSlash: 'ignore',

  build: {
    format: 'directory',
  },

  adapter: cloudflare()
});