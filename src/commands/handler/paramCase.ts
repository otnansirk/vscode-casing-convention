import {
    paramCase as toParamCase
} from 'change-case';

/**
 * Convert the character of an input string to paramCase.
 *
 * @returns
 */
export const paramCase = (str: string): string => {
    return str.split('\n')
        ?.map((str) => {
            const leadingSpace = str.match(/^(\s*)/)?.[0];
            return leadingSpace + toParamCase(str);
        })
        .join('\n');
};
