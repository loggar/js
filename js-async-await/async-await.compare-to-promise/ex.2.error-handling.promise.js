const makeRequest = () => {
  try {
    getJSON().then(result => {
      // this parse may fail
      const data = JSON.parse(result);
      console.log(data);
    });
    // uncomment this block to handle asynchronous errors
    // .catch((err) => {
    //   console.log(err)
    // })
  } catch (err) {
    console.log(err);
  }
};
