// caution : 
var obj = {
	value: 2
};

function setValue(obj, value) {
	obj.value = value;
	return obj;
}

test('setValue() with side effects', function () {
	var myObj = setValue(obj, 3);

	equal(myObj.value, 3,
		'setValue() returns new value.');

	equal(obj.value, 2,
		'The original should be unchanged.'
	); // Fails
});

// better : 
var obj = {
	value: 2
};

function setValue(obj, value) {
	// Note: extend() is jQuery.extend(),
	// Underscore .extend(), or similar...
	var instance = extend({}, obj);

	return instance;
}

test('setValue() without side effects', function () {
	var myObj = setValue(obj, 3);

	equal(myObj.value, 3,
		'setValue() should return new value.');

	equal(obj.value, 2,
		'The original is should be unchanged!'); // Passes
});