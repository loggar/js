/*
Performance with list transformers

A common pattern is to chain list transformers.
Although it makes complicated transformations easier to read it lacks in speed when dealing with very large arrays.
*/

let bigData = [];
for (let i = 0; i < 1000000; i++) {
	bigData[i] = i;
}
// Slow
let filterBegin = Date.now();
const filterMappedBigData = bigData
	.filter(value => value % 2 === 0)
	.map(value => value * 2);

let filterEnd = Date.now();
let filtertimeSpent = (filterEnd - filterBegin) / 1000 + "secs";
// Fast
let reducedBegin = Date.now();
const reducedBigData = bigData.reduce((acc, value) => {
	if (value % 2 === 0) {
		acc.push(value * 2);
	}
	return acc;
}, []);
let reducedEnd = Date.now();
let reducedtimeSpent = (reducedEnd - reducedBegin) / 1000 + " secs";
console.log("filtered Big Data:", filtertimeSpent);
console.log("reduced Big Data:", reducedtimeSpent);
