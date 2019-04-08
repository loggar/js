

(function wrapperFunction() {
	console.log("Executing in the Wrapper Function");
	function functionA(a, b, c) {
		console.log("Executing in Function A");
		return functionC(10, 11);  //Now a tail-call
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

// The invocation of functionC from within functionA is now a tail call

// In the example above, the return statement of functionA is a call to functionC.
// Programmatically, this means that there is no need to return to functionA after the completion of functionC since all we want to do is return the value.
// Therefore, the optimizer will pop off the functionA frame and push the functionC frame with a return address to wrapperFunction.
// The return address is the crucial thing to note here. Without TCO, the return address would be functionA, meaning that we would not be able to drop that stack frame.
// By including the return address to wrapperFunction, however, we can safely drop the functionA frame and the program will run as intended.