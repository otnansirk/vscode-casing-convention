/**
 * Transform text to snake_case
 */
export const snakeCase = (text: string): string => text.replace(/[ \t]+/g, "_").toLowerCase();
