function Dog(name) {
  this.name = name
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 4,
  eat: function () {
    console.log('chomp chomp')
  },
  describe: function () {
    console.log(`My name is ${this.name}`)
  }
}
