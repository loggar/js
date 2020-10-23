function Human(firstName, lastName) {
  // Declares properties
  this.firstName = firstName;
  this.lastname = lastName;

  // Declares methods
  this.sayHello = function () {
    console.log(`Hello, I'm ${firstName}`);
  };
}

const chris = new Human("Chris", "Coyier");
console.log(chris);
