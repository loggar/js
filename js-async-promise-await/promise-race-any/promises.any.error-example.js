(async () => {
  try {
    const result = await Promise.any([
      Promise.reject("Error 1"),
      Promise.reject("Error 2"),
      Promise.reject("Error 3"),
    ]);
    console.log(`result ${result}`);
  } catch (err) {
    console.log(`error: ${err.errors}`);
  }
})();
// error: Error 1,Error 2,Error 3

// This is the fourth addition to the Promise prototype. As a quick recap, currently, we have the following at our disposal:
// [ES2020] Promise.allSettled: This method returns a promise that resolves when all the given promises have either been fulfilled or rejected. The returned object describes each individual promise result.
// [ES2015] Promise.all: This method returns a promise that is fulfilled only if all the target promises were fulfilled.
// [ES2015] Promise.race: This method will return a promise that will be fulfilled as soon as one of the promises is either rejected or fulfilled.
