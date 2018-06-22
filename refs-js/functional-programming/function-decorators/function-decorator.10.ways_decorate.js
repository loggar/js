/*
Multiple Ways to Decorate
*/

const decorator = f => (...args) => f(...args);

// decorate the function
const decoratedAdd1 = decorator((a, b) => a + b)

// create a new decorated function
const add = (a, b) => a + b
const decoratedAdd2 = decorator(add)

// decorate just for the call
decorator(add)(3, 4)
