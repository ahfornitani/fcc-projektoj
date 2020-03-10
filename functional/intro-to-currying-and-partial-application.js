const curried = x => y => z => x + y + z
console.log(curried(10)(20)(30))
