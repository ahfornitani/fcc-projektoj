/* eslint-disable no-console */
function sum(arr, n) {
  if (n <= 0) {
    return arr[0];
  }

  return sum(arr, n - 1) + arr[n];
}
const myArray = [1, 2, 3];
console.log(sum(myArray, 2));
