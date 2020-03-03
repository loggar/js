// Observables are able to deliver values either synchronously or asynchronously.

// What is the difference between an Observable and a function? Observables can "return" multiple values over time, something which functions cannot. You can't do this:

/*
function foo() {
  console.log('Hello');
  return 42;
  return 100; // dead code. will never happen
}
*/

import { Observable } from "rxjs";

const foo = new Observable(subscriber => {
  console.log("Hello");
  subscriber.next(42);
  subscriber.next(100); // "return" another value
  subscriber.next(200); // "return" yet another
});

console.log("before");
foo.subscribe(x => {
  console.log(x);
});
console.log("after");

// But you can also "return" values asynchronously:

const foo = new Observable(subscriber => {
  console.log("Hello");
  subscriber.next(42);
  subscriber.next(100);
  subscriber.next(200);
  setTimeout(() => {
    subscriber.next(300); // happens asynchronously
  }, 1000);
});

console.log("before");
foo.subscribe(x => {
  console.log(x);
});
console.log("after");
