// function default parameters expressions

function bar(val) {
	console.log("bar(" + val + ") called.");
	return y + val;
}

function foo(x=y+3, z = bar(x)) {
	console.log(x,z);
}

var y = 5;

foo();
foo(10);
y=6;
foo();
foo(10);