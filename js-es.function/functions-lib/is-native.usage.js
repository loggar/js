var isNative = require("./is-native.js.js");

var myCustomFunction = function () {
	// not native fn : you can override it!
}

// Usage
console.log(isNative(console.log)); // true
console.log(isNative(myCustomFunction)); // false