const makeRequest = async () => {
  await callAPromise();
  await callAPromise();
  await callAPromise();
  await callAPromise();
  await callAPromise();
  throw new Error("oops");
};

// await statement will be specified where an error occurred.
