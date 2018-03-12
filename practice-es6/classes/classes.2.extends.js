class ParentA {
	constructor() { this.id = "a"; }
	foo() { console.log("ParentA:", this.id); }
}

class ParentB {
	constructor() { this.id = "b"; }
	foo() { console.log("ParentB:", this.id); }
}

class ChildA extends ParentA {
	foo() {
		super.foo();
		console.log("ChildA:", this.id);
	}
}

class ChildB extends ParentB {
	foo() {
		super.foo();
		console.log("ChildB:", this.id);
	}
}

var a = new ChildA();
a.foo();                    // ParentA: a
// ChildA: a
var b = new ChildB();        // ParentB: b
b.foo();                    // ChildB: b

// borrow `b.foo()` to use in `a` context
b.foo.call(a);            // ParentB: a
                            // ChildB: a