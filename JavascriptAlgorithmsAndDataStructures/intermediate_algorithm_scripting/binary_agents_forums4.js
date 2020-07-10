/*

    Find all groups of one or more digits followed by one other character
    Replace with a string created from the specified sequence of UTF-16 code units
    Use 0b to lead the code unit to express that a binary integer literal is being converted.
*/
const binaryAgent = (str) =>
  str.replace(/\d+./g, (char) => String.fromCharCode(`0b${char}`))

binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
)
