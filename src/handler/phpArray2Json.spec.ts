import { strictEqual } from "assert";
import { phpArray2Json } from "./phpArray2Json";

describe('json2PhpArray', function () {

  const TEST_CASES = [
    {
      input: "['name' => 'kris']",
      expected: "{'name': 'kris'}",
    },
    {
      input: "['name'=> 'kris']",
      expected: "{'name': 'kris'}",
    },
    {
      input: '["name" => "kris"]',
      expected: '{"name": "kris"}',
    },
    {
      input: "['name'=> true]",
      expected: "{'name': true}",
    },
    {
      input: '["name" => 123]',
      expected: '{"name": 123}',
    },
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = phpArray2Json(input);
      strictEqual(result, expected);
    });
  });
});