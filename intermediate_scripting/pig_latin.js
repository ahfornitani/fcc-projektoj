function translatePigLatin(str) {
	let firstChar = str.charAt(0);
	return /^[aeiou]/i.test(firstChar)
		? (str = str + "way")
		: str.substr(1) + firstChar + "ay";
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
