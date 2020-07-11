var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fn = firstAndLast.split(' ')[0]
  let ln = firstAndLast.split(' ')[1]

  this.getFirstName = () => fn
  this.getLastName = () => ln
  this.getFullName = () => `${fn} ${ln}`

  // set methods
  this.setFirstName = (a) => (fn = a)
  this.setLastName = (b) => (ln = b)
  //this.setFullName = (c) => this.getFullName = () => c
  this.setFullName = function (c) {
    this.setFirstName(c.split(' ')[0])
    this.setLastName(c.split(' ')[1])
  }

  return firstAndLast
}

var bob = new Person('Bob Ross')
bob.setFullName('Haskell Curry')
console.log(bob.getFullName())
