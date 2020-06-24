function convertToRoman(num) {
    let numString = num.toString()

    if (num <= 0) {
        console.log(`
        Roman numerals do not 
        contain an equivalent to 0, 
        and can only be positive`)
    }

    numString = checkCharAt(numString)
    return numString
}

function checkCharAt(str) {
    if (str.length == 1) {
        let unitChar = str.charAt(0)
        unitChar = convertUnits(unitChar)
        str = unitChar
        return str
    }

    if (str.length == 2) {
        let tensChar = str.charAt(0)
        let unitChar = str.charAt(1)
        tensChar = convertTens(tensChar)
        unitChar = convertUnits(unitChar)
        str = tensChar + unitChar
        return str

    }

    if (str.length == 3) {
        let hundChar = str.charAt(0)
        let tensChar = str.charAt(1)
        let unitChar = str.charAt(2)

        hundChar = convertHundreds(hundChar)
        tensChar = convertTens(tensChar)
        unitChar = convertUnits(unitChar)
        str = hundChar + tensChar + unitChar
        return str
    }

    if (str.length == 4) {
        let milleChar = str.charAt(0)
        let hundChar = str.charAt(1)
        let tensChar = str.charAt(2)
        let unitChar = str.charAt(3)
        milleChar = convertMilles(milleChar)
        hundChar = convertHundreds(hundChar)
        tensChar = convertTens(tensChar)
        unitChar = convertUnits(unitChar)
        str = milleChar + hundChar + tensChar + unitChar
        return str

    }


}

function convertUnits(uni) {
    switch (uni) {
        case '1':
            uni = 'I'
            break
        case '2':
            uni = 'II'
            break
        case '3':
            uni = 'III'
            break
        case '4':
            uni = 'IV'
            break
        case '5':
            uni = 'V'
            break
        case '6':
            uni = 'VI'
            break
        case '7':
            uni = 'VII'
            break
        case '8':
            uni = 'VIII'
            break
        case '9':
            uni = 'IX'
            break
        case '0':
            uni = ''
            break
    }
    return uni

}

function convertTens(dec) {
    switch (dec) {
        case '1':
            dec = 'X'
            break
        case '2':
            dec = 'XX'
            break
        case '3':
            dec = 'XXX'
            break
        case '4':
            dec = 'XL'
            break
        case '5':
            dec = 'L'
            break
        case '6':
            dec = 'LX'
            break
        case '7':
            dec = 'LXX'
            break
        case '8':
            dec = 'LXXX'
            break
        case '9':
            dec = 'XC'
            break
        case '0':
            dec = ''
            break
    }
    return dec
}

function convertHundreds(hund) {
    switch (hund) {
        case '1':
            hund = 'C'
            break
        case '2':
            hund = 'CC'
            break
        case '3':
            hund = 'CCC'
            break
        case '4':
            hund = 'CD'
            break
        case '5':
            hund = 'D'
            break
        case '6':
            hund = 'DC'
            break
        case '7':
            hund = 'DCC'
            break
        case '8':
            hund = 'DCCC'
            break
        case '9':
            hund = 'CM'
            break
        case '0':
            hund = ''
            break
    }
    return hund
}

function convertMilles(mil) {
    let multMil = "M".repeat(mil)
    return multMil
}

// console.log(convertToRoman(36))
// console.log(convertToRoman(333))
// console.log(convertToRoman(4444))
console.log(convertToRoman(501))
console.log(convertToRoman(400))
console.log(convertToRoman(83))
console.log(`349 em romanos: ${convertToRoman(349)}`)
