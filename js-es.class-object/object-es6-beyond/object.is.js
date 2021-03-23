var x = NaN,
  y = 0,
  z = -0;

x === x; // false
y === z; // true

Object.is(x, x); // true
Object.is(y, z); // false

Object.is(0, 0); // true
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(true, 1); // false
Object.is(+0, -0); // false
Object.is(NaN, NaN); // true
