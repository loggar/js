const isTrue = !0;
const isFalse = !1;
const alsoFalse = !!0;
console.log(true); // Result: true
console.log(typeof true); // Result: "boolean"

console.log(!!23); // true
console.log(!!0); // false
console.log(!!""); // false
console.log(!!"a"); // true
console.log(!!{}); // true
console.log(!!null); // false
console.log(!!undefined); // false
