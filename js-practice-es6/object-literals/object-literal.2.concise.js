function runSomething(o) {
	var x = Math.random(),
		y = Math.random();

	return o.something(x, y);
}

var result = runSomething({
	something: function something(x, y) {
		if (x > y) {
			// recursively call with `x`
			// and `y` swapped
			return something(y, x);
		}

		return y - x;
	}
});

console.log(result);


// es6
var result2 = runSomething({
	something(x, y) {
		if (x > y) {
			return something(y, x);
		}
		return y - x;
	}
});

console.log(result2);