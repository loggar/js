function Human(firstName, lastName) {
  const human = {
    firstName,
    lastName,
    sayHello() {
      console.log(`Hi, I'm ${firstName}`);
    },
  };

  return human;
}

const chris = Human("Chris", "Coyier");
chris.sayHello();
