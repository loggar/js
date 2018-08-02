/*
 * What is the outcome of the two console.log functions below?
 * 
 */
(function () {
	var foo = "Hello";
	(function () {
		var bar = " world";

		console.log(foo + bar);
	})();

	console.log(foo + bar); // ReferenceError: bar is not defined
})();
