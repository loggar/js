const makeRequest = async () => {
  try {
    // this parse may fail
    const data = JSON.parse(await getJSON());
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
