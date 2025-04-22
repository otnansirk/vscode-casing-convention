import { strictEqual } from "assert";
import { lowerCaseFirst } from "./lowerCaseFirst";

describe('lowerCaseFirst', function () {

  const TEST_CASES = [
    {
      input: "Javascript",
      expected: "jAVASCRIPT"
    },
    {
      input: "Hi,kris how are you ?",
      expected: "hI,KRIS HOW ARE YOU ?"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "hI, KRIS HOW ARE YOU"
    },
    {
      input: "KRIS_HowAreYOU",
      expected: "kRIS_HOW ARE YOU"
    },
    {
      input: "HOW ARE YOU",
      expected: "hOW ARE YOU"
    },
    {
      input: "How Are YOU",
      expected: "hOW ARE YOU"
    },
    {
      input: `   How Are YOU
      hOW ARE YOU`,
      expected: `   hOW ARE YOU
      h OW ARE YOU`
    },
    {
      input: " ",
      expected: " "
    },
  ];

  TEST_CASES.forEach(({ input, expected }: any) => {
    it(`Sould convert ${input} to ${expected}`, function () {
      let result = lowerCaseFirst(input);
      strictEqual(result, expected);
    });
  });
});