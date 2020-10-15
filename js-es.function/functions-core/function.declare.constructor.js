// Function constructor (avoid to use)
const numberA = "numberA",
  numberB = "numberB";
const sumFunction = new Function(numberA, numberB, "return numberA + numberB");
sumFunction(10, 15); // => 25

(function () {
  "use strict";
  const global = new Function("return this")();
  console.log(global === window); // => true
  console.log(this === window); // => false
})();
