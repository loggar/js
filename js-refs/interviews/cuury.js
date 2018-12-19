/*
 * How would you make this work? 
 * add_01(2, 5); // 7
 * add_02(2)(5); // 7
 * 
 */
var add_01 = function (x, y) {
	return x + y;
};

var add_02 = function (x) {
	return function (y) {
		return x + y;
	};
};

console.log(add_01(2, 5));
console.log(add_02(2)(5));

var curry = function curry(func) {
	return function (a) {
		return function (b) {
			return func(a, b);
		};
	};
}

let curriedSum = curry(add_01);

console.log(curriedSum(2)(5)); // 3
