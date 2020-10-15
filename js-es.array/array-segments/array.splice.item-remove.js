var a = [1, 2, 3, 4, 5, 6, 7, 8];

var i = 6;
var a1 = a.slice(0, i);
var a2 = a.slice(i + 1, a.length);

console.log(a1);
console.log(a2);

a = a1.concat(a2);

console.log(a);
