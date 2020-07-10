/*

    Create a for loop to check each element.
    Then check for the function given if true then stop, otherwise remove that element.
    return the array.
*/

function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break
    } else {
      arr.shift()
    }
  }
  return arr
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3
})
