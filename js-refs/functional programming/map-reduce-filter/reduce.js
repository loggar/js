var arr = [[1, 2], [3, 4], [5, 6]];
var flattenedArray = arr.reduce((accumulator, currentValue) => {
	return accumulator.concat(currentValue);
}, []); // returns [1, 2, 3, 4, 5, 6]