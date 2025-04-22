import { strictEqual } from "assert";
import { noCase } from "./noCase";

describe('noCase', function () {

  const TEST_CASES = [
    {
      input: "Javascript",
      expected: "javascript"
    },
    {
      input: "Hi,kris how are you ?",
      expected: "hi kris how are you"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "hi kris how are you"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "kris how are you"
    },
    {
      input: "HOW ARE YOU",
      expected: "how are you"
    },
    {
      input: "How Are YOU",
      expected: "how are you"
    },
    {
      input: `   How Are YOU
      hOW ARE YOU`,
      expected: `   how are you
      h ow are you`
    },
    {
      input: " ",
      expected: " "
    },
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = noCase(input);
      strictEqual(result, expected);
    });
  });
});