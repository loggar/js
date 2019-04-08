// Access global array constructor
let a = globalThis.Array(0, 1, 2);
console.log(a);

// Similar to window.v = { flag: true } in <= ES5
globalThis.v = { flag: true };

console.log(globalThis.v);
