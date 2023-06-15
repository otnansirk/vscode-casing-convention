const SMALL_WORDS_ID = ['dan', 'di', 'ke', 'dari', 'oleh', 'untuk', 'pada', 'sebuah', 'seorang',
                        'seseorang', 'sesuatu', 'mereka', 'kita', 'kamu', 'saya', 'akan', 'adalah',
                        'apakah', 'atau', 'tetapi'
                      ];
const SMALL_WORDS_EN = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'nor', 'of',
                        'on', 'or', 'the', 'to', 'up', 'yet'
                      ];

/**
 * Lower case the first character of an input string.
 */
export function titleCase(str: string){

    const SMALL_WORDS = [...new Set([...SMALL_WORDS_ID, ...SMALL_WORDS_EN])];

    return str.toLowerCase().replace(/\b\w+/g, function(match, index) {
      if (index === 0 || !SMALL_WORDS.includes(match)) {
        return match.charAt(0).toUpperCase() + match.slice(1);
      } else {
        return match;
      }
    });
}