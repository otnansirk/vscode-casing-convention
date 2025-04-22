import {
    pascalCase as toPascalCase
} from 'change-case';

/**
 * Convert the character of an input string to PascalCase.
 *
 * @returns
 */
export const pascalCase = (str: string): string => {
    return str.split('\n')
        ?.map((str) => {
            const leadingSpace = str.match(/^(\s*)/)?.[0];
            return leadingSpace + toPascalCase(str);
        })
        .join('\n');
};
