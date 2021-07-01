let a = [1, 2, 3];
let b = [2, 3, 4];

let c = [...new Set([...a, ...b])];

console.log(c);
