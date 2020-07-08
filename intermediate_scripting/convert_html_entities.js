const entities = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&apos;"
};

function convertHTML(str) {
	const entries = Object.entries(entities);
	for (const [key, value] of entries) {
		str.split("").map(function replace(a) {
			if (a === key) {
				str = str.replaceAll(a, value);
			}
		});
	}

	console.log(str);
	return str;
}

convertHTML("Dolce & Gabbana"); // "Dolce &amp; Gabbana"
convertHTML("Hamburgers < Pizza < Tacos"); // "Hamburgers &lt; Pizza &lt; Tacos"
convertHTML("Sixty > twelve"); // "Sixty &gt; twelve"
convertHTML('Stuff in "quotation marks"'); // "Stuff in &quot;quotation marks&quot;"
convertHTML("Schindler's List"); // "Schindler&apos;s List"
convertHTML("<>"); // "&lt;&gt;"
convertHTML("abc"); // "abc"
