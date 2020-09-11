let a = { a: 1 };
let b = { a: 1 };
let c = a;

console.log(a === b); // logs false even though they have the same property
console.log(a === c); // logs true
