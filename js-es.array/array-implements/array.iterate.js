const logOperation = require("./array-imple-helper").logOperation;

const push = function(arr, v) {
  arr.push(v);
};

// Array.prototype.forEach
// [1, 2, 3, 4, 5].forEach(value => console.log(value));
function forEach(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];
    callback(value, index, array);
  }
}

logOperation("forEach", [1, 2, 3, 4, 5], array => forEach(array, value => console.log(value)));

// Array.prototype.map
// [1, 2, 3].map(number => number * 5);
function map(array, callback) {
  const result = [];
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    result[index] = callback(value, index, array);
  }

  return result;
}

logOperation("map", [1, 2, 3, 4, 5], array => map(array, value => value + 5));

// Array.prototype.filter
// [1, 2, 3, 4, 5].filter(number => number >= 3);
function filter(array, callback) {
  const result = [];

  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      push(result, value);
    }
  }

  return result;
}

logOperation("filter", [1, 2, 3, 4, 5], array => filter(array, value => value >= 2));

// Array.prototype.reduce
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((sum, number) => sum + number, 0);
function reduce(array, callback, initValue) {
  const { length } = array;

  let acc = initValue;
  let startAtIndex = 0;

  if (initValue === undefined) {
    acc = array[0];
    startAtIndex = 1;
  }

  for (let index = startAtIndex; index < length; index += 1) {
    const value = array[index];
    acc = callback(acc, value, index, array);
  }

  return acc;
}

logOperation("reduce", [1, 2, 3, 4, 5], array => reduce(array, (sum, number) => sum + number, 0));

module.exports = { map, reduce };
