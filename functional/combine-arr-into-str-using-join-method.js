function sentensify(str){
	//let arr = str.split(/\W+/)
	//return str = arr.join(" ")
	return str.split(/\W/).join(" ")
}
console.log(sentensify("May-the-force-be-with-you"))
console.log(sentensify("The.force.is.strong.with.this.one"))
console.log(sentensify("There,has,been,an,awakening"))
