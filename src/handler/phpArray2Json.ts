/**
 * Lower case the first character of an input string.
 */
export const phpArray2Json = (str: string) => str
  .replaceAll('[', '{')
  .replaceAll(']', '}')
  .replace(/=>\s|\s=>\s|\s=>/g, ': ')
  .replace(/"=>"|'=>'/g, '": "');