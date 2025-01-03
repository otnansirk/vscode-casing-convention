import { strictEqual } from "assert";
import { snakeCase } from "./snakeCase";

describe('snakeCase', function() {

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
      expected: "hi,kris_how_are_you_?"
    },
    {
      input: "Have - holan : network\noke bos",
      expected: "have_holan_:_network\noke_bos"
    },
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = snakeCase(input);
      strictEqual(result, expected);
    });
  });
});