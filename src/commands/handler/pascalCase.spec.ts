import { strictEqual } from "assert";
import { pascalCase } from "./pascalCase";

describe('pascalCase', function () {

  const TEST_CASES = [
    {
      input: "Javascript",
      expected: "Javascript"
    },
    {
      input: "Hi,kris how are you ?",
      expected: "HiKrisHowAreYou"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "HiKrisHowAreYou"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "KrisHowAreYou"
    },
    {
      input: "HOW ARE YOU",
      expected: "HowAreYou"
    },
    {
      input: "How Are YOU",
      expected: "HowAreYou"
    },
    {
      input: `   How Are YOU
      hOW ARE YOU`,
      expected: `   HowAreYou
      HOwAreYou`
    },
    {
      input: " ",
      expected: " "
    },
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = pascalCase(input);
      strictEqual(result, expected);
    });
  });
});