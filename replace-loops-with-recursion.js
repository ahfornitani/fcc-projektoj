function multiply(arr, n) {
  let product = arr[0];
  for (let i = 1; i <= n; i += 1) {
    product *= arr[i];
  }
  return product;
}

function multiplyRec(arr, n) {
  if (n <= 0) {
    return arr[0];
  }

  return multiply(arr, n - 1) * arr[n];
}
const myArray = [1, 5, 10, 30];
console.log(multiply(myArray, 3));
console.log(multiplyRec(myArray, 2));
const Student = /** @class */ (function () {
  function Student(firstName, middleInitial, lastName) {
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
  return Student;
}());

function greeter(person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}
const user = new Student('Jane', 'M.', 'User');
// document.body.textContent = greeter(user);
console.log(greeter(user));
