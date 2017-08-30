var a = NaN, b = "NaN", c = 42;

isNaN(a);                            // true
isNaN(b);                            // true -- oops!
isNaN(c);                            // false

Number.isNaN(a);                    // true
Number.isNaN(b);                    // false -- fixed!
Number.isNaN(c);                    // false