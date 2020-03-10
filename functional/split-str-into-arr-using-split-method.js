function splitify(str) {
  // Add your code below this line
  let arr = str
    .replace(/-/gi, " ")
    .replace(/\./gi, " ")
    .split(/[\s,]+/)
  return arr
  // Add your code above this line
}
console.log(splitify("Hello World,I-am code"))
console.log(splitify("Earth-is-our home"))
console.log(splitify("This.is.a-sentence"))
console.log(splitify("Mi-estas-Augusto.!?,"))

