import {
  getLanguageByLabel,
  languages,
  QuickPickItemWithValue
} from '../../helpers/languages';
import { object2UrlParams } from '../../helpers/object2UrlParams';
import * as token from 'google-translate-token';
import { randomUUID } from 'crypto';
import * as vscode from 'vscode';


export const translation = async (text: string) => {
    try {
      let languageSelections = languages;
      const translationSetting = vscode.workspace.getConfiguration('casing-convention.translation');
      const defaultTranslateTo: string = translationSetting.get("defaultTargetLanguage", "");
      const toLanguage: QuickPickItemWithValue|undefined = getLanguageByLabel(defaultTranslateTo);
      if (defaultTranslateTo && toLanguage) {
        languageSelections = languages.filter((item: QuickPickItemWithValue) => item.label !== toLanguage.label);
        languageSelections.unshift(toLanguage);
      }

      let targetLanguage = await vscode.window.showQuickPick(languageSelections, {
        placeHolder: `Select language (Default: ${defaultTranslateTo})`,
        canPickMany: false,
        title: "Translate to"
      });
      return translate(text, targetLanguage?.value);
    } catch (error) {
      console.log(error, "Select language");
    }    
};

export const translate = async (text: string, to: string="id") => {
    try {

      const q = text.split("\n");
      const gtranslateToken = await token.get(randomUUID());
      const queryObject = {
        dt: ['t', 'bd', 'qc', 'rm', 'ex'],
        client: 'gtx',
        hl: 'en',
        sl: 'auto',
        tl: to,
        dj: '1',
        mode: '1',
        sp: 'nmt',
        tc: '2',
        tk: gtranslateToken,
        q
      };

      const params   = object2UrlParams(queryObject);
      const response = await fetch(`https://translate.googleapis.com/translate_a/t?${params}`, {method: 'POST'});
      const data = await response.json();
      const tx = data.map((items:Array<[string, string]>) => {
        if (items[0]) {
          return items[0];
        }
      });

      return tx.join("\n");
    } catch (error) {
      console.log(error, "KRIS");
    }    
};