import HasNoSelected from "../../exception/HasNoSelected";
import { goMapper } from "./json-as-type/goMapper";
import * as vscode from 'vscode';

const SUPPORT_FILES = ["go"];

export const jsonAsType = async (jString: string): Promise<string> => {
    const fileType: string = vscode.window.activeTextEditor?.document.languageId ?? "";
    if (!SUPPORT_FILES.includes(fileType)) {
        throw new HasNoSelected(`The file extension is not supported, currently support only: [.go](https://go.dev)`);
    }

    let structName = await vscode.window.showInputBox({
        placeHolder: 'Enter name',
        prompt: 'Enter root type/struct name'
    });

    if (!structName) {
        structName = "StructName";
    }

    return runHandler(jString, structName);
};

const runHandler = (jString: string, name: string) => {
    const fileType = vscode.window.activeTextEditor?.document.languageId;
    if (fileType === 'go') {
        return goMapper(jString, name);
    }

    return jString;
};