function chunkArrayInGroups(arr, size) {
  let groupArray = []

  let j = 0
  for (let i = 0; i <= arr.length; i += size) {
    j++
    if (
      Array.isArray(arr.slice(i, size * j)) &&
      arr.slice(i, size * j).length
    ) {
      groupArray.push(arr.slice(i, size * j))
    }
  }

  console.log(groupArray)
  return groupArray
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2) // should return 2 chunks: [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // should return 2 chunks: [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // should return 3 chunks: [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // should return 2 chunks: [[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // should return 3 chunks: [[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) // should return 3 chunks: [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // should return 5 chunks: [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
