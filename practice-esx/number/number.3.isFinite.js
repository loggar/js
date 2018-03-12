var a = NaN, b = Infinity, c = 42;

Number.isFinite(a);                // false
Number.isFinite(b);                // false

Number.isFinite(c);                // true



var x = "42";

isFinite(x);                        // true
Number.isFinite(x);                // false