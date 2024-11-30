import { strictEqual } from "assert";
import { json2ObjectJS } from "./json2ObjectJS";

describe('json2ObjectJS', function () {

  const TEST_CASES = [
    {
      input: '{"name": "kris"}',
      expected: `{
    name: "kris"
}`
    },
    {
      input: '{"name": 12}',
      expected: `{
    name: 12
}`
    },
    {
      input: '{"name": true}',
      expected: `{
    name: true
}`
    }
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = json2ObjectJS(input);
      strictEqual(result, expected);
    });
  });
});