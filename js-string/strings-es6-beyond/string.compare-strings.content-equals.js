const str3 = "café";
const str4 = "café";

// Grapheme is a minimally distinctive unit of writing in the context of a particular writing system.
console.log(str3 === str4); // => false

const str5 = "cafe\u0301"; // same as 'café'

console.log(str3 === str5); // => false
console.log(str3.normalize() === str4.normalize()); // => true
console.log(str3.normalize() === str5.normalize()); // => true
