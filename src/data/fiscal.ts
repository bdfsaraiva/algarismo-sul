/**
 * Calendário fiscal português.
 *
 * Gera, a partir da data do visitante, os prazos gerais da Autoridade
 * Tributária e Aduaneira (AT) e da Segurança Social (SS). Regras aplicadas:
 *
 * 1. Prazo em fim de semana ou feriado nacional → dia útil seguinte.
 * 2. "Férias fiscais" (art. 57.º-A da LGT, Lei n.º 7/2021): obrigações da AT
 *    cujo prazo termine em agosto podem ser cumpridas até 31 de agosto, ainda
 *    que não seja dia útil. Um prazo legal que já é 31 de agosto segue a regra
 *    geral (fim de semana → setembro). Não se aplica à Segurança Social.
 * 3. IVA periódico (declaração e pagamento) com prazo em agosto passa para
 *    20/25 de setembro, como tem sido prática da AT (ver agenda fiscal anual).
 *
 * Prorrogações pontuais por despacho (ex.: Modelo 22 em 2026, prorrogado
 * para 30/06 pelo Despacho n.º 81/2026) não são previstas e devem ser
 * confirmadas na agenda fiscal oficial:
 * https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/calendario_fiscal/
 */

export type Lang = 'pt' | 'en';
export type Authority = 'AT' | 'SS';
export type Tag = 'IVA' | 'IRS' | 'IRC' | 'IRS/IRC' | 'IS' | 'SS' | 'IMI' | 'IES' | 'AT';

export interface Obligation {
  readonly id: string;
  /** Dia legal do prazo; `'last'` = último dia do mês. */
  readonly day: number | 'last';
  /** Meses (0–11) em que o prazo ocorre. Omitido = todos os meses. */
  readonly months?: readonly number[];
  readonly tag: Tag;
  readonly authority: Authority;
  /** Dia de setembro para onde passa o prazo de IVA que calhe em agosto. */
  readonly ivaSeptemberDay?: number;
  /** Abertura de um período (não é prazo-limite): não é deslocada. */
  readonly isStart?: boolean;
  readonly title: Readonly<Record<Lang, string>>;
}

export interface FiscalEvent {
  readonly id: string;
  readonly date: Date;
  readonly tag: Tag;
  readonly title: string;
  readonly isStart: boolean;
}

const AUGUST = 7;
const SEPTEMBER = 8;
const QUARTER_MONTHS = [1, 4, 7, 10] as const; // fev, mai, ago, nov

