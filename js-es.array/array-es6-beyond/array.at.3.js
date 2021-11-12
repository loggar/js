const arr = {
  0: 1,
  1: 2,
  3: "three",
  "-1": "valid",
  // ...
};

console.log(arr[0]); // Expected Output: 1
console.log(arr[-1]); // Expected Output: valid

const arr2 = [1, 2, 3, 4];
console.log(arr2[-1]); // undefined

console.log(arr2.at(-1)); // 4
