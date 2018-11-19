function fib(n) {
	if (n <= 0) return 0;
	if (n === 1 || n === 2) return 1;
	return fib(n - 1) + fib(n - 2);
}
console.log(fib(20000)); //ERROR: maximum call stack size exceeded

// This is NOT a tail recursive function. It must hold a stack frame for each call.