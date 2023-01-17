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

const arr = {
    "10": '.',
    "11": '-'
}

const space = '**********';

function decode(expr) {
    let result = ''
    for (let i of expr.match(/.{10}/g)) {
        if (i === space) {
            result = result + ' '
        } else {
            let decoded = parseInt(i).toString().match(/.{2}/g)
            result = result + MORSE_TABLE[decoded.map((c) => arr[c]).join('')]
        }

    }
    return result
}

module.exports = {
    decode
}