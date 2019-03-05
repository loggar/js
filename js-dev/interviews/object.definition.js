/*
 * What is the value of foo.x?
 * 
 */
(function () {
	var foo = {
		n: 1
	};

	var bar = foo;

	foo.x = foo = {
		n: 2
	};

	console.log(foo.x); // undefined
	console.log(foo); // { n: 2 }
	console.log(bar); // { n: 1, x: { n: 2 } }
})();
