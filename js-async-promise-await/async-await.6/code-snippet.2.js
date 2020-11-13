const processDataAsycn = async num => {
  if (typeof num === "number") {
    return 2 * num;
  } else {
    throw new Error("Something went wrong");
  }
};
processDataAsycn(21)
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
