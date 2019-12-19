// Observables are like functions with zero arguments, but generalize those to allow multiple values.

/*
function foo() {
  console.log('Hello');
  return 42;
}

const x = foo.call(); // same as foo()
console.log(x);
const y = foo.call(); // same as foo()
console.log(y);
*/

import { Observable } from "rxjs";

const foo = new Observable(subscriber => {
  console.log("Hello");
  subscriber.next(42);
});

foo.subscribe(x => {
  console.log(x);
});
foo.subscribe(y => {
  console.log(y);
});
