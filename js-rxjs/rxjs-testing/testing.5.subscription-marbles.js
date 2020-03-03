// Manually unsubscribe from a source that will never complete:

it("should repeat forever", () => {
  const testScheduler = createScheduler();

  testScheduler.run(({ expectObservable }) => {
    const foreverStream$ = interval(1).pipe(mapTo("a"));

    // Omitting this arg may crash the test suite.
    const unsub = "------ !";

    expectObservable(foreverStream$, unsub).toBe("-aaaaa");
  });
});
