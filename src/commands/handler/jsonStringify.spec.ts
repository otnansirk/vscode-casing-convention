import { strictEqual } from "assert";
import { jsonStringify } from "./jsonStringify";

describe('jsonStringify', function () {

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
    it(`Sould convert ${JSON.stringify(input)} to ${expected}`, function () {
      let result = jsonStringify(input);
      strictEqual(result, expected.toString());
    });
  });
});