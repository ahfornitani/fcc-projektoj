/*

    First, I create a function with the sole purpose of checking if a number is actually a number and returns undefined if it is not. It uses typeof to check.
    Check if we have two parameters, if so, then check if they are numbers or not using the checkNum function I created.
    If they are not undefined then add them and return the addition. If they any of them is undefined then return undefined.
    In the case that we only have one argument, then we return a new function that expects two parameters. For this we store the first argument before going into a new scope to avoid our arguments being overwritten.
    Still inside the big else, we need to check the argument we saved, if it is a number then we return the function expecting a second argument.
    Now inside the function we are returning, we have to check for non numbers again just as at the beginning using checkNum if undefined then return that, otherwise if numbers add them and return the addition.
*/

function addTogether() {
    // Function to check if a number is actually a number
    // and return undefined otherwise.
    var checkNum = function(num) {
      if (typeof num !== "number") {
        return undefined;
      } else return num;
    };
  
    // Check if we have two parameters, check if they are numbers
    // handle the case where one is not
    // returns the addition.
    if (arguments.length > 1) {
      var a = checkNum(arguments[0]);
      var b = checkNum(arguments[1]);
      if (a === undefined || b === undefined) {
        return undefined;
      } else {
        return a + b;
      }
    } else {
      // If only one parameter was found, returns a new function that expects two
      // Store first argument before entering the new function scope
      var c = arguments[0];
  
      // Check the number again, must be outside the function to about returning an object
      // instead of undefined.
      if (checkNum(c)) {
        // Return function that expect a second argument.
        return function(arg2) {
          // Check for non-numbers
          if (c === undefined || checkNum(arg2) === undefined) {
            return undefined;
          } else {
            // if numbers then add them.
            return c + arg2;
          }
        };
      }
    }
  }
  
  // test here
  console.log(addTogether(2, 3))
  console.log(addTogether(5)(7))