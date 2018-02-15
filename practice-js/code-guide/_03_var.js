// Always use var

var add = function add(number) {
	x = 2;
	return number + x;
};

test('Without var.', function () {
	equal(add(2), 4,
		'add() should add 2 to whatever you pass in.');

	// Fails
	ok(!x, 'x should not pollute the global scope.');
});

var add_new = function add(number) {
	var x = 2;
	return number + x;
};

test('With var.', function () {
	equal(add_new(2), 4,
		'add_new() should add 2 to whatever you pass in.');

	ok(!x, 'x should not pollute the global scope.');
});


// Use one var statement per Function

(function myScript() {
	var x = true;
	var y = true;
	/* do some stuff with x and y */
	var z = true;
	/* do some stuff with z */
}());

(function myScript_new() {
	var x = true,
		y = true,
		z = true;
	/* do some stuff with x, y, and z */
}());