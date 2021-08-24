const timer = (a) => {
  return new Promise((res) =>
    setTimeout(() => {
      res(a);
    }, Math.random() * 100)
  );
};

const all = Promise.all([timer("first"), timer("second")]).then((data) =>
  console.log(data)
);

// The order in which the Promises resolve does not matter to Promise.all.
// We can reliably count on them to be returned in the same order in which they were provided in the array argument.
