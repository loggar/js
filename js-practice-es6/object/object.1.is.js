var x = NaN, y = 0, z = -0;

x === x;                            // false
y === z;                            // true

Object.is(x, x);                    // true
Object.is(y, z);                    // false