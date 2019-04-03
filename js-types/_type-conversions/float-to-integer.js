// Quick Float to Integer

console.log(23.9 | 0); // Result: 23
console.log(-23.9 | 0); // Result: -23

// Remove Final Digits
let str = '1553';
Number(str.substring(0, str.length - 1));

// Instead, the bitwise OR operator allows us to write:
console.log((1553 / 10) | 0); // Result: 155
console.log((1553 / 100) | 0); // Result: 15
console.log((1553 / 1000) | 0); // Result: 1
