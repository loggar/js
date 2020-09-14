const getType = function funName(variable) {
  console.log(typeof funName === "function"); // => true
  return typeof variable;
};
console.log(getType(3)); // => 'number'
console.log(getType.name); // => 'funName'

console.log(typeof funName); // => 'undefined'
