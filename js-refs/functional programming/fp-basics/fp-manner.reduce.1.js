/*
The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
*/

/*
First with for loop (imperative way)
*/

const arr = [10, 20, 30]
let total = 0;
for (let i = 0; i < arr.length; i++) {
	total += arr[i]
}
console.log(total);

/*
In Functional Manner (declarative way)
*/

const reducerFunction = (acc, currentItem) => acc + currentItem;
const sum = arr.reduce(reducerFunction, 0);
console.log(sum);
