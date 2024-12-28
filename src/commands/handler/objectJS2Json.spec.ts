import { strictEqual } from "assert";
import { objectJS2Json } from "./objectJS2Json";

describe('objectJS2Json', function () {

  const TEST_CASES = [
    {
      input: `{
    name: "kris"
}`,
      expected: `{
    "name": "kris"
}`
    },
    {
      input: `{
    name: 12
}`,
      expected: `{
    "name": 12
}`
    },
    {
      input: `{
    name: true
}`,
      expected: `{
    "name": true
}`
    }
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = objectJS2Json(input);
      strictEqual(result, expected);
    });
  });
});