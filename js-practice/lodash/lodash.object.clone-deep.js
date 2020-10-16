const cloneDeep = require("lodash.clonedeep");

let objA = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

// copy objA save as new variable objB
let objB = cloneDeep(objA);

// change the values in the original object objA
objA.a = 20;
objA.b.c = 30;
objA.b.d.e = 40;

console.log(JSON.stringify(objA));
// → {"a":20,"b":{"c":30,"d":{"e":40}}}

// objB which is the cloned object is still the same
console.log(JSON.stringify(objB));
// → {"a":1,"b":{"c":2,"d":{"e":3}}}
