const shallowEqualArrays = require("../array-equals/array.equals.shallow");

function logOperation(operationName, array, callback) {
  const input = [...array];
  const result = callback(array);

  console.log({
    operation: operationName,
    arrayBefore: input,
    arrayAfter: array,
    mutates: mutatesArray(input, array), // shallow check
    result
  });
}

function mutatesArray(src, arr) {
  return !shallowEqualArrays(src, arr);
}

module.exports = { logOperation };
