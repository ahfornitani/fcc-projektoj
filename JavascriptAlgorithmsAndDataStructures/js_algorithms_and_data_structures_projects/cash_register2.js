/*
Couldn't complete this on my own, used solution from the forums
*/

function checkCashRegister(price, cash, cid) {
  let change = (cash - price) * 100
  console.log(`change is ${change} cents`)
  let totalBefore = []

  let pennyArr = [],
    nickelArr = [],
    dimeArr = [],
    quarterArr = [],
    oneArr = [],
    fiveArr = [],
    tenArr = [],
    twentyArr = [],
    hundArr = []

  for (let i = 0; i < cid.length; i++) {
    totalBefore.push(Math.round(cid[i][1] * 100))
  }

  let allTogether = totalBefore
  allTogether = allTogether.sort((a, b) => a - b)
  console.log(`allTogether, in cents: ${allTogether}`)

  for (let elem of cid) {
    //console.log(elem[0],elem[1])
    switch (elem[0]) {
      case 'PENNY':
        //console.log(`push ${elem[1] / 0.01} to pennyArr`)
        // pennyArr.push(Math.round(elem[1] / 0.01))
        pennyArr.push(Math.round(elem[1]))
        break
      case 'NICKEL':
        // nickelArr.push(Math.round(elem[1] * 100 * 5))
        nickelArr.push(Math.round(elem[1]))
        break
      case 'DIME':
        // dimeArr.push(Math.round(elem[1] / 0.1))
        dimeArr.push(Math.round(elem[1]))
        break
      case 'QUARTER':
        // quarterArr.push(Math.round(elem[1] / 0.25))
        quarterArr.push(Math.round(elem[1]))
        break
      case 'ONE':
        // oneArr.push(Math.round(elem[1] / 1))
        oneArr.push(Math.round(elem[1]))
        break
      case 'FIVE':
        // fiveArr.push(Math.round(elem[1] / 5))
        fiveArr.push(Math.round(elem[1]))
        break
      case 'TEN':
        // tenArr.push(Math.round(elem[1] / 10))
        tenArr.push(Math.round(elem[1]))
        break
      case 'TWENTY':
        // twentyArr.push(Math.round(elem[1] / 20))
        twentyArr.push(Math.round(elem[1]))
        break
      case 'ONE HUNDRED':
        // hundArr.push(Math.round(elem[1] / 100))
        hundArr.push(Math.round(elem[1]))
        break
    }
  }

  totalBefore = Math.round(totalBefore.reduce((a, b) => a + b) / 100)

  // change is in cents
  let totalAfter = totalBefore + cash - change / 100
  console.log(`totalBefore: \$ ${totalBefore}, and ${totalBefore * 100} cents`)
  console.log(`totalAfter: \$ ${totalAfter}, and ${totalAfter * 100} cents`)

  // all to cents
  // nickelArr = nickelArr * 5
  // dimeArr = dimeArr * 10
  // quarterArr = quarterArr * 25
  // oneArr = oneArr * 100
  // fiveArr = fiveArr * 100 * 5
  // tenArr = tenArr * 100 * 10
  // twentyArr = twentyArr * 100 * 20
  // hundArr = hundArr * 100 * 100

  console.log(`
    I have ${pennyArr} cents in pennies
    I have ${nickelArr} cents in nickels
    I have ${dimeArr} cents in dimes
    I have ${quarterArr} cents in quarters
    I have ${oneArr} cents in one dollar bills
    I have ${fiveArr} cents in five dollars bills
    I have ${tenArr} cents in ten dollars bills
    I have ${twentyArr} cents in twenty dollars bills
    I have ${hundArr} cents in one hundred dollars bills
    `)

  return change
}

// penny = 1c, nickel = 5c, dime = 10c, quarter = 25c
// one = 1$, five = $5, ten = $10, twenty = $20, onehundred = $100

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
