class Foo {
	constructor() { this.a = 1; }
}

/*
class Bar extends Foo {
	constructor() {
		this.b = 2;         // not allowed before `super()`
		super();            // to fix swap these two statements
	}
}
*/

class Bar extends Foo {
	constructor() {
		super();
		this.b = 2;
	}
}
