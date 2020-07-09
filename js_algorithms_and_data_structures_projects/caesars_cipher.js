const abc = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

function rot13(str) {
  // LBH QVQ VG!
  let resArr = []
  for (let char of str) {
    if (abc.indexOf(char) >= 13) {
      resArr.push(abc[abc.indexOf(char) - 13])
    } else {
      abc[abc.indexOf(char) + 13] == 'M'
        ? resArr.push(char)
        : resArr.push(abc[abc.indexOf(char) + 13])
    }
  }
  return resArr.toString().replace(/,/gi, '')
}

// Change the inputs below to test
rot13('SERR PBQR PNZC')
rot13('SERR CVMMN!')
rot13('SERR YBIR?')
rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')
console.log(rot13('LBH QVQ VG!'))
