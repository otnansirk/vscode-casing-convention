/**
 * Upper case an input string.
 */
export function upperCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[ \t]+/g, " ").toUpperCase();
}