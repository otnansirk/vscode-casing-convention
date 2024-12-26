import { 
    CancellationToken, 
    CodeAction, 
    CodeActionContext, 
    CodeActionKind, 
    Range, 
    TextDocument 
} from "vscode";


export const translation = () => {
    return {
        provideCodeActions(document: TextDocument, range: Range, context: CodeActionContext, token: CancellationToken): CodeAction[] {
            if (range && !range.isEmpty) {
                const action = new CodeAction('Translate to', CodeActionKind.QuickFix);
                action.command = {
                    title: 'Casing : Translate',
                    command: 'casing-convention.translation',
                    arguments: [document.getText(range)],
                };
                return [action];
            }
            return [];
        }
    };
};