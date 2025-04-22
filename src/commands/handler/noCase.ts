import {
    noCase as toNoCase
} from 'change-case';

/**
 * Convert the character of an input string to no case.
 *
 * @returns
 */
export const noCase = (str: string): string => {
    return str.split('\n')
        ?.map((str) => {
            const leadingSpace = str.match(/^(\s*)/)?.[0] ?? "";
            return leadingSpace + toNoCase(str);
        })
        .join('\n') ?? '';
};
