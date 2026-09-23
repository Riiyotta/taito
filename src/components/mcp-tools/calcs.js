// Calculator rules for /tools/:slug. Pure functions: (form values) -> { error } | { rows, notes }.
// Each row: { label, value, cite?, strong? }. Rules follow the statute text quoted on each page.

const num = (v) => (v === '' || v == null ? NaN : Number(v));
const DAY = 86400000;
const utc = (s) => {
  const [y, m, d] = s.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
};
const daysBetween = (a, b) => Math.round((b - a) / DAY) + 1; // inclusive

const gbp = (n) => `£${n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const nok = (n) => `${n.toLocaleString('nb-NO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;
const sek = (n) => `${n.toLocaleString('sv-SE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;
const dec = (n, locale = 'en-GB', dp = 2) => n.toLocaleString(locale, { maximumFractionDigits: dp });

/* ------------------------------------------------------------------ UK holiday pay (WTR 1998) */

export const HOLIDAY_EXAMPLE = (() => {
  // 55 weeks newest first: variable pay with regular overtime, one week with no remuneration payable.
  const lines = [];
  for (let i = 0; i < 55; i += 1) {
    if (i === 9) lines.push('0');
    else {
      const overtime = i % 3 === 0 ? 90 : i % 3 === 1 ? 45 : 0;
      lines.push(`${560 + overtime},${37.5 + overtime / 15},${overtime}`);
    }
  }
  return { workerType: 'regular', employedWeeks: '60', referenceData: lines.join('\n'), weeksTaken: '3', weeksOfLeave: '2' };
})();

function parseWeeks(text) {
  const weeks = [];
  const lines = (text || '').split('\n').map((l) => l.trim()).filter(Boolean);
  for (let i = 0; i < lines.length; i += 1) {
    const parts = lines[i].split(',').map((p) => p.trim());
    const [pay, hours, enhanced] = parts.map(num);
    if (parts.length > 3 || [pay, hours, enhanced].some((v, j) => j < parts.length && (Number.isNaN(v) || v < 0))) {
      return { error: `Line ${i + 1} ("${lines[i]}") is not pay, pay,hours or pay,hours,enhanced.` };
    }
    if (!Number.isNaN(enhanced) && enhanced > pay) {
      return { error: `Line ${i + 1}: the reg 16(3ZA) portion cannot exceed the week's pay.` };
    }
    weeks.push({ pay, hours: Number.isNaN(hours) ? null : hours, enhanced: Number.isNaN(enhanced) ? 0 : enhanced });
  }
  return { weeks };
}

