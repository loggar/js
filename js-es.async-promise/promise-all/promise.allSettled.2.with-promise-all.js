const PromiseArray = [
  Promise.resolve(100),
  Promise.reject(null),
  Promise.resolve("Data release"),
  Promise.reject(new Error("Something went wrong")),
];
Promise.all(PromiseArray)
  .then((data) =>
    console.log("all resolved! here are the resolve values:", data)
  )
  .catch((err) => console.log("got rejected! reason:", err));
//got rejected! reason: null

/*
As you can see above, the promise throws an error when one of the promises reject.
*/
