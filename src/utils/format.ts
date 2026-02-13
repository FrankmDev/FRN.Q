/**
 * Format number with leading zeros
 */
export function padNumber(num: number, length: number = 2): string {
  return String(num).padStart(length, "0");
}

/**
 * Format array as comma-separated list
 */
export function formatList(items: string[]): string {
  return items.join(", ");
}

/**
 * Get current year as string
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}
