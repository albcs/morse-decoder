const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
function decode(expr) {
    let word = '';

    expr.split('**********').forEach((element) => {
        element.match(/.{1,10}/g).forEach((element) => {
            let letter = '';
            element.match(/.{1,2}/g).forEach((element) => {
                if (element === '10') {
                    letter = `${letter}.`;
                } else if (element === '11') {
                    letter = `${letter}-`;
                }
            });
            for (let key in MORSE_TABLE) {
                if (key === letter) {
                    word = `${word}${MORSE_TABLE[key]}`;
                }
            }
        });
        word = `${word} `;
    });

    return word.trim();
}

module.exports = {
    decode,
};
