/*

    For each of these binary strings, check for the ones and ignore the zeroes.
    For those that are one or active then convert them to decimal, this takes into account the position and the right power it needs to be raised to.
    Store the power into the power variable by adding it to any previous ones on the variable decValue. This variable will add and add the powers of the active ones until the end of the loop and then return the decimal number.
    Convert the final decimal outside of the inner loop and then convert it to ASCII and saving it to sentence along with any other text string already converted and stored.
    Reset the variable decValue to avoid getting wrong decimals before continuing to the outer loop.
*/

function binaryAgent(str) {
  // Separate the binary code by space.
  str = str.split(' ')
  var power
  var decValue = 0
  var sentence = ''

  // Check each binary number from the array.
  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1)
        decValue += power

        // Record the decimal value by adding the number to the previous one.
      }
    }

    // After the binary number is converted to decimal, convert it to string and store
    sentence += String.fromCharCode(decValue)

    // Reset decimal value for next binary number.
    decValue = 0
  }

  return sentence
}

// test here
binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
)
