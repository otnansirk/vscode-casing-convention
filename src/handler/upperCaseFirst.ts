/**
 * Upper case the first character of an input string.
 */
export function upperCaseFirst(str: string) {
  return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
}