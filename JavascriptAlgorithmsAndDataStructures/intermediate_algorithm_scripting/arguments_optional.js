//const addTogether = (x) => (y) => x + y
const addTogether = function addTogether(x) {
  // generate an array from the args
  const arr = [].slice.call(arguments)

  // if both args are numbers, then sum them
  // else, if any of them is a string, return undefined
  // finally, if the second one is an array, return undefined
  // case not, sum args from both functions
  if (
    Number.isInteger(arr[0]) &&
    typeof arr[0] === 'number' &&
    Number.isInteger(arr[1]) &&
    typeof arr[1] === 'number'
  ) {
    return arr.reduce((a, b) => a + b)
  } else if (typeof arr[0] === 'string' || typeof arr[1] === 'string') {
    return undefined
  } else {
    return function (y) {
      if (Array.isArray(y)) {
        return undefined
      }
      return x + y
    }
  }
}

console.log(addTogether('http://bit.ly/IqT6zt')) // undefined
console.log(addTogether(2)([3])) // undefined
console.log(addTogether(5)(7)) // 12
console.log(addTogether(2, '3')) // undefined
console.log(addTogether(23, 30)) // 53
console.log(addTogether(2, 3)) // 5
