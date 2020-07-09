function largestOfFour(arr) {
  // You can do this!
  let results = []

  for (let i = 0; i < arr.length; i++) {
    let arrayIndex = arr[i]
      .flat()
      .sort((a, b) => a - b)
      .reverse()
      .shift()
    results.push(arrayIndex)
  }

  return results
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
)
