function createBase(baseNumber) {
  return function(n) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return n + baseNumber;
  };
}

var addSix = createBase(6);
var a = addSix(10); // returns 16
var b = addSix(21); // returns 27

console.log(a);
console.log(b);
