function pairElement(str) {
  let result = []
  for (let elem of str) {
    switch (elem) {
      case 'A':
        result.push(['A', 'T'])
        break
      case 'T':
        result.push(['T', 'A'])
        break
      case 'G':
        result.push(['G', 'C'])
        break
      case 'C':
        result.push(['C', 'G'])
        break
    }
  }
  return result
}

console.log(pairElement('ATCGA')) // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
//pairElement("GCG")
