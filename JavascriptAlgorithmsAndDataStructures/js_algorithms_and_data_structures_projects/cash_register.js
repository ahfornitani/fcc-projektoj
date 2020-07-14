function checkCashRegister(price, cash, cid) {
    let change = cash - price
    let totalBefore = []
  
    let pennyArr = [], 
    nickelArr = [], dimeArr = [], quarterArr = [], oneArr = [],
    fiveArr = [], tenArr = [], twentyArr = [], hundArr = []
  
    for(let i = 0; i < cid.length; i++){
      totalBefore.push(cid[i][1])
    }
  
    for(let elem of cid){
      //console.log(elem[0],elem[1])
      switch(elem[0]){
        case "PENNY":
          //console.log(`push ${elem[1] / 0.01} to pennyArr`)
          pennyArr.push(Math.round(elem[1] / 0.01))
        break
        case "NICKEL":
          nickelArr.push(Math.round(elem[1] / 0.05))
        break
        case "DIME":
          dimeArr.push(Math.round(elem[1] / 0.1))
        break
        case "QUARTER":
          quarterArr.push(Math.round(elem[1] / 0.25))
        break
        case "ONE":
          oneArr.push(Math.round(elem[1] / 1))
        break
        case "FIVE":
          fiveArr.push(Math.round(elem[1] / 5))
        break
        case "TEN":
          tenArr.push(Math.round(elem[1] / 10))
        break
        case "TWENTY":
          twentyArr.push(Math.round(elem[1] / 20))
        break
        case "ONE HUNDRED":
          hundArr.push(Math.round(elem[1] / 100))
        break
      }
    }
  
    totalBefore = totalBefore.reduce((a, b) => a + b)
  
    let totalAfter = totalBefore + cash - change
    console.log(`totalBefore: ${totalBefore}`)
    console.log(`totalAfter: ${totalAfter}`)
  
  
    console.log(`
    I have ${pennyArr} penny coins
    I have ${nickelArr} nickel coins
    I have ${dimeArr} dime coins
    I have ${quarterArr} quarter coins
    I have ${oneArr} one coins
    I have ${fiveArr} five coins
    I have ${tenArr} ten coins
    I have ${twentyArr} twenty coins
    I have ${hundArr} hund coins
    `)
  
    return change;
  }
  
  // penny = 1c, nickel = 5c, dime = 10c, quarter = 25c
  // one = 1$, five = $5, ten = $10, twenty = $20, onehundred = $100
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  