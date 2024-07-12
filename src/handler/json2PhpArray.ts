/**
 * Transfrom JSON to Array.
 */
export const json2PhpArray = (str: string) => str
  .replaceAll('{', '[')
  .replaceAll('}', ']')
  .replace(/:\s|\s:\s|\s:/g, ' => ')
  .replace(/":"|':'/g, ' " => " ');