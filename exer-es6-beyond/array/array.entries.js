/* entries(), values(), keys() Prototype Methods */

var a = [1,2,3];

// [...a.values()];                    // [1,2,3]
// TypeError: a.values is not a function

[...a.keys()];                        // [0,1,2]
[...a.entries()];                    // [ [0,1], [1,2], [2,3] ]

[...a[Symbol.iterator]()];            // [1,2,3]




var b = [];
b.length = 3;
b[1] = 2;

// [...b.values()];        // [undefined,2,undefined]
// TypeError: b.values is not a function

[...b.keys()];            // [0,1,2]
[...b.entries()];        // [ [0,undefined], [1,2], [2,undefined] ]