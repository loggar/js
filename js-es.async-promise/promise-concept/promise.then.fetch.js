fetch("https://swapi.dev/api/people/1")
  .then((res) =>
    console.log("This function is run when the request succeeds", res)
  )
  .catch((err) =>
    console.log("This function is run when the request fails", err)
  );

// Chaining multiple functions
fetch("https://swapi.dev/api/people/1")
  .then((res) => doSomethingWithResult(res))
  .then((finalResult) => console.log(finalResult))
  .catch((err) => doSomethingWithErr(err));
