/*
Uses the native “every” method to test whether all elements in the array pass the test.
This link will help Array.prototype.every()
*/

function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre])
  })
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
