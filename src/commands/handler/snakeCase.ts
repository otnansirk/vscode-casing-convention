/**
 * Transform text to snake_case
 */
export const snakeCase = (text: string): string => text
                                                        .replace(/([a-z])([A-Z])/g, '$1_$2')
                                                        .replace(/[-. \t\\]+/g, "_")
                                                        .toLowerCase();
