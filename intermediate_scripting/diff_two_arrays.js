function diffArray(arr1, arr2) {
  var newArr = []

  // if there's an item from arr1 not in arr2, push it to newArr
  for (let index of arr1) {
    if (arr2.indexOf(index) == -1) {
      newArr.push(index)
    }
  }

  // if there's an item from arr2 not in arr1, push it to newArr
  for (let index of arr2) {
    if (arr1.indexOf(index) === -1) {
      newArr.push(index)
    }
  }

  return newArr
}

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
//diffArray(["cachorro", "gato"], ["cachorro", "gato", "galinha"])
diffArray(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
)
