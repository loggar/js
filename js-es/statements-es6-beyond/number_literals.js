/* ES6 number literal forms */

var dec = 42,
	oct = 0o52,         // or `0O52` :(
	hex = 0x2a,         // or `0X2a` :/
	bin = 0b101010;     // or `0B101010` :/


/* equivalent  */

Number("42");            // 42
Number("0o52");        // 42
Number("0x2a");        // 42
Number("0b101010");    // 42


/* the opposite direction of conversion */

var a = 42;

a.toString();            // "42" -- also `a.toString( 10 )`
a.toString(8);        // "52"
a.toString(16);        // "2a"
a.toString(2);        // "101010"