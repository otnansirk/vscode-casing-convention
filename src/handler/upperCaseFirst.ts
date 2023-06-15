/**
 * Upper case the first character of an input string.
 */
export const upperCaseFirst = (str: string)  => str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);