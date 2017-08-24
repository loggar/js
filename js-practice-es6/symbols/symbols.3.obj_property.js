var o = {
	foo: 42,
	[Symbol("bar")]: "hello world",
	baz: true
};

Object.getOwnPropertyNames(o);    // [ "foo","baz" ]



/* Built-In Symbols */

var a = [1, 2, 3];

a[Symbol.iterator];            // native function