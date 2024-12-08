import { goMapper } from "./json-as-type/goMapper";
import * as vscode from 'vscode';

const SUPPORT_FILES = ["go"];

export const jsonAsType = async (jString: string): Promise<string> => {
    const fileType: string = vscode.window.activeTextEditor?.document.languageId ?? "";
    if (!SUPPORT_FILES.includes(fileType)) {
        await vscode.window.showErrorMessage(`File extension is not support : [Check support file](https://google.com)`, { modal: false });
        throw new Error("Error");
    }

    const name = await vscode.window.showInputBox({
        placeHolder: 'Enter root type/struct name',
        prompt: 'Enter name'
    });
    
    return runHandler(jString, name);
};

const runHandler = (jString: string, name: string = "StructName") => {
    const fileType = vscode.window.activeTextEditor?.document.languageId;
    if (fileType === 'go') {
        return goMapper(jString, name);
    }

    return jString;
};