// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ash-elm.ca',
	integrations: [mdx(), sitemap()],
	// If you want to add Tailwind CSS in the future, you can uncomment this section:
	// integrations: [mdx(), sitemap(), tailwind()],
});