import HasNoSelected from '../exception/HasNoSelected';
import * as vscode from 'vscode';

const commandProvider = (callback: any) => async () => {

  const editor = vscode.window.activeTextEditor;
  const selections = editor?.selections;

  if (!selections) {
    return;
  }

  try {
    await editor.edit(editBuilder => {
      selections.forEach(el => {

        const selectionRange =new vscode.Range(
          el.start.line,
          el.start.character,
          el.end.line,
          el.end.character
          );
        const highlighted = editor.document.getText(selectionRange);
        if (!highlighted) {
          throw new HasNoSelected("Your cursor doesn't select any strings");
        }
        editBuilder.replace(el, callback(highlighted));
      });
    });

    // Display a message box to the user
    await vscode.window.showInformationMessage(`${callback.name} : Successfully`, {modal:false});
  } catch (err) {
    // Display a message box to the user
    if (err instanceof HasNoSelected) {
      await vscode.window.showErrorMessage(err.message);
    } else {    
      await vscode.window.showErrorMessage(`${callback.name} : Failed`);
    }
  }

};

export default commandProvider;