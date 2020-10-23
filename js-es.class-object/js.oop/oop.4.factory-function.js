function Human(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

const chris = Human("Chris", "Coyier");

console.log(chris.firstName); // Chris
console.log(chris.lastName); // Coyier
