function multiply(arr, n) {
    var product = arr[0];
    for (var i = 1; i <= n; i++) {
        product *= arr[i];
    }
    return product;
}
function multiplyRec(arr, n) {
    if (n <= 0) {
        return arr[0];
    }
    else {
        return multiply(arr, n - 1) * arr[n];
    }
}
var myArray = [1, 5, 10, 30];
console.log(multiply(myArray, 3));
console.log(multiplyRec(myArray, 2));
