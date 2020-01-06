// callback way
function addCallback(a, b, callback) {
  callback(a + b);
}

// promise way
function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    resolve(a + b);
  });
}
