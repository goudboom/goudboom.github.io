// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import oldUrls from './integrations/old-urls.ts';

export default defineConfig({
  site: 'https://goudboom.nl',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [mdx(), sitemap(), oldUrls()],
  devToolbar: { enabled: false },
  vite: {
    build: {
      rollupOptions: {
        // Astro's own content-assets plugin injects "use astro:head-inject" into every MDX entry with
        // components; the bundler flags it although it is harmless. Silence only that message.
        onwarn(warning, warn) {
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && String(warning.message).includes('astro:head-inject')) return;
          warn(warning);
        },
      },
    },
  },
});
