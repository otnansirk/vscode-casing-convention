// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import commandRegister from './commands/commandRegister';
import { translate } from './handler/translation';
import { getLanguageValueByLabel } from './helpers/languages';
import codeActionRegister from './code-actions/codeActionRegister';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "casing-convention" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand 
	// The commandId parameter must match the command field in package.json
	commandRegister.forEach(el => {
		let disposable = vscode.commands.registerCommand(el.name, el.callback);
		context.subscriptions.push(disposable);
	});

	codeActionRegister.forEach(el => {
		let disposable = vscode.languages.registerCodeActionsProvider(el.selector, el.provider);
		context.subscriptions.push(disposable);
	});

	const hoverProvider = vscode.languages.registerHoverProvider([{scheme: 'file'}, {scheme: 'untitled'}], {
		provideHover(document, position, token) {
			const translationHoverSetting = vscode.workspace.getConfiguration('casing-convention.translation-hover');
			
			const translateOnHover: boolean  = translationHoverSetting.get("translateOnHover", false);
			const defaultTranslateTo: string = translationHoverSetting.get("defaultTargetLanguage", "");


			if (translateOnHover) {
				const text   = document.lineAt(position).text;
				const hoverContent = new vscode.MarkdownString();
				
				hoverContent.appendMarkdown('_[Translate to](command:casing-convention.setting.translation-hover.defaultTargetLanguage)_\n\n');
				hoverContent.isTrusted = true;

				const toLanguage: string = getLanguageValueByLabel(defaultTranslateTo);
				return translate(text, toLanguage)
					.then(res => {
						hoverContent.appendMarkdown("`"+res+"`");
						return new vscode.Hover(hoverContent);
					});
			}
		}
	});
	context.subscriptions.push(hoverProvider);

}

// This method is called when your extension is deactivated
// export function deactivate() {}
