//const isPrime = num => (num > 1) && Array(Math.floor(Math.sqrt(num)) - 1).fill(0).map((_, i) => i + 2).every(i => num % i !== 0);

function isPrime(num) {
  if (num == 1) return false
  if (num == 2) return true

  // check if an int is prime, between 2 (initial i value)
  // and the sqrt of the given int
  let limit = Math.ceil(Math.sqrt(num))

  for (let i = 2; i <= limit; ++i) {
    if (num % i == 0) return false
  }

  return true
}

function sumPrimes(num) {
  let arr = []
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      arr.push(i)
    }
  }

  console.log(`arr.length => ${arr.length}`)

  return arr.reduce((a, b) => a + b)
}

console.log(sumPrimes(10)) // 17
console.log(sumPrimes(977)) // 73156

// List of primes up to 1000
let list10 = [2, 3, 5, 7]
let list977 = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101,
  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149,
  151,
  157,
  163,
  167,
  173,
  179,
  181,
  191,
  193,
  197,
  199,
  211,
  223,
  227,
  229,
  233,
  239,
  241,
  251,
  257,
  263,
  269,
  271,
  277,
  281,
  283,
  293,
  307,
  311,
  313,
  317,
  331,
  337,
  347,
  349,
  353,
  359,
  367,
  373,
  379,
  383,
  389,
  397,
  401,
  409,
  419,
  421,
  431,
  433,
  439,
  443,
  449,
  457,
  461,
  463,
  467,
  479,
  487,
  491,
  499,
  503,
  509,
  521,
  523,
  541,
  547,
  557,
  563,
  569,
  571,
  577,
  587,
  593,
  599,
  601,
  607,
  613,
  617,
  619,
  631,
  641,
  643,
  647,
  653,
  659,
  661,
  673,
  677,
  683,
  691,
  701,
  709,
  719,
  727,
  733,
  739,
  743,
  751,
  757,
  761,
  769,
  773,
  787,
  797,
  809,
  811,
  821,
  823,
  827,
  829,
  839,
  853,
  857,
  859,
  863,
  877,
  881,
  883,
  887,
  907,
  911,
  919,
  929,
  937,
  941,
  947,
  953,
  967,
  971,
  977
]
console.log(
  `list10.length => ${list10.length}. Reduced: ${list10.reduce(
    (a, b) => a + b
  )}`
)
console.log(
  `list977.length => ${list977.length}. Reduced: ${list977.reduce(
    (a, b) => a + b
  )}`
)
