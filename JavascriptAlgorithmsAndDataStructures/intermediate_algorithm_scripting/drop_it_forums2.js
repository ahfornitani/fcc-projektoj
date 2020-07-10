/*
    Use ES6 findIndex() function to find the index of the element that passes the condition
    Slice the array from the found index until the end
    There is one edge case! if the condition is not met against any of the elements ‘findIndex’ will return -1 which messes up the input to slice(). In this case use a simple conditional operator to return false instead of -1. And the ternary operator returns the found index of required elements when the condition is true, and the length of the array otherwise so that the return value is an empty array as is instructed.
*/

function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length)
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3
})
