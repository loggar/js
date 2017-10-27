var a = {}; // Start with a regular empty object
// Add properties to make it "array-like"
var i = 0;
while (i < 10) {
	a[i] = i * i;
	i++;
}
a.length = i;
// Now iterate through it as if it were a real array
var total = 0;
for (var j = 0; j < a.length; j++)
	total += a[j];



// Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded
// with an additional o.nodeType != 3 test.
function isArrayLike(o) {
	if (o && // o is not null, undefined, etc.
		typeof o === "object" && // o is an object
		isFinite(o.length) && // o.length is a finite number
		o.length >= 0 && // o.length is non-negative
		o.length === Math.floor(o.length) && // o.length is an integer
		o.length < 4294967296) // o.length < 2^32
		return true; // Then o is array-like
	else
		return false; // Otherwise it is not
}



var a = { "0": "a", "1": "b", "2": "c", length: 3 }; // An array-like object
Array.prototype.join.call(a, "+") // => "a+b+c"
Array.prototype.slice.call(a, 0) // => ["a","b","c"]: true array copy
Array.prototype.map.call(a, function (x) {
	return x.toUpperCase();
}) // => ["A","B","C"]:



var a = { "0": "a", "1": "b", "2": "c", length: 3 }; // An array-like object
Array.join(a, "+")
Array.slice(a, 0)
Array.map(a, function (x) { return x.toUpperCase(); })



Array.join = Array.join || function (a, sep) {
	return Array.prototype.join.call(a, sep);
};
Array.slice = Array.slice || function (a, from, to) {
	return Array.prototype.slice.call(a, from, to);
};
Array.map = Array.map || function (a, f, thisArg) {
	return Array.prototype.map.call(a, f, thisArg);
}