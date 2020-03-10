var romanSymbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

function expandDecimal(int) {
  return int.toString().split('').map(function(e) {
    return parseInt(e);
  }).map(function(e) {
    return codeDecimal(e);
  });
}

function codeDecimal(int) {
  var a = int - 5*Math.floor((int+1)/5), // sawtooth
      b = 5*Math.floor((int-4)/5) + 5; // step
  
  if (a < 0) return [Math.abs(a), b];
  else return [b, a];
}

function convertToSymbol(pairArr, place) {
  var symbol;
  
  return pairArr.map(function(e) {
    if (e === 0) return '';
    else if (e === 5) return romanSymbols[place + 1];
    else if (e === 10) return romanSymbols[place + 2];
    else return romanSymbols[place].repeat(e);
  }).join('');
}

function replaceNumbers(arr) {
  return arr.reverse().map(function(e, i) {
    return convertToSymbol(e, i*2);
  }).reverse().join('');
}

function convertToRoman(num) {
  return replaceNumbers(expandDecimal(num));
}
console.log(convertToRoman(36))

console.log(convertToRoman(3996))
console.log(convertToRoman(6))
