// in pre-es6 style.
function foo(x, y) {
	x = x || 10;
	y = y || 1;
	console.log(x + y);
}

foo();
foo(20);
foo(20, 2);
foo(0, 0); // 11 <- num 0 is falsy.

// I need to check more verbosely
function foo2(x, y) {
	x = (x !== undefined && x != null) ? x : 10;
	y = (y !== undefined && y != null) ? y : 1;
	console.log(x + y);
}

foo2(0, 0);  // 0
foo2(undefined, 0); // 10
foo2(null, 0); // 10

// in es6 way
function foo3(x = 10, y = 1) {
	console.log(typeof x);
	console.log(x + y);
}

foo3();
foo3(20);
foo3(20, 2);
foo3(0, 0);
foo3(undefined, 0);
foo3(null, 0); // 0 : function default values in es6 way, object null coerces to number 0.

function foo4(x = "x-DEFAULT-VALUE") {
	console.log(typeof x, x);
}

foo4("xxx");
foo4();
foo4(undefined);
foo4(null); // null coerces to object null.