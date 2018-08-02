function* foo() {
	yield 1;
	yield 2;
	yield 3;
}

var it = foo();

it.next();                // { value: 1, done: false }

it.return(42);        // { value: 42, done: true }

it.next();                // { value: undefined, done: true }