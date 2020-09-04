var a = Array(4).fill(undefined);
a;
// [undefined,undefined,undefined,undefined]


var b = [null, null, null, null].fill(42, 1, 3);
b;
// [null,42,42,null]