// object
let o1 = {
  a: 'a',
  b: true,
  c: 1,
  d: /[a-z]{1,4}/
};

let o2 = o1;

o2.e = {
  e_1: 'e_1'
};

console.log(o1);

// array
let a1 = [1, 2, 3];
let a2 = a1;
a2.push(4, 5);

console.log(a1);
