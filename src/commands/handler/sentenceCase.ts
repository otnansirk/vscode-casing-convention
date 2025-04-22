import {
    sentenceCase as toSentenceCase
} from 'change-case';

/**
 * Convert the character of an input string to sentenceCase.
 *
 * @returns
 */
export const sentenceCase = (str: string): string => {
    return str.split('\n')
        ?.map((str) => {
            const leadingSpace = str.match(/^(\s*)/)?.[0] ?? "";
            return leadingSpace + toSentenceCase(str);
        })
        .join('\n') ?? '';
};
