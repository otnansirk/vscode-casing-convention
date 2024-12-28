import { strictEqual } from "assert";
import { isEmptyObject } from "./objectTools";

describe('isEmptyObject', () => {

  const TASE_CASES = [
    {
      input: {},
      expected: true
    },
    {
      input: {name:"kris"},
      expected: false
    },
    {
      input: 'aku',
      expected: false
    },
  ];

  TASE_CASES.forEach(({input, expected}) => {
    it(`${JSON.stringify(input)} is object and empty : ${expected ? 'YES': 'NO'}`, function() {
      let result = isEmptyObject(input);
      strictEqual(result, expected);
    });
  });
});
