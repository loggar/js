// for encapsulate scope, IIEF
(function () {
  // Some code here.
})();

(function messageFunction(message) {
  return message + " World!";
})("Hello");

// for callbacks
setTimeout(function () {
  console.log("Hello world!");
}, 1000);

// for handlers
const arr = [1, 2, 3];
const double = arr.map(function (el) {
  return el * 2;
});
console.log(double); // [2, 4, 6]

// Anonymous function expression
const isTruthy = function (value) {
  return !!value;
};

// Function names
console.log(
  function (variable) {
    return typeof variable;
  }.name
);

const myFunctionVar = function (variable) {
  return typeof variable;
};

console.log(myFunctionVar.name);
