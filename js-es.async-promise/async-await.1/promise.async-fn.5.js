const processDataAsyc = async (num) => {
  if (typeof num === "number") {
    return 2 * num;
  } else {
    throw new Error("Something went wrong");
  }
};
processDataAsyc(21)
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
