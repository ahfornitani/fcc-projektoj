function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [endNum]
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1)
    numbers.push(endNum)
    return numbers
  }
}

console.log(rangeOfNumbers(4, 4))
console.log(rangeOfNumbers(5, 90))

function count(n) {
  if (n === 1) {
    return [1]
  } else {
    var numbers = count(n - 1)
    numbers.push(n)
    return numbers
  }
}
