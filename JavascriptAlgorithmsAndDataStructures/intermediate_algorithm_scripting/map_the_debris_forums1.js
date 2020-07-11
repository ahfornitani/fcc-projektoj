/*

    GM and earthRadius are both given to us.
    To make the code easier to edit and read, each part of the equation is written separately.
    Create newArr to store the orbPeriod's.
    a is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
    Create a function, gerOrbPeriod() that will do the required work for any amount of objects.
    c is (earthRadius + avgAlt) to the cube.
    b is the square root of c divided by GM.
    Create orbPeriod to store the product of a and b, with the Math.round() function applied to round up to the next whole number.
    Then we delete the key avgAlt, and add the new key and its value.
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418
  var earthRadius = 6367.4447
  var a = 2 * Math.PI
  var newArr = []
  var getOrbPeriod = function (obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3)
    var b = Math.sqrt(c / GM)
    var orbPeriod = Math.round(a * b)
    delete obj.avgAlt
    obj.orbitalPeriod = orbPeriod
    return obj
  }

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]))
  }

  return newArr
}
