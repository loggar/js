const Human = {
  init(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function () {
      console.log(`Hello, I'm ${firstName}`);
    };

    return this;
  },
};

const chris = Object.create(Human).init("Chris", "Coyier");
console.log(chris);
