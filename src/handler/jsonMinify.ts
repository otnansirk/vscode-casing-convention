/**
 * Transfor JSON to One Line.
 */
export const jsonMinify = (text: string) => JSON.stringify(JSON.parse(text), undefined);