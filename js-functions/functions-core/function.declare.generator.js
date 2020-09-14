// Generator function
// a. Function declaration form function* <name>():
function* indexGenerator1() {
  var index = 0;
  while (true) {
    yield index++;
  }
}
const g1 = indexGenerator1();
console.log(g1.next().value); // => 0
console.log(g1.next().value); // => 1

// b. Function expression form function* ():
const indexGenerator2 = function* () {
  let index = 0;
  while (true) {
    yield index++;
  }
};
const g2 = indexGenerator2();
console.log(g2.next().value); // => 0
console.log(g2.next().value); // => 1

// c.Shorthand method definition form *<name>():
const obj = {
  *indexGenerator() {
    var index = 0;
    while (true) {
      yield index++;
    }
  },
};
const g = obj.indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1
