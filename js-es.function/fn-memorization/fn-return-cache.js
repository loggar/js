function cached(fn) {
  // Create an object to store the results returned after each function execution.
  const cache = Object.create(null);

  // Returns the wrapped function
  return function cachedFn(str) {
    // If the cache is not hit, the function will be executed
    if (!cache[str]) {
      let result = fn(str);

      // Store the result of the function execution in the cache
      cache[str] = result;
    }

    return cache[str];
  };
}

function computed(str) {
  // suppose the calculation in this function is time consuming
  console.log("a long time elapsed");
  return "result of " + str;
}

const cachedComputed = cached(computed);

cachedComputed("a");
cachedComputed("b");
cachedComputed("c");
cachedComputed("a");
cachedComputed("b");
cachedComputed("c");
