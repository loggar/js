// function decorator : supports 1 arity functions
const fd1 = f => a => f(a);

// function decorator : supports n-arity functions
const fd = f => (...args) => f(...args);