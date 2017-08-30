var x = Math.pow(2, 53),
	y = Math.pow(-2, 53);

Number.isSafeInteger(x - 1);        // true
Number.isSafeInteger(y + 1);        // true

Number.isSafeInteger(x);            // false
Number.isSafeInteger(y);            // false
String