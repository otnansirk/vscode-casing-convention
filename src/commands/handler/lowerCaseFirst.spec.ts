import { strictEqual } from "assert";
import { lowerCaseFirst } from "./lowerCaseFirst";

describe('lowerCaseFirst', function() {

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
      expected: "hi, KRIS HowAreYou"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "kRIS_HowAreYOU"
    },
    {
      input: "HOW ARE YOU",
      expected: "hOW ARE YOU"
    },
    {
      input: "How Are YOU",
      expected: "how Are YOU"
    },
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = lowerCaseFirst(input);
      strictEqual(result, expected);
    });
  });
});