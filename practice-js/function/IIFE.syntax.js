// Javascript syntax 101: function declaration.
var f = function foo() { return "ok"; }

// IIEF
var a = (function () { return "ok"; })();

// another syntax
var b = !function () { return "ok"; }();

console.log(a);
console.log(b);

// b cannot have any meaningful return value.
