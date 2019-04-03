const x = Number.MAX_SAFE_INTEGER;
// 9007199254740991, this is 1 less than 2^53

const y = x + 1;
// 9007199254740992, ok, checks out

const z = x + 2;
// 9007199254740992, wait, that’s the same as above!

const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n

const hugeButString = BigInt("9007199254740991");
// 9007199254740991n
