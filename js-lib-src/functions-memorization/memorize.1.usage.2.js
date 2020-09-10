var memorize = require("./memorize.1");

var factorial = memorize(function (n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
});

console.log(factorial(9));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(9));