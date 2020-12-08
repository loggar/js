function methodThatReturnsAPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Processing ${id}`);
      resolve(id);
    }, 1000);
  });
}

let result = [1, 2, 3].reduce((accumulatorPromise, nextID) => {
  return accumulatorPromise.then(() => {
    return methodThatReturnsAPromise(nextID);
  });
}, Promise.resolve());

result.then((e) => {
  console.log("Resolution is complete! Let's party.");
});
