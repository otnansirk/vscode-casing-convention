/**
 * Convert the character of an input string to kebab-case.
 *
 * @returns
 */
export const kebabCase = (str: string) => {
  return str.replace(/[^\w\s]+/g, '-')
            .replace(/[\s_]/g, '-')
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase();
};