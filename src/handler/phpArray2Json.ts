/**
 * Lower case the first character of an input string.
 */
export const phpArray2Json = (str: string) => str
  .replaceAll('[', '{')
  .replaceAll(']', '}')
  .replaceAll("'=>'", "': '")
  .replaceAll("'=> '", "': '")
  .replaceAll('"=>"', '": "')
  .replaceAll('"=> "', '": "')
  .replaceAll("=> {", ': {')
  .replace(/\s=>\s+/g, ' : ');