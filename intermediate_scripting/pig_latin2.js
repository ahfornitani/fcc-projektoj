function translatePigLatin(str) {
	let strArr = Array.from(str);
	let endArr = [];
	let position = 0;

	for (let i = 0; i < strArr.length; i++) {
		if (!/^[aeiou]/i.test(strArr[i])) {
			endArr.push(strArr[i]);

			if (endArr.toString().replace(/,/g, "") == str) {
				return str + "ay";
			}
		} else {
			position = i;
			break;
		}
	}

	return position === 0
		? str + "way"
		: (str =
				str.substr(position) +
				endArr.toString().replace(/,/g, "") +
				"ay");
}

console.log(translatePigLatin("california")); // aliforniacay
console.log(translatePigLatin("paragraphs")); // aragraphspay
console.log(translatePigLatin("glove")); // oveglay
console.log(translatePigLatin("algorithm")); // algorithmway
console.log(translatePigLatin("eight")); // eightway
console.log(translatePigLatin("schwartz")); // artzschway
console.log(translatePigLatin("rhythm")); // rhythmay
