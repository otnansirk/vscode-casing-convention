import { deepStrictEqual, throws } from "assert";
import { jsonParse } from "./jsonParse"; // Ensure this path is correct

describe('jsonParse', function () {
  const TEST_CASES = [
    {
      input: "{\"kirs\":\"OKE\"}",
      expected: "Failed to parse JSON",
      isThrow: true
    },
    {
      input: `${"{\"kirs\":\"OKE\",\"name\":\"kris\"}"}`,
      expected: "Failed to parse JSON",
      isThrow: true
    }
  ];

  TEST_CASES.forEach(({ input, expected, isThrow}) => {
    it(`Should convert ${input} to ${JSON.stringify(expected)}`, function () {
      if (isThrow) {
        throws(() => jsonParse(input), new Error(expected));
      } else {
        let result = jsonParse(input);
        console.log(`${typeof(input)} to ${typeof(expected)} KRIS`);
        
        deepStrictEqual(result, expected);
      }
    });
  });
});
