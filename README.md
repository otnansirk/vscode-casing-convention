
# VSCode Casing Convention
Transform your text with the power of casing conventions.

![demo for usage casing convention](assets/usage.gif)

## Code Coverage

![Statements](https://img.shields.io/badge/statements-86.03%25-yellow.svg?style=flat)
![Branches](https://img.shields.io/badge/branches-60.86%25-red.svg?style=flat)
![Functions](https://img.shields.io/badge/functions-87.64%25-yellow.svg?style=flat)
![Lines](https://img.shields.io/badge/lines-85.13%25-yellow.svg?style=flat)

## Support and Donate
<a href="https://www.buymeacoffee.com/otnansirk" target="_blank"><img src="assets/buymecoffe.png" alt="Buy Me A Coffee" height="41" width="174"></a>

[![VSCode Casing Convention - Transform your text with the power of casing conventions](https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=400069&theme=light)](https://www.producthunt.com/posts/vscode-casing-convention?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-vscode&#0045;casing&#0045;convention)


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

## Settings
Search `Casing Convention` on setting ui search bar.
- *casing-convention.translation.defaultTargetLanguage* : Select the default target language.
- *casing-convention.translation-hover.translateOnHover* : Enable/Disable translate on hover


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

- **json2ArrayPHP**: Convert json to array PHP.
  
- **arrayPHP2Json**: Convert array PHP to json.

- **enterNumberByLines**: Transform the text to numbered text line by line.

- **jsonStringify**: Transform the JSON to text.

- **jsonParse**: Transform the JSON string to JSON.

- **jsonBeautify**: Format the JSON more beautiful.

- **jsonMinify**: Transform the JSON to one line.

- **objectJS2Json**: Transform the Object JS to JSON.

- **json2ObjectJS**: Transform the JSON to Object JS.

- **base64Encode**: Encodes to Base64.

- **base64Decode**: Decodes from Base64.

- **uuidUniverse**: Generate uuid.
    - Features
        - *uuidv1* : Generate uuid v1
        - *uuidv4* : Generate uuid v4
        - *uuidv6* : Generate uuid v6
        - *uuidv7* : Generate uuid v7
        - *uuidNil* : Generate uuid Nil / Empty

- **JSON as Type**: 
    - Features
        - *Go Struct* : Transform JSON to Go Struct
        - *Typescript Types* : Transform JSON to Typescipt types

- **Translation**: 
    - Features
        - *Bulb Action* : Translate base on click by bulb icon
        - *Hover Action* : Translate by hovering over the text
    - Setting
        - *casing-convention.translation.defaultTargetLanguage* : Select the default target language.
        - *casing-convention.translation-hover.translateOnHover* : Enable/Disable translate on hover

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
- `casing-convention.json2ArrayPHP`: Convert json to array php.
- `casing-convention.arrayPHP2Json`: Convert array to JSON.
- `casing-convention.enterNumberByLines`: Add text number line by line.
- `casing-convention.jsonStringify`: Convert JSON to JSON Stringify.
- `casing-convention.jsonParse`: Convert JSON Stringify to JSON.
- `casing-convention.jsonBeautify`: convert JSON for beautiful format.
- `casing-convention.jsonMinify`: Convert JSON to one line format without space.
- `casing-convention.json2ObjectJS`: Convert JSON to ObjectJS.
- `casing-convention.objectJS2Json`: Convert ObjectJS to JSON.
- `casing-convention.base64Encode`: Encodes to base64.
- `casing-convention.base64Decode`: Decodes from base64.
- `casing-convention.jsonAsType`: Convert JSON to types
- `casing-convention.uuidUniverse`: Generate uuid
- `casing-convention.translation`: Text translation

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
