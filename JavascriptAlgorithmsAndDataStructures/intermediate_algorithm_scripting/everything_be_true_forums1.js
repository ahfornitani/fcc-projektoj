/*

    First I create a counter to check how many cases are actually true.
    Then check for each object if the value is truthy
    Outside the loop, I check to see if the counter variable has the same value as the length of collection, if true then return true, otherwise, return false
*/

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length
}

// test here
truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' }
  ],
  'sex'
)
