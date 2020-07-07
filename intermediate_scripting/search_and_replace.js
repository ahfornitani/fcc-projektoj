function myReplace(str, before, after) {
	if (!isCapital(before))
		after = after.charAt(0).toUpperCase() + after.substr(1);

	str = str.replaceAll(before, after);
	return str;
}

function isCapital(word) {
	let lowercase = word.toLowerCase();
	return word === lowercase;
}

console.log(
	myReplace(
		"A quick brown fox jumped over the lazy dog",
		"jumped",
		"leaped"
	)
);

console.log(myReplace("His name is Tom", "Tom", "john"));
