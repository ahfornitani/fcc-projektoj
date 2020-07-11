/*

    Return undefined if first argument is not a number or second argument is defined, but not a number.
    Return sum of the arguments if both are provided otherwise return a sum function.
*/

function addTogether(first, second) {
  if (typeof first !== 'number') {
    return undefined
  }
  const sum = (second) =>
    typeof second === 'number' ? first + second : undefined
  return typeof second === 'undefined' ? (second) => sum(second) : sum(second)
}
// test here
addTogether(2, 3)
