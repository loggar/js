var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p1_delayed_resolution'), 1000);
});

var p2 = new Promise((resolve, reject) => {
  reject(new Error('p2_immediate_rejection'));
});

Promise.all([
  p1.catch(error => {
    return error;
  }),
  p2.catch(error => {
    return error;
  })
]).then(values => {
  console.log(values[0]); // "p1_delayed_resolution"
  console.log(values[1]); // "Error: p2_immediate_rejection"
});
