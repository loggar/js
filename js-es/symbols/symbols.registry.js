function extractValues(str) {
	var key = Symbol.for("extractValues.parse"),
		re = extractValues[key] ||
			/[^=&]+?=([^&]+?)(?=&|$)/g,
		values = [], match;

	while (match = re.exec(str)) {
		values.push(match[1]);
	}

	return values;
}


extractValues[Symbol.for("extractValues.parse")] = /..some pattern../g;

console.log(extractValues("..some string.."));


/* You can retrieve a registered symbol's description text (key) using Symbol.keyFor(..) */

var s = Symbol.for("something cool");

var desc = Symbol.keyFor(s);
console.log(desc);            // "something cool"

// get the symbol from the registry again
var s2 = Symbol.for(desc);

s2 === s;                        // true