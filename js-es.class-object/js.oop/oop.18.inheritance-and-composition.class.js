class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.firstName}`);
  }
}

class DesignerDeveloper extends Human {}
Object.assign(DesignerDeveloper.prototype, {
  code: skills.code,
  design: skills.design,
});
