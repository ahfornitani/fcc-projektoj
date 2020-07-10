/*

    Separate the string into an array of strings separated by whitespace.
    Create some variables that you will use along the way - the names are self explanatory for the most part.
    Iterate through each binary string in the new array.
    Convert to decimal by using parseInt(_binary_, 2). Use the second parameter to specify the base of the input numbers.
    At the end, return the converted message.
*/

// Basically the same solution I had...
// The single difference is that I've used a for...of loop

function binaryAgent(str) {
  var biString = str.split(' ')
  var uniString = []

  /*using the radix (or base) parameter in parseInt, we can convert the binary
        number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)))
  }

  // we then simply join the string
  return uniString.join('')
}

// test here
binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
)
