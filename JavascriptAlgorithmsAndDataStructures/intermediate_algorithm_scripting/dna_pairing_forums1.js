/*

    The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using if statements would take too much code. You could also use Regular Expressions.
    Since we have to the original and the pair, I decided to take all four cases instead of the base two.
    Create an empty array and use the search function to push the right values to the array and return them.
*/

function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = []

  // Function to check with strand to pair.
  var search = function (char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T'])
        break
      case 'T':
        paired.push(['T', 'A'])
        break
      case 'C':
        paired.push(['C', 'G'])
        break
      case 'G':
        paired.push(['G', 'C'])
        break
    }
  }

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i])
  }

  return paired
}

// test here
pairElement('GCG')
