function Human(firstName, lastName) {
  return {
    firstName,
    lastName,
    sayHello() {
      console.log(`Hello, I'm ${firstName}`);
    },
  };
}

function Developer(firstName, lastName) {
  const human = Human(firstName, lastName);
  return Object.assign({}, human, {
    code(thing) {
      console.log(`${this.firstName} coded ${thing}`);
    },
  });
}

const chris = Developer("Chris", "Coyier");
console.log(chris);
chris.code("thing");
