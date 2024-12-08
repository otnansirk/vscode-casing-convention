import { splitWords } from "../helpers/splitWords";

/**
 * Convert the character of an input string to SCREAMING-KEBAB-CASE.
 *
 * @returns
 */
export const screamKebabCase = (str: string): string => splitWords(str)?.map((str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toUpperCase()).join('-') ?? '';
