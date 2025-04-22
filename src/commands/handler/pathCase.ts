import {
    pathCase as toPathCase
} from 'change-case';

/**
 * Convert the character of an input string to pathCase.
 *
 * @returns
 */
export const pathCase = (str: string): string => {
    return str.split('\n')
        ?.map((str) => {
            const leadingSpace = str.match(/^(\s*)/)?.[0] ?? "";
            return leadingSpace + toPathCase(str);
        })
        .join('\n') ?? '';
};
