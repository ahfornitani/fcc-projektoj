// the global Array
var s = [23, 65, 98, 5]

Array.prototype.myMap = function (callback) {
  var newArray = []
  // Add your code below this line
  //"this" gives one access to the variable to which MyMap is applied
  //this.forEach(a => newArray.push(callback(a)))

  //using a standard for loop
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]))
  }

  // Add your code above this line
  console.log(newArray)
  return newArray
}

var new_s = s.myMap(function (item) {
  return item * 2
})
