/* Errors can also propagate in both directions through yield * delegation: */

function* foo() {
	try {
		yield 1;
	}
	catch (err) {
		console.log(err);
	}

	yield 2;

	throw "foo: e2";
}

function* bar() {
	try {
		yield* foo();

		console.log("never gets here");
	}
	catch (err) {
		console.log(err);
	}
}

var it = bar();

try {
	it.next();          // { value: 1, done: false }

	it.throw("e1");   // e1
	// { value: 2, done: false }

	it.next();          // foo: e2
	// { value: undefined, done: true }
}
catch (err) {
	console.log("never gets here");
}

it.next();                // { value: undefined, done: true }