export function holidayPay(v) {
  const employed = num(v.employedWeeks);
  if (!(employed >= 1) || !Number.isInteger(employed)) return { error: 'Enter the complete weeks employed (a whole number, 1 or more).' };
  const parsed = parseWeeks(v.referenceData);
  if (parsed.error) return { error: parsed.error };
  if (!parsed.weeks.length) return { error: 'Enter at least one week of reference-period pay data.' };

  // Reference-period walk, newest week first (reg 16(3)(e)-(f)).
  const target = Math.min(52, employed); // reg 16(3)(e)(i)/(ii)
  const window = Math.min(employed, 104); // weeks outside employment discarded; 104-week bound, reg 16(3)(f)(i)
  const used = [];
  let skipped = 0;
  let discarded = Math.max(0, parsed.weeks.length - employed);
  let i = 0;
  for (; i < parsed.weeks.length && i < window && used.length < target; i += 1) {
    const w = parsed.weeks[i];
    if (w.pay === 0) skipped += 1;
    else used.push(w);
  }
  if (!used.length) return { error: 'No week in the reference period had remuneration payable, so there is no average to take.' };
  const found = used.length;
  const total = used.reduce((s, w) => s + w.pay, 0);
  const totalEnhanced = used.reduce((s, w) => s + w.enhanced, 0);
  const weekFull = total / found; // reg 13 / 15B week's pay, incl. reg 16(3ZA) components
  const weekBasic = (total - totalEnhanced) / found; // reg 13A week's pay, 3ZA components not required

  const rows = [
    {
      label: 'Reference period',
      value: `${found} paid week${found === 1 ? '' : 's'}${skipped ? `, ${skipped} zero-pay week${skipped === 1 ? '' : 's'} skipped` : ''}`,
      cite: skipped ? 'WTR reg 16(3)(e)(ii), 16(3)(f)' : 'WTR reg 16(3)(e)',
    },
  ];
  const notes = [];
  if (found < target) {
    notes.push(
      i >= window && window === 104
        ? `The 104-week bound was reached with ${found} paid weeks, so the divisor is ${found}, not ${target} (reg 16(3)(f)(ii)).`
        : `Only ${found} paid weeks were supplied inside the window, so the average divides by ${found}. Add older weeks if they exist.`,
    );
  }
  if (discarded) notes.push(`${discarded} line${discarded === 1 ? '' : 's'} beyond the ${employed} weeks employed ${discarded === 1 ? 'was' : 'were'} discarded.`);

  if (v.workerType === 'irregular-or-part-year') {
    const withHours = used.filter((w) => w.hours != null && w.hours > 0);
    if (withHours.length !== used.length) return { error: 'Reg 15B leave is priced per hour: give pay,hours for every paid week in the reference period.' };
    const hoursLeave = num(v.hoursOfLeave);
    if (!(hoursLeave >= 0)) return { error: 'Enter the hours of leave being taken.' };
    const totalHours = withHours.reduce((s, w) => s + w.hours, 0);
    const hourly = total / totalHours;
    rows.push(
      { label: "Average week's pay", value: gbp(weekFull), cite: 'WTR reg 16(3)(e), 16(3ZA)' },
      { label: 'Average hourly rate', value: `${gbp(hourly)} (${dec(totalHours)} hours)`, cite: 'WTR reg 16' },
      { label: `Holiday pay for ${dec(hoursLeave)} hours`, value: gbp(hourly * hoursLeave), cite: 'WTR reg 15B, 16', strong: true },
    );
    const worked = num(v.hoursWorked);
    if (worked >= 0) {
      const raw = worked * 0.1207;
      const whole = Math.floor(raw);
      const rounded = raw - whole >= 0.5 ? whole + 1 : whole; // reg 15B(5): 30 minutes or more rounds up
      rows.push({ label: 'Leave accrued this pay period', value: `${dec(rounded)} hours (12.07% of ${dec(worked)} = ${dec(raw, 'en-GB', 3)})`, cite: 'WTR reg 15B(3)(b), 15B(5)' });
    }
    const pay = num(v.remuneration);
    if (pay >= 0) rows.push({ label: 'Rolled-up holiday pay alternative', value: gbp(pay * 0.1207), cite: 'WTR reg 16A(2)' });
    notes.push('Reg 15B accrual is capped at 28 days in a leave year (reg 15B(4)); this calculator flags the cap but does not convert hours to days.');
    notes.push('Assumes one worker classification for the whole leave year.');
    return { rows, notes };
  }

  const taken = num(v.weeksTaken) || 0;
  const leave = num(v.weeksOfLeave);
  if (!(leave > 0)) return { error: 'Enter the weeks of leave being paid now.' };
  if (taken < 0 || taken > 5.6) return { error: 'Weeks already taken must be between 0 and 5.6.' };
  const reg13Weeks = Math.min(leave, Math.max(0, 4 - taken));
  const reg13AWeeks = Math.min(leave - reg13Weeks, Math.max(0, 5.6 - Math.max(taken, 4)));
  const beyond = leave - reg13Weeks - reg13AWeeks;
  rows.push(
    { label: "Week's pay — reg 13 leave", value: gbp(weekFull), cite: 'WTR reg 16(3)(e), 16(3ZA)' },
    { label: "Week's pay — reg 13A leave", value: gbp(weekBasic), cite: 'WTR reg 16(3ZA) (reg 13A not listed)' },
    { label: `${dec(reg13Weeks)} ${reg13Weeks === 1 ? 'week' : 'weeks'} of reg 13 leave`, value: gbp(reg13Weeks * weekFull), cite: 'WTR reg 13(1)' },
    { label: `${dec(reg13AWeeks)} ${reg13AWeeks === 1 ? 'week' : 'weeks'} of reg 13A leave`, value: gbp(reg13AWeeks * weekBasic), cite: 'WTR reg 13A(2)(e)' },
    { label: 'Statutory holiday pay owed', value: gbp(reg13Weeks * weekFull + reg13AWeeks * weekBasic), strong: true },
  );
  if (beyond > 0) notes.push(`${dec(beyond)} weeks exceed the 5.6-week statutory entitlement and are contractual — not priced here.`);
  notes.push('Ordering convention: reg 13 leave is treated as taken first. The WTR does not itself specify an order.');
  notes.push('Assumes one worker classification for the whole leave year.');
  return { rows, notes };
}

