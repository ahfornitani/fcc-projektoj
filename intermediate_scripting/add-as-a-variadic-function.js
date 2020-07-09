function add(...xs) {
  return xs.reduce((x, y) => x + y, 0)
}

//console.log(add()) //= 0
//console.log(add(1, 2)) //= 3
//console.log(add(1, 2, 3, 4, 5)) // = 15
//console.log(add(...[1, 2, 3, 4, 5, 6])) // = 21
//console.log(add(...[01, 10, 01])) // 12
//console.log(add([01, 10, 01])) //01,10,1
//console.log(add(...[01] + [10] + [01])) //01101
const arr = [1, 2, 3, 4]
console.log(add(...arr))
const arr2 = [5, 6, 7, 8, 9, 10]
console.log(add(...arr2))
