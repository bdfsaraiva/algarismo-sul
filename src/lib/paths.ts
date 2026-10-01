/**
 * Prefixes the configured base path, so the site works both at a domain root
 * (Vercel) and under a sub-path (GitHub Pages project site, e.g. /algarismo-sul).
 * External URLs and in-page anchors are returned unchanged.
 */
export const withBase = (path: string): string => {
  if (/^(?:[a-z]+:|#|\/\/)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};
