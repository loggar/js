const view = new BigInt64Array(4);
// [0n, 0n, 0n, 0n]
view.length;
// 4
view[0];
// 0n
view[0] = 42n;
view[0];
// 42n

// Highest possible BigInt value that can be represented as a
// signed 64-bit integer.
const max = 2n ** (64n - 1n) - 1n;
view[0] = max;
view[0];
// 9_223_372_036_854_775_807n
view[0] = max + 1n;
view[0];
// -9_223_372_036_854_775_808n
//   ^ negative because of overflow