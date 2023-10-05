/**
 * Lower case the first character of an input string.
 */
export const json2PhpArray = (str: string) => str
  .replaceAll('{', '[')
  .replaceAll('}', ']')
  .replaceAll('":"', '" => "')
  .replaceAll("':'", "' => '")
  .replaceAll('": "', '" => "')
  .replaceAll("': '", "' => '")
  .replaceAll(": [", ' => [')
  .replace(/\s:\s+/g, ' => ');