var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function() {
  console.log('the stack is now empty');
  console.log(p);
});
