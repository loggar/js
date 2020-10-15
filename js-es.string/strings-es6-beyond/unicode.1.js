var snowman = "\u2603";
console.log(snowman);            // "☃"

var gclef = "\uD834\uDD1E";
console.log(gclef);            // "𝄞"


/* As of ES6, we now have a new form for Unicode escaping (in strings and regular expressions), called Unicode code point escaping : */
var gclef2 = "\u{1D11E}";
console.log(gclef2);            // "𝄞"