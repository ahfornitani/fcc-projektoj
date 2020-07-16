/*
Couldn't complete this on my own, used this solution from the forums

First, create an array of objects with the value of each denomination of bill or coin, along with an output object with the status and change keys. Next, transform the CID array into a drawer object. Then, handle the conditions of exact change and insufficient funds. Loop through the denom array and update the change and values while there is still money of each type in the drawer and while the denomination is larger than the change remaining. Add this denomination to the accumulator of change_arr if any of this type was used. After the loop, change_arr is a 2D array of the change due, sorted from highest to lowest denomination. If there are no elements in change_arr or you still owe change, return the output object with a status of INSUFFICIENT_FUNDS. Finally you can give the correct change. Return the output object with a status of OPEN and change_arr as the value of change.


*/

// Create an array of objects which hold the denominations and their values
const valueDict = [
  { name: 'ONE HUNDRED', val: 100.0 },
  { name: 'TWENTY', val: 20.0 },
  { name: 'TEN', val: 10.0 },
  { name: 'FIVE', val: 5.0 },
  { name: 'ONE', val: 1.0 },
  { name: 'QUARTER', val: 0.25 },
  { name: 'DIME', val: 0.1 },
  { name: 'NICKEL', val: 0.05 },
  { name: 'PENNY', val: 0.01 }
]

function checkCashRegister(price, cash, cid) {
  const output = { status: null, change: [] }
  let change = cash - price

  // Transform CID array into drawer object
  const drawer = cid.reduce(
    function (acc, curr) {
      acc.total += curr[1]
      acc[curr[0]] = curr[1]
      return acc
    },
    { total: 0 }
  )

  // Handle exact change
  if (drawer.total === change) {
    output.status = 'CLOSED'
    output.change = cid
    return output
  }

  // Handle obvious insufficient funds
  if (drawer.total < change) {
    output.status = 'INSUFFICIENT_FUNDS'
    return output
  }

  // Loop through the denomination array
  const change_arr = valueDict.reduce(function (acc, curr) {
    let value = 0
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change remaining
    while (drawer[curr.name] > 0 && change >= curr.val) {
      change -= curr.val
      drawer[curr.name] -= curr.val
      value += curr.val

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100
    }
    // Add this key of valueDict to the output only if any was used.
    if (value > 0) {
      acc.push([curr.name, value])
    }
    return acc // Return the current change_arr
  }, []) // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS'
    return output
  }

  // Here is your change, ma'am.
  output.status = 'OPEN'
  output.change = change_arr
  return output
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ])
)
