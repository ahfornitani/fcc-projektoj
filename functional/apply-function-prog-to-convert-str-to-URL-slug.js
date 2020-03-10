// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
//    let arr = title.trim().toLowerCase().split(/\W+/)
//
//    for (let i = 0; i < arr.length - 1; i += 2) {
//        arr.splice(i + 1, 0, "-")
//    }
//    return (arr.join(""))
	return title
		.toLowerCase()
		.trim()
		.split(/\s+/)
		.join("-")
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing)
