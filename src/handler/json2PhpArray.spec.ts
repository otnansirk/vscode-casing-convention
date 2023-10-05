import { strictEqual } from "assert";
import { json2PhpArray } from "./json2PhpArray";

describe('json2PhpArray', function () {

  const TEST_CASES = [
    {
      input: "{'name': 'kris'}",
      expected: "['name' => 'kris']"
    },
    {
      input: '{"name": "kris"}',
      expected: '["name" => "kris"]'
    },
    {
      input: '{"name": 12}',
      expected: '["name" => 12]'
    },
    {
      input: '{"name": true}',
      expected: '["name" => true]'
    }
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = json2PhpArray(input);
      strictEqual(result, expected);
    });
  });
});