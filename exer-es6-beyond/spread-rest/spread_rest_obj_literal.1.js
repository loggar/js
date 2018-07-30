var { a, b, c, ...x } = { a: 1, b: 2, c: 3, x: 4, y: 5, z: 6 };

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

console.log(x); // { x: 4, y: 5, z: 6 }