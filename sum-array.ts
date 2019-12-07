function sum(arr: number[], n: number) {
    if (n <= 0) {
        return arr[0];
    } else {
        return sum(arr, n - 1) + arr[n];
    }
}

const newArray = [10, 20, 30, 40, 50];
console.log(sum(newArray, 2));
