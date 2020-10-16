// 3: Using Object.assign

// This method has a flaw that it only does a shallow copy. It means that nested properties are still going to be copied by reference. Be careful about it.

function bestCopyEver(src) {
  return Object.assign({}, src);
}

const source = { a: 1, b: 2, c: 3 };
const target = bestCopyEver(source);
console.log(target); // {a:1, b:2, c:3}
// Check if clones it and not changing it
source.a = "a";
console.log(source.a); // 'a'
console.log(target.a); // 1
