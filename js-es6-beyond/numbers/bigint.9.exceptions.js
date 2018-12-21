BigInt(1.5);
// RangeError: The number 1.5 is not a safe integer and thus cannot be converted to a BigInt

BigInt("1.5");
// SyntaxError: Cannot convert 1.5 to a BigInt

Math.round(1n);
// TypeError: Cannot convert a BigInt value to a number

Math.max(1n, 10n);
// TypeError: Cannot convert a BigInt value to a number

1n | 0;
// TypeError: Cannot mix BigInt and other types, use explicit conversions

parseFloat(1234n);
// 1234

parseInt(10n);
// 10

// precision lost!
parseInt(900719925474099267n);
// 900719925474099300

const bigObj = { a: BigInt(10n) };
JSON.stringify(bigObj);
// TypeError: Do not know how to serialize a BigInt
