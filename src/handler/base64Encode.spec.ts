import { strictEqual } from "assert";
import { base64Encode } from "./base64Encode";

describe('base64Encode', function() {

  const TEST_CASES = [
    {
      input: "javascript",
      expected: "amF2YXNjcmlwdA=="
    },
    {
      input: "Hi, kris how are you ?",
      expected: "SGksIGtyaXMgaG93IGFyZSB5b3UgPw=="
    }
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = base64Encode(input);
      strictEqual(result, expected);
    });
  });
});