(function wrapperFunction() {
	console.log("Executing in the Wrapper Function");
	function functionA(a, b, c) {
		console.log("Executing in Function A");
		functionC(10, 11);
		return;
	}
	function functionB(d, e, f) {
		console.log("Executing in Function B");
		return;
	}
	function functionC(g, h) {
		console.log("Executing in Function C");
		return;
	}
	functionA(20, 40, 60);
	functionB(15, 25, 35);
	functionC(17, 22, 27);
})();