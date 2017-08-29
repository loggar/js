function* foo() {
	try {
		yield 1;
	}
	catch (err) {
		console.log(err);
	}

	yield 2;

	throw "Hello!";
}

var it = foo();

it.next();                // { value: 1, done: false }

try {
	it.throw("Hi!");  // Hi!
	// { value: 2, done: false }
	it.next();

	console.log("never gets here");
}
catch (err) {
	console.log(err); // Hello!
}
