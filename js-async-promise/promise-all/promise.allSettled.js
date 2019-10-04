const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, "foo"));
const promises = [promise1, promise2];
Promise.allSettled(promises).then(results => results.forEach(result => console.log(result.status)));
// expected output:
// "fulfilled"
// "rejected"

/*
Either resolved or rejected, with an array of objects that each describe the outcome of each promise.
This is different from the Promise.all as it rejects as soon as a promise within the iterable object rejected.
*/
