function* foo() {
	yield 1;
	yield 2;
	yield 3;
}

var it = foo();

it.next();                // { value: 1, done: false }

try {
	it.throw("Oops!");
}
catch (err) {
	console.log(err); // Exception: Oops!
}

it.next();                // { value: undefined, done: true }