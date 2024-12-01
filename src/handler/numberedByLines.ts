import { isOnlySpaces } from "../helpers/isOnlySpace";

export const numberedByLines = (text: string): string => {
    let numbered = 0;
    return text
        .split('\n')
        .map((line: string) => isOnlySpaces(line) ? line : `${++numbered}. ${line}`)
        .join('\n');
};