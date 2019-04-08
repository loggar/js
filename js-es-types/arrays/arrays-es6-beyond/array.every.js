var vals = ["foo", "bar", 42, "baz"];

var a = vals.every(v => typeof v !== 'undefined');
var b = vals.every(v => typeof v === 'string');

console.log(a);
console.log(b);

// Every() is like some(), only every element in the array must pass the test for the function to return true.
