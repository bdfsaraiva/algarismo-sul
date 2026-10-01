import type { APIRoute } from 'astro';
import { NOINDEX } from '../data/site';
import { withBase } from '../lib/paths';

export const GET: APIRoute = ({ site }) => {
  const body = NOINDEX
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL(withBase('/sitemap-index.xml'), site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
