/*
Advanced curry implementation
*/

function curry(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function (...args2) {
				return curried.apply(this, args.concat(args2));
			}
		}
	};
}

function sum(a, b, c) {
	return a + b + c;
}

let curriedSum = curry(sum);

// still callable normally
console.log(curriedSum(1, 2, 3)); // 6

// get the partial with curried(1) and call it with 2 other arguments
console.log(curriedSum(1)(2, 3)); // 6

// full curried form
console.log(curriedSum(1)(2)(3)); // 6

/*
The result of curry(func) is the wrapper curried that looks like this:
*/
/*
// func is the function to transform
function curried(...args) {
	if (args.length >= func.length) { // (1)
		return func.apply(this, args);
	} else {
		return function pass(...args2) { // (2)
			return curried.apply(this, args.concat(args2));
		}
	}
};
*/