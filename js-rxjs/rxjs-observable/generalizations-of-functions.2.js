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

// Subscribing to an Observable is analogous to calling a Function.

// Some people claim that Observables are asynchronous. That is not true. If you surround a function call with logs, like this:
/*
console.log('before');
console.log(foo.call());
console.log('after');
*/

// And this is the same behavior with Observables:
console.log("before");
foo.subscribe(x => {
  console.log(x);
});
console.log("after");
