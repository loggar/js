const logOperation = require("./array-imple-helper").logOperation;

const push = function(arr, v) {
  arr.push(v);
};

// Array.prototype.reverse
// [1, 2, 3].reverse(); // -> [3, 2, 1]
function reverse(array) {
  const result = [];

  const lastIndex = array.length - 1;

  for (let index = lastIndex; index > -1; index -= 1) {
    const value = array[index];
    result[lastIndex - index] = value;
  }

  return result;
}

logOperation("reverse", [1, 2, 3, 4, 5], array => reverse(array));
