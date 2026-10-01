import { SHOW_PLACEHOLDERS } from '../data/site';
import { withBase } from '../lib/paths';
import { en } from './en';
import { pt, type Dict } from './pt';

export type Lang = 'pt' | 'en';
export type { Dict };

const DICTS: Record<Lang, Dict> = { pt, en };

export const useT = (lang: Lang): Dict => DICTS[lang];

/** Equivalent pages in each language, used by the language switch and hreflang. */
export const ROUTES = {
  home: { pt: '/', en: '/en/' },
  privacy: { pt: '/privacidade/', en: '/en/privacy/' },
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Public href of a page, including the base path. */
export const routeHref = (route: RouteKey, lang: Lang): string => withBase(ROUTES[route][lang]);

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Renders the copy conventions: *text* → <em>, \n → <br>. Input is escaped first. */
export const rich = (s: string): string =>
  escapeHtml(s)
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');

/** Same text without markup, for attributes and meta tags. */
export const plain = (s: string): string => s.replace(/\*/g, '').replace(/\n/g, ' ');

export type SectionId = 'servicos' | 'sobre' | 'equipa' | 'calendario' | 'testemunhos' | 'faq' | 'contactos';

/** Visible members/testimonials: placeholders are dropped in production. */
export const visibleTeam = (t: Dict) => t.team.members.filter((m) => SHOW_PLACEHOLDERS || !m.placeholder);
export const visibleTestimonials = (t: Dict) =>
  t.testimonials.items.filter((i) => SHOW_PLACEHOLDERS || !i.placeholder);

/** Navigation entries, skipping sections that have nothing to show. */
export const navItems = (t: Dict): { id: SectionId; label: string }[] => {
  const hidden = new Set<SectionId>();
  if (visibleTeam(t).length === 0) hidden.add('equipa');
  if (visibleTestimonials(t).length === 0) hidden.add('testemunhos');
  return (Object.keys(t.nav) as SectionId[])
    .filter((id) => !hidden.has(id))
    .map((id) => ({ id, label: t.nav[id] }));
};
