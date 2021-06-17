const array = ["a", "b", "c"];

const copyWithEquals = array; // Changes to array will change copyWithEquals
const copyWithAssign = []; // Changes to array will not change copyWithAssign
Object.assign(copyWithAssign, array); // Object.assign(target, source)

array[0] = "x"; // Whoops, a bug

console.log(...array); // x b c
console.log(...copyWithEquals); // x b c
console.log(...copyWithAssign); // a b c
