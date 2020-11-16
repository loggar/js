// But we can do better than this. We can actually replace the decorated function with different behavior. For example, let’s log all of the inputs and outputs:

function log(target, name, descriptor) {
  const original = descriptor.value;
  if (typeof original === "function") {
    descriptor.value = function (...args) {
      console.log(`Arguments: ${args}`);
      try {
        const result = original.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
      } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
      }
    };
  }
  return descriptor;
}

class Example {
  @log
  sum(a, b) {
    return a + b;
  }
}

const e = new Example();
e.sum(1, 2);
// Arguments: 1,2
// Result: 3
