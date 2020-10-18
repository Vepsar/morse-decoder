function morseConvert(morseLet) {
    switch (morseLet) {
        case '.-':
            return 'a'
        case '-...':
            return 'b'
        case '-.-.':
            return 'c'
        case '-..':
            return 'd'
        case '.':
            return 'e'
        case '..-.':
            return 'f'
        case '--.':
            return 'g'
        case '....':
            return 'h'
        case '..':
            return 'i'
        case '.---':
            return 'j'
        case '-.-':
            return 'k'
        case '.-..':
            return 'l'
        case '--':
            return 'm'
        case '-.':
            return 'n'
        case '---':
            return 'o'
        case '.--.':
            return 'p'
        case '--.-':
            return 'q'
        case '.-.':
            return 'r'
        case '...':
            return 's'
        case '-':
            return 't'
        case '..-':
            return 'u'
        case '...-':
            return 'v'
        case '.--':
            return 'w'
        case '-..-':
            return 'x'
        case '-.--':
            return 'y'
        case '--..':
            return 'z'
        case '.----':
            return '1'
        case '..---':
            return '2'
        case '...--':
            return '3'
        case '....-':
            return '4'
        case '.....':
            return '5'
        case '-....':
            return '6'
        case '--...':
            return '7'
        case '---..':
            return '8'
        case '----.':
            return '9'
        case '-----':
            return '0'
    }
}

function decode(expr) {
    let letter = '',
        result = '';
    for (var i = 0; i < expr.length; i = i + 10) {
        letter = expr.substring(i, i + 10)
        if (letter == '**********') { result = result + ' ' } else {
            result = result + binToLetter(letter);
        }
    }
    return result
}

module.exports = {
    decode
}

function binToLetter(string) {
    let morse = '',
        ans = '',
        letter = ''
    for (var i = 0; i < string.length; i = i + 2) {
        morse = string.substring(i, i + 2);
        switch (morse) {
            case '00':
                ans = ans + '';
                break
            case '10':
                ans = ans + '.';
                break
            case '11':
                ans = ans + '-';
                break
        }
    }
    return morseConvert(ans)
}