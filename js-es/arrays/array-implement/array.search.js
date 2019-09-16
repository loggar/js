const logOperation = require("./array-imple-helper").logOperation;

// Array.prototype.findIndex
// [1, 2, 3, 4, 5, 6, 7].findIndex(value => value === 5); // 4
function findIndex(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      return index;
    }
  }

  return -1;
}

logOperation("findIndex", [1, 2, 3, 4, 5], array => findIndex(array, number => number === 3));

// Array.prototype.find
// [1, 2, 3, 4, 5, 6, 7].findIndex(value => value === 5); // 5
function find(array, callback) {
  const index = findIndex(array, callback);

  if (index === -1) {
    return undefined;
  }

  return array[index];
}

logOperation("find", [1, 2, 3, 4, 5], array => find(array, number => number === 3));

// Array.prototype.indexOf
// [3, 2, 3].indexOf(3); // -> 0
function indexOf(array, searchedValue) {
  return findIndex(array, value => value === searchedValue);
}

logOperation("indexOf", [1, 2, 3, 4, 5], array => indexOf(array, 3));

// Array.prototype.lastIndexOf
// [3, 2, 3].lastIndexOf(3); // -> 2
function lastIndexOf(array, searchedValue) {
  for (let index = array.length - 1; index > -1; index -= 1) {
    const value = array[index];

    if (value === searchedValue) {
      return index;
    }
  }

  return -1;
}

logOperation("lastIndexOf", [1, 2, 3, 4, 5, 3], array => lastIndexOf(array, 3));

// Array.prototype.every
// [1, 2, 3].every(value => Number.isInteger(value)); // -> true
function every(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (!callback(value, index, array)) {
      return false;
    }
  }

  return true;
}

logOperation("every", [1, 2, 3, 4, 5], array => every(array, number => Number.isInteger(number)));

// Array.prototype.some
// [1, 2, 3, 4, 5].some(number => number === 5); // -> true
function some(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      return true;
    }
  }

  return false;
}

logOperation("some", [1, 2, 3, 4, 5], array => some(array, number => number === 5));

// Array.prototype.includes
// [1, 2, 3].includes(3); // -> true
function includes(array, searchedValue) {
  return some(array, value => value === searchedValue);
}

logOperation("includes", [1, 2, 3, 4, 5], array => includes(array, 5));
