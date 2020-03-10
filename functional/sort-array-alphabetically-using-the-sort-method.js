function alphabeticalOrder(arr) {
  // Add your code below this line
  arr.sort((a, b) => {
    if (a < b)
      return -1
    if (a > b)
      return 1
  })
  return arr

  // Add your code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]))
