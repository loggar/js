// You can't directly test RxJS code that consumes Promises or uses any of the other schedulers (e.g. AsapScheduler)

// If you have RxJS code that uses any other form of async scheduling other than AsyncScheduler, e.g. Promises, AsapScheduler, etc. you can't reliably use marble diagrams for that particular code. This is because those other scheduling methods won't be virtualized or known to TestScheduler.
// The solution is to test that code in isolation, with the traditional async testing methods of your testing framework. The specifics depend on your testing framework of choice, but here's a pseudo-code example:

// Some RxJS code that also consumes a Promise, so TestScheduler won't be able
// to correctly virtualize and the test will always be really async
const myAsyncCode = () => from(Promise.resolve("something"));

it("has async code", done => {
  myAsyncCode().subscribe(d => {
    assertEqual(d, "something");
    done();
  });
});
