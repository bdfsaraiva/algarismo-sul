import { describe, expect, it } from 'vitest';
import {
  OBLIGATIONS,
  calendarDateIn,
  easterSunday,
  isHoliday,
  nextWorkday,
  resolveDueDate,
  upcomingEvents,
  type Obligation,
} from './fiscal';

const ymd = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const ob = (id: string): Obligation => {
  const found = OBLIGATIONS.find((o) => o.id === id);
  if (!found) throw new Error(`Unknown obligation ${id}`);
  return found;
};

describe('feriados nacionais', () => {
  it('calcula a Páscoa', () => {
    expect(ymd(easterSunday(2025))).toBe('2025-04-20');
    expect(ymd(easterSunday(2026))).toBe('2026-04-05');
    expect(ymd(easterSunday(2027))).toBe('2027-03-28');
  });

  it('reconhece feriados móveis (Sexta-feira Santa e Corpo de Deus)', () => {
    expect(isHoliday(new Date(2026, 3, 3))).toBe(true);
    expect(isHoliday(new Date(2026, 5, 4))).toBe(true);
    expect(isHoliday(new Date(2026, 5, 5))).toBe(false);
  });

  it.each([
    [0, 1], [3, 25], [4, 1], [5, 10], [7, 15], [9, 5], [10, 1], [11, 1], [11, 8], [11, 25],
  ])('reconhece o feriado fixo %i/%i', (month, day) => {
    expect(isHoliday(new Date(2026, month, day))).toBe(true);
  });

  it('não trata 15 de setembro como feriado', () => {
    expect(isHoliday(new Date(2026, 8, 15))).toBe(false);
  });
});

describe('dia útil seguinte', () => {
  it('passa sábados e domingos', () => {
    expect(ymd(nextWorkday(new Date(2026, 9, 10)))).toBe('2026-10-12');
  });
  it('passa feriados', () => {
    expect(ymd(nextWorkday(new Date(2026, 9, 5)))).toBe('2026-10-06');
  });
  it('passa feriado seguido de fim de semana', () => {
    expect(ymd(nextWorkday(new Date(2026, 11, 25)))).toBe('2026-12-28');
  });
});

// Oráculo: "Resumo anual — Obrigações de pagamento em 2026", Portal das Finanças.
describe('agenda oficial da AT para 2026', () => {
  it('retenções na fonte: 20 do mês, 31 em agosto', () => {
    const days = Array.from({ length: 12 }, (_, m) => resolveDueDate(ob('retencoes'), 2026, m).getDate());
    expect(days).toEqual([20, 20, 20, 20, 20, 22, 20, 31, 21, 20, 20, 21]);
  });

  it('pagamento do IVA mensal (o de agosto passa para 25 de setembro)', () => {
    const dates = Array.from({ length: 12 }, (_, m) => ymd(resolveDueDate(ob('iva-pag-mensal'), 2026, m)));
    expect(dates).toEqual([
      '2026-01-26', '2026-02-25', '2026-03-25', '2026-04-27', '2026-05-25', '2026-06-25',
      '2026-07-27', '2026-09-25', '2026-09-25', '2026-10-26', '2026-11-25', '2026-12-28',
    ]);
  });

  it('IVA trimestral', () => {
    const dates = [1, 4, 7, 10].map((m) => ymd(resolveDueDate(ob('iva-pag-trimestral'), 2026, m)));
    expect(dates).toEqual(['2026-02-25', '2026-05-25', '2026-09-25', '2026-11-25']);
    expect(ymd(resolveDueDate(ob('iva-dp-trimestral'), 2026, 7))).toBe('2026-09-21');
  });

  it('pagamentos por conta de IRC e IRS', () => {
    expect(ymd(resolveDueDate(ob('irc-pagamento-conta-1'), 2026, 6))).toBe('2026-07-31');
    expect(ymd(resolveDueDate(ob('irc-pagamento-conta-2'), 2026, 8))).toBe('2026-09-30');
    expect(ymd(resolveDueDate(ob('irc-pagamento-conta-3'), 2026, 11))).toBe('2026-12-15');
    const irs = [6, 8, 11].map((m) => ymd(resolveDueDate(ob('irs-pagamento-conta'), 2026, m)));
    expect(irs).toEqual(['2026-07-20', '2026-09-21', '2026-12-21']);
  });

  it('IMI e AIMI', () => {
    expect(ymd(resolveDueDate(ob('imi-1'), 2026, 4))).toBe('2026-06-01');
    expect(ymd(resolveDueDate(ob('imi-2'), 2026, 7))).toBe('2026-08-31');
    expect(ymd(resolveDueDate(ob('imi-final'), 2026, 10))).toBe('2026-11-30');
    expect(ymd(resolveDueDate(ob('aimi'), 2026, 8))).toBe('2026-09-30');
  });
});

// Oráculo: resumos anuais de 2022, 2024 e 2025 do Portal das Finanças
// (anos em que 31/07 ou 31/08 calharam ao fim de semana).
describe('agenda oficial da AT para 2024 e 2025', () => {
  const days = (id: string, year: number) =>
    Array.from({ length: 12 }, (_, m) => resolveDueDate(ob(id), year, m).getDate());

  it('retenções na fonte (31/08 mantém-se mesmo ao sábado/domingo)', () => {
    expect(days('retencoes', 2024)).toEqual([22, 20, 20, 22, 20, 20, 22, 31, 20, 21, 20, 20]);
    expect(days('retencoes', 2025)).toEqual([20, 20, 20, 21, 20, 20, 21, 31, 22, 20, 20, 22]);
  });

  it('IMI com prazo legal a 31/08 ao fim de semana passa para setembro', () => {
    expect(ymd(resolveDueDate(ob('imi-2'), 2024, 7))).toBe('2024-09-02');
    expect(ymd(resolveDueDate(ob('imi-2'), 2025, 7))).toBe('2025-09-01');
    expect(ymd(resolveDueDate(ob('imi-final'), 2024, 10))).toBe('2024-12-02');
    expect(ymd(resolveDueDate(ob('imi-final'), 2025, 10))).toBe('2025-12-02');
  });

  it('pagamento do IVA mensal em 2024', () => {
    expect(days('iva-pag-mensal', 2024)).toEqual([25, 26, 25, 26, 27, 25, 25, 25, 25, 25, 25, 26]);
    expect(resolveDueDate(ob('iva-pag-mensal'), 2024, 7).getMonth()).toBe(8);
  });

  it('pagamentos por conta de IRS e IRC', () => {
    const irs = (year: number) => [6, 8, 11].map((m) => ymd(resolveDueDate(ob('irs-pagamento-conta'), year, m)));
    expect(irs(2024)).toEqual(['2024-07-22', '2024-09-20', '2024-12-20']);
    expect(irs(2025)).toEqual(['2025-07-21', '2025-09-22', '2025-12-22']);
    expect(ymd(resolveDueDate(ob('irc-pagamento-conta-3'), 2024, 11))).toBe('2024-12-16');
  });

  it('31/07/2022 (domingo) empurrou o 1.º pagamento por conta de IRC para 31/08', () => {
    expect(ymd(resolveDueDate(ob('irc-pagamento-conta-1'), 2022, 6))).toBe('2022-08-31');
  });
});

describe('data de calendário em Lisboa', () => {
  it('usa o dia de Lisboa e não o do browser', () => {
    // 23:30 UTC de 20/10/2026 = 00:30 de 21/10 em Lisboa (UTC+1)
    expect(ymd(calendarDateIn('Europe/Lisbon', new Date('2026-10-20T23:30:00Z')))).toBe('2026-10-21');
    expect(ymd(calendarDateIn('America/Los_Angeles', new Date('2026-10-20T23:30:00Z')))).toBe('2026-10-20');
  });
});

describe('regra de agosto', () => {
  it('não se aplica à Segurança Social', () => {
    expect(ymd(resolveDueDate(ob('ss-declaracao'), 2026, 7))).toBe('2026-08-10');
  });
  it('declarações da AT em agosto passam para 31', () => {
    expect(ymd(resolveDueDate(ob('dmr'), 2026, 7))).toBe('2026-08-31');
    expect(ymd(resolveDueDate(ob('efatura'), 2026, 7))).toBe('2026-08-31');
  });
  it('prazo de julho empurrado para agosto também beneficia', () => {
    // 31/07/2027 é sábado → 02/08 → até 31/08
    expect(ymd(resolveDueDate(ob('irc-pagamento-conta-1'), 2027, 6))).toBe('2027-08-31');
  });
});

describe('upcomingEvents', () => {
  it('a 1 de outubro de 2026 mostra outubro a dezembro, sem datas passadas', () => {
    const events = upcomingEvents(new Date(2026, 9, 1), 'pt');
    expect(events.length).toBeGreaterThan(0);
    expect(ymd(events[0].date)).toBe('2026-10-06'); // e-Fatura (5/10 é feriado)
    expect(events.every((e) => e.date >= new Date(2026, 9, 1))).toBe(true);
    expect(events.every((e) => e.date <= new Date(2026, 11, 31))).toBe(true);
    const ids = events.map((e) => e.id);
    expect(ids).toContain('iva-pag-trimestral');
    expect(ids).toContain('irc-pagamento-conta-3');
  });

  it('omite datas já passadas no mês corrente', () => {
    const events = upcomingEvents(new Date(2026, 9, 21), 'pt');
    expect(events.every((e) => e.date >= new Date(2026, 9, 21))).toBe(true);
    expect(events.map((e) => e.id)).toContain('iva-pag-mensal');
  });

  it('atravessa a viragem do ano', () => {
    const events = upcomingEvents(new Date(2026, 11, 15), 'en');
    const years = new Set(events.map((e) => e.date.getFullYear()));
    expect(years).toEqual(new Set([2026, 2027]));
    expect(events.find((e) => e.id === 'modelo-10')?.title).toBe('Form 10 — prior-year income and withholdings');
  });

  it('não duplica o IVA de junho e julho que vencem ambos a 25 de setembro', () => {
    const events = upcomingEvents(new Date(2026, 8, 1), 'pt', 0);
    expect(events.filter((e) => e.id === 'iva-pag-mensal')).toHaveLength(1);
  });

  it('está ordenado por data', () => {
    const events = upcomingEvents(new Date(2026, 0, 1), 'pt', 11);
    const times = events.map((e) => e.date.getTime());
    expect(times).toEqual([...times].sort((a, b) => a - b));
  });
});
