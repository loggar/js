/*
Flattening data with reduce
*/

const letterArr = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
const flattened = letterArr.reduce((acc, val) => {
	return acc.concat(val);
}, []);
console.log(flattened);
