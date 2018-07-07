function curry(func) {
	return function (a) {
		return function (b) {
			return func(a, b);
		};
	};
}

// usage
function sum(a, b) {
	return a + b;
}

let carriedSum = curry(sum);

console.log(curriedSum(1)(2)); // 3