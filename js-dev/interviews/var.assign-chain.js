(function() {
  var a = (b = 3);
})();

console.log(typeof a);
console.log(b, typeof b);

/*
var a = b = 3 is equivalent to b = 3; var a = b;
*/