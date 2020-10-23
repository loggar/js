class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastname = lastName;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.firstName}`);
  }
}

class Developer extends Human {
  sayHello() {
    super.sayHello();
    console.log(`I'm a developer`);
  }

  code(thing) {
    console.log(`${this.firstName} coded ${thing}`);
  }
}
