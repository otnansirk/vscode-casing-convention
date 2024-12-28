import { strictEqual } from "assert";
import { isArray, isNotArray } from "./arrayTools";

describe('isArray', () => {

  const TASE_CASES = [
    {
      input: [],
      expected: true
    },
    {
      input: {},
      expected: false
    },
    {
      input: 'aku',
      expected: false
    },
  ];

  TASE_CASES.forEach(({input, expected}) => {
    it(`${JSON.stringify(input)} is array : ${expected ? 'YES': 'NO'}`, function() {
      let result = isArray(input);
      strictEqual(result, expected);
    });
  });
});

describe('isNotArray', () => {

  const TASE_CASES = [
    {
      input: [],
      expected: false
    },
    {
      input: {},
      expected: true
    },
    {
      input: 'aku',
      expected: true
    },
  ];

  TASE_CASES.forEach(({input, expected}) => {
    it(`${JSON.stringify(input)} is not array : ${expected ? 'YES': 'NO'}`, function() {
      let result = isNotArray(input);
      strictEqual(result, expected);
    });
  });
});