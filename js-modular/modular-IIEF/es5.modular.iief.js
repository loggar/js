var module1 = {
  a: 1,
  b: "b",
  c: function () {},
};

var module2 = (function () {
  var a = 1;
  var b = "b";
  var c = function () {};

  return {
    a: a,
    b: b,
    c: c
  }
})(); // IIFE (js function closure)
