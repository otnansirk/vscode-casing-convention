export const numberedByLines = (text: string): string => {
    let numbered = 0;
    return text
        .split('\n')
        .map((line: string) => {            
            if(line === "") {
                return line;
            }

            ++numbered;
            return `${numbered}. ${line}`;
        })
        .join('\n');
};