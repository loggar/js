Promise.any([
  fetch("https://v8.dev/").then(() => "home"),
  fetch("https://v8.dev/blog").then(() => "blog"),
  fetch("https://v8.dev/docs").then(() => "docs"),
])
  .then((first) => {
    // Any of the promises was fulfilled.
    console.log(first);
    // → 'home'
  })
  .catch((error /* :AggregateError */) => {
    // All of the promises were rejected.
    console.log(error);
  });

Promise.any([
  Promise.reject("Error 1"),
  Promise.reject("Error 2"),
  Promise.resolve("success"),
]).then((result) => {
  console.log("result:", result);
});
// result: success
