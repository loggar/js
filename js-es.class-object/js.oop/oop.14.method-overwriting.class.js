class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.firstName}`);
  }
}

class Developer extends Human {
  sayHello() {
    // Calls the parent method
    super.sayHello();

    // Additional stuff to run
    console.log(`I'm a developer.`);
  }
}

const chris = new Developer("Chris", "Coyier");
chris.sayHello();
