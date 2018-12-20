function bar() {
  return {
    x: 4,
    y: 5,
    z: 6
  };
}

var { x: bam, y: baz, z: bap } = bar();

console.log(bam, baz, bap); // 4 5 6
// console.log(x, y, z);                // ReferenceError

var aa = 10,
  bb = 20;

var o = { x: aa, y: bb };
var { x: AA, y: BB } = o;

console.log(AA, BB); // 10 20
