import * as vscode from "vscode";
import { lowerCaseFirst } from "./handler/lowerCaseFirst";
import { upperCaseFirst } from "./handler/upperCaseFirst";
import { titleCase } from "./handler/titleCase";
import { commandHelp } from "./commandHelp";
import { spongeCase } from "sponge-case";
import { swapCase } from "swap-case";
import commandProvider from "./commandProvider";
import { kebabCase } from "./handler/kebabCase";
import { screamKebabCase } from "./handler/screamKebabCase";
import { json2PhpArray } from "./handler/json2PhpArray";
import { phpArray2Json } from "./handler/phpArray2Json";
import { capitalCase } from "./handler/capitalCase";
import { numberedByLines } from "./handler/numberedByLines";
import { jsonStringify } from "./handler/jsonStringify";
import { jsonParse } from "./handler/jsonParse";
import { jsonBeautify } from "./handler/jsonBeautify";
import { jsonMinify } from "./handler/jsonMinify";
import { json2ObjectJS } from "./handler/json2ObjectJS";
import { objectJS2Json } from "./handler/objectJS2Json";
import { snakeCase } from "./handler/snakeCase";
import { base64Decode } from "./handler/base64Decode";
import { base64Encode } from "./handler/base64Encode";
import { jsonAsType } from "./handler/jsonAsType";
import { uuidUniverse } from "./handler/uuidUniverse";
import { translation } from "./handler/translation";
import { lowerCase } from "./handler/lowerCase";
import { upperCase } from "./handler/upperCase";
import { camelCase } from "./handler/camelCase";
import { dotCase } from "./handler/dotCase";
import { constantCase } from "./handler/constantCase";
import { headerCase } from "./handler/headerCase";
import { noCase } from "./handler/noCase";
import { paramCase } from "./handler/paramCase";
import { pascalCase } from "./handler/pascalCase";
import { pathCase } from "./handler/pathCase";
import { sentenceCase } from "./handler/sentenceCase";


type CommandType = {
  type: string,
  label: string,
  name: string,
  description: string,
  detail: string,
  callback: () => Promise<void>;
};

const COMMAND_TYPE_CORE = 'core';
const COMMAND_TYPE_HANDLER = 'handler';


const commandRegister: CommandType[] = [
  {
    type: COMMAND_TYPE_CORE,
    name: 'casing-convention.help',
    label: 'help',
    description: 'Help center',
    detail: 'This will show you all of commands available in this extension',
    callback: commandHelp
  },
  {
    type: COMMAND_TYPE_CORE,
    name: 'casing-convention.setting.translation-hover.defaultTargetLanguage',
    label: 'Go to default target language setting',
    description: '',
    detail: 'Go to default target language settings.',
    callback: async () => vscode.commands.executeCommand('workbench.action.openSettings', '@id:casing-convention.translation.defaultTargetLanguage')
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.camelCase',
    label: 'camelCase',
    description: 'exampleString',
    detail: 'Transform into a string with the separator denoted by the next word capitalized.',
    callback: commandProvider(camelCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.snakeCase',
    label: 'snakeCase',
    description: 'example-string',
    detail: 'Transform into a lower case string with underscores between words.',
    callback: commandProvider(snakeCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.capitalCase',
    label: 'capitalCase',
    description: 'Example String',
    detail: 'Transform into a space separated string with each word capitalized.',
    callback: commandProvider(capitalCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.constantCase',
    label: 'constantCase',
    description: 'EXAMPLE_STRING',
    detail: 'Transform into upper case string with an underscore between words.',
    callback: commandProvider(constantCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.dotCase',
    label: 'dotCase',
    description: 'example.string',
    detail: 'Transform into a lower case string with a period between words.',
    callback: commandProvider(dotCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.headerCase',
    label: 'headerCase',
    description: 'Example-String',
    detail: 'Transform into a dash separated string of capitalized words.',
    callback: commandProvider(headerCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.noCase',
    label: 'noCase',
    description: 'example string',
    detail: 'Transform into a lower cased string with spaces between words.',
    callback: commandProvider(noCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.paramCase',
    label: 'paramCase',
    description: 'example-string',
    detail: 'Transform into a lower cased string with dashes between words.',
    callback: commandProvider(paramCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.pascalCase',
    label: 'pascalCase',
    description: 'ExampleString',
    detail: 'Transform into a string of capitalized words without separators.',
    callback: commandProvider(pascalCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.pathCase',
    label: 'pathCase',
    description: 'example/string',
    detail: 'Transform into a lower case string with slashes between words.',
    callback: commandProvider(pathCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.sentenceCase',
    label: 'sentenceCase',
    description: 'Example string',
    detail: 'Transform into a lower case with spaces between words, then capitalize the string.',
    callback: commandProvider(sentenceCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.titleCase',
    label: 'titleCase',
    description: 'Example String',
    detail: 'Transform a string into title case following Indonesia & English rules.',
    callback: commandProvider(titleCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.swapCase',
    label: 'swapCase',
    description: 'eXAMPLE sTRING',
    detail: 'Transform a string by swapping every character from upper to lower case, or lower to upper case.',
    callback: commandProvider(swapCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.lowerCase',
    label: 'lowerCase',
    description: 'example string',
    detail: 'Transforms the string to lower case.',
    callback: commandProvider(lowerCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.lowerCaseFirst',
    label: 'lowerCaseFirst',
    description: 'eXAMPLE STRING',
    detail: 'Transforms the string with the first character in lower cased.',
    callback: commandProvider(lowerCaseFirst)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.upperCase',
    label: 'upperCase',
    description: 'EXAMPLE STRING',
    detail: 'Transforms the string to upper case.',
    callback: commandProvider(upperCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.upperCaseFirst',
    label: 'upperCaseFirst',
    description: 'Example string',
    detail: 'Transforms the string with the first character in upper cased.',
    callback: commandProvider(upperCaseFirst)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.spongeCase',
    label: 'spongeCase',
    description: 'ExamPLE stRINg',
    detail: 'Transform into a string with random capitalization applied.',
    callback: commandProvider(spongeCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.kebabCase',
    label: 'kebabCase',
    description: 'example-string',
    detail: 'Transform the string with lower case, and separated by dashes.',
    callback: commandProvider(kebabCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.screamKebabCase',
    label: 'screamKebabCase',
    description: 'example-string',
    detail: 'Transform the string with upper case, and separated by dashes.',
    callback: commandProvider(screamKebabCase)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.json2ArrayPHP',
    label: 'json2ArrayPHP',
    description: '["name" => "Kris"]',
    detail: 'Transform the json to array PHP.',
    callback: commandProvider(json2PhpArray)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.arrayPHP2Json',
    label: 'json2ArrayPHP',
    description: '{"name": "kris"}',
    detail: 'Transform the array PHP to json.',
    callback: commandProvider(phpArray2Json)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.enterNumberByLines',
    label: 'enterNumberByLines',
    description: '1. Hello casing convention',
    detail: 'Transform the text to numbered text line by line.',
    callback: commandProvider(numberedByLines)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.jsonStringify',
    label: 'jsonStringify',
    description: '"{\"kirs\": \"OKE\"}"',
    detail: 'Transform the JSON to JSON string.',
    callback: commandProvider(jsonStringify)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.jsonParse',
    label: 'jsonParse',
    description: '{"kirs": "OKE"}"',
    detail: 'Transform the JSON string to JSON.',
    callback: commandProvider(jsonParse)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.jsonBeautify',
    label: 'jsonBeautify',
    description: '{"hobies": ["music", "games"]}"',
    detail: 'Transform the JSON to be more beautiful.',
    callback: commandProvider(jsonBeautify)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.jsonMinify',
    label: 'jsonMinify',
    description: '{"hobies": ["music", "games"]}"',
    detail: 'Transform the JSON to one line.',
    callback: commandProvider(jsonMinify)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.json2ObjectJS',
    label: 'json2ObjectJS',
    description: '{hobies: ["music", "games"]}"',
    detail: 'Transform the JSON to Object JS.',
    callback: commandProvider(json2ObjectJS)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.objectJS2Json',
    label: 'objectJS2Json',
    description: '{hobies: ["music", "games"]}"',
    detail: 'Transform the Object JS to JSON.',
    callback: commandProvider(objectJS2Json)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.base64Encode',
    label: 'base64Encode',
    description: '',
    detail: 'Transform base6 to string.',
    callback: commandProvider(base64Encode)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.base64Decode',
    label: 'base64Decode',
    description: '',
    detail: 'Transform string to base6.',
    callback: commandProvider(base64Decode)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.jsonAsType',
    label: 'jsonAsType',
    description: '',
    detail: 'Transform JSON as type/struct.',
    callback: commandProvider(jsonAsType)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.uuidUniverse',
    label: 'UUID Universe',
    description: '',
    detail: 'UUID Universe.',
    callback: commandProvider(uuidUniverse, false)
  },
  {
    type: COMMAND_TYPE_HANDLER,
    name: 'casing-convention.translation',
    label: 'Translate',
    description: '',
    detail: 'Translate your favorit text.',
    callback: commandProvider(translation)
  }
];

export default commandRegister;
export { COMMAND_TYPE_HANDLER, COMMAND_TYPE_CORE, CommandType };