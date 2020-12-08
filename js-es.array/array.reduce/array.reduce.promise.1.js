let userIDs = [1, 2, 3];

userIDs.reduce((previousPromise, nextID) => {
  return previousPromise.then(() => {
    return methodThatReturnsAPromise(nextID);
  });
}, Promise.resolve());
