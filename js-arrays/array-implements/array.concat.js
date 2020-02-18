const logOperation = require("./array-imple-helper").logOperation;

const push = function(arr, v) {
  arr.push(v);
};

// Array.prototype.concat
// [1, 2, 3].concat([4, 5], 6, [7, 8]) // -> [1, 2, 3, 4, 5, 6, 7, 8]
function concat(array, ...values) {
  const result = [...array];
  const { length } = values;

  for (let index = 0; index < length; index += 1) {
    const value = values[index];

    if (Array.isArray(value)) {
      push(result, ...value);
    } else {
      push(result, value);
    }
  }

  return result;
}

logOperation("concat", [1, 2, 3, 4, 5], array => concat(array, 1, 2, [3, 4]));

module.exports = { concat };
