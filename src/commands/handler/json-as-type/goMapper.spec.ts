import { strictEqual } from "assert";
import { getType, goMapper } from "./goMapper";

describe('goMapper', function() {

  const TEST_CASES = [
    {
      input: "{}",
      expected: `type StructName struct {
}
`
    },
    {
      input: `{"address":{"name":"ponorogo"}, "hoby":{}, "lastName": "otnansirk"}`,
      expected: `type StructName struct {
    Address  Address                \`json:"address"\`
    Hoby     map[string]interface{} \`json:"hoby"\`
    LastName string                 \`json:"last_name"\`
}

type Address struct {
    Name string \`json:"name"\`
}
`
    },
    {
      input: `{"address":[{"name":"ponorogo"}],"hobies":["drink","eat"],"friends":[]}`,
      expected: `type StructName struct {
    Address []Address     \`json:"address"\`
    Hobies  []string      \`json:"hobies"\`
    Friends []interface{} \`json:"friends"\`
}

type Address struct {
    Name string \`json:"name"\`
}
`
    },
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = goMapper(input);
      strictEqual(result, expected);
    });
  });
});


describe('goMapper_getType', function() {

  const TEST_CASES = [
    {
      input: "Hello kris",
      expected: "string"
    },
    {
      input: 10,
      expected: "int"
    },
    {
      input: 1.5,
      expected: "float64"
    },
    {
      input: true,
      expected: "bool"
    },
    {
      input: {},
      expected: "map[string]interface{}"
    },
    {
      input: undefined,
      expected: "interface{}"
    }
  ];

  TEST_CASES.forEach(({input, expected}: any) => {
    it(`Sould convert ${input} to ${expected}`, function() {
      let result = getType(input);
      strictEqual(result, expected);
    });
  });
});