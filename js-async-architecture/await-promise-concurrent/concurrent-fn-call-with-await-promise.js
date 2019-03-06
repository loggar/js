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
  console.log('This will be executed concurrently using Promise.all(...)');

  const start = new Date();
  const [a, b, c] = await Promise.all([sleep(2000), sleep(500), sleep(5)]);

  console.log(`sleeping done - got ${a} ${b} ${c} in ${new Date() - start}`);
})();

/*

If you change it to 

const [a, b, c] = [await sleep(2000), await sleep(500), await sleep(5)];

Then it’s not concurrent anymore and sleeping is done in sequence.

*/