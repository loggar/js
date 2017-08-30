var x = 1.000;
var y = 1.0001;

var xIsInt = x === Math.floor(x);
console.log(xIsInt);

var yIsInt = y === Math.floor(y);
console.log(yIsInt);


/* ES6 Number has isInteger static function */

Number.isInteger(4);                // true
Number.isInteger(4.2);            // false

Number.isInteger(NaN);            // false
Number.isInteger(Infinity);        // false