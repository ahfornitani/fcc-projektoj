function spinalCase(str) {
	var words = str.split(/\s|_|(?=[A-Z])/);

	return words
		.map(function (word) {
			return word.toLowerCase();
		})
		.join("-");
}

console.log(spinalCase("This is a test"));
