// The second is by handling the error on the promise itself.

(async () => {
  let num = await promise13().catch(err => console.log('caught it'));
  console.log('num', num);
})();

// Both ways will allow you to avoid the UnhandledPromiseRejectionWarning and also properly handle your rejections. Beware the deprecation message that comes with this warning.
