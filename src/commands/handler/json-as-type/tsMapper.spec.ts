import { strictEqual } from "assert";
import { getType, tsMapper } from "./tsMapper";

describe('tsMapper', function() {

  const TEST_CASES = [
    {
      input: "{}",
      expected: `type TypeName = {
}
`
    },
    {
      input: `{"address":{"name":"ponorogo"}, "hoby":{}, "lastName": "otnansirk"}`,
      expected: `type TypeName = {
    address  : Address;
    hoby     : Record<string, any>;
    lastName : string;
}

type Address = {
    name : string;
}
`
    },
    {
      input: `{"address":[{"name":"ponorogo"}],"hobies":["drink","eat"],"friends":[]}`,
      expected: `type TypeName = {
    address : Address[];
    hobies  : string[];
    friends : any[];
}

type Address = {
    name : string;
}
`
    },
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = tsMapper(input);
      strictEqual(result, expected);
    });
  });
});


describe('tsMapper_getType', function() {

  const TEST_CASES = [
    {
      input: "Hello kris",
      expected: "string"
    },
    {
      input: 10,
      expected: "number"
    },
    {
      input: 1.5,
      expected: "number"
    },
    {
      input: true,
      expected: "boolean"
    },
    {
      input: {},
      expected: "Record<string, any>"
    },
    {
      input: undefined,
      expected: "any"
    }
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = getType(input);
      strictEqual(result, expected);
    });
  });
});