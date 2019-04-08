var x = 2, y = 3,
	o = {
		x: x,
		y: y
	};

console.log(x, y, o);


// es6
var x = 2, y = 3,
	o = {
		x,
		y
	};

console.log(x, y, o);


var o = {
	x: function () {
		// ..
	},
	y: function () {
		// ..
	}
}

console.log(o);

// es6
var o = {
	x() {
		// ..
	},
	y() {
		// ..
	}
}

console.log(o);