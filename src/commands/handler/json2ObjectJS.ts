/**
 * Transfor JSON to object JS.
 */
export const json2ObjectJS = (text: string) => JSON.stringify(JSON.parse(text), undefined, 4).replace(/"([^"]+)":/g, '$1:');
