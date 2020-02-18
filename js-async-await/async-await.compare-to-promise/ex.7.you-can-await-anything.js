const recordTime = makeRequest => {
  const timeStart = Date.now();
  makeRequest().then(() => {
    // throws error for sync functions (.then is not a function)
    const timeEnd = Date.now();
    console.log("time take:", timeEnd - timeStart);
  });
};

const recordTime = async makeRequest => {
  const timeStart = Date.now();
  await makeRequest(); // works for any sync or async function
  const timeEnd = Date.now();
  console.log("time take:", timeEnd - timeStart);
};
