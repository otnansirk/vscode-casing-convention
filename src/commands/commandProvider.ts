import * as vscode from 'vscode';

const commandProvider = (callback: any) => async () => {

  const editor = vscode.window.activeTextEditor;
  const selections = editor?.selections;

  if (selections) {
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

          editBuilder.replace(el, callback(highlighted));
        });
      });

      // Display a message box to the user
      await vscode.window.showInformationMessage(`Success convert to ${callback.name}`, {modal:false});
    } catch (err) {
      await vscode.window.showInformationMessage(`Failed convert to ${callback.name}`);
    }
  } else {
    return;
  }
};

export default commandProvider;