/**
 * Lower case an input string.
 */
export function lowerCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[ \t]+/g, " ").toLowerCase();
}