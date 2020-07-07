function whatIsInAName(collection, source) {
	return collection.filter(elem =>
		Object.keys(source).every(
			key =>
				elem.hasOwnProperty(key) &&
				elem[key] == source[key]
		)
	);
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
