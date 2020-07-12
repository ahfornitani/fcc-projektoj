function telephoneCheck(str) {
	let reg = /^(1)?(\s)?(\()?(\s)?\d{3}(-|\s|\))?(\s)?\d{3}(-|\s)?\d{4}/gi

	// check if it has matching parentheses
	if (
		(str.includes(')') && !str.includes('(')) ||
		(str.includes('(') && !str.includes(')')) ||
		str.includes('?')
	) {
		return false
	}

	// valid numbers are at least 10 chars long
	if (str.length < 9) {
		return false
	}

	// if it does not with area code
	// then check if it starts with a 5
	if (!str.startsWith('1')) {
		return str.charAt(1) === '5' ? true : false
	}

	return reg.test(str)
}

console.log(telephoneCheck('55555555')) // false
console.log(telephoneCheck('(6054756961)')) // false
