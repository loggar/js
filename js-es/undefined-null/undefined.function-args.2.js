function multiply(a, b = 2) {
  a; // => 5
  b; // => 2
  return a * b;
}
multiply(5); // => 10
multiply(5, undefined); // => 10
