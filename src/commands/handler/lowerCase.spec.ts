import { strictEqual } from "assert";
import { lowerCase } from "./lowerCase";

describe('lowerCase', function() {

  const TEST_CASES = [
    {
      input: "Javascript",
      expected: "javascript"
    },
    {
      input: "Hi,kris how are you ?",
      expected: "hi,kris how are you ?"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "hi, kris how are you"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "kris_how are you"
    },
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = lowerCase(input);
      strictEqual(result, expected);
    });
  });
});