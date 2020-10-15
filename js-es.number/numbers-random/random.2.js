let min = 1;
let max = 10;
min = Math.ceil(min);
max = Math.floor(max);
const num = Math.floor(Math.random() * (max - min)) + min; // between 1 inclusive and 10 exclusive.

console.log(num);
