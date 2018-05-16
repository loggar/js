/*
Implementing map() with reduce()
*/

const data = [10, 20, 30];
const tripledWithMap = data.map(item => {
	return item * 3;
});

const tripledWithReduce = data.reduce((acc, value) => {
	acc.push(value * 3);
	return acc;
}, []);

console.log(tripledWithMap, tripledWithReduce);
