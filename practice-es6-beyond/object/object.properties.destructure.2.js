var o1 = { b: 2, c: 3, d: 4 };
var { b, ...o2 } = o1;

console.log(b, o2.c, o2.d);        // 2 3 4