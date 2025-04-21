/**
 * Convert the character of an input string to kebab-case.
 *
 * @returns
 */
export const camelCase = (str: string): string => {
    return str.split('\n')
        ?.map((str) => {
            const leadingSpace = str.match(/^(\s*)/)?.[0] ?? "";
            const result = str
                .replace(/^[\s_-]+/, '') // Remove leading spaces, underscores, or hyphens
                .replace(/[\s_-]+(.)?/g, (_, c) => c ? c.toUpperCase() : ''); // Capitalize letters after space, underscore, or hyphen
            return leadingSpace + result;
        })
        .join('\n') ?? '';
}
