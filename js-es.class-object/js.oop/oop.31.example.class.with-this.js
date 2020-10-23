function Human() {
  return {
    firstName,
    lastName,
    sayHello() {
      console.log(`Hello, I'm ${this.firstName}`);
    },
  };
}

function Developer(firstName, lastName) {
  const human = Human(firstName, lastName);
  return Object.assign({}, human, {
    code(thing) {
      console.log(`${this.firstName} coded ${thing}`);
    },

    sayHello() {
      human.sayHello();
      console.log("I'm a developer");
    },
  });
}
