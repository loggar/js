var a = Array(3);
a.length;                        // 3
a[0];                            // undefined

var b = Array.of(3);
b.length;                        // 1
b[0];                            // 3

var c = Array.of(1, 2, 3);
c.length;                        // 3
c;                                // [1,2,3]