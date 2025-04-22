/**
 * Lower case an input string.
 */
export function lowerCase(str: string) {
  return str.split('\n')
    ?.map((str) => {
      const leadingSpace = str.match(/^(\s*)/)?.[0];
      const result = str
        .replace(/^(\s+)/, '')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/[ \t]+/g, " ")
        .toLowerCase();
      return leadingSpace + result;
    })
    .join('\n');
};