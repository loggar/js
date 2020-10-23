class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(this);
  }
}

const chris = new Human("Chris", "Coyier");
