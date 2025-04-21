/**
 * Convert the character of an input string to kebab-case.
 *
 * @returns
 */
export const kebabCase = (str: string): string => {
    return str.split('\n')
        ?.map((str) => {
            const leadingSpace = str.match(/^(\s*)/)?.[0] ?? "";
            const result = str
                .replace(/^(\s+)/, '') // Remove all space in front of text
                .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert camelCase to camel-case
                .replace(/[^a-zA-Z]+/g, '-') // Change all character besides the alfabet to - 
                .replace(/\s+/g, '-') // Change space to '-'
                .replace(/[\s-]+$/, '') // Remove space and - in end of character
                .toLowerCase();
            return leadingSpace + result;
        })
        .join('\n') ?? '';
}
