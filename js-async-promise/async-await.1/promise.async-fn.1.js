// async version
async function add(a, b) {
  return a + b; // really returns a Promise under the hood
}

// equivalent code but promise way
function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    resolve(a + b);
  });
}

add(1, 2).then(res => console.log(res)); // "3"
addPromise(1, 2).then(res => console.log(res)); // "3"
