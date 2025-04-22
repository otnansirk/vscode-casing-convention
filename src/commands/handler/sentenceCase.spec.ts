import { strictEqual } from "assert";
import { sentenceCase } from "./sentenceCase";

describe('sentenceCase', function () {

  const TEST_CASES = [
    {
      input: "Javascript",
      expected: "Javascript"
    },
    {
      input: "Hi,kris how are you ?",
      expected: "Hi kris how are you"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "Hi kris how are you"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "Kris how are you"
    },
    {
      input: "HOW ARE YOU",
      expected: "How are you"
    },
    {
      input: "How Are YOU",
      expected: "How are you"
    },
    {
      input: `   How Are YOU
      hOW ARE YOU`,
      expected: `   How are you
      H ow are you`
    },
    {
      input: " ",
      expected: " "
    },
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = sentenceCase(input);
      strictEqual(result, expected);
    });
  });
});