const logOperation = require("./array-imple-helper").logOperation;

const { map, reduce } = require("./array.iterate");
const { concat } = require("./array.concat");

// Array.prototype.flat
// [1, 2, 3, [4, 5, [6, 7, [8]]]].flat(1); // -> [1, 2, 3, 4, 5, [6, 7, [8]]]
// [1, 2, 3, [4, 5]].flat(1) // -> [1, 2, 3, 4, 5]
function flat(array, depth = 0) {
  if (depth < 1 || !Array.isArray(array)) {
    return array;
  }

  return reduce(
    array,
    (result, current) => {
      return concat(result, flat(current, depth - 1));
    },
    []
  );
}

logOperation("flat", [1, 2, 3, [4, 5, [6]]], array => flat(array, 2));

// Array.prototype.flat
// [1, 2, 3].flatMap(value => [value, value, value]); // [1, 1, 1, 2, 2, 2, 3, 3, 3]
function flatMap(array, callback) {
  return flat(map(array, callback), 1);
}

logOperation("flatMap", [1, 2, 3], array => flatMap(array, number => [number, number]));
