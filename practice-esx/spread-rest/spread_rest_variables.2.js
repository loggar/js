var a = [2, 3, 4];

var b = [1, ...a, 5];

console.log(b);


function foo(x, y, ...z) { // 0 1 [ 2, 3, 4 ]
	console.log(arguments);
	console.log(x, y, z);
}

foo(0, 1, 2, 3, 4);