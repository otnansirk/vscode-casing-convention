import { strictEqual } from "assert";
import { dotCase } from "./dotCase";

describe('dot.case', function () {

  const TEST_CASES = [
    {
      input: "javascript",
      expected: "javascript"
    },
    {
      input: "Hi, kris how are you ?",
      expected: "hi.kris.how.are.you"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "hi.kris.how.are.you"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "kris.how.are.you"
    },
    {
      input: `  Have - holan : network
      oke bos`,
      expected: `  have.holan.network
      oke.bos`
    },
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = dotCase(input);
      strictEqual(result, expected);
    });
  });
});