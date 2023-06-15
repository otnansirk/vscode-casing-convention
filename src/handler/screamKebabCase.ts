/**
 * Convert the character of an input string to SCREAMING-KEBAB-CASE.
 *
 * @returns
 */
export const screamKebabCase = (str: string) => {
  return str.replace(/[^\w\s]+/g, '-')
            .replace(/[\s_]/g, '-')
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toUpperCase();
};