function Human(firstName, lastName) {
  return {
    firstName,
    lastName,
    sayHello() {
      console.log(`Hello, I'm ${this.firstName}`);
    },
  };
}

function DesignerDeveloper(firstName, lastName) {
  const human = Human(firstName, lastName);
  return Object.assign({}, human, {
    code: skills.code,
    design: skills.design,
  });
}
