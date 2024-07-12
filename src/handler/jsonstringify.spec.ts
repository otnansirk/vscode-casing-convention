import { strictEqual } from "assert";
import { jsonstringify } from "./jsonstringify";

describe('jsonstringify', function () {

  const TEST_CASES = [
    {
      input: {"kirs": "OKE"},
      expected: "{\"kirs\":\"OKE\"}"
    },
    {
      input: {
        "kirs": "OKE",
        "name": "kris"
      },
      expected: "{\"kirs\":\"OKE\",\"name\":\"kris\"}"
    }
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = jsonstringify(input);
      strictEqual(result, expected.toString());
    });
  });
});