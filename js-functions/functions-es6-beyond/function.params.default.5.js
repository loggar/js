function luckyNumber(num = 11) {
  console.log(typeof num);
}

luckyNumber(); // prints: 'number' (num is set to 11)
luckyNumber(undefined); // prints: 'number' (num is set to 11 too)

// test with other falsy values:
luckyNumber(""); // prints: 'string' (num is set to '')
luckyNumber(null); // prints: 'object' (num is set to null)
