// Multiple iterators at the same time
let itemsA = [1, 2, 3];
let itemsB = ['a', 'b', 'c', 'd', 'e', 'f'];

let iterA = itemsA[Symbol.iterator]();
let iterB = itemsB[Symbol.iterator]();

while (true) {
  let a = iterA.next();
  let b = iterB.next();

  if (a.done || b.done) break;

  console.log(a.value + ', ' + b.value);
}
