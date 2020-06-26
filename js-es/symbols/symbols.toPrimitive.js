var arr = [1, 2, 3, 4, 5];

arr + 10;                // 1,2,3,4,510

arr[Symbol.toPrimitive] = function (hint) {
	if (hint == "default" || hint == "number") {
		// sum all numbers
		return this.reduce(function (acc, curr) {
			return acc + curr;
		}, 0);
	}
};

arr + 10;                // 25