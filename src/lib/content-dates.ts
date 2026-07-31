// Centralized content update date for pages without a data-file-driven updatedAt.
// Used as fallback by ContentLayout and as explicit prop by dynamic [id] detail pages.
// Update this constant when database entities are reviewed/refreshed.
export const CONTENT_UPDATED_AT = "July 27, 2026";

const MONTH_NUMBERS: Record<string, string> = {
  january: "01",
  february: "02",
  march: "03",
  april: "04",
  may: "05",
  june: "06",
  july: "07",
  august: "08",
  september: "09",
  october: "10",
  november: "11",
  december: "12",
};

/** Normalize editorial dates without invoking host-dependent date parsing. */
export function normalizeContentDate(value: string): string {
  const input = value.trim();

  if (/^\d{4}-\d{2}-\d{2}$/.test(input)) {
    return input;
  }

  const fullDate = input.match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (fullDate) {
    const [, monthName, day, year] = fullDate;
    const month = MONTH_NUMBERS[monthName.toLowerCase()];
    if (!month) throw new Error(`Unsupported content date: ${value}`);
    return `${year}-${month}-${day.padStart(2, "0")}`;
  }

  const monthYear = input.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (monthYear) {
    const [, monthName, year] = monthYear;
    const month = MONTH_NUMBERS[monthName.toLowerCase()];
    if (!month) throw new Error(`Unsupported content date: ${value}`);
    return `${year}-${month}-01`;
  }

  if (/^\d{4}$/.test(input)) {
    return `${input}-01-01`;
  }

  throw new Error(`Unsupported content date: ${value}`);
}
