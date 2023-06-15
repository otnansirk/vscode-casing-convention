import { deepStrictEqual } from "assert";
import { splitWords } from "./splitWords";

describe('splitWords', () => {

  const TASE_CASES = [
    {
      input: "halo, perkenalkan saya kris",
      expected: ["halo", "perkenalkan", "saya", "kris"]
    }
  ];

  TASE_CASES.forEach(({input, expected}) => {
    it(`Sould split ${input} to [${expected.join(',')}]`, function() {
      let result = splitWords(input);
      deepStrictEqual(result, expected);
    });
  });
});