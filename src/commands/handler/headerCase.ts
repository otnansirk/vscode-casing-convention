import { headerCase as toHeaderCase } from 'change-case';

/**
 * Transform text to Header-Case
 */
export const headerCase = (text: string): string => {
    return text.split('\n')
        ?.map((str) => {
            const leadingSpace = str.match(/^(\s*)/)?.[0] ?? "";
            return leadingSpace + toHeaderCase(str);
        })
        .join('\n') ?? '';
};
