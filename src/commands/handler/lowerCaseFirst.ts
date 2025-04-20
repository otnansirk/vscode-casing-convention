/**
 * Lower case the first character of an input string.
 */
export function lowerCaseFirst(str: string) {
  return str.split('\n')
    .map(line => {
      const withSpace = line.replace(/([a-z])([A-Z])/g, '$1 $2');
      const match = withSpace.match(/^(\s*)(\S)(.*)$/);

      if (!match) { return line; }

      const [, spaces, firstChar, rest] = match;
      return spaces + firstChar.toLowerCase() + rest.toUpperCase();
    })
    .join('\n');
}