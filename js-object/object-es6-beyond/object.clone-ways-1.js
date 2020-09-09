// 1: Deep copy using iteration

function iterationCopy(src) {
  let target = {};
  for (let prop in src) {
    if (src.hasOwnProperty(prop)) {
      target[prop] = src[prop];
    }
  }
  return target;
}
const source = { a: 1, b: 2, c: 3 };
const target = iterationCopy(source);
console.log(target); // {a:1, b:2, c:3}
// Check if clones it and not changing it
source.a = "a";
console.log(source.a); // 'a'
console.log(target.a); // 1
