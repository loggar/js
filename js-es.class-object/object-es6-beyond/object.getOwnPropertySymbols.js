var o = {
	foo: 42,
	[Symbol("bar")]: "hello world",
	baz: true
};

Object.getOwnPropertySymbols(o);    // [ Symbol(bar) ]