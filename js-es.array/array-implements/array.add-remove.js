const logOperation = require("./array-imple-helper").logOperation;

const { concat } = require("./array.concat");

// Array.prototype.push
// [1, 2, 3, 4].push(5); // -> [1, 2, 3, 4, 5]
function push(array, ...values) {
  const { length: arrayLength } = array;
  const { length: valuesLength } = values;

  for (let index = 0; index < valuesLength; index += 1) {
    array[arrayLength + index] = values[index];
  }

  return array.length;
}

logOperation("push", [1, 2, 3, 4, 5], array => push(array, 6, 7));

// Array.prototype.pop
// [1, 2, 3].pop(); // -> 3
function pop(array) {
  const value = array[array.length - 1];

  array.length = array.length - 1;

  return value;
}

logOperation("pop", [1, 2, 3, 4, 5], array => pop(array));

// Array.prototype.shift
// [1, 2, 3].shift(); // -> 1
function shift(array) {
  const { length } = array;
  const firstValue = array[0];

  for (let index = 1; index < length; index += 1) {
    const value = array[index];
    array[index - 1] = value;
  }

  array.length = length - 1;

  return firstValue;
}

logOperation("shift", [1, 2, 3, 4, 5], array => shift(array));

// Array.prototype.unshift
// [2, 3, 4].unshift(1); // -> [1, 2, 3, 4]
function unshift(array, ...values) {
  const mergedArrays = concat(values, ...array);
  const { length: mergedArraysLength } = mergedArrays;

  for (let index = 0; index < mergedArraysLength; index += 1) {
    const value = mergedArrays[index];
    array[index] = value;
  }

  return array.length;
}

logOperation("unshift", [1, 2, 3, 4, 5], array => unshift(array, 0));

// Array.prototype.slice
// [1, 2, 3, 4, 5, 6, 7].slice(3, 6); // -> [4, 5, 6]
function slice(array, startIndex = 0, endIndex = array.length) {
  const result = [];

  for (let index = startIndex; index < endIndex; index += 1) {
    const value = array[index];

    if (index < array.length) {
      push(result, value);
    }
  }

  return result;
}

logOperation("slice", [1, 2, 3, 4, 5], array => slice(array, 1, 3));

// Array.prototype.splice
// [1, 2, 3, 4, 5].splice(0, 2, 3, 4, 5); // -> [3, 4, 5, 3, 4, 5]
function splice(array, insertAtIndex, removeNumberOfElements, ...values) {
  const firstPart = slice(array, 0, insertAtIndex);
  const secondPart = slice(array, insertAtIndex + removeNumberOfElements);

  const removedElements = slice(array, insertAtIndex, insertAtIndex + removeNumberOfElements);

  const joinedParts = firstPart.concat(values, secondPart);
  const { length: joinedPartsLength } = joinedParts;

  for (let index = 0; index < joinedPartsLength; index += 1) {
    array[index] = joinedParts[index];
  }

  array.length = joinedPartsLength;

  return removedElements;
}

logOperation("splice", [1, 2, 3, 4, 5], array => splice(array, 1, 3));

// Array.prototype.fill
// [...Array(5)].fill(null) // -> [null, null, null, null, null]
function fill(array, value, startIndex = 0, endIndex = array.length) {
  for (let index = startIndex; index < endIndex; index += 1) {
    array[index] = value;
  }

  return array;
}

logOperation("fill", [...new Array(5)], array => fill(array, 0));
