import { camelCase, pascalCase } from "change-case";
import { isArray, isNotArray } from "../../../helpers/arrayTools";
import { isEmptyObject } from "../../../helpers/objectTools";

export const tsMapper = (jString: string, name: string = "TypeName") => {

    const jStringAsObject = JSON.parse(jString);
    let keyMaxLength  = 0;
    let typeMaxLength = 0;

    for (const key of Object.keys(jStringAsObject)) {
        const value = jStringAsObject[key];
        const type = typeof jStringAsObject[key];

        const attr = camelCase(key);
        const typeLength = type.length + 1;

        typeMaxLength = Math.max(typeMaxLength, typeLength);
        keyMaxLength = Math.max(keyMaxLength, attr.length + 1);

        if (type === 'object') {
            typeMaxLength = Math.max(typeMaxLength, attr.length + 1);

            if (isEmptyObject(value)) {
                // 20 is length os string `Record<string, any> `
                typeMaxLength = Math.max(typeMaxLength, 20);
            }

            if (isArray(value)) {
                if (value.length) {
                    // not empty array
                    // 3 is length of string empty string+space ` []`
                    typeMaxLength = Math.max(typeMaxLength, attr.length + 3);
                } else {
                    // empty array.
                    // 6 is length of string `any[] `
                    typeMaxLength = Math.max(typeMaxLength, 6);
                }
            }

            if (value === null) {
                // 5 is length of string `null`
                typeMaxLength = Math.max(typeMaxLength, 5);
            }
        }
    }

    return typeGenerator(jStringAsObject, name, keyMaxLength, typeMaxLength);
};

const typeGenerator = (data: any, name: string, keyMaxLength= 0, typeMaxLength= 0) => {

    let memberOfStructs: string[] = [];
    let stringTypes: string[] = [`type ${name} = {`];

    for (const key of Object.keys(data)) {
        const dataType = typeof data[key];
        const dataValue = data[key];

        let attr = camelCase(key);
        let type = getType(dataValue);

        if (dataValue !== null) {
            if (dataType === 'object' && isNotArray(dataValue) && Object.keys(dataValue).length) {
                type = pascalCase(key);
                memberOfStructs.push(
                    tsMapper(
                        JSON.stringify(data[key]),
                        pascalCase(key)
                    )
                );
            }

            if (dataType === 'object' && isArray(dataValue)) {
                const arrayValueType = typeof dataValue[0];
                const isObject = arrayValueType === "object";
                if (isObject) {
                    memberOfStructs.push(
                        tsMapper(
                            JSON.stringify(dataValue[0]),
                            pascalCase(key)
                        )
                    );
                }
                type = isObject ? `${pascalCase(key)}[]` : `${getType(dataValue[0])}[]`;
            }
        }

        stringTypes.push(`    ${attr.padEnd(keyMaxLength)}: ${type};`);
    }

    stringTypes.push('}');

    return [...stringTypes, "", ...memberOfStructs].join('\n');
};


export const getType = (value: string): string => {
    if (value === null) {
        return "null";
    }
    if (typeof value === 'object') {
        if (isEmptyObject(value)) {
            return "Record<string, any>";
        }
    }

    switch (typeof value) {
        case "string":
            return "string";
        case "number":
            return "number";
        case "boolean":
            return "boolean";
        default:
            return "any";
    }
};