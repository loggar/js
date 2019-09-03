function newSum(x, y = 7, z = 42) {
  return `newSum(${x}) === ${x + y + z}`;
}
console.log(newSum(1)); // prints: newSum(1) === 50
console.log(newSum(3, 6, 9)); // prints: newSum(3) === 18
console.log(newSum(16, undefined)); // prints: newSum(16) === 65
