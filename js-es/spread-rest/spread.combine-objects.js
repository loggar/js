const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const obj3 = { d: 4 };
// Combine them using the spread operator
const objCombined = { ...obj1, ...obj2, ...obj3 };
// Result: {'a': 1, 'b': 2, 'c': 3, 'd': 4}
