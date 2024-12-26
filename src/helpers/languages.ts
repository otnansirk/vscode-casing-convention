import { QuickPickItem } from "vscode";

interface QuickPickItemWithValue extends QuickPickItem {
	value: string;
}

export const getLanguageByLabel = (label: string): QuickPickItemWithValue|undefined => 
    languages.find((item: QuickPickItemWithValue) => item.label === label);

export const getLanguageValueByLabel = (label: string): string => 
    languages.find((item: QuickPickItemWithValue) => item.label === label)?.value ?? "id";

export const languages: QuickPickItemWithValue[] = [
    {
        label: "English",
        value: "en"
    },
    {
        label: "Indonesian",
        value: "id"
    },
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Albanian",
        value: "sq"
    },
    {
        label: "Amharic",
        value: "am"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Armenian",
        value: "hy"
    },
    {
        label: "Azeerbaijani",
        value: "az"
    },
    {
        label: "Basque",
        value: "eu"
    },
    {
        label: "Belarusian",
        value: "be"
    },
    {
        label: "Bengali",
        value: "bn"
    },
    {
        label: "Bosnian",
        value: "bs"
    },
    {
        label: "Bulgarian",
        value: "bg"
    },
    {
        label: "Catalan",
        value: "ca"
    },
    {
        label: "Cebuano",
        value: "ceb"
    },
    {
        label: "Chinese (Simplified)",
        value: "zh-CN"
    },
    {
        label: "Chinese (Traditional)",
        value: "zh-TW"
    },
    {
        label: "Corsican",
        value: "co"
    },
    {
        label: "Croatian",
        value: "hr"
    },
    {
        label: "Czech",
        value: "cs"
    },
    {
        label: "Danish",
        value: "da"
    },
    {
        label: "Dutch",
        value: "nl"
    },
    {
        label: "Esperanto",
        value: "eo"
    },
    {
        label: "Estonian",
        value: "et"
    },
    {
        label: "Finnish",
        value: "fi"
    },
    {
        label: "French",
        value: "fr"
    },
    {
        label: "Frisian",
        value: "fy"
    },
    {
        label: "Galician",
        value: "gl"
    },
    {
        label: "Georgian",
        value: "ka"
    },
    {
        label: "German",
        value: "de"
    },
    {
        label: "Greek",
        value: "el"
    },
    {
        label: "Gujarati",
        value: "gu"
    },
    {
        label: "Haitian Creole",
        value: "ht"
    },
    {
        label: "Hausa",
        value: "ha"
    },
    {
        label: "Hawaiian",
        value: "haw"
    },
    {
        label: "Hebrew",
        value: "iw"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Hmong",
        value: "hmn"
    },
    {
        label: "Hungarian",
        value: "hu"
    },
    {
        label: "Icelandic",
        value: "is"
    },
    {
        label: "Igbo",
        value: "ig"
    },
    {
        label: "Irish",
        value: "ga"
    },
    {
        label: "Italian",
        value: "it"
    },
    {
        label: "Japanese",
        value: "ja"
    },
    {
        label: "Javanese",
        value: "jw"
    },
    {
        label: "Kannada",
        value: "kn"
    },
    {
        label: "Kazakh",
        value: "kk"
    },
    {
        label: "Khmer",
        value: "km"
    },
    {
        label: "Korean",
        value: "ko"
    },
    {
        label: "Kurdish",
        value: "ku"
    },
    {
        label: "Kyrgyz",
        value: "ky"
    },
    {
        label: "Lao",
        value: "lo"
    },
    {
        label: "Latin",
        value: "la"
    },
    {
        label: "Latvian",
        value: "lv"
    },
    {
        label: "Lithuanian",
        value: "lt"
    },
    {
        label: "Luxembourgish",
        value: "lb"
    },
    {
        label: "Macedonian",
        value: "mk"
    },
    {
        label: "Malagasy",
        value: "mg"
    },
    {
        label: "Malay",
        value: "ms"
    },
    {
        label: "Malayalam",
        value: "ml"
    },
    {
        label: "Maltese",
        value: "mt"
    },
    {
        label: "Maori",
        value: "mi"
    },
    {
        label: "Marathi",
        value: "mr"
    },
    {
        label: "Mongolian",
        value: "mn"
    },
    {
        label: "Myanmar",
        value: "my"
    },
    {
        label: "Nepali",
        value: "ne"
    },
    {
        label: "Norwegian",
        value: "no"
    },
    {
        label: "Nyanja",
        value: "ny"
    },
    {
        label: "Pashto",
        value: "ps"
    },
    {
        label: "Persian",
        value: "fa"
    },
    {
        label: "Polish",
        value: "pl"
    },
    {
        label: "Portuguese",
        value: "pt"
    },
    {
        label: "Punjabi",
        value: "pa"
    },
    {
        label: "Romanian",
        value: "ro"
    },
    {
        label: "Russian",
        value: "ru"
    },
    {
        label: "Samoan",
        value: "sm"
    },
    {
        label: "Scots Gaelic",
        value: "gd"
    },
    {
        label: "Serbian",
        value: "sr"
    },
    {
        label: "Sesotho",
        value: "st"
    },
    {
        label: "Shona",
        value: "sn"
    },
    {
        label: "Sindhi",
        value: "sd"
    },
    {
        label: "Sinhala",
        value: "si"
    },
    {
        label: "Slovak",
        value: "sk"
    },
    {
        label: "Slovenian",
        value: "sl"
    },
    {
        label: "Somali",
        value: "so"
    },
    {
        label: "Spanish",
        value: "es"
    },
    {
        label: "Sundanese",
        value: "su"
    },
    {
        label: "Swahili",
        value: "sw"
    },
    {
        label: "Swedish",
        value: "sv"
    },
    {
        label: "Tagalog",
        value: "tl"
    },
    {
        label: "Tajik",
        value: "tg"
    },
    {
        label: "Tamil",
        value: "ta"
    },
    {
        label: "Telugu",
        value: "te"
    },
    {
        label: "Thai",
        value: "th"
    },
    {
        label: "Turkish",
        value: "tr"
    },
    {
        label: "Ukrainian",
        value: "uk"
    },
    {
        label: "Urdu",
        value: "ur"
    },
    {
        label: "Uyghur",
        value: "ug"
    },
    {
        label: "Uzbek",
        value: "uz"
    },
    {
        label: "Vietnamese",
        value: "vi"
    },
    {
        label: "Welsh",
        value: "cy"
    },
    {
        label: "Xhosa",
        value: "xh"
    },
    {
        label: "Yiddish",
        value: "yi"
    },
    {
        label: "Yoruba",
        value: "yo"
    },
    {
        label: "Zulu",
        value: "zu"
    }
];