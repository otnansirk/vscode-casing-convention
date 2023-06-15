import * as vscode from 'vscode';
import commandRegister, { COMMAND_TYPE_CORE, CommandType } from './commandRegister';


export const commandHelp = async () => {

  // if there's only one selection, show a preview of what it will look like after conversion in the QuickPickOptions,
  // otherwise use the description used in COMMAND_DEFINITIONS
  const items: vscode.QuickPickItem[] = commandRegister
                                          .filter(item => item.type !== COMMAND_TYPE_CORE)
                                          .map((item) => ({
                                            label       : item.label,
                                            description : item.description,
                                            detail      : item.detail,
                                          }));

    await vscode.window.showQuickPick(items)
        .then(async command => {
          const picked: CommandType | undefined = commandRegister.find(item => (item.label === command?.label));
          console.log("OKEE", picked);

          if (picked) {
            await picked.callback();
          }
        });
};