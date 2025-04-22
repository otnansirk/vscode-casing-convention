import { strictEqual } from "assert";
import { camelCase } from "./camelCase";

describe('camelCase', function () {

  const TEST_CASES = [
    {
      input: "javascript",
      expected: "javascript"
    },
    {
      input: "Hi, kris how are you ?",
      expected: "hiKrisHowAreYou"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "hiKrisHowAreYou"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "krisHowAreYou"
    },
    {
      input: `  Have - holan : network
      oke bos`,
      expected: `  haveHolanNetwork
      okeBos`
    },
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = camelCase(input);
      strictEqual(result, expected);
    });
  });
});