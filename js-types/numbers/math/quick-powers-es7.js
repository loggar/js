console.log(2 ** 3); // Result: 8

// before es7
console.log(Math.pow(2, 3));

// Before ES7, shorthand existed only for powers with base 2, using the bitwise left shift operator << :
// For example, 2 << 3 = 16 is equivalent to 2 ** 4 = 16 .

// The following expressions are equivalent:
Math.pow(2, n);
2 << (n - 1);
2 ** n;
