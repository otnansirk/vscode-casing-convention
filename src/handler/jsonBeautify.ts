/**
 * Transfor JSON to beautify.
 */
export const jsonBeautify = (text: string) => {
    console.log(JSON.stringify(JSON.parse(text), undefined, 4));
    
    return JSON.stringify(JSON.parse(text), undefined, 4)
};