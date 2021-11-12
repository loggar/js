function appendNumber(arr, N) {
  arr.push(N);
  return arr;
}

console.log(appendNumber([1, 2, "three", 4, 5, true, false], 6).at(-1));
// Expected Output: 6

const arr = [1, 2, "three", 4, 5, true, false];
console.log(arr.at(0.6)); // Expected Output: 1
console.log(arr.at(-3.6)); // Expected Output: 5

const computerOptions = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * computerOptions.length);

console.log(computerOptions[randomIndex]);
