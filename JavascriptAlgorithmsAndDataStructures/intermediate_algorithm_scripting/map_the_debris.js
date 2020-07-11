function orbitalPeriod(arr) {
  const GM = 398600.4418
  const earthRadius = 6367.4447
  let result = []

  //const obj = arr.reduce((acc, cur) => ({ ...acc, name: cur.name }), {})
  // reduce passed array into object
  const obj = arr.reduce(function (acc, cur, i) {
    acc[i] = cur
    return acc
  }, {})

  // determine how many objects inside array
  let size = Object.keys(obj).length

  // loop through array of object
  for (let i = 0; i < size; i++) {
    orbital(obj[i].avgAlt, GM, obj[i].name)
  }

  // formula described below
  function orbital(avgAlt, gravParam, name) {
    let sma = avgAlt + earthRadius
    const calc = Math.round(2 * Math.PI * Math.sqrt(sma ** 3 / gravParam))
    result.push({ name, orbitalPeriod: calc })
  }

  // T is 'orbital period', given in seconds
  // a is 'semi-major axis (avgAlt + earthRadius)
  // μ = GM 'standard gravitational parameter'
  // G is the 'gravitational constant'
  // M is 'mass (of the more massive body)'
  // T = 2pi * (a^3 / GM)
  //const velocity = GM / earthRadius
  //const orbitalPeriod = Math.ceil((2 * Math.PI) * (Math.sqrt(((sma + earthRadius)**3 / GM))))

  return result
}

// the function should return an array of object, with name and orbitalPeriod
console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }])) // [{name: "sputnik", orbitalPeriod: 86400}]
console.log(
  orbitalPeriod([
    { name: 'iss', avgAlt: 413.6 },
    { name: 'hubble', avgAlt: 556.7 },
    { name: 'moon', avgAlt: 378632.553 }
  ])
) // [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
