/*
Sum all the values of an array
*/

var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
	return accumulator + currentValue;
}, 0);
// sum is 6

var total = [0, 1, 2, 3].reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	0
);

/*
Flatten an array of arrays
*/

var flattened1 = [[0, 1], [2, 3], [4, 5]].reduce(
	function (accumulator, currentValue) {
		return accumulator.concat(currentValue);
	},
	[]
);
// flattened is [0, 1, 2, 3, 4, 5]


var flattened2 = [[0, 1], [2, 3], [4, 5]].reduce(
	function (accumulator, currentValue) {
		return accumulator.concat(currentValue);
	},
	[]
);// flattened is [0, 1, 2, 3, 4, 5]
