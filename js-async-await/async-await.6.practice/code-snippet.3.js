const getDataPromise = num =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Input must be an number");
    }, 2000);
  });
const processDataAsycn = async () => {
  return getDataPromise(22).then(data => {
    return getDataPromise(data);
  });
};
processDataAsycn()
  .then(data => {
    console.log(
      "Data from processDataAsycn() with async( When promise gets resolved ): " +
        data
    );
  })
  .catch(error => {
    console.log(
      "Error from processDataAsycn() with async( When promise gets rejected ): " +
        error
    );
  });
