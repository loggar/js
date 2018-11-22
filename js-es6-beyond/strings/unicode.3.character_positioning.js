var s1 = "abc\u0301d",
	s2 = "ab\u0107d",
	s3 = "ab\u{1d49e}d";

console.log(s1);                // "abćd"
console.log(s2);                // "abćd"
console.log(s3);                // "ab𝒞d"

s1.charAt(2);                    // "c"
s2.charAt(2);                    // "ć"
s3.charAt(2);                    // "" <-- unprintable surrogate
s3.charAt(3);                    // "" <-- unprintable surrogate


[...s1.normalize()][2];            // "ć"
[...s2.normalize()][2];            // "ć"
[...s3.normalize()][2];            // "𝒞"


s1.normalize().codePointAt(2).toString(16);
// "107"

s2.normalize().codePointAt(2).toString(16);
// "107"

s3.normalize().codePointAt(2).toString(16);
// "1d49e"



String.fromCodePoint(0x107);        // "ć"

String.fromCodePoint(0x1d49e);    // "𝒞"



String.fromCodePoint(s1.normalize().codePointAt(2));
// "ć"

String.fromCodePoint(s2.normalize().codePointAt(2));
// "ć"

String.fromCodePoint(s3.normalize().codePointAt(2));
// "𝒞"