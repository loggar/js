var memorize = require("./memorize.1");

// function Greatest Common Divisor of two integers.
function gcd(a, b) {
    var t;
    if (a < b) t = b, b = a, a = t;
    while (b != 0) t = b, b = a % b, a = t;
    return a;
}

var gcd_memorize = memorize(gcd);
console.log(gcd_memorize(85, 187));
console.log(gcd_memorize(85, 187));