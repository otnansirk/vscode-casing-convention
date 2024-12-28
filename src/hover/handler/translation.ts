import { Hover, MarkdownString, Position, TextDocument, workspace } from "vscode";
import { translate } from "../../handler/translation";
import { getLanguageValueByLabel } from "../../helpers/languages";

const translation = () => {
    return {
        provideHover(document: TextDocument, position: Position) {
            const translationSetting = workspace.getConfiguration('casing-convention.translation');
            const translationHoverSetting = workspace.getConfiguration('casing-convention.translation-hover');

            const defaultTranslateTo: string = translationSetting.get("defaultTargetLanguage", "");
            const translateOnHover: boolean = translationHoverSetting.get("translateOnHover", false);

            if (translateOnHover) {
                const text = document.lineAt(position).text;
                const hoverContent = new MarkdownString();

                hoverContent.appendMarkdown(`_[Translate to](command:casing-convention.setting.translation-hover.defaultTargetLanguage) : ${defaultTranslateTo}_\n\n`);
                hoverContent.isTrusted = true;

                const toLanguage: string = getLanguageValueByLabel(defaultTranslateTo);
                return translate(text, toLanguage)
                    .then(res => {
                        hoverContent.appendMarkdown("`" + res + "`");
                        return new Hover(hoverContent);
                    });
            }
        }
    };
};

export { translation };