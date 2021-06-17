const clone = require("rfdc")(); // Returns the deep copy function

const arr = [
  { a: 37, b: { c: 3700 } },
  { a: 1, b: { c: 2 } },
];

const deepCopied = clone(arr);

console.log(deepCopied);
console.log(arr === deepCopied);
console.log(arr[0].b === deepCopied[0].b);
