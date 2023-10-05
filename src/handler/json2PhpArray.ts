/**
 * Lower case the first character of an input string.
 */
export const json2PhpArray = (str: string) => str
  .replaceAll('{', '[')
  .replaceAll('}', ']')
  .replace(/:\s|\s:\s|\s:/g, ' => ')
  .replace(/":"|':'/g, ' " => " ');