const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Input must be an number");
    }, 2000);
  });
const processDataAsyc = async () => {
  let data = await getDataPromise(2);
  data = await getDataPromise(data);
  return data;
};
processDataAsyc()
  .then((data) => {
    console.log(
      "Data from processDataAsyc() with async( When promise gets resolved ): " +
        data
    );
  })
  .catch((error) => {
    console.log(
      "Error from processDataAsyc() with async( When promise gets rejected ): " +
        error
    );
  });
