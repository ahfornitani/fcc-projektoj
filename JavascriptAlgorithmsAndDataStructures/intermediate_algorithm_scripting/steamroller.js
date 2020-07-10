// arr = arr.concat.apply( [], arr )
// arr receives the return of the function
// repeat the function n times, until totally flat
// the n equal the initial length off the arr here
const steamrollArray = arr => (arr = flat(arr, arr.length))

function flat(arr, n) {
	while (n > 0) {
		arr = arr.concat.apply([], arr)
		n--
	}
	return arr
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))
