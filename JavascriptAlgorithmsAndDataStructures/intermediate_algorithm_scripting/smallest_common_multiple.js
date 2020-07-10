function smallestCommons(nums) {
  let work = valuesBetweenExtremities(nums)

  // when every item divides equally by i
  // then it means it is the smallest common
  for (let i = 2; i <= Number.MAX_SAFE_INTEGER; i++) {
    const doesItDivide = (currentValue) => i % currentValue == 0
    if (work.every(doesItDivide)) {
      return i
    }
  }
}

function valuesBetweenExtremities(arr) {
  // sort array so calling either
  // [1,5] or [5,1] gives [2,3,4,5]
  arr = arr.sort((a, b) => a - b)
  let a = arr[0],
    b = arr[1]
  let between = []

  for (let i = a; i < b; i++) {
    between.push(i)
  }
  return [...between, arr[1]]
}

console.log(smallestCommons([1, 5]))
