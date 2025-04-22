import { strictEqual } from "assert";
import { constantCase } from "./constantCase";

describe('CONSTANT_CASE', function () {

  const TEST_CASES = [
    {
      input: "javascript",
      expected: "JAVASCRIPT"
    },
    {
      input: "Hi, kris how are you ?",
      expected: "HI_KRIS_HOW_ARE_YOU"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "HI_KRIS_HOW_ARE_YOU"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "KRIS_HOW_ARE_YOU"
    },
    {
      input: `  Have - holan : network
      oke bos`,
      expected: `  HAVE_HOLAN_NETWORK
      OKE_BOS`
    },
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = constantCase(input);
      strictEqual(result, expected);
    });
  });
});