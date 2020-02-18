const makeRequest = () => {
  return callAPromise()
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => {
      throw new Error("oops");
    });
};

makeRequest().catch(err => {
  console.log(err);
  // output
  // Error: oops at callAPromise.then.then.then.then.then (index.js:8:13)
});
