/**
 * Transfor String to JSON.
 */
export const jsonParse = (str: string) => {
    try {
        const text = JSON.parse(str).toString();
        if (text === '[object Object]') {
            throw new Error("Failed to parse JSON");
        }
        return text;
    } catch (error) {
        throw new Error("Failed to parse JSON");
    }
};