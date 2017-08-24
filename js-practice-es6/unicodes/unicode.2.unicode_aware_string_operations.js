var snowman = "☃";
snowman.length;                    // 1

var gclef = "𝄞";
gclef.length;                    // 2

[...gclef].length;                // 1
Array.from(gclef).length;        // 1



var s1 = "\xE9",
	s2 = "e\u0301";

console.log(s1);                // "é"
console.log(s2);                // "é"

[...s1].length;                    // 1
[...s2].length;                    // 2

s1.normalize().length;            // 1
s2.normalize().length;            // 1

s1 === s2;                        // false
s1 === s2.normalize();            // true


var s21 = "o\u0302\u0300",
	s22 = s21.normalize(),
	s23 = "ồ";

s21.length;                        // 3
s22.length;                        // 1
s23.length;                        // 1

s22 === s23;                        // true



var s31 = "e\u0301\u0330";

console.log(s31);                // "ḛ́"

s31.normalize().length;            // 2