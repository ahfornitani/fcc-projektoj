function whatIsInAName(collection, source) {
  var arr = []
  // Only change code below this line
  let searchTerm = Object.values(source)
  console.log(`The search term is ${searchTerm}`)

  for (let obj of collection) {
    console.log(`This is the obj: ${Object.values(obj)}`)
    if (Object.values(obj).toString().includes(searchTerm)) {
      //console.log(`I should return this one ${Object.values(obj)}`)
      arr.push(obj)
	    console.log(`omg, typing this in nvim`)

    }
  }
  //console.log(`The final array: ${JSON.stringify(arr)}`)
  console.log(`But it should be [{"apple":1,"bat":2,"cookie":2}]\n`)
  // Only change code above this line

  const result = arr.filter(elem => elem.toString() != 0)
  console.log(`The final array: ${JSON.stringify(result)}`)

  return arr
}

// [{ "apple": 1 "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
