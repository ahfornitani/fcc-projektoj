function multiply(arr: number[], n: number) {
    var product = arr[0]
    for (var i = 1; i <= n; i++) {
        product *= arr[i]
    }
    return product
}

function multiplyRec(arr: number[], n: number) {
    if (n <= 0) {
        return arr[0];
    } else {
        return multiply(arr, n - 1) * arr[n];
    }
}

let myArray: number[] = [1, 5, 10, 30]

console.log(multiply(myArray, 3))
console.log(multiplyRec(myArray, 2))

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

//document.body.textContent = greeter(user);
console.log(greeter(user));
