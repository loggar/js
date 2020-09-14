function multiply(a, b) {
  if (b === undefined) {
    b = 2;
  }
  a; // => 5
  b; // => 2
  return a * b;
}
multiply(5); // => 10
