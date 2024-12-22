import HasNoSelected from '../exception/HasNoSelected';
import * as vscode from 'vscode';

const commandProvider = (callback: (text: string) => string | Promise<string>, highlightedValidated: boolean = true) => async () => {

  const editor = vscode.window.activeTextEditor;
  const selections = editor?.selections;

  if (!selections) {
    return;
  }

  try {

    const changes = await Promise.all(
      selections.map(async (el) => {
        const selectionRange = new vscode.Range(
          el.start.line,
          el.start.character,
          el.end.line,
          el.end.character
        );

        const highlighted = editor.document.getText(selectionRange);
        if (!highlighted && highlightedValidated) {
          throw new HasNoSelected("Your cursor doesn't select any strings");
        }

        const clbk = callback(highlighted);
        const resolvedResult = clbk instanceof Promise ? await clbk : clbk;

        return { range: el, replacement: resolvedResult };
      })
    );

    await editor.edit((editBuilder) => {
      changes.forEach(({ range, replacement }) => {
        editBuilder.replace(range, replacement);
      });
    });

    // Display a message box to the user
    await vscode.window.showInformationMessage(`${callback.name} : Successfully`, { modal: false });
  } catch (err) {
    console.log("Error", err);
    
    // Display a message box to the user
    if (err instanceof HasNoSelected) {
      await vscode.window.showErrorMessage(err.message);
    } else {
      await vscode.window.showErrorMessage(`${callback.name} : Failed`);
    }
  }

};

export default commandProvider;