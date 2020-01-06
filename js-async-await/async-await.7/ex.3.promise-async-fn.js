function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    resolve(a + b);
  });
}

addPromise(6, 4).then(res => console.log(res)); // "10"