/* ------------------------------------------------------------------ UK statutory sick pay (post 6 April 2026) */

const SSP_FLAT = 123.25;
const SSP_REFORM = utc('2026-04-06');

export function ssp(v) {
  if (!v.absenceStartDate) return { error: 'Enter the first day of sickness absence.' };
  if (utc(v.absenceStartDate) < SSP_REFORM) {
    return { error: 'This absence started before 6 April 2026, so it runs on the transitional rules, which this calculator does not compute.' };
  }
  const nwe = num(v.normalWeeklyEarnings);
  const qdw = num(v.qualifyingDaysPerWeek);
  const qda = num(v.qualifyingDaysAbsent);
  if (!(nwe >= 0)) return { error: 'Enter normal weekly earnings (£0 is allowed).' };
  if (!(qdw >= 1 && qdw <= 7) || !Number.isInteger(qdw)) return { error: 'Qualifying days a week must be a whole number from 1 to 7.' };
  if (!(qda >= 0) || !Number.isInteger(qda)) return { error: 'Enter the qualifying days of absence as a whole number.' };

  const pct = nwe * 0.8;
  const weekly = Math.min(SSP_FLAT, pct);
  const daily = weekly / qdw;
  const cap = weekly * 28;
  const uncapped = daily * qda;
  const owed = Math.min(uncapped, cap);
  const capReached = uncapped >= cap && qda > 0;
  const rows = [
    { label: 'Weekly rate applied', value: `${gbp(weekly)} (${pct < SSP_FLAT ? '80% of normal weekly earnings' : 'flat rate'})`, cite: 'SSCBA 1992 s.157' },
    { label: 'Daily rate', value: `${gbp(daily)} (weekly rate ÷ ${qdw})`, cite: 'SSCBA 1992 s.157(3)' },
    { label: 'Qualifying days paid', value: capReached ? `${dec(cap / daily)} of ${qda}` : `${qda}`, cite: 'ERA 2025 s.10 (no waiting days)' },
    { label: '28 × weekly rate limit', value: `${gbp(cap)} — ${capReached ? 'reached' : 'not reached'}`, cite: 'SSCBA 1992 s.155' },
    { label: 'SSP owed', value: gbp(owed), strong: true },
  ];
  const notes = ['Daily amounts are not rounded before multiplying; the total is shown to the penny.'];
  if (nwe === 0) notes.push('£0 normal weekly earnings gives £0 SSP: there is no lower earnings limit post-reform, and 80% of £0 is £0.');
  return { rows, notes };
}

/* ------------------------------------------------------------------ Norway feriepenger (ferieloven § 10) */

