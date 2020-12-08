[1, 2, 3].reduce((previousPromise, nextID) => {
  console.log(`Resolve ${nextID} ${new Date().toISOString()}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Loop ${nextID} ${new Date().toISOString()}`);
      resolve(nextID);
    }, 1000);
  });
}, Promise.resolve());
