const str1 = "Hello!";
const str2 = "Hello!";

console.log(str1 === str2); // => true

const str3 = "café";
const str4 = "café";

// Grapheme is a minimally distinctive unit of writing in the context of a particular writing system.
console.log(str3 === str4); // => false

// Combining character is a character that applies to the precedent base character to create a grapheme.
const e1 = "e\u0301";
console.log(e1); // "é"

const e2 = "é";
console.log(e1); // "é"

console.log(e1 === e2); // false
