import { strictEqual } from "assert";
import { upperCase } from "./upperCase";

describe('upperCase', function() {

  const TEST_CASES = [
    {
      input: "Javascript",
      expected: "JAVASCRIPT"
    },
    {
      input: "Hi,kris how are you ?",
      expected: "HI,KRIS HOW ARE YOU ?"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "HI, KRIS HOW ARE YOU"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "KRIS_HOW ARE YOU"
    },
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = upperCase(input);
      strictEqual(result, expected);
    });
  });
});