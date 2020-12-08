function methodThatReturnsAPromise(nextID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Resolve ${nextID} ${new Date().toISOString()}`);

      resolve();
    }, 1000);
  });
}

[1, 2, 3].reduce((accumulatorPromise, nextID) => {
  console.log(`Loop ${nextID} ${new Date().toISOString()}`);

  return accumulatorPromise.then(() => {
    return methodThatReturnsAPromise(nextID);
  });
}, Promise.resolve());
