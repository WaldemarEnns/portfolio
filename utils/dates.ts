
/**
 * Format a date to a locale date
 * @param date - The date to format
 * @returns The date formatted to a locale date
 * */
export function formatToLocaleDate(date: string): string {
  return new Date(date).toLocaleDateString();
}