function sumFibs(num) {
  let result = fibonacci(num)
  if (result == 1) {
    return 1
  }
  return result.reduce((a, b) => a + b)
}

function fibonacci(num) {
  if (num == 1) {
    return 1
  }
  let arr = []

  function fib(num) {
    let a = 1,
      b = 0,
      temp

    while (num >= 0 && num < num + 1) {
      temp = a
      a = a + b
      b = temp
      num--
    }

    return b
  }

  for (let i = 0; i <= num; i++) {
    arr.push(fib(i))
  }

  // filter out larger than num, then leave only odd
  arr = arr.filter((x) => x <= num).filter((x) => x % 2 != 0)

  return arr
}
