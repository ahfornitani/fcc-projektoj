//Only change code below this line
function countdown(myArray, n) {
    if (myArray == -1 || n == -1) {
        myArray = []
        return myArray
    } else if (n != 0) {
        myArray = countdown(myArray, n - 1)
        myArray.push(n)
    }
    // return myArray.sort((a, b) => a - b).reverse()
    return myArray.sort((a, b) => a - b)
}

// //Only change code below this line
// function countdown(myArray, n) {
//     if (myArray == -1 || n == -1) {
//         myArray = []
//         return myArray
//     } else {
//         myArray.push(n)
//         countdown(myArray, n - 1)
//     }
//     // return myArray.sort((a, b) => a - b).reverse()
// }

function countdownHint(myArray, n) {
    if (n <= 0) {
        return;
    }
    else {
        myArray.push(n);
        countdownHint(myArray, n - 1);
    }
}

var myArray = [5, 210, 90, 5, 5]
// console.log(`My function gives: ${countdown(myArray, 10)}`)
countdown(myArray, 30)
// countdownHint(myArray, 10)
console.log(`My array is now: ${myArray}`)