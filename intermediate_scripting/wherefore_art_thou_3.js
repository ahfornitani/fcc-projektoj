function whatIsInAName(collection, source) {
	let arr = [];

	arr = collection.filter(elem =>
		Object.values(elem).toString().includes(Object.values(source))
	);

	return arr;
}

console.log(
	whatIsInAName(
		[
			{ apple: 1, bat: 2 },

			{ bat: 2 },

			{ apple: 1, bat: 2, cookie: 2 }
		],

		{ apple: 1, bat: 2 }
	)
);
