/**
 * Transfor JSON to beautify.
 */
export const jsonBeautify = (text: string) => JSON.stringify(JSON.parse(text), undefined, 4);