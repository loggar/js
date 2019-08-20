// Array with Empty Slots
const missingNumbers = [1, , 3, , 5];
missingNumbers.flat();
// [1, 3, 5];

// Alternative: ES6
const oneLevelDeep = [[1, 2], [3]];
const flattened = [].concat(...oneLevelDeep);
// [1, 2, 3,]

// Alternative: Older Browser
const oneLevelDeep = [[1, 2], [3]];
const flattened = [].concat.apply([], oneLevelDeep);
// [1, 2, 3,]

// Alternative: Recursion
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
function flattenDeep(arr1) {
  return arr1.reduce((acc, val) => (Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val)), []);
}
flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