export const OBLIGATIONS: readonly Obligation[] = [
  // ── Mensais ──────────────────────────────────────────────────────────
  {
    id: 'efatura',
    day: 5,
    tag: 'AT',
    authority: 'AT',
    title: {
      pt: 'Comunicação das faturas à AT (e-Fatura / SAF-T)',
      en: 'Invoice reporting to the Tax Authority (e-Fatura / SAF-T)',
    },
  },
  {
    id: 'dmr',
    day: 10,
    tag: 'IRS',
    authority: 'AT',
    title: {
      pt: 'Declaração Mensal de Remunerações (DMR)',
      en: 'Monthly Remuneration Statement (DMR)',
    },
  },
  {
    id: 'ss-declaracao',
    day: 10,
    tag: 'SS',
    authority: 'SS',
    title: {
      pt: 'Segurança Social — declaração de remunerações',
      en: 'Social Security — remuneration statement',
    },
  },
  {
    id: 'retencoes',
    day: 20,
    tag: 'IRS/IRC',
    authority: 'AT',
    title: {
      pt: 'Retenções na fonte de IRS e IRC — pagamento',
      en: 'IRS and IRC withholding tax — payment',
    },
  },
  {
    id: 'selo',
    day: 20,
    tag: 'IS',
    authority: 'AT',
    title: {
      pt: 'Imposto do Selo — declaração mensal e pagamento',
      en: 'Stamp Duty — monthly return and payment',
    },
  },
  {
    id: 'ss-pagamento',
    day: 20,
    tag: 'SS',
    authority: 'SS',
    title: {
      pt: 'Segurança Social — pagamento de contribuições',
      en: 'Social Security — payment of contributions',
    },
  },
  {
    id: 'iva-recapitulativa',
    day: 20,
    tag: 'IVA',
    authority: 'AT',
    title: {
      pt: 'IVA — declaração recapitulativa (regime mensal)',
      en: 'VAT — EC sales list (monthly)',
    },
  },
  {
    id: 'iva-dp-mensal',
    day: 20,
    tag: 'IVA',
    authority: 'AT',
    ivaSeptemberDay: 20,
    title: {
      pt: 'IVA — declaração periódica (regime mensal)',
      en: 'VAT — periodic return (monthly scheme)',
    },
  },
  {
    id: 'iva-pag-mensal',
    day: 25,
    tag: 'IVA',
    authority: 'AT',
    ivaSeptemberDay: 25,
    title: {
      pt: 'IVA — pagamento (regime mensal)',
      en: 'VAT — payment (monthly scheme)',
    },
  },

  // ── Trimestrais ──────────────────────────────────────────────────────
  {
    id: 'iva-dp-trimestral',
    day: 20,
    months: QUARTER_MONTHS,
    tag: 'IVA',
    authority: 'AT',
    ivaSeptemberDay: 20,
    title: {
      pt: 'IVA — declaração periódica (regime trimestral)',
      en: 'VAT — periodic return (quarterly scheme)',
    },
  },
  {
    id: 'iva-pag-trimestral',
    day: 25,
    months: QUARTER_MONTHS,
    tag: 'IVA',
    authority: 'AT',
    ivaSeptemberDay: 25,
    title: {
      pt: 'IVA — pagamento (regime trimestral)',
      en: 'VAT — payment (quarterly scheme)',
    },
  },

  // ── Anuais ───────────────────────────────────────────────────────────
  {
    id: 'inventarios',
    day: 31,
    months: [0],
    tag: 'AT',
    authority: 'AT',
    title: {
      pt: 'Comunicação dos inventários à AT',
      en: 'Year-end inventory report to the Tax Authority',
    },
  },
  {
    id: 'modelo-10',
    day: 10,
    months: [1],
    tag: 'IRS',
    authority: 'AT',
    title: {
      pt: 'Modelo 10 — rendimentos e retenções do ano anterior',
      en: 'Form 10 — prior-year income and withholdings',
    },
  },
  {
    id: 'agregado-familiar',
    day: 15,
    months: [1],
    tag: 'IRS',
    authority: 'AT',
    title: {
      pt: 'IRS — comunicação do agregado familiar',
      en: 'IRS — household composition update',
    },
  },
  {
    id: 'efatura-validacao',
    day: 25,
    months: [1],
    tag: 'IRS',
    authority: 'AT',
    title: {
      pt: 'IRS — validação das faturas no e-Fatura',
      en: 'IRS — validate invoices on e-Fatura',
    },
  },
  {
    id: 'irs-modelo3-inicio',
    day: 1,
    months: [3],
    tag: 'IRS',
    authority: 'AT',
    isStart: true,
    title: {
      pt: 'IRS — início da entrega do Modelo 3',
      en: 'IRS — Form 3 filing period opens',
    },
  },
  {
    id: 'modelo-22',
    day: 'last',
    months: [4],
    tag: 'IRC',
    authority: 'AT',
    title: {
      pt: 'IRC — Modelo 22 (declaração e autoliquidação)',
      en: 'IRC — Form 22 (corporate tax return and payment)',
    },
  },
  {
    id: 'imi-1',
    day: 'last',
    months: [4],
    tag: 'IMI',
    authority: 'AT',
    title: {
      pt: 'IMI — pagamento único ou 1.ª prestação',
      en: 'IMI property tax — single payment or 1st instalment',
    },
  },
  {
    id: 'irs-modelo3-fim',
    day: 30,
    months: [5],
    tag: 'IRS',
    authority: 'AT',
    title: {
      pt: 'IRS — prazo final de entrega do Modelo 3',
      en: 'IRS — Form 3 filing deadline',
    },
  },
  {
    id: 'ies',
    day: 15,
    months: [6],
    tag: 'IES',
    authority: 'AT',
    title: {
      pt: 'IES — Informação Empresarial Simplificada',
      en: 'IES — Simplified Business Information',
    },
  },
  {
    id: 'irs-pagamento-conta',
    day: 20,
    months: [6, 8, 11],
    tag: 'IRS',
    authority: 'AT',
    title: {
      pt: 'IRS — pagamento por conta (categoria B)',
      en: 'IRS — payment on account (self-employed)',
    },
  },
  {
    id: 'irc-pagamento-conta-1',
    day: 'last',
    months: [6],
    tag: 'IRC',
    authority: 'AT',
    title: {
      pt: 'IRC — 1.º pagamento por conta e adicional por conta',
      en: 'IRC — 1st payment on account (incl. state surtax)',
    },
  },
  {
    id: 'irc-pagamento-conta-2',
    day: 'last',
    months: [8],
    tag: 'IRC',
    authority: 'AT',
    title: {
      pt: 'IRC — 2.º pagamento por conta e adicional por conta',
      en: 'IRC — 2nd payment on account (incl. state surtax)',
    },
  },
  {
    id: 'irc-pagamento-conta-3',
    day: 15,
    months: [11],
    tag: 'IRC',
    authority: 'AT',
    title: {
      pt: 'IRC — 3.º pagamento por conta e adicional por conta',
      en: 'IRC — 3rd payment on account (incl. state surtax)',
    },
  },
  {
    id: 'imi-2',
    day: 'last',
    months: [7],
    tag: 'IMI',
    authority: 'AT',
    title: {
      pt: 'IMI — 2.ª prestação (imposto superior a 500 €)',
      en: 'IMI property tax — 2nd instalment (tax above €500)',
    },
  },
  {
    id: 'aimi',
    day: 30,
    months: [8],
    tag: 'IMI',
    authority: 'AT',
    title: {
      pt: 'AIMI — adicional ao IMI',
      en: 'AIMI — additional property tax',
    },
  },
  {
    id: 'imi-final',
    day: 30,
    months: [10],
    tag: 'IMI',
    authority: 'AT',
    title: {
      pt: 'IMI — última prestação',
      en: 'IMI property tax — final instalment',
    },
  },
];

// ── Feriados nacionais (Código do Trabalho, art. 234.º) ─────────────────

/** [mês 0–11, dia] */
const FIXED_HOLIDAYS: ReadonlyArray<readonly [number, number]> = [
  [0, 1], // Ano Novo
  [3, 25], // Dia da Liberdade
  [4, 1], // Dia do Trabalhador
  [5, 10], // Dia de Portugal
  [7, 15], // Assunção de Nossa Senhora
  [9, 5], // Implantação da República
  [10, 1], // Todos os Santos
  [11, 1], // Restauração da Independência
  [11, 8], // Imaculada Conceição
  [11, 25], // Natal
];

/** Domingo de Páscoa (algoritmo de Meeus/Jones/Butcher, calendário gregoriano). */
export function easterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month, day);
}

const movableCache = new Map<number, readonly Date[]>();

/** Sexta-feira Santa, Páscoa e Corpo de Deus. */
export function movableHolidays(year: number): readonly Date[] {
  const cached = movableCache.get(year);
  if (cached) return cached;
  const easter = easterSunday(year);
  const offset = (days: number) =>
    new Date(easter.getFullYear(), easter.getMonth(), easter.getDate() + days);
  const result = [offset(-2), easter, offset(60)];
  movableCache.set(year, result);
  return result;
}

