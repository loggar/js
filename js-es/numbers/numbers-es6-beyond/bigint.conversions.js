console.log(10n === BigInt(10));

console.log(10n == 10);

console.log(typeof (200n / 10n));

// 200n / 20; // TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log(-100n);

// +100n; // TypeError: Cannot convert a BigInt value to a number
