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
    sayHello() {
      // Calls the parent method
      human.sayHello();

      // Additional stuff to run
      console.log(`I'm a developer.`);
    },
  });
}

const chris = new Developer("Chris", "Coyier");
chris.sayHello();
