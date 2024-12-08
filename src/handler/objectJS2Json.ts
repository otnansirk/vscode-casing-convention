/**
 * Transfor Object JS to JSON.
 */
export const objectJS2Json = (text: string) => JSON.stringify(
    Function('"use strict"; return (' + text + ')')(),
    null,
    4
);
