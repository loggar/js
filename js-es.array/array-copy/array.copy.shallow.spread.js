const array = ["a", "b", "c"];

const copyWithEquals = array; // Changes to array will change copyWithEquals
console.log(copyWithEquals === array); // true (The assignment operator did not make a copy)

const copyWithSpread = [...array]; // Changes to array will not change copyWithSpread
console.log(copyWithSpread === array); // false (The spread operator made a shallow copy)

array[0] = "x"; // Whoops, a bug

console.log(...array); // x b c
console.log(...copyWithEquals); // x b c
console.log(...copyWithSpread); // a b c
