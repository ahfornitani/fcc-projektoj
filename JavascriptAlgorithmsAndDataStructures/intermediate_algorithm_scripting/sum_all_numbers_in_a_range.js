function add(...xs) {
  return xs.reduce((x, y) => x + y, 0)
}

function sumAll(arr) {
  arr.sort((a, b) => a - b)
  const gap = arr[1] - arr[0]

  for (let i = 0; i < arr[1]; i++) {
    if (i > arr[0]) {
      arr.push(i)
    }
  }

  return add(...arr)
}

sumAll([1, 4])
sumAll([10, 5])
console.log(sumAll([1, 99]))
