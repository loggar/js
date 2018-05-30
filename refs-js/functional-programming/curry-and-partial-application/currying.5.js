/*
Let’s refactor the max function so that it won’t reference any arguments.
*/

arr = [2, 4, 6, 8, 9]
// LEAVE BE:
const getMax = (x, y) => {
	return x >= y ? x : y;
};

// REFACTOR THIS ONE:
const max = (arr) => {
	return arr.reduce((acc, x) => {
		return getMax(acc, x);
	}, -Infinity);
};
const max = arr.reduce(getMax, -Infinity)


/*
Let’s wrap the native JS slice method so that it functional and curried.
*/

import _ from "lodash"
const arr = ["barney", "fred", "dave"]
arr.slice(0, 2) // ["barney", "fred"]
const slice = _.curry((start, end, arr) => arr.slice(start, end));
const sliceWithSetIndexes = slice(0, 2)

sliceWithSetIndexes(arr) // ["barney", "fred"]