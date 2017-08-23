function foo() {
	return [1, 2, 3];
}

var tmp = foo(),
	a = tmp[0], b = tmp[1], c = tmp[2];

console.log(a, b, c);

function bar() {
	return {
		bar_x: 4,
		bar_y: 5,
		bar_z: 6
	};
}

var tmp = bar(), x = tmp.bar_x, y = tmp.bar_y, z = tmp.bar_z;

console.log(x, y, z);

var [a, b, c] = foo();
var { bar_x: x, bar_y: y, bar_z: z } = bar(); // be carefull with the order. x,y,z  are declaring variables.

console.log(a, b, c);                // 1 2 3
console.log(x, y, z);                // 4 5 6


var { bar_x, bar_y, bar_z } = bar();
console.log( bar_x, bar_y, bar_z );

