// null is "a value that represents no value". null is value that has been explicitly defined to a variable. In this example we get a value of null when the fs.readFile method does not throw an error.

fs.readFile("path/to/file", (e, data) => {
  console.log(e); //it logs null when no error occurred
  if (e) {
    console.log(e);
  }
  console.log(data);
});
