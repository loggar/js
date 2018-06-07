const R = require('ramda');

//Curry Example:
const add = (a, b) => a + b;
const curriedAdd = R.curry(add);
const add10 = curriedAdd(10);//pass the 1st argument. Returns a function that takes 2nd (b) parameter.
//run function by passing 2nd argument
var test = add10(2) // -> 12 //internally runs "add" with 10 and 2.

console.log(test);


//CurryN Example:
const add2 = (...args) => R.sum(args);
const add3Numbers = R.curryN(3, add2);
const add5Numbers = R.curryN(5, add2);
const add10Numbers = R.curryN(10, add2);
var t1 = add3Numbers(1, 2, 3) // 6
var t2 = add3Numbers(1) // returns a function that takes 2 more params.
var t3 = add3Numbers(1, 2) // returns a function that take 1 more param.

console.log(t1);
console.log(t2);
console.log(t3);