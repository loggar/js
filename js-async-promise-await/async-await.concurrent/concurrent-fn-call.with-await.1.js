// This demonstrate good way of concurrent operating in javascrip.

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
  console.log("This will be executed concurrently using Promise.all(...)");

  const start = new Date();

  const [a, b, c] = await Promise.all([sleep(2000), sleep(1000), sleep(100)]);

  console.log(`sleeping done - got ${a} ${b} ${c} in ${new Date() - start}`);
})();

/*

If you change it to 

const [a, b, c] = [await sleep(2000), await sleep(1000), await sleep(100)];

Then it’s not concurrent anymore and sleeping is done still in sequence.

*/
