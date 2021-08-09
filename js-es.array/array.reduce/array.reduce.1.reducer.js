// Fold / Reduce
// If a default value is not supplied to reduce,
// then reducing an empty list will produce a TypeError at runtime
let total = numbers.reduce((acc, n) => acc + n, 0);

// Joining string representations of items
let joined = items.reduce((left, right) => left + '/' + right, '');

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15