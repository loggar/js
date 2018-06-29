var a = 10;

function foo() {
	if (true) {
		let a = 4;
	}

	console.log(a); // '10' because the 'let' keyword
}

foo();