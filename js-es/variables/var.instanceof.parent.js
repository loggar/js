class Pet {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Pet {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}

const myCat = new Cat("Callie", "red");

myCat instanceof Cat; // => true
myCat instanceof Pet; // => true
