(function () {
	function fib(n, sum = 0, prev = 1) {
		if (n <= 1) return sum;
		return fib(n - 1, prev + sum, sum);
	}
	console.log(fib(20000));
})();

/*
The above is a tail recursive function. It does not need to hold onto its stack frame

This might seem a little hard to follow, but it is really quite simple.
fib is nothing more than a function that adds two numbers and then passes through that sum (to be used as the next N-1) to the next iteration, along with the number it just added (the next N-2) and the number of iterations left to run.

It is tail recursive because the return statement consists solely of a call to itself, passing along all information that it needs with it.
Therefore, the javascript engine optimized for tail recursion can dump that frame before pushing on the new one.
*/
