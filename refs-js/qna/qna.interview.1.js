/**
 * http://usejsdoc.org/
 */

/*
 * What is value of foo? var foo = 10 + '20';
 * 
 */
function qna_001() {
	var foo = 10 + '20';

	console.log(foo); /* "1020" */
	console.log(typeof foo); /* string */
}

/*
 * How would you make this work? add_01(2, 5); // 7 add_02(2)(5); // 7
 * 
 */
var add_01 = function(x, y) {
	return x + y;
};

var add_02 = function(x) {
	return function(y) {
		return x + y;
	};
};

function qna_002() {
	console.log(add_01(2, 5));
	console.log(add_02(2)(5));
}

/*
 * What value is returned from the following statement? "i'm a lasahna hog".split("").reverse().join("");
 * 
 */
function qna_003() {
	var data = "i'm a lasahna hog".split("").reverse().join("");

	console.log(data); /* "goh anhasal a m'i" */
}

/*
 * What is the outcome of the two alerts below?
 * 
 */
function qna_005() {
	var foo = "Hello";
	(function() {
		var bar = " world";

		console.log(foo + bar);
	})();

	// alert(foo + bar); /* Uncaught ReferenceError: bar is not defined */
}

/*
 * What is the value of foo.length?
 * 
 */
function qna_006() {
	var foo = [];
	foo.push(1);
	foo.push(2);

	console.log(foo.length); /* 2 */
}

/*
 * What is the value of foo.x?
 * 
 */
function qna_007() {
	var foo = {
		n : 1
	};

	var bar = foo;

	foo.x = foo = {
		n : 2
	};

	console.log(foo.x); /* undefined */
	console.log(foo); /* Object {n: 2} */
	console.log(bar); /* Object {n: 1, x: Object} */
}

/*
 * make this work duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
 */
Array.prototype.duplicate = function() {
	var arr = this;
	return this.push.apply(arr, arr);
};

function qna_008() {
	var arr = [ 1, 2, 3, 4, 5 ];

	arr.duplicate();

	console.log(arr.toString());
}

/*
 * test
 */
qna_001();
qna_002();
qna_003();
qna_005();
qna_006();
qna_007();
qna_008();
