import { deepStrictEqual, throws } from "assert";
import { jsonParse } from "./jsonParse"; // Ensure this path is correct

describe('jsonParse', function () {
  const TEST_CASES = [
    {
      input: "{\"name\":\"kris\"}",
      expected: '{"name":"kris"}',
    }
  ];

  const TEST_CASES_ERROR = [
    {
      input: "{\"kirs\":\"OKE\"}",
      expected: "Failed to parse JSON",
    },
    {
      input: `${"{\"kirs\":\"OKE\",\"name\":\"kris\"}"}`,
      expected: "Failed to parse JSON",
    }
  ];

  TEST_CASES.forEach(({ input, expected}) => {
    it(`Should convert ${input} to ${expected}`, function () {
      let result = jsonParse(JSON.stringify(input));
      deepStrictEqual(result, expected);
    });
  });

  TEST_CASES_ERROR.forEach(({ input, expected}) => {
    it(`Json Parse from ${input} should error : ${expected}`, function () {
      throws(() => jsonParse(input), new Error(expected));
    });
  });
});
