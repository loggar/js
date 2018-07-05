
var foo = function foo() {
	console.trace();
},
	bar = function bar() {
		foo();
	};

bar();
