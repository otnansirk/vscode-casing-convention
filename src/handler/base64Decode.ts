// export const base64Decode = (text: string): string => atob(text);
export const base64Decode = (jsonString: string, structName: string = "TEST"): string => {
    try {
        const obj = JSON.parse(jsonString);
        const lines: string[] = [`type ${structName} struct {`];

        for (const key of Object.keys(obj)) {
            const value = obj[key];
            const type = typeof value === "object" 
                ? (Array.isArray(value) ? "[]" + guessGoType(value[0]) : guessGoType(value))
                : guessGoType(value);

            lines.push(`    ${toPascalCase(key)} ${type} \`json:"${key}"\``);
        }
        lines.push("}");
        return formatGoStruct(lines.join("\n"));
    } catch (err) {
        console.error("Invalid JSON:", err);
        return "Error: Invalid JSON provided.";
    }
};

const guessGoType = (value: any): string => {
    if (value === null) {
        return "interface{}";
    }
    switch (typeof value) {
        case "string": return "string";
        case "number": return value % 1 === 0 ? "int" : "float64";
        case "boolean": return "bool";
        case "object": return "struct"; // for simplicity
        default: return "interface{}";
    }
};

const toPascalCase = (str: string): string => {
    return str.replace(/(^\w|_\w)/g, (match) => match.replace('_', '').toUpperCase());
};

const formatGoStruct = (goStruct: string): string => {
    const lines = goStruct.split("\n"); // Pisahkan per baris
    const formattedLines: string[] = [];
    let indentLevel = 0;

    for (let line of lines) {
        if (line.trim().endsWith("}")) {
            indentLevel--; // Kurangi level indentasi sebelum menutup "}"
        }

        const indent = "    ".repeat(indentLevel); // Tambahkan spasi berdasarkan level indentasi
        formattedLines.push(indent + line.trim());

        if (line.trim().endsWith("{")) {
            indentLevel++; // Tambahkan level indentasi setelah membuka "{"
        }
    }

    return formattedLines.join("\n"); // Gabungkan kembali menjadi string
}
