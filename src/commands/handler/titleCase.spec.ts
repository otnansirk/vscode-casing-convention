import { strictEqual } from "assert";
import { titleCase } from "./titleCase";

describe('titleCase', function() {

  const TEST_CASES = [
    {
      input: "Javascript",
      expected: "Javascript"
    },
    {
      input: "Hi,kris how are you ?",
      expected: "Hi,Kris How Are You ?"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "Hi, Kris Howareyou"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "Kris_howareyou"
    },
    {
      input: "Have nice DAY FOR YOU",
      expected: "Have Nice Day for You"
    },
    {
      input: "Have - holan : network",
      expected: "Have - Holan : Network"
    },
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = titleCase(input);
      strictEqual(result, expected);
    });
  });
});