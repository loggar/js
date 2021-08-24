function myNestedNestedCallback(name) {
  return new Promise((resolve, reject) => {
    console.log(`Hello ${name}`); // Prints "Hello First Name: Mr. world"
  });
}

function myNestedCallback(name) {
  return new Promise((resolve, reject) => {
    resolve(`First Name: ${name}`);
  });
}

function myCallback(name) {
  return new Promise((resolve, reject) => {
    resolve(`Mr. ${name}`);
  });
}

myCallback("world")
  .then(myNestedCallback)
  .then(myNestedNestedCallback);
