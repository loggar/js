class MyCoolArray extends Array {
	sum() {
		return this.reduce(function reducer(acc, curr) {
			return acc + curr;
		}, 0);
	}
}

var x = new MyCoolArray(3);
x.length;                        // 3 -- oops!
x.sum();                        // 0 -- oops!

var y = [3];                    // Array, not MyCoolArray
y.length;                        // 1
y.sum();                        // `sum` is not a function

var z = MyCoolArray.of(3);
z.length;                        // 1
z.sum();                        // 3