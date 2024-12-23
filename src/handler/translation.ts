import { json2UrlParams } from '../helpers/json2UrlParams';
import { languages } from '../helpers/languages';
import * as token from 'google-translate-token';
import { randomUUID } from 'crypto';
import * as vscode from 'vscode';


export const translation = async (text: string) => {
    try {
      
      let targetLanguage = await vscode.window.showQuickPick(languages, {
        placeHolder: "Select language",
        canPickMany: false
      });

      const q = text.split("\n");
      const gtranslateToken = await token.get(randomUUID());
      const queryObject = {
        dt: ['t', 'bd', 'qc', 'rm', 'ex'],
        client: 'gtx',
        hl: 'en',
        sl: 'auto',
        tl: targetLanguage?.value,
        dj: '1',
        mode: '1',
        sp: 'nmt',
        tc: '2',
        tk: gtranslateToken,
        q
      };

      const params   = json2UrlParams(queryObject);
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