import { strictEqual } from "assert";
import { capitalCase } from "./capitalCase";

describe('CapitalCase', function() {

  const TEST_CASES = [
    {
      input: "javascript",
      expected: "Javascript"
    },
    {
      input: "Hi, kris how are you ?",
      expected: "Hi, Kris How Are You ?"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "Hi, Kris Howareyou"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "Kris_howareyou"
    },
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = capitalCase(input);
      strictEqual(result, expected);
    });
  });
});