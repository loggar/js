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

function DesignerDeveloper(firstName, lastName) {
  return {
    firstName,
    lastName,
    code: skills.code,
    design: skills.design,
    sayHello: skills.sayHello,
  };
}

const chris = new DesignerDeveloper("Chris", "Coyier");
console.log(chris);
