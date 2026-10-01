/**
 * Fonte única dos dados de contacto e identidade da empresa.
 * Os campos com `placeholder: true` ainda aguardam os dados reais do cliente.
 */

export interface SocialLink {
  readonly name: 'Facebook' | 'Instagram' | 'LinkedIn';
  /** Vazio = rede ainda não indicada; o ícone não é mostrado. */
  readonly url: string;
}

const ADDRESS = {
  street: 'Rua D. João de Castro, n.º 84C',
  postalCode: '2800-104',
  locality: 'Almada',
  region: 'Setúbal',
  country: 'PT',
} as const;

const MAPS_QUERY = encodeURIComponent(`${ADDRESS.street}, ${ADDRESS.postalCode} ${ADDRESS.locality}`);

export const SITE = {
  name: 'Algarismo Sul',
  phone: {
    /** Non-breaking spaces keep the number on one line. */
    display: '+351 212 000 000',
    tel: '+351212000000',
    placeholder: true,
  },
  /** Número em formato internacional sem "+" para wa.me. */
  whatsapp: { number: '351212000000', placeholder: true },
  email: { address: 'geral@algarismosul.pt', placeholder: true },
  address: ADDRESS,
  /** "2800-104 Almada" */
  postalLine: `${ADDRESS.postalCode} ${ADDRESS.locality}`,
  maps: {
    link: `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`,
    embed: `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`,
  },
  areaServed: ['Almada', 'Seixal', 'Barreiro', 'Setúbal', 'Margem Sul'],
  socials: [
    { name: 'LinkedIn', url: '' },
    { name: 'Instagram', url: '' },
    { name: 'Facebook', url: '' },
  ] satisfies readonly SocialLink[],
  complaintsBook: 'https://www.livroreclamacoes.pt/inicio',
  taxAgenda: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/calendario_fiscal/Pages/obrigacoes.aspx',
} as const;

export const activeSocials = (): readonly SocialLink[] => SITE.socials.filter((s) => s.url !== '');

/**
 * Conteúdo provisório (equipa e testemunhos inventados) só aparece em
 * desenvolvimento e nos previews do Vercel, nunca em produção.
 */
export const SHOW_PLACEHOLDERS = process.env.VERCEL_ENV !== 'production';

/**
 * Preview builds (e.g. GitHub Pages) are kept out of search engines so they
 * never compete with the production domain. Set SITE_NOINDEX=true to enable.
 */
export const NOINDEX = process.env.SITE_NOINDEX === 'true';
