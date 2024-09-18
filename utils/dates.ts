export function formatToLocaleDate(date: string): string {
  return new Date(date).toLocaleDateString();
}