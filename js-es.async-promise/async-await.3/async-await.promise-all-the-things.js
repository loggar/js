/*
Prepending the async keyword to any function means that the function will return a promise.

Even if it’s not doing so explicitly, it will internally make it return a promise.

This is why this code is valid:
*/

const aFunction = async () => {
  return 'test';
};
aFunction().then(alert); // This will alert 'test'

// and it’s the same as:

const aFunction = async () => {
  return Promise.resolve('test');
};
aFunction().then(alert); // This will alert 'test'
