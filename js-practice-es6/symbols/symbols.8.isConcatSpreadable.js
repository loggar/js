var a = [1, 2, 3],
	b = [4, 5, 6];

b[Symbol.isConcatSpreadable] = false;

[].concat(a, b);        // [1,2,3,[4,5,6]]