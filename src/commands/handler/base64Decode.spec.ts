import { strictEqual } from "assert";
import { base64Decode } from "./base64Decode";

describe('base64Decode', function() {

  const TEST_CASES = [
    {
      input: "amF2YXNjcmlwdA==",
      expected: "javascript"
    },
    {
      input: "SGksIGtyaXMgaG93IGFyZSB5b3UgPw==",
      expected: "Hi, kris how are you ?"
    }
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = base64Decode(input);
      strictEqual(result, expected);
    });
  });
});