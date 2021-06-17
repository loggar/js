import R from "ramda"; // Import the entire ramda library
// import { clone } from "ramda" // Alternatively: Import just the clone methods from ramda

const nestedArray = [["a"], ["b"], ["c"]];
// This array is nested 1 level, though the behavior is the same with any degree of nesting

const notACopyWithEquals = nestedArray;
console.log(nestedArray[0] === notACopyWithEquals[0]); // true -- Not a copy (same reference)

const shallowCopyWithSpread = [...nestedArray];
console.log(nestedArray[0] === shallowCopyWithSpread[0]); // true -- Shallow copy (same reference)

const deepCopyWithRamdaClone = R.clone(nestedArray);
console.log(nestedArray[0] === deepCopyWithRamdaClone[0]); // false -- Deep copy (different reference)

// Try to change the reference for the 1st element, won't work for any copy
nestedArray[0] = "x";
// Try to change the nested reference for the 3rd element:
nestedArray[2][0] = "y";

console.log(...nestedArray); // x ["b"] ["y"]
console.log(...notACopyWithEquals); // x ["b"] ["y"]
console.log(...shallowCopyWithSpread); // ["a"] ["b"] ["y"]
console.log(...deepCopyWithRamdaClone); // ["a"] ["b"] ["c"]
