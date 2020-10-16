const s = new Set();

s.add("one");
s.add("two");
s.add("abc");

console.log(s.has("one")); //true
console.log(s.has("three")); //false

s.delete("one");

console.log(s);
console.log(s.size);

s.clear();

console.log(s);
console.log(s.size);
