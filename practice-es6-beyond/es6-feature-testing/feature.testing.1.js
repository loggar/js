if (!Number.isNaN) {
	Number.isNaN = function (x) {
		return x !== x;
	};
}