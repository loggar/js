class MyCoolArray extends Array {
	// force `species` to be parent constructor
	static get [Symbol.species]() { return Array; }
}

var x = new MyCoolArray(1, 2, 3);

MyCoolArray.from(x) instanceof MyCoolArray;        // true
MyCoolArray.of([2, 3]) instanceof MyCoolArray;    // true