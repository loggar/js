let userIDs = [1, 2, 3];

userIDs.reduce(async (previousPromise, nextID) => {
  await previousPromise;
  return methodThatReturnsAPromise(nextID);
}, Promise.resolve());
