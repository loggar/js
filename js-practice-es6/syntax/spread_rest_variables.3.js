// es6 way
function foo(...args) {
	// discard first element in args(in this case, the fn-context from bar)
	args.shift();

	// spread it.
	console.log(...args);
}

// pre es6 way.
function bar() {
	var args = Array.prototype.slice.call(arguments);
	args = args.filter(function (v) {
		return v % 2 == 0;
	});

	foo.apply(null, args);
}

bar(0,1,2,3,4,5);
