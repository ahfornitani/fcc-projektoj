function confirmEnding(str, target) {
  var lastChar = str.slice(-target.length)
  return lastChar === target ? true : false
}

confirmEnding('Congratulation', 'on')
