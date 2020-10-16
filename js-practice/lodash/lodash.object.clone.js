const clone = require("lodash.clone");

var objA = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

var objB = clone(objA);

objA.b.c = 30;

console.log(objA);
// { a: 1, b: { c: 30, d: { e: 3 } } }

console.log(objB);
// { a: 1, b: { c: 30, d: { e: 3 } } }
