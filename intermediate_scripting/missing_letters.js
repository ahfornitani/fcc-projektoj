function fearNotLetter(str) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";

	if (str == alphabet) {
		return undefined;
	}

	// where does I should start comparing (not always at a...)
	let firstChar = str.charAt(0);
	let startCountingAt = alphabet.indexOf(firstChar);

	// an array to store values equal
	// both at the normal alphabetical order
	// and the sequence given
	let arr = [];

	// run through the string, for comparing each char
	// keep pushing to array as long as char in the
	// given sequence and alphabet match
	for (let i = 0; i < str.length; i++) {
		if (alphabet.charAt(startCountingAt + i) == str.charAt(i))
			arr.push(str.charAt(i));
	}

	// what's the index, in the alphabet, of the last char in the array?
	let positionAtAlphabet = alphabet.indexOf(arr[arr.length - 1]);

	// return the very next char after that one
	return alphabet.charAt(positionAtAlphabet + 1);
}

console.log(fearNotLetter("abce")); // 'd'
console.log(fearNotLetter("abcdefghjklmno")); // 'i'
console.log(fearNotLetter("stvwx")); // 'u'
console.log(fearNotLetter("bcdf")); // 'e'
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //undefined
