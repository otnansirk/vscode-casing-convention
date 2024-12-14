import { strictEqual } from "assert";
import { goMapper } from "./goMapper";

describe('goMapper', function() {

  const TEST_CASES = [
    {
      input: "{}",
      expected: `type StructName struct {
}
`
    }
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = goMapper(input);
      strictEqual(result, expected);
    });
  });
});