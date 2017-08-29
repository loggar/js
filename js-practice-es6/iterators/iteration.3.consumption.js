var a = [1, 2, 3, 4, 5];

var it = a[Symbol.iterator]();

var [x, y] = it;            // take just the first two elements from `it`
var [z, ...w] = it;        // take the third, then the rest all at once

// is `it` fully exhausted? Yep.
it.next();                // { value: undefined, done: true }

x;                        // 1
y;                        // 2
z;                        // 3
w;                        // [4,5]