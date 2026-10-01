// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Public URL of the site, used for canonical links, hreflang and the sitemap.
 * Priority: explicit SITE_URL > Vercel production domain > local dev.
 */
const SITE_URL =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export default defineConfig({
  site: SITE_URL,
  // "/" on Vercel; "/algarismo-sul" for the GitHub Pages preview (set by CI).
  base: process.env.BASE_PATH ?? '/',
  // Directory URLs with trailing slash (/en/, /privacidade/): served natively by
  // GitHub Pages and by Vercel (trailingSlash: true), with no ambiguity.
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  build: {
    format: 'directory',
    // ~8 KB gzipped: inlining removes the render-blocking CSS requests.
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pt', locales: { pt: 'pt-PT', en: 'en' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
