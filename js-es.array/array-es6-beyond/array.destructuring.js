const arr = [1, 2, 3, 4, 5, 6];
const [a, b, c, ...remaining] = arr;

console.log(remaining);
// [4,5,6]
