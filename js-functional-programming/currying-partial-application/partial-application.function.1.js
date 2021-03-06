var multiply = function (x, y) {
	return x * y;
}

var partial = function (fn) {
	var args = [].slice.call(arguments, 1);
	return function () {
		var combinedArgs = args.concat([].slice.call(arguments));
		return fn.apply(this, combinedArgs);
	};
}

//partial application
var double = partial(multiply, 2);
var boundDouble = multiply.bind(null, 2);

/* test */
var i = 1;
console.log(double(4) == 8);
console.log(boundDouble(4) == 8);
