var a1 = [1, 2, 3]; // Create a new array with these three elements
a1.join(); // => "1,2,3"
a1.join(" "); // => "1 2 3"
a1.join(""); // => "123"
var b1 = new Array(10); // An array of length 10 with no elements
b1.join('-') // => '---------': a string of 9 hyphens