export function feriepenger(v) {
  const grunnlag = num(v.grunnlag);
  const G = num(v.grunnbelop);
  if (!(grunnlag >= 0)) return { error: 'Fyll inn feriepengegrunnlaget.' };
  if (!(G > 0)) return { error: 'Fyll inn grunnbeløpet G.' };
  const sats = v.ferieuker === 'fem-uker' ? 0.12 : 0.102;
  const grunn = grunnlag * sats;
  const rows = [
    { label: `Feriepenger etter grunnsats (${sats === 0.12 ? '12' : '10,2'} %)`, value: nok(grunn), cite: sats === 0.12 ? 'Tariffavtale' : 'Ferieloven § 10 nr. 2' },
  ];
  let tillegg = 0;
  if (v.over60) {
    const cap = 6 * G;
    const base = Math.min(grunnlag, cap);
    tillegg = base * 0.023;
    rows.push({
      label: 'Over 60-tillegg (2,3 %)',
      value: `${nok(tillegg)}${grunnlag > cap ? ` (av 6G = ${nok(cap)})` : ''}`,
      cite: 'Ferieloven § 10 nr. 3',
    });
  }
  rows.push({ label: 'Feriepenger totalt', value: nok(grunn + tillegg), strong: true });
  const notes = ['6G-taket gjelder bare tillegget for ansatte over 60 — grunnsatsen beregnes av hele grunnlaget.'];
  return { rows, notes };
}

/* ------------------------------------------------------------------ Sweden semesterdagar (semesterlagen 1977:480) */

export function semesterdagar(v) {
  if (!v.start) return { error: 'Fyll i anställningens startdatum.' };
  const year = Number(v.year);
  const from = utc(`${year - 2}-04-01`); // intjänandeår = the 12 months before the semesterår
  const to = utc(`${year - 1}-03-31`);
  const D = daysBetween(from, to); // 7 §: actual days in the intjänandeår (365 or 366)
  const s = Math.max(from, utc(v.start));
  const e = Math.min(to, v.end ? utc(v.end) : to);
  if (v.end && utc(v.end) < utc(v.start)) return { error: 'Slutdatumet ligger före startdatumet.' };
  const employed = e >= s ? daysBetween(s, e) : 0;
  const absence = num(v.absence) || 0;
  if (absence < 0 || absence > employed) return { error: 'Frånvaron kan inte vara fler dagar än anställningsdagarna i intjänandeåret.' };
  const exact = (25 * (employed - absence)) / D;
  const paid = Math.min(25, Math.ceil(exact - 1e-9)); // 7 §: brutet tal avrundas uppåt
  const unpaid = 25 - paid;
  const saveable = Math.max(0, paid - 20); // 18 §
  const rows = [
    { label: 'Intjänandeår', value: `${year - 2}-04-01–${year - 1}-03-31 (${D} dagar)`, cite: '3 §' },
    { label: 'Anställningsdagar i intjänandeåret', value: `${employed}${absence ? ` − ${absence} frånvaro` : ''}`, cite: '7 §' },
    { label: 'Betalda semesterdagar', value: `${paid} (25 × ${employed - absence} / ${D} = ${dec(exact, 'sv-SE')})`, cite: '7 §', strong: true },
    { label: 'Obetalda semesterdagar', value: `${unpaid}`, cite: '4 §' },
    { label: 'Får sparas', value: `${saveable} dagar`, cite: '18 §' },
  ];
  const notes = [];
  if (v.model === 'procentregeln') {
    const lon = num(v.forfallenLon);
    if (!(lon >= 0)) return { error: 'Fyll i förfallen lön under intjänandeåret.' };
    const sl = lon * 0.12;
    rows.push({ label: 'Semesterlön (12 %)', value: sek(sl), cite: '16 b §', strong: true });
    if (paid) rows.push({ label: 'Per betald semesterdag', value: sek(sl / paid) });
  } else {
    const salary = num(v.salary);
    if (!(salary >= 0)) return { error: 'Fyll i månadslönen.' };
    const perDay = salary * 0.0043;
    rows.push(
      { label: 'Semestertillägg per dag (0,43 %)', value: sek(perDay), cite: '16 a §' },
      { label: 'Semestertillägg totalt', value: sek(perDay * paid), cite: '16 a §', strong: true },
    );
    notes.push('Med sammalöneregeln behåller den anställda sin månadslön under semestern; tillägget kommer ovanpå.');
    if (v.sysselsattningsgrad) notes.push('Sysselsättningsgraden har ändrats: semesterlönen ska då justeras efter sysselsättningsgraden under intjänandeåret (16 a §) — räknaren gör inte den justeringen.');
  }
  if (v.nonQualifyingAbsence && !absence) notes.push('Du har markerat obetald, ej semesterlönegrundande frånvaro men angett 0 dagar.');
  notes.push('Vägledande: räknaren modellerar inte femdagarsregeln (4 §), korta anställningar (5 §) eller sparade dagar från tidigare år.');
  return { rows, notes };
}

