// The global this was not standardized before ES10.

var getGlobal = function() {
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
};

var globalThis = getGlobal();

// Access global array constructor
var a = globalThis.Array(0, 1, 2);
console.log(a);

// Similar to window.v = { flag: true } in <= ES5
globalThis.v = { flag: true };

console.log(globalThis.v);