import HasNoSelected from "../../exception/HasNoSelected";
import { goMapper } from "./json-as-type/goMapper";
import { tsMapper } from "./json-as-type/tsMapper";
import * as vscode from 'vscode';

const GO_TYPE = "go";
const TS_TYPE = "typescript";
const SUPPORT_FILES = [GO_TYPE, TS_TYPE];

export const jsonAsType = async (jString: string): Promise<string> => {
    const fileType: string = vscode.window.activeTextEditor?.document.languageId ?? "";
    
    if (!SUPPORT_FILES.includes(fileType)) {
        throw new HasNoSelected(`The file extension is not supported, currently support only: [.go](https://go.dev), [typescript](https://www.typescriptlang.org)`);
    }

    let structName = await vscode.window.showInputBox({
        placeHolder: 'Enter name',
        prompt: 'Enter root type/struct name'
    });

    return runHandler(jString, structName);
};

const runHandler = (jString: string, name: string | undefined) => {
    const fileType = vscode.window.activeTextEditor?.document.languageId;
    if (fileType === GO_TYPE) {
        const structName = name? name : "StructName";
        return goMapper(jString, structName);
    }

    if (fileType === TS_TYPE) {
        const structName = name? name : "TypeName";
        return tsMapper(jString, structName);
    }

    return jString;
};