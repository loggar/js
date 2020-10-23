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
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  code(thing) {
    console.log(`${this.firstName} coded ${thing}`);
  }
}

const chris = new Developer("Chris", "Coyier");
console.log(chris);
chris.sayHello();
chris.code("thing");

const john = new Human("John", "Coyier");
console.log(john);
john.sayHello();
// john.code("thing"); // TypeError: john.code is not a function
