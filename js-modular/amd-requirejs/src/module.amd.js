define(["lodash"], function (_lodash) {
  const dummyFunction = () => {
    return _lodash.camelCase("dummy");
  };

  return {
    dummyFunction,
  };
});
