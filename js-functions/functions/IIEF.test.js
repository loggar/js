var fn1 = (function() {
  var a = "value a";
  var b = function b() {
    return "value b";
  };

  return {
    a: a,
    b: b
  };
})();

console.log(fn1.a);
console.log(fn1.b());
console.log(fn1);

var fn2 = (function() {
  var a = "value a";
  const b = function b() {
    return "value b";
  };

  // b = function d() {};

  return {
    a: a,
    b: b
  };
})();

console.log(fn2.a);
console.log(fn2.b());
console.log(fn2);
console.log((fn2.b = function c() {}));
console.log(fn2);
