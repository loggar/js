var v = 1;

var getValue = (function(x) {
	return function() {
		return x;
	};
}(v));

v = 2;

console.log(getValue()); // returns 1.

// how it works?

var v_1 = 1;

function helperFunctionToUnderstand(x) {
	return function() {
		return x;
	};
}

var getValue_1 = helperFunctionToUnderstand(v_1);

v_1 = 2;

console.log(getValue_1()); // returns 1.

// so, getValue was already invoked.
// because it was IIFE (Immediately Invoked Function Expressions)
// IIFE looks like this. (function (){}());


// without IIFE.
var v_2 = 1;
var getValue_2 = function() {
	return v_2;
};

v_2 = 2;

console.log(getValue_2()); // returns 2.
