1n + 2;
// TypeError: Cannot mix BigInt and other types, use explicit conversions

1n * 2 +
  // TypeError: Cannot mix BigInt and other types, use explicit conversions

  1n;
// TypeError: Cannot convert a BigInt value to a number

Number(1n);
// 1

1n + "2";
// "12"

"2" + 1n;
// "21"

const largeFriend = 900719925474099267n;
const alsoLarge = largeFriend + 2n;

const sendMeTheBiggest = (n, m) => Math.max(Number(n), Number(m));

sendMeTheBiggest(largeFriend, alsoLarge);
// 900719925474099300  // This is neither argument!
