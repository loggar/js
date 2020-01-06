// When an await promise is rejected when using async/await you get an UnhandledPromiseRejectionWarning.

promise13 = () => {
  return new Promise((resolve, reject) => {
    reject(13);
  });
};

(async () => {
  let num = await promise13(); // UnhandledPromiseRejectionWarning
  console.log('num', num);
})();
