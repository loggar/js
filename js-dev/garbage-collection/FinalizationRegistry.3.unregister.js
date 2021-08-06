const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let waitingForCleanup = true;
const registry = new FinalizationRegistry((heldValue) => {
  console.log(`cleanup: ${heldValue}`);
  waitingForCleanup = false;
});

let foo = {};
const token1 = {};
const token2 = {};
registry.register(foo, "registered with token1", token1);
registry.register(foo, "registered with token2", token2);
foo = undefined; // Clear strong reference

registry.unregister(token1);

const startTime = Date.now();
console.log("Allocating a lot of objects to try to force garbage collection");
while (waitingForCleanup) {
  for (let i = 0; i < 100; i++) {
    const x = new Array(100);
  }
  await sleep(10);
}
console.log(
  `foo was reclaimed after ${((Date.now() - startTime) / 1000).toFixed(1)}s`
);
