import { strictEqual } from "assert";
import { screamKebabCase } from "./screamKebabCase";

describe('screamKebabCase', function() {

  const TEST_CASES = [
    {
      input: "Javascript",
      expected: "JAVASCRIPT"
    },
    {
      input: "Hi,kris how are you ?",
      expected: "HI-KRIS-HOW-ARE-YOU"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "HI-KRIS-HOW-ARE-YOU"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "KRIS-HOW-ARE-YOU"
    },
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = screamKebabCase(input);
      strictEqual(result, expected);
    });
  });
});