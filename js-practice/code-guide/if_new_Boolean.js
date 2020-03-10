/* #falsy valuse
false
0
undefined
null
empty string
*/

/* #true valuse
true
1
'string'
{}
[]
new Boolean(false);
*/

// wrong :
var myBool = new Boolean(false);

test('Boolean object', function () {
	ok(!myBool, 'Should be falsy'); // Fails

	ok(!myBool.valueOf(),
		'Should be falsy.'); // Passes
});

// right :
var myBool = false;

test('Boolean object', function () {
	ok(!myBool, '!myBool should be false.');
});

// boolean samples :

function truthy(x) {
	if (x) {
		return true;
	} else {
		return false;
	}
}

test('Truthy', function () {
	// Falsy
	equal(truthy(0), true, 'truthy(0)'); // Fail
	equal(truthy(''), true, "truthy('')"); // Fail
	equal(truthy(null), true, 'truthy(null)'); // Fail
	equal(truthy(undefined), true, 'truthy(undefined)'); // Fail
	equal(truthy(false), true, 'truthy(false)'); // Fail

	// Truthy
	equal(truthy('0'), true, "truthy('0')"); // Pass
	equal(truthy(new Boolean(false)), true, 'truthy(new Boolean(false))'); // Pass
	equal(truthy({}), true, 'truthy({})'); // Pass
	equal(truthy([]), true, 'truthy([])'); // Pass
	equal(truthy([0]), true, 'truthy([0])'); // Pass
	equal(truthy([1]), true, 'truthy([1])'); // Pass
	equal(truthy(['0']), true, "truthy(['0'])"); // Pass
	equal(truthy(['1']), true, "truthy(['1'])"); // Pass
});

// use exist, not boolean for test existence.
function exists(x) {
	if (x !== undefined && x !== null) {
		return true;
	} else {
		return false;
	}
}
// or
function exists(x) {
	return (x !== undefined && x !== null);
}

test('exists', function () {
	// Falsy
	equal(exists(0), true, 'exists(0)'); // Pass
	equal(exists(''), true, "exists('')"); // Pass
	equal(exists(null), true, 'exists(null)');
	equal(exists(undefined), true, 'exists(undefined)');
	equal(exists(false), true, 'exists(false)'); // Pass

	// Truthy
	equal(exists('0'), true, "exists('0')"); // Pass
	equal(exists(new Boolean(false)), true, 'exists(new Boolean(false))'); // Pass
	equal(exists({}), true, 'exists({})'); // Pass
	equal(exists([]), true, 'exists([])'); // Pass
	equal(exists([0]), true, 'exists([0])'); // Pass
	equal(exists([1]), true, 'exists([1])'); // Pass
	equal(exists(['0']), true, "exists(['0'])"); // Pass
	equal(exists(['1']), true, "exists(['1'])"); // Pass
});

// use '===' :

// wrong : 
var isFalse = function isFalse(x) {
	return (x == false);
};

test('isFalse using ==', function () {
	// Falsy
	equal(isFalse(0), true, 'isFalse(0)'); // Pass
	equal(isFalse(''), true, "isFalse('')"); // Pass
	equal(isFalse(null), true, 'isFalse(null)'); // Fail
	equal(isFalse(undefined), true, 'isFalse(undefined)'); // Fail
	equal(isFalse(false), true, 'isFalse(false)'); // Pass


	// Truthy
	equal(isFalse('0'), true, "isFalse('0')"); // Pass
	equal(isFalse(new Boolean(false)), true,
		'isFalse(new Boolean(false))'); // Pass
	equal(isFalse({}), true, 'isFalse({})'); // Fail
	equal(isFalse([]), true, 'isFalse([])'); // Pass
	equal(isFalse([0]), true, 'isFalse([0])'); // Pass
	equal(isFalse([1]), true, 'isFalse([1])'); // Fail
	equal(isFalse(['0']), true, "isFalse(['0'])"); // Pass
	equal(isFalse(['1']), true, "isFalse(['1'])"); // Fail
});

// right :
var isFalse = function isFalse(x) {
	return (x === false);
};

// dangerous : 
var isTrue = function isTrue(x) {
	return (x == true);
};

// check function
if (typeof foo.bar === 'function') {
	foo.bar();
}

