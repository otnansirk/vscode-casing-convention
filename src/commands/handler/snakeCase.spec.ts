import { strictEqual } from "assert";
import { snakeCase } from "./snakeCase";

describe('snakeCase', function () {

  const TEST_CASES = [
    {
      input: "JavascriptForMe",
      expected: "javascript_for_me"
    },
    {
      input: "javascriptForMe",
      expected: "javascript_for_me"
    },
    {
      input: "Javascript",
      expected: "javascript"
    },
    {
      input: "Hi,kris how are you ?",
      expected: "hi_kris_how_are_you"
    },
    {
      input: `  Have - holan : network
      oke bos`,
      expected: `  have_holan_network
      oke_bos`
    },
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = snakeCase(input);
      strictEqual(result, expected);
    });
  });
});