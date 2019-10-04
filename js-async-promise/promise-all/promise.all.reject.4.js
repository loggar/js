const a = Promise.resolve(1);
const b = Promise.reject(new Error(2));
const c = Promise.resolve(3);

Promise.all([a, b, c].map(p => p.catch(e => e)))
  .then(results => console.log(results)) // 1,Error: 2,3
  .catch(e => console.log(e));
