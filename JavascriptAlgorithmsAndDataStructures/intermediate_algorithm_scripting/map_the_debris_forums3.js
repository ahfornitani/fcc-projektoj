/*

    GM and earthRadius are both given to us.
    The forEach() method is used to execute the function once per element (item) in arr.
    tmp holds the value of orbital period for each element calculated using the formula.
    The key avgAlt is deleted, and orbital period (tmp) found is assigned to the key orbitalPeriod.
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418
  var earthRadius = 6367.4447

  // Loop through each item in the array arr
  arr.forEach(function (item) {
    // Calculate the Orbital period value
    var tmp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    )
    //Delete the avgAlt property
    delete item.avgAlt
    //Add orbitalPeriod property
    item.orbitalPeriod = tmp
  })
  return arr
}

// test here
orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }])
