/*

    First I iterate through the arguments and check for arguments that are not a number and return undefined
    If it’s not I then check if the arguments length is above 1, if it is I sum the arguments using Array.prototype.reduce
    Else I return a function that checks if the passed in argument is a number and sum it, if not return undefined
*/

//jshint esversion: 6
function addTogether() {
  var args = Array.from(arguments)
  return args.some((n) => typeof n !== 'number')
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : (n) => (typeof n === 'number' ? n + args[0] : undefined)
}

// test here
addTogether(2, 3)
