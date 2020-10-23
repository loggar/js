function Human(firstName, lastName) {
  return {
    firstName,
    lastName,
    sayHello() {
      console.log(`Hello, I'm ${firstName}`);
    },
  };
}

// You cannot declare methods on the Prototype when you use Factory functions. If you really want methods on the prototype, you need to return a Constructor, Class, or OLOO instance. (Don’t do this since it doesn’t make any sense.)
// Do not do this
/*
function createHuman (...args) {
  return new Human(...args)
}
*/