export function isHoliday(date: Date): boolean {
  const m = date.getMonth();
  const d = date.getDate();
  if (FIXED_HOLIDAYS.some(([hm, hd]) => hm === m && hd === d)) return true;
  return movableHolidays(date.getFullYear()).some((h) => h.getMonth() === m && h.getDate() === d);
}

export function isWorkday(date: Date): boolean {
  const weekday = date.getDay();
  return weekday !== 0 && weekday !== 6 && !isHoliday(date);
}

/** Devolve `date` se for dia útil; caso contrário, o dia útil seguinte. */
export function nextWorkday(date: Date): Date {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  while (!isWorkday(d)) d.setDate(d.getDate() + 1);
  return d;
}

function lastDayOfMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/** Data-limite efetiva de uma obrigação cujo prazo legal cai em `year`/`month`. */
export function resolveDueDate(ob: Obligation, year: number, month: number): Date {
  const day = ob.day === 'last' ? lastDayOfMonth(year, month) : ob.day;
  const legal = new Date(year, month, day);
  if (ob.isStart) return legal;

  const shifted = nextWorkday(legal);
  const endsInAugust = legal.getMonth() === AUGUST || shifted.getMonth() === AUGUST;
  if (ob.authority !== 'AT' || !endsInAugust) return shifted;

  if (ob.ivaSeptemberDay !== undefined) {
    return nextWorkday(new Date(legal.getFullYear(), SEPTEMBER, ob.ivaSeptemberDay));
  }
  const augustEnd = new Date(legal.getFullYear(), AUGUST, 31);
  // A deadline that is already 31 August gains nothing from art. 57.º-A: the
  // general rule applies (AT agenda: IMI on 2/9/2024 and 1/9/2025).
  if (legal.getTime() === augustEnd.getTime()) return shifted;
  // Art. 57.º-A LGT: until 31 August, even when it is not a workday
  // (AT agenda: withholding tax due 31/8 in 2024 and 2025, a Saturday/Sunday).
  return augustEnd;
}

/** Calendar day (at local midnight) currently showing in `timeZone`. */
export function calendarDateIn(timeZone: string, now: Date = new Date()): Date {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: 'numeric', day: 'numeric' }).formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes) => Number(parts.find((p) => p.type === type)?.value);
  return new Date(part('year'), part('month') - 1, part('day'));
}

function appliesInMonth(ob: Obligation, month: number): boolean {
  return ob.months === undefined || ob.months.includes(month);
}

/**
 * Prazos desde `from` (inclusive) até ao fim do mês `from + monthsAhead`,
 * ordenados por data. Prazos repetidos no mesmo dia (ex.: IVA de agosto
 * que passa para setembro) aparecem uma só vez.
 */
export function upcomingEvents(from: Date, lang: Lang, monthsAhead = 2): FiscalEvent[] {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const end = new Date(from.getFullYear(), from.getMonth() + monthsAhead + 1, 0);

  const events: FiscalEvent[] = [];
  const seen = new Set<string>();
  // Começa um mês antes: um prazo legal pode ser deslocado para a janela.
  for (let offset = -1; offset <= monthsAhead; offset++) {
    const ref = new Date(start.getFullYear(), start.getMonth() + offset, 1);
    const year = ref.getFullYear();
    const month = ref.getMonth();
    for (const ob of OBLIGATIONS) {
      if (!appliesInMonth(ob, month)) continue;
      const date = resolveDueDate(ob, year, month);
      if (date < start || date > end) continue;
      const key = `${date.getTime()}|${ob.id}`;
      if (seen.has(key)) continue;
      seen.add(key);
      events.push({ id: ob.id, date, tag: ob.tag, title: ob.title[lang], isStart: ob.isStart ?? false });
    }
  }
  return events.sort((a, b) => a.date.getTime() - b.date.getTime());
}
