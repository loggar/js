class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.firstName}`);
  }
}

// Doesn't work
/*
class Designer extends Human {
  design(thing) {
    console.log(`${this.firstName} designed ${thing}`);
  }
}

class Developer extends Designer {
  code(thing) {
    console.log(`${this.firstName} coded ${thing}`);
  }
}

class DesignerDeveloper extends Developer, Designer {
  // ...
}
*/

const skills = {
  code(thing) {
    /* ... */
  },
  design(thing) {
    /* ... */
  },
  sayHello() {
    /* ... */
  },
};

class Designer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.assign(this, {
      design: skills.design,
      sayHello: skills.sayHello,
    });
  }
}

class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.assign(this, {
      code: skills.code,
      sayHello: skills.sayHello,
    });
  }
}

class DesignerDeveloper {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.assign(this, {
      code: skills.code,
      design: skills.design,
      sayHello: skills.sayHello,
    });
  }
}

const chris = new DesignerDeveloper("Chris", "Coyier");
console.log(chris);
