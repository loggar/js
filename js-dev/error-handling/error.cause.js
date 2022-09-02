const fnErr = () => {
  throw new Error("Error message", { cause: "here" });
};

fnErr();
