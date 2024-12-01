import { strictEqual } from "assert";
import { numberedByLines } from "./numberedByLines";

describe('numberedByLines', function() {

  const TEST_CASES = [
    {
      input: "javascript",
      expected: "1. javascript"
    },
    {
      input: "Hi, kris how are you ?",
      expected: "1. Hi, kris how are you ?"
    },
    {
      input: "Hi, KRIS HowAreYou",
      expected: "1. Hi, KRIS HowAreYou"
    },
    {
      input: "KRIS_HowAreYOU\nhalo semua",
      expected: "1. KRIS_HowAreYOU\n2. halo semua"
    },
    {
      input: "KRIS_HowAreYOU\n  ",
      expected: "1. KRIS_HowAreYOU\n  "
    },
    {
      input: "",
      expected: ""
    },
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = numberedByLines(input);
      strictEqual(result, expected);
    });
  });
});