var isArray = require("./is-array.js");

var a1 = [1, 2, 3];

console.log(isArray(a1));

var fn = function () {
	console.log(isArray(arguments));
}

fn(1, 2, 3);