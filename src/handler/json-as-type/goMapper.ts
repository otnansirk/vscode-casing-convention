import { camelCase, pascalCase } from "change-case";
import { isArray, isNotArray } from "../../helpers/Array";

export const goMapper = (jString: string, name: string = "TestStruct") => {

    const jStringAsObject = JSON.parse(jString);
    let keyMaxLength  = 0;
    let typeMaxLength = 0;

    for (const key of Object.keys(jStringAsObject)) {
        const value = jStringAsObject[key];
        const type = typeof jStringAsObject[key];
        const attr = camelCase(key);

        typeMaxLength = Math.max(typeMaxLength, type.length + 1);
        keyMaxLength = Math.max(keyMaxLength, attr.length + 1);

        if (type === 'object') {
            if (isArray(value)) {
                typeMaxLength = Math.max(typeMaxLength, attr.length + 1);
            } else {
                typeMaxLength = Math.max(typeMaxLength, attr.length + 3);
            }
        }
    }

    return structGenerator(jStringAsObject, name, keyMaxLength, typeMaxLength);
};

const structGenerator = (data: any, name: string= "MyStruct", keyMaxLength= 0, typeMaxLength= 0) => {

    let memberOfStructs: string[] = [];
    let stringTypes: string[] = [`type ${name} struct {`];

    for (const key of Object.keys(data)) {
        const dataType = typeof data[key];
        const dataValue = data[key];

        let attr = pascalCase(key);
        let type = getType(dataValue);

        if (dataType === 'object' && isNotArray(dataValue)) {
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

        stringTypes.push(`    ${attr.padEnd(keyMaxLength)}${type.padEnd(typeMaxLength)}\`json:"${key}"\``);
    }

    stringTypes.push('}');

    return [...stringTypes, "", ...memberOfStructs].join('\n');
};


const getType = (value: string): string => {
    switch (typeof value) {
        case "string":
            return "string";
        case "number":
            return value % 1 === 0 ? "int" : "float64";
        case "boolean":
            return "bool";
        default:
            return "interface{}";
    }
};