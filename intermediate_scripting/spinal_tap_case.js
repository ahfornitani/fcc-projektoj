function spinalCase(str) {
	str = str
		.replace(/(\s)|(_)/g, "-")
		.replace(/([A-Z])/g, c => "-" + c.toLowerCase())
		.replace(/--/g, "-");

	if (str.charAt(0) == "-") {
		str = str.substr(1);
	}

	return str;
}

console.log(spinalCase("This Is Spinal Tap"))
console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))
