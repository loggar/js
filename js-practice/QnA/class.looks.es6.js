// ***ES2015+**
class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  personMethod() {
    // ...
  }
}

class Employee extends Person {
  constructor(first, last, position) {
    super(first, last);
    this.position = position;
  }

  employeeMethod() {
    // ...
  }
}
