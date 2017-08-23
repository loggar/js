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

var [a = 3, b = 6, c = 9, d = 12] = foo();
var { x = 5, y = 10, z = 15, w = 20 } = bar();

console.log(a, b, c, d);            // 1 2 3 12
console.log(x, y, z, w);            // 4 5 6 20


var { x, y, z, w: WW = 20 } = bar();

console.log(x, y, z, WW);            // 4 5 6 20


var x = 200, y = 300, z = 100;
var o1 = { x: { y: 42 }, z: { y: z } };

({ y: x = { y: y } } = o1);
({ z: y = { y: z } } = o1);
({ x: z = { y: x } } = o1);

console.log( x.y, y.y, z.y );        // 300 100 42