/* ------------------------------------------------------------------ Finland vuosiloma (vuosilomalaki 162/2005) */

export function vuosiloma(v) {
  if (!v.start) return { error: 'Täytä työsuhteen alkamispäivä.' };
  const year = Number(v.year);
  const yearStart = utc(`${year - 1}-04-01`);
  const yearEnd = utc(`${year}-03-31`);
  const start = utc(v.start);
  if (start > yearEnd) return { error: 'Työsuhde alkaa vasta valitun lomanmääräytymisvuoden jälkeen.' };
  const months = num(v.months);
  if (!(months >= 0 && months <= 12) || !Number.isInteger(months)) return { error: 'Täysien kuukausien määrän on oltava kokonaisluku 0–12.' };
  const longService = start <= utc(`${year - 1}-04-01`); // 5 § 1 mom.: vähintään vuosi 31.3. mennessä
  const monthsEmployed = start <= yearStart ? 12 : 12 - (new Date(start).getUTCMonth() - 3 + 12) % 12;
  const rows = [
    { label: 'Lomanmääräytymisvuosi', value: `1.4.${year - 1}–31.3.${year}`, cite: '4 § 1 kohta' },
    { label: 'Työsuhde jatkunut 31.3. mennessä vähintään vuoden', value: longService ? 'Kyllä — 2,5 päivää / kk' : 'Ei — 2 päivää / kk', cite: '5 § 1 mom.' },
  ];
  const notes = [];
  if (v.rule === 'neither') {
    rows.push({ label: 'Vuosilomaa kertynyt', value: '0 arkipäivää', strong: true });
    notes.push('Kun kumpikaan 6 §:n kynnys ei täyty, työntekijällä on oikeus vapaaseen (8 § 1 mom.) — kaksi arkipäivää jokaiselta työssäolokuukaudelta — eikä vuosilomaan.');
    return { rows, notes };
  }
  const rate = longService ? 2.5 : 2;
  const raw = months * rate;
  const days = Math.ceil(raw); // 5 §: päivän osa pyöristetään täyteen lomapäivään
  rows.push(
    { label: 'Sovellettu sääntö', value: v.rule === 'hours35' ? '35 tunnin sääntö' : '14 päivän sääntö', cite: '6 §' },
    { label: 'Vuosilomaa kertynyt', value: `${days} arkipäivää (${months} × ${dec(rate, 'fi-FI')}${raw !== days ? ` = ${dec(raw, 'fi-FI')}` : ''})`, cite: '5 §', strong: true },
  );
  if (months > monthsEmployed) notes.push(`Työsuhde on kestänyt valittuna vuonna enintään ${monthsEmployed} kalenterikuukautta — tarkista kuukausien määrä.`);
  notes.push('Lomaraha ei ole lakisääteinen, joten sitä ei lasketa.');
  return { rows, notes };
}

export const CALCS = {
  'holiday-pay-calculator': holidayPay,
  'statutory-sick-pay-calculator': ssp,
  feriepengekalkulator: feriepenger,
  'semesterdagar-raknare': semesterdagar,
  vuosilomalaskuri: vuosiloma,
};

/** Result-panel headings per page language */
export const RESULT_LABELS = {
  'holiday-pay-calculator': { title: 'Result', notes: 'Notes', lang: 'en' },
  'statutory-sick-pay-calculator': { title: 'Result', notes: 'Notes', lang: 'en' },
  feriepengekalkulator: { title: 'Resultat', notes: 'Merknader', lang: 'nb' },
  'semesterdagar-raknare': { title: 'Resultat', notes: 'Att tänka på', lang: 'sv' },
  vuosilomalaskuri: { title: 'Tulos', notes: 'Huomioita', lang: 'fi' },
};
