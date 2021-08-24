const orderFood = new Promise((resolve, reject) => {
  setTimeout(() => {
    let r = Math.random();
    let delivered = false;
    if (r < 0.5) {
      delivered = true;
    }

    if (delivered) {
      resolve("delivered");
    } else {
      reject("cancelled");
    }
  }, 1000);
});

orderFood
  .then((value) => {
    console.log("resolved", value); // resolve
  })
  .catch((error) => {
    console.log("error", error); // reject
  })
  .finally(() => {
    console.log("all settled!");
  });
