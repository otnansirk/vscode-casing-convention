import { strictEqual } from "assert";
import { headerCase } from "./headerCase";

describe('headerCase', function () {

  const TEST_CASES = [
    {
      input: "javascript",
      expected: "Javascript"
    },
    {
      input: "Hi, kris how are you ?",
      expected: "Hi-Kris-How-Are-You"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "Hi-Kris-How-Are-You"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "Kris-How-Are-You"
    },
    {
      input: `  Have - holan : network
      oke bos`,
      expected: `  Have-Holan-Network
      Oke-Bos`
    },
    {
      input: "&",
      expected: ""
    },
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = headerCase(input);
      strictEqual(result, expected);
    });
  });
});