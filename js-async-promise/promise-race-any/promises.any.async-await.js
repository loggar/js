(async () => {
  const result = await Promise.any([
    Promise.reject("Error 1"),
    Promise.reject("Error 2"),
    Promise.resolve("success"),
  ]);
  console.log(`result: ${result}`);
})();
// result: success
