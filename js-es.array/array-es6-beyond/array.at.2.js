function appendNumber(arr, N) {
  arr.push(N);
  return arr;
}

const tempArr = appendNumber([1, 2, "three", 4, 5, true, false], 6);
console.log(tempArr[tempArr.length - 1]); // Expected Output: 6

const arr = [1, 2, "three", 4, 5, true, false];

console.log(arr.slice(-1)[0]); // Expected Output: false
