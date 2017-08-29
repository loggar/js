class Foo {
	static cool() { console.log("cool"); }
	wow() { console.log("wow"); }
}

class Bar extends Foo {
	static awesome() {
		super.cool();
		console.log("awesome");
	}
	neat() {
		super.wow();
		console.log("neat");
	}
}

Foo.cool();                    // "cool"
Bar.cool();                    // "cool"
Bar.awesome();                // "cool"
// "awesome"

var b = new Bar();
b.neat();                    // "wow"
// "neat"

b.awesome;                    // undefined
b.cool;                        // undefined