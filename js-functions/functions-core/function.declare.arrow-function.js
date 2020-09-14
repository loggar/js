// Arrow function
const absValue = (number) => {
  if (number < 0) {
    return -number;
  }
  return number;
};
absValue(-10); // => 10
absValue(5); // => 5

// Short callbacks
const numbers = [1, 5, 10, 0];
numbers.some((item) => item === 0); // => true
