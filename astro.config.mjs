import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rss from '@astrojs/rss';
import ts from '@astrojs/typescript';

export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [tailwind(), mdx(), sitemap(), rss(), ts()],
});
