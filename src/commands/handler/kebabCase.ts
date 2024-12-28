import { splitWords } from "../../helpers/splitWords";

/**
 * Convert the character of an input string to kebab-case.
 *
 * @returns
 */
export const kebabCase = (str: string): string => splitWords(str)?.map((str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()).join('-') ?? '';
