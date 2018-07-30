var arr = [4, 5, 6, 7, 8, 9];

for (var v of arr) {
	console.log(v);
}
// 4 5 6 7 8 9

// define iterator that only produces values
// from odd indexes
arr[Symbol.iterator] = function* () {
	var idx = 1;
	do {
		yield this[idx];
	} while ((idx += 2) < this.length);
};

for (var v of arr) {
	console.log(v);
}
// 5 7 9