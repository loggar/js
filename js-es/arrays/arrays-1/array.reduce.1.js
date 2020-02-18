var a = [1, 2, 3, 4, 5]
var sum = a.reduce(function (x, y) { return x + y }, 0); // Sum of values
var product = a.reduce(function (x, y) { return x * y }, 1); // Product of values
var max = a.reduce(function (x, y) { return (x > y) ? x : y; }); // Largest value



var a = [2, 3, 4]
// Compute 2^(3^4). Exponentiation has right-to-left precedence
var big = a.reduceRight(function (accumulator, value) {
	return Math.pow(value, accumulator);
});



var objects = [{ x: 1 }, { y: 2 }, { z: 3 }];
var merged = objects.reduce(union); // => {x:1, y:2, z:3}



var objects = [{ x: 1, a: 1 }, { y: 2, a: 2 }, { z: 3, a: 3 }];
var leftunion = objects.reduce(union); // {x:1, y:2, z:3, a:1}
var rightunion = objects.reduceRight(union); // {x:1, y:2, z:3, a:3}
