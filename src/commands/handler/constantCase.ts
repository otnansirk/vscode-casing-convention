/**
 * Transform text to CONSTANT_CASE
 */
export const constantCase = (text: string): string => {
    return text.split('\n')
        ?.map((str) => {
            const leadingSpace = str.match(/^(\s*)/)?.[0];
            const result = str
                .replace(/^(\s+)/, '')
                .replace(/([a-z])([A-Z])/g, '$1_$2')
                .replace(/[-. \t\\]+/g, "_")
                .replace(/[^a-zA-Z0-9_]/g, '')
                .replace(/[_]+/g, "_")
                .replace(/[\s_]+$/, '') // Remove space and - in end of character
                .toUpperCase();
            return leadingSpace + result;
        })
        .join('\n');
};
