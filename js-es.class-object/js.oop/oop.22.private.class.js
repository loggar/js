/*
class Car {
  // Declares private variable
  #fuel 
  constructor () {
    // Use private variable
    this.#fuel = 50
  }
}
*/

class Car {
  #fuel = 50;
}

const car = new Car();
console.log(car.#fuel); // SyntaxError: Private field '#fuel' must be declared in an enclosing class
