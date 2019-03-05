let s1 = function() {
  console.log('Hello there.');
}.toString();
console.log(s1);

// Directly from function name:
console.log(Number.parseInt);
console.log(Number.parseInt.toString());

// With bound context:
let s2 = function() {}.bind(0).toString();
console.log(s2);

// Built-in callable function object:
console.log(Symbol.toString());

// Dynamically-generated function:
console.log(Function().toString());

// Dynamically-generated generator function*:
console.log(function*() {}.toString());

// prototype.toString
console.log(Function.prototype.toString.call({}));
