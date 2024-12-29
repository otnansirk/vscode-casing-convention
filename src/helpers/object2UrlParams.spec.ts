import { strictEqual } from "assert";
import { object2UrlParams } from "./object2UrlParams";

describe('object2UrlParams', () => {

  const TASE_CASES = [
    {
      input: {name: "kris"},
      expected: "name=kris"
    },
    {
      input: {q: "search"},
      expected: "q=search"
    },
    {
      input: {q: "search", page: 1, limit: 5},
      expected: "q=search&page=1&limit=5"
    },
    {
      input: {q: "search", page: 1, categories: ["football", "volly"]},
      expected: "q=search&page=1&categories=football&categories=volly"
    }
  ];

  TASE_CASES.forEach(({input, expected}) => {
    it(`Sould convert ${JSON.stringify(input)} to ${expected}`, function() {
      let result = object2UrlParams(input);
      strictEqual(result, expected);
    });
  });
});