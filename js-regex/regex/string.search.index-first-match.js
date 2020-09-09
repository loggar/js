const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

// index of the first match:
// old way
const match = paragraph.match(regex);
console.log(match);
const index = match ? match.index : -1;
console.log(index);

// new way
const index2 = paragraph.search(regex);
console.log(index2);
