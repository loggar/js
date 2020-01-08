function sleep(ms) {
  return new Promise(resolve => {
    console.log(`starting ${ms}`);
    setTimeout(() => {
      console.log(`done ${ms}`);
      resolve(ms);
    }, ms);
  });
}

(async () => {
  console.log("This will be executed in sequence");

  const start = new Date();

  var a = await sleep(2000);
  var b = await sleep(1000);
  var c = await sleep(100);

  console.log(
    `sleeping done in sequence - got ${a} ${b} ${c} in ${new Date() - start}`
  );
})();

(async () => {
  console.log("This will be executed concurrently using await-ing");

  const start = new Date();

  var gettingA = sleep(2000);
  var gettingB = sleep(1000);
  var gettingC = sleep(100);

  var a = await gettingA;
  var b = await gettingB;
  var c = await gettingC;

  console.log(
    `sleeping done using await-ing - got ${a} ${b} ${c} in ${new Date() -
      start}`
  );
})();
