// Objects Linking to Other Objects (OLOO)
const Human = {
  init(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    return this;
  },
};

const chris = Object.create(Human).init("Chris", "Coyier");
console.log(chris.firstName); // Chris
console.log(chris.lastName); // Coyier
