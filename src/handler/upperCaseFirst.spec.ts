import { strictEqual } from "assert";
import { upperCaseFirst } from "./upperCaseFirst";

describe('upperCaseFirst', function() {

  const TEST_CASES = [
    {
      input: "javascript",
      expected: "Javascript"
    },
    {
      input: "Hi,kris how are you ?",
      expected: "Hi,kris how are you ?"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "Hi, KRIS HowAreYou"
    },
    {
      input: "kRIS_HowAreYOU",
      expected: "KRIS_HowAreYOU"
    },
    {
      input: "HOW ARE YOU",
      expected: "HOW ARE YOU"
    },
    {
      input: "kOW are YOU",
      expected: "KOW are YOU"
    },
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = upperCaseFirst(input);
      strictEqual(result, expected);
    });
  });
});