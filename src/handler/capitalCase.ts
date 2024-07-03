export const capitalCase = (text: string): string => {
    let result = '';

    let isWordStart = true;
    
    for (const char of text) {
        if (char === ' ' || char === '\n') {
            result += char;
            isWordStart = true;
        } else if (isWordStart) {
            result += char.toUpperCase();
            isWordStart = false;
        } else {
            result += char.toLowerCase();
        }
    }

    return result;
};
