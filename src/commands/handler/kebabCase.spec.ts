import { strictEqual } from "assert";
import { kebabCase } from "./kebabCase";

describe('kebabCase', function() {

  const TEST_CASES = [
    {
      input: "Javascript",
      expected: "javascript"
    },
    {
      input: "Hi,kris how are you ?",
      expected: "hi-kris-how-are-you"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "hi-kris-how-are-you"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "kris-how-are-you"
    },
    {
      input: "",
      expected: ""
    },
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = kebabCase(input);
      strictEqual(result, expected);
    });
  });
});