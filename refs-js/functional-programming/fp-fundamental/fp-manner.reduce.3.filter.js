/*
Implementing filter() with reduce()
*/

const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenWithFilter = data2.filter(item => {
	return item % 2 === 0;
})
const evenWithReduce = data2.reduce((acc, value) => {
	if (value % 2 === 0) {
		acc.push(value);
	}
	return acc;
}, []);

console.log(evenWithFilter, evenWithReduce);