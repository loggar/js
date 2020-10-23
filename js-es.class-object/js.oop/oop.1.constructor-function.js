function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const chris = new Human("Chris", "Coyier");
console.log(chris.firstName); // Chris
console.log(chris.lastName); // Coyier

const zell = new Human("Zell", "Liew");
console.log(zell.firstName); // Zell
console.log(zell.lastName); // Liew
