import {
    camelCase as toCamelCase
} from 'change-case';

/**
 * Convert the character of an input string to camelCase.
 *
 * @returns
 */
export const camelCase = (str: string): string => {
    return str.split('\n')
        ?.map((str) => {
            const leadingSpace = str.match(/^(\s*)/)?.[0] ?? "";
            return leadingSpace + toCamelCase(str);
        })
        .join('\n') ?? '';
};
