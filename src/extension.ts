// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import commandRegister from './commands/commandRegister';
import codeActionRegister from './code-actions/codeActionRegister';
import hoverRegister from './hovers/codeActionRegister';

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

	// Provide the implementation of code action with code action register
	// This will display a lamp bulb icon to the left or top of the selected text
	codeActionRegister.forEach(el => {
		let disposable = vscode.languages.registerCodeActionsProvider(el.selector, el.provider);
		context.subscriptions.push(disposable);
	});

	// Provide the implementation of hover with hover register
	// This will display a tooltip when hovering over text.
	hoverRegister.forEach(el => {
		let disposable = vscode.languages.registerHoverProvider(el.selector, el.provider);
		context.subscriptions.push(disposable);
	});
}

// This method is called when your extension is deactivated
// export function deactivate() {}
