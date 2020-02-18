const makeRequest = async () => {
  const data = await getJSON();
  if (data.needsAnotherRequest) {
    const moreData = await makeAnotherRequest(data);
    console.log(moreData);
    return moreData;
  } else {
    console.log(data);
    return data;
  }
};
