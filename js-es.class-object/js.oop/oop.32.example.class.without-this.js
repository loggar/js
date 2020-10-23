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
      console.log(`${firstName} coded ${thing}`);
    },

    sayHello() {
      console.log(`Hello, I'm nobody`);
    },
  });
}
