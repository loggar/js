// A BigInt is not strictly equal to a Number, but it is loosely so.

0n === 0;
// false

0n == 0;
// true

// Numbers and BigInts may be compared as usual.

1n < 2;
// true

2n > 1;
// true

2 > 2;
// false

2n > 2;
// false

2n >= 2;
// true

// They may be mixed in arrays and sorted.

const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
//  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort();
// [-12n, 0, 0n, 10, 4n, 4, 6]
