class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastname = lastName;

    this.sayHello = function () {
      console.log(`Hello, I'm ${firstName}`);
    };
  }
}
