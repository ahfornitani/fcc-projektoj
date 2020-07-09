function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let size = collection.length
  let sourceValues = Object.values(source)
  let sourceKeys = Object.keys(source)
  console.log(`sourceKeys: ${sourceKeys.toString()}`)

  for(let i = 0; i < size; i++) {
    let currentValue = Object.values(collection[i])
    let currentKey = Object.keys(collection[i])
    if(currentValue.toString().includes(sourceValues.toString().trim())){
      arr.push(collection[i])
      console.log(`keys: ${Object.keys(collection[i])}`)
    }
  }

  // Only change code above this line
  console.log(arr)
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cokie": 2 })o
