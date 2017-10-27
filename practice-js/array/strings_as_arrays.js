var s = test;
s.charAt(0) // => "t"
s[1] // => "e"



s = "JavaScript"
Array.prototype.join.call(s, " ") // => "J a v a S c r i p t"
Array.prototype.filter.call(s, // Filter the characters of the string
	function (x) {
		return x.match(/[^aeiou]/); // Only match nonvowels
	}).join("") // => "JvScrpt"