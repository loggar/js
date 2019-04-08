// string
let s1 = 's1';
let s2 = s1;
s2 = 's2';
console.log('s1', s1);
console.log('s2', s2);

// regex
let r1 = /[a-z]{0,4}/;
let r2 = r1;
r2 = /[0-9]{0,4}/;
console.log('r1', r1);
console.log('r2', r2);

// number
let n1 = 1;
let n2 = n1;
n2 = 2;
console.log('n1', n1);
console.log('n2', n2);

// boolean, undefined, null
let b1 = true;
let b2 = b1;
let b3 = b1;
let b4 = b1;
b2 = false;
b3 = undefined;
b4 = null;

console.log('b1', b1);
console.log('b2', b2);
console.log('b3', b3);
console.log('b4', b4);
