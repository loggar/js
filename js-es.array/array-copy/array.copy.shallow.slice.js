const array = ["a", "b", "c"];

const copyWithEquals = array; // Changes to array will change copyWithEquals
console.log(copyWithEquals === array); // true (The assignment operator did not make a copy)

const copyWithSlice = array.slice(); // Changes to array will not change copyWithSlice
console.log(copyWithSlice === array); // false (Using .slice() made a shallow copy of the array)

array[0] = "x"; // Whoops, a bug

console.log(...array); // x b c
console.log(...copyWithEquals); // x b c
console.log(...copyWithSlice); // a b c
