import {
    dotCase as toDotCase
} from 'change-case';
/**
 * Convert the character of an input string to dot.case.
 *
 * @returns
 */
export const dotCase = (str: string): string => {
    return str.split('\n')
        ?.map((str) => {
            const leadingSpace = str.match(/^(\s*)/)?.[0];
            return leadingSpace + toDotCase(str);
        })
        .join('\n');
};
