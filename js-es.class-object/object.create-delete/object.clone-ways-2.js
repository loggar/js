// 2: Converting to JSON and back

function jsonCopy(src) {
  return JSON.parse(JSON.stringify(src));
}
const source = { a: 1, b: 2, c: 3 };
const target = jsonCopy(source);
console.log(target); // {a:1, b:2, c:3}
// Check if clones it and not changing it
source.a = "a";
console.log(source.a); // 'a'
console.log(target.a); // 1

// Note: Be careful about using this method as your source object MUST be JSON safe. So it may need some sort of exception handling to keep it safe in cases in which the source object is not convertible to JSON.
