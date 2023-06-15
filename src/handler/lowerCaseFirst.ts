/**
 * Lower case the first character of an input string.
 */
export function lowerCaseFirst(str: string) {
  return str.toUpperCase().charAt(0).toLowerCase() + str.slice(1);
}