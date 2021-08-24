const makeRequest = async () => {
  const value1 = await promise1();
  const value2 = await promise2(value1);
  return promise3(value1, value2);
};
