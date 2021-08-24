const PromiseArray = [
  Promise.resolve(100),
  Promise.reject(null),
  Promise.resolve("Data release"),
  Promise.reject(new Error("Something went wrong")),
];
Promise.allSettled(PromiseArray)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
//[
//{status: "fulfilled", value: 100},
//{status: "rejected", reason: null},
//{status: "fulfilled", value: "Data release"},
//{status: "rejected", reason: Error: Something went wrong ...}
//]

/*
Even though some of the promises are rejected, Promise.allSettled returns the results from all your promises.
*/
