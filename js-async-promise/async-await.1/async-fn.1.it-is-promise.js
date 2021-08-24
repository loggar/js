// An async function always returns a promise.

async function fn() {
  return 'hello';
}
fn().then(console.log)
// hello


/* Here’s an equivalent alternate representation without using async */

function fn2() {
  return Promise.resolve('hello');
}
fn2().then(console.log);
// hello


// in case of primitive values
const p = Promise.resolve('hello')
p instanceof Promise; 
// true
// p is returned as is it
Promise.resolve(p) === p; 
// true
