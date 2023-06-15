/**
 *
 * Regular expression to match Unicode words
 *
 * @param str
 * @returns
 */
export const splitWords = (str: string) => str.match(/\p{L}+/gu);