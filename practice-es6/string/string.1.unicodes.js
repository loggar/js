/* fromCodePoint, codePointAt */

String.fromCodePoint(0x1d49e);            // "𝒞"

"ab𝒞d".codePointAt(2).toString(16);        // "1d49e"



/* normalize */

var s1 = "e\u0301";
s1.length;                            // 2

var s2 = s1.normalize();
s2.length;                            // 1
s2 === "\xE9";                        // true


/* String.raw() */

var str = "bc";

String.raw`\ta${str}d\xE9`;
// "\tabcd\xE9", not "    abcdé"