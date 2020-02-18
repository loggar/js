// Earlier Params are Available to Later Default Params
function welcome(name, greeting, message = greeting + " " + name) {
  return [name, greeting, message];
}
console.log(welcome("Sean", "Hi")); // ["Sean", "Hi", "Hi Sean"]
console.log(welcome("Sean", "Hi", "Happy Birthday!")); // ["Sean", "Hi", "Happy Birthday!"]
