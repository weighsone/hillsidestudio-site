// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// With a custom domain: set site to your domain and remove base.
// Without a custom domain: keep site as below and add base: '/hillsidestudio-site'
export default defineConfig({
  site: 'https://weighsone.github.io/hillsidestudio-site',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
