// promise.finally() behaves differently.
// In this case promise still fulfils with 'one', but it takes two seconds to do so.

const wait = (ms) => new Promise((r) => setTimeout(() => r(), ms));

const promise = Promise.resolve("one").finally(async () => {
  await wait(2000);
  return "two";
});

promise.then((r) => {
  console.log(r);
});
