function foo() {
	return [1, 2, 3];
}

function bar() {
	return {
		x: 4,
		y: 5,
		z: 6
	};
}

var [, b] = foo();
var { x, z } = bar();

console.log(b, x, z);                // 2 4 6


var [, , c, d] = foo();
var { w, z } = bar();

console.log(c, z);                // 3 6
console.log(d, w);                // undefined undefined


var a = [2, 3, 4];
var b = [1, ...a, 5];

console.log(b);                    // [1,2,3,4,5]


var a = [2, 3, 4];
var [b, ...c] = a;

console.log(b, c);                // 2 [3,4]
