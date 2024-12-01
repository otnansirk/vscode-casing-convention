import { strictEqual } from "assert";
import { isOnlySpaces } from "./isOnlySpace";

describe('isOnlySpaces', () => {

  const TASE_CASES = [
    {
      input: "  ",
      expected: true
    },
    {
      input: " aku ",
      expected: false
    },
    {
      input: "aku",
      expected: false
    },
  ];

  TASE_CASES.forEach(({input, expected}) => {
    it(`Sould ${input} only space`, function() {
      let result = isOnlySpaces(input);
      strictEqual(result, expected);
    });
  });
});