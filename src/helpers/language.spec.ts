import { deepStrictEqual, equal } from "assert";
import { getLanguageByLabel, getLanguageValueByLabel } from "./languages";

describe('Languages utilities', () => {
    describe('getLanguageByLabel', () => {
        const TASE_CASES = [
            {
                input: "Indonesian",
                expected: {
                    label: "Indonesian",
                    value: "id"
                }
            },
            {
                input: "Indonesia",
                expected: undefined
            }
        ];

        TASE_CASES.forEach(({ input, expected }) => {
            it(`Sould ${input} get ${JSON.stringify(expected)}`, function () {
                let result = getLanguageByLabel(input);
                deepStrictEqual(result, expected);
            });
        });
    });

    describe('getLanguageValueByLabel', () => {
        const TASE_CASES = [
            {
                input: "Indonesian",
                expected: "id"
            },
            {
                input: "Afrikaans",
                expected: "af"
            },
            {
                input: "Indonesia",
                expected: "id"
            },
            {
                input: "Unknown",
                expected: "id"
            },
        ];

        TASE_CASES.forEach(({ input, expected }) => {
            it(`Sould ${input} get ${expected}`, function () {
                let result = getLanguageValueByLabel(input);
                equal(result, expected);
            });
        });
    });
});