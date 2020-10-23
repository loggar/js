function Human(firstName, lastName) {
  return {
    firstName,
    lastName,
    sayThis() {
      console.log(this);
    },
  };
}

const chris = Human("Chris", "Coyier");
chris.sayThis();
