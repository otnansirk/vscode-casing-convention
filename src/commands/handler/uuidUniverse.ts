import { 
    v1 as uuidv1,
    v4 as uuidv4,
    v6 as uuidv6,
    v7 as uuidv7,
    NIL as uuidNil
} from 'uuid';
import * as vscode from 'vscode';

type FunctionMap = {
    [key: string]: () => string; 
};

export const uuidUniverse = async () => {
    const options = [
        {value: "uuidv4", label: "UUID v4"},
        {value: "uuidv6", label: "UUID v6"},
        {value: "uuidv7", label: "UUID v7"},
        {value: "uuidv1", label: "UUID v1"},
        {value: "uuidNil", label: "UUID Nil/Empty"},
    ];

    const selected = await vscode.window.showQuickPick(options, {
        placeHolder: "Select uuid version",
        canPickMany: false
    });

    if (selected?.value) {
        return functionMap[selected.value]();
    }

    return "";
};

const functionMap: FunctionMap = {
    uuidv1,
    uuidv4,
    uuidv6,
    uuidv7,
    uuidNil: () => uuidNil
};