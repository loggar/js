var o1 = {
	a: 1,
	b: "b"
	// ..
};

var o2 = {
	__proto__: o1,
	c: true
	// ..
};

var o3 = {};

console.log(o2);


Object.setPrototypeOf(o3, o1);

console.log(o3);


var o4 = {
	foo() {
		console.log("o1:foo");
	}
};

var o5 = {
	foo() {
		super.foo();
		console.log("o5:foo");
	}
};

Object.setPrototypeOf(o5, o4);

o5.foo();        // o4:foo
                 // o5:foo