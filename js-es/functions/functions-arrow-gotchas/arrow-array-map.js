// be careful with using object-literal in arrow function expressions.

const numbers = [1, 2, 3, 4];

const a = numbers.map(n => {
  value: n;
});
console.log(a); // [ undefined, undefined, undefined, undefined ]

const b = numbers.map(n => ({ value: n }));
console.log(b); // [ { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 } ]
