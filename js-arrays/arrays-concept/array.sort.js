var a3 = new Array("banana", "cherry", "apple");
a3.sort();
var s = a3.join(", "); // s == "apple, banana, cherry"



var a4 = [33, 4, 1111, 222];
a4.sort(); // Alphabetical order: 1111, 222, 33, 4
a4.sort(function (a, b) { // Numerical order: 4, 33, 222, 1111
	return a - b; // Returns &lt; 0, 0, or &gt; 0, depending on order
});
a4.sort(function (a, b) { return b - a }); // Reverse numerical order



var a5 = ['ant', 'Bug', 'cat', 'Dog']
a5.sort(); // case-sensitive sort: ['Bug','Dog','ant',cat']
a5.sort(function (s, t) { // Case-insensitive sort
	var a = s.toLowerCase();
	var b = t.toLowerCase();
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}); // => ['ant','Bug','cat','Dog']