/**
 * Transform text to snake_case
 */
export const snakeCase = (text: string): string => {
    return text.split('\n')
        ?.map((str) => {
            const leadingSpace = str.match(/^(\s*)/)?.[0] ?? "";
            const result = str
                .replace(/^(\s+)/, '')
                .replace(/([a-z])([A-Z])/g, '$1_$2')
                .replace(/[-. \t\\]+/g, "_")
                .replace(/[^a-zA-Z0-9_]/g, '_')
                .replace(/[_]+/g, "_")
                .replace(/[\s_]+$/, '') // Remove space and _ in end of character
                .toLowerCase();
            return leadingSpace + result;
        })
        .join('\n') ?? '';
};
