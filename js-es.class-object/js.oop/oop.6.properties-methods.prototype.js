function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastname = lastName;
}

// Declaring method on a prototype
Human.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.firstName}`);
};

// Declaring methods on a prototype
Human.prototype.method1 = function () {
  /*...*/
};
Human.prototype.method2 = function () {
  /*...*/
};
Human.prototype.method3 = function () {
  /*...*/
};

// You can make things easier by using merging functions like Object.assign.

Object.assign(Human.prototype, {
  method1() {
    /*...*/
  },
  method2() {
    /*...*/
  },
  method3() {
    /*...*/
  },
});
