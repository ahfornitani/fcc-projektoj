//if current elemebt already matches the rules in func param
// then stop there and return an array, starting from
// that very element onwards (splice)
function dropElements(arr, func) {
  let result = []
  for (let elem of arr) {
    if (func(elem)) result.push(arr.splice(arr.indexOf(elem)))
  }
  return result.flat()
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3
  })
) // [3, 4]
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1
  })
) // [1, 0, 1]
