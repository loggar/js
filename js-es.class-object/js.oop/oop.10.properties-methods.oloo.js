const Human = {
  init(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function () {
      console.log(`Hello, I'm ${firstName}`);
    };

    return this;
  },

  sayHello() {
    console.log(`Hello, I'm ${this.firstName}`);
  },
};

const chris = Object.create(Human).init("Chris", "Coyier");
console.log(chris);
