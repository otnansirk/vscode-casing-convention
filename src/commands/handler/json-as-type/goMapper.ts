import { camelCase, pascalCase } from "change-case";
import { isArray, isNotArray } from "../../../helpers/arrayTools";
import { isEmptyObject } from "../../../helpers/objectTools";
import { snakeCase } from "../snakeCase";

export const goMapper = (jString: string, name: string = "StructName") => {

    const jStringAsObject = JSON.parse(jString);
    let keyMaxLength  = 0;
    let typeMaxLength = 0;

    for (const key of Object.keys(jStringAsObject)) {
        const value = jStringAsObject[key];
        const type = typeof value;

        const attr = camelCase(key);
        const typeLength = ['boolean', 'number'].includes(type) ? getType(value).length + 1: type.length + 1;

        typeMaxLength = Math.max(typeMaxLength, typeLength);
        keyMaxLength = Math.max(keyMaxLength, attr.length + 1);

        if (type === 'object') {
            typeMaxLength = Math.max(typeMaxLength, attr.length + 1);
            
            if (isEmptyObject(value)) {
                // 23 is length os string `map[string]interface{}` + space
                typeMaxLength = Math.max(typeMaxLength, 23);
            }

            if (isArray(value)) {
                if (value.length) {
                    // not empty array
                    // 3 is length of string empty string+space ` []`
                    typeMaxLength = Math.max(typeMaxLength, attr.length + 3);
                } else {
                    // empty array.
                    // 14 is length of string `[]interface{}`
                    typeMaxLength = Math.max(typeMaxLength, 14);
                }
            }

            if (value === null) {
                // 13 is length of string `*interface{}`
                typeMaxLength = Math.max(typeMaxLength, 13);
            }
        }
    }

    return structGenerator(jStringAsObject, name, keyMaxLength, typeMaxLength);
};

const structGenerator = (data: any, name: string, keyMaxLength= 0, typeMaxLength= 0) => {

    let memberOfStructs: string[] = [];
    let stringTypes: string[] = [`type ${name} struct {`];

    for (const key of Object.keys(data)) {
        const dataType = typeof data[key];
        const dataValue = data[key];

        let attr = pascalCase(key);
        let type = getType(dataValue);

        if (dataValue !== null) {
            if (dataType === 'object' && isNotArray(dataValue) && Object.keys(dataValue).length) {
                type = pascalCase(key);
                memberOfStructs.push(
                    goMapper(
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
                        goMapper(
                            JSON.stringify(dataValue[0]),
                            pascalCase(key)
                        )
                    );
                }
                type = isObject ? `[]${pascalCase(key)}` : `[]${getType(dataValue[0])}`;
            }
        }
        
        stringTypes.push(`    ${attr.padEnd(keyMaxLength)}${type.padEnd(typeMaxLength)}\`json:"${snakeCase(key)}"\``);
    }

    stringTypes.push('}');

    return [...stringTypes, "", ...memberOfStructs].join('\n');
};


export const getType = (value: string): string => {
    if (value === null) {
        return "*interface{}";
    }

    switch (typeof value) {
        case "string":
            return "string";
        case "number":
            return value % 1 === 0 ? "int" : "float64";
        case "boolean":
            return "bool";
        case "object":
            return "map[string]interface{}";
        default:
            return "interface{}";
    }
};