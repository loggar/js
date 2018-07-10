function fib(n) {
	if (n < 2) {
		return n;
	}

	var n0 = 0;
	var n1 = 1;
	var r = 0;

	for (var i = 2; i <= n; i++) {
		r = n0 + n1;
		n0 = n1;
		n1 = r;
	}

	return r;
}

console.log(fib(10));