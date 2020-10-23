class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const chris = new Human("Chris", "Coyier");

console.log(chris.firstName); // Chris
console.log(chris.lastName); // Coyier
