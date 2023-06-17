
# VSCode Casing Convention
Transform your text with the power of casing conventions.

![demo for usage casing convention](assets/usage.gif)

## Code Coverage

![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat)
![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat)
![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat)
![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat)


<a href="https://www.producthunt.com/posts/vscode-casing-convention?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-vscode&#0045;casing&#0045;convention" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=400069&theme=light" alt="VSCode&#0032;Casing&#0032;Convention - Transform&#0032;your&#0032;text&#0032;with&#0032;the&#0032;power&#0032;of&#0032;casing&#0032;conventions | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## Usage
1. Install the Extension: Open the Extensions view in VS Code by pressing `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac). Search for the extension by name, "Casing Convention", and click on "Install" to install it.
2. Select the Text to Convert: Ensure that the text you want to convert is selected in the editor.
3. Open the Command Palette by pressing `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac).
4. Type `casing` to filter the available commands.
5. Select the desired conversion command from the list.
6. The selected text will be transformed into the corresponding casing convention.

Alternatively, you can also use your custom keyboard shortcuts associated with each command like :

- Windows/Linux: `Ctrl + Shift + <keyboard-shortcut>`
- Mac: `Cmd + Shift + <keyboard-shortcut>`

However, you must first add [Extension Setting](#extension-setting) to your keyboard shortcut.

Read on [this page](https://code.visualstudio.com/docs/getstarted/keybindings) to create a custom keyboard shortcut

## Features

- **camelCase**: Convert text to `camelCase`. This convention capitalizes the first letter of each word except the first one, and removes spaces or special characters between words.

- **snakeCase**: Convert text to `snake_case`. This convention uses underscores (`_`) to separate words, making the text lowercase and replacing spaces or special characters.

- **capitalCase**: Convert text to `Capital Case`. This convention capitalizes the first letter of each word and removes spaces or special characters between words.

- **constantCase**: Convert text to `CONSTANT_CASE`. This convention converts the text to uppercase and uses underscores (`_`) to separate words.

- **dotCase**: Convert text to `dot.case`. This convention uses dots (`.`) to separate words, making the text lowercase and replacing spaces or special characters.

- **headerCase**: Convert text to `Header-Case`. This convention capitalizes the first letter of each word and uses hyphens (`-`) to separate words.

- **noCase**: Convert text to `no_case`. This convention makes the text lowercase and replaces spaces or special characters with underscores (`_`).

- **paramCase**: Convert text to `param-case`. This convention uses hyphens (`-`) to separate words and makes the text lowercase.

- **pascalCase**: Convert text to `PascalCase`. This convention capitalizes the first letter of each word and removes spaces or special characters between words.

- **pathCase**: Convert text to `/path/case`. This convention uses slashes (`/`) to separate words and makes the text lowercase.

- **sentenceCase**: Convert text to `Sentence case`. This convention capitalizes the first letter of the first word and makes the rest of the text lowercase.

- **titleCase**: Convert text to `Title Case`. This convention capitalizes the first letter of each word, including conjunctions and prepositions.

- **lowerCase**: Convert text to lowercase. This convention makes all the text lowercase.

- **lowerCaseFirst**: Convert text to `Lowercase First`. This convention makes the first letter of the text lowercase and keeps the rest of the text unchanged.

- **upperCase**: Convert text to UPPERCASE. This convention makes all the text uppercase.

- **upperCaseFirst**: Convert text to `Uppercase First`. This convention makes the first letter of the text uppercase and keeps the rest of the text unchanged.

- **spongeCase**: Convert text to `SpOnGeCaSe`. Transform into a string with random capitalization applied.

- **swapCase**: Convert text to `sWAPcASE`. This convention swaps the case of each letter in the text.

- **kebabCase**: Convert text to `kebab-case`. Transform into a string to lowercase and the hyphen ("-") is used as a separator between words.

- **screamKebabCase**: Convert text to `SCREAM-KEBAB-CASE`. The text is converted to uppercase letters, and the hyphen ("-") is used as a separator between words.

These casing conventions provide flexible options to transform your text according to specific requirements.

## Extension Setting

To use the extension, you can execute the following commands:

- `casing-convention.help`: Display help information.
- `casing-convention.camelCase`: Convert text to camelCase.
- `casing-convention.snakeCase`: Convert text to snake_case.
- `casing-convention.capitalCase`: Convert text to Capital Case.
- `casing-convention.constantCase`: Convert text to CONSTANT_CASE.
- `casing-convention.dotCase`: Convert text to dot.case.
- `casing-convention.headerCase`: Convert text to Header-Case.
- `casing-convention.noCase`: Convert text to no_case.
- `casing-convention.paramCase`: Convert text to param-case.
- `casing-convention.pascalCase`: Convert text to PascalCase.
- `casing-convention.pathCase`: Convert text to /path/case.
- `casing-convention.sentenceCase`: Convert text to Sentence case.
- `casing-convention.titleCase`: Convert text to Title Case.
- `casing-convention.lowerCase`: Convert text to lowercase.
- `casing-convention.lowerCaseFirst`: Convert text to Lowercase First.
- `casing-convention.upperCase`: Convert text to UPPERCASE.
- `casing-convention.upperCaseFirst`: Convert text to Uppercase First.
- `casing-convention.spongeCase`: Convert text to SpOnGeCaSe.
- `casing-convention.swapCase`: Convert text to sWAPcASE.
- `casing-convention.kebabCase`: Convert text to kebab-case.
- `casing-convention.screamKebabCase`: Convert text to SCREAM-KEBAB-CASE.

## Reporting issues
Report any issues on the github [issues page](https://github.com/otnansirk/vscode-casing-convention/issues). Follow the template and add as much information as possible.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to contribute to this project. Here's how you can get involved:

1. **Post Issues and Suggestions**: If you encounter any issues or have suggestions for improvement, please visit the [GitHub issues page](https://github.com/otnansirk/vscode-casing-convention/issues) and create a new issue. Make sure to add the appropriate tags, such as `bug` or `feature request`, to help us categorize and address them effectively.

2. **Fork and Pull Request**: If you want to contribute code changes, you can fork the project on GitHub, make your changes in your forked repository, and then create a pull request back to the master branch of the main repository. This allows us to review your changes and merge them if they meet the project's guidelines and requirements.

3. **Update the README**: If you make any noticeable feature changes or updates, please make sure to update the README file accordingly. This helps other contributors and users understand the project and its latest features.

4. **Follow Open Source Norms**: While there is no official contribution guide or code of conduct for this project, we encourage all contributors to follow standard open source norms. Be respectful and considerate in any comments, discussions, or interactions within the project community.

Your contributions are highly appreciated, and together we can make this project even better!

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

<hr>

<div align="center">
    <table>
    <tr>
        <td><img src="assets/logo.png" width="100"/></td>
    </tr>
    </table>
    Made with ❤️ love
</div>