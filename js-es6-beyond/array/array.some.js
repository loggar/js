var vals = ["foo", "bar", 42, "baz"];

var a = vals.some(v => v + "A" === 'barA');
var b = vals.some(v => v + "B" === 'fooA');

console.log(a);
console.log(b);

// Array.some() is similar to Array.includes(), but instead of just taking in an array, it takes in both an array and the value or function to evaluate the items in the array against.
// It will iterate through an array and return true or false based on if it finds what it’s looking for.
// Also like Array.includes(), Array.some() will end its iteration as soon as it finds a value that will return true.
