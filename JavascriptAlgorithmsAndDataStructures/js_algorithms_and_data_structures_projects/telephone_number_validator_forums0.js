// Set up your Booleans here
let hasTenDigits = false;
let hasElevenDigits = false;
let startsWithOne = false;
let hasPermittedCharsOnly = false;
let hasCorrectParentheses = false;

// Write regular expressions here so that the Booleans contain the correct values
// INSERT CODE WITH REGEX HERE

// Use the Booleans to return true or false, without needing to string together one complex regular expression
if (!hasTenDigits && !hasElevenDigits) {
  return false;
} else if (!hasPermittedCharsOnly || !hasCorrectParentheses) {
  return false;
} else if (hasElevenDigits && !startsWithOne) {
  return false;
} else {
  return true;
}