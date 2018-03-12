console.log(/𝄞/.test("𝄞-clef")); // true
console.log(/^.-clef/.test("𝄞-clef")); // false
console.log(/^.-clef/u.test("𝄞-clef")